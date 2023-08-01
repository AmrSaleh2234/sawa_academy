<?php

namespace Modules\Calender\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ControllerHandler;
use App\Models\ChildParent;
use App\Models\User;
use App\Notifications\AcceptBookingNotification;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\Calender\Entities\Booking;
use Modules\Calender\Entities\Calender;
use Modules\Calender\Http\Controllers\Repository\CalenderRepository;
use Modules\Calender\Http\Controllers\Services\CalenderService;
use Modules\Calender\Http\Requests\CalenderRequest;
use Modules\Calender\Http\Requests\StoreBookingRequest;
use Modules\Calender\Transformers\EventResource;
use Modules\Child\Http\Controllers\Services\ChildService;

class CalenderController extends Controller
{
    private $ControllerHandler;
    private $bookingControllerHandler;
    public function __construct()
    {

        $this->ControllerHandler = new ControllerHandler(new Calender());

        $this->bookingControllerHandler = new ControllerHandler(new Booking());
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function index()
    {
        //        return $this->ControllerHandler->getAll("calender");
        return response(['calender' => EventResource::collection(Calender::currentAuth()->get())]);
    }

    public function groupedEventsForParents()
    {
        return $this->ControllerHandler->show("events", CalenderService::groupEventsOnTheSameDay(CalenderRepository::getEventsOnDayForParents()));
    }

    public function storeBookingForChild(StoreBookingRequest $request)
    {
        return $this->bookingControllerHandler->store("booking", $request->validated());
    }

    public function getAllBooking(Request $request)
    {
        $bookings = Booking::query()
            ->select(
                'id',
                'child_name',
                'child_birth_date as child_age',
                'requester_phone'
            )
            ->addSelect(['event_date' => Calender::select('start')->whereColumn('id', 'bookings.event_id')])
            ->get();

        $bookings->map(function ($booking) {
            $booking['child_age'] = (new ChildService())->calcChildAgeInMonthsWithAgeParam($booking['child_age']);
        });


        return $this->bookingControllerHandler->show('bookings', $bookings);
    }

    public function getAllAcceptedBookingDoctors(Request $request)
    {
        $data = [];

        // $bookings = Booking::query()
        //     ->with('user')
        //     ->addSelect([
        //         "event_date" => Calender::select('start')->whereColumn('id', 'bookings.event_id'),
        //     ])
        //     ->where('accepted', 1)
        //     ->where('user_id', $request->user('parent')->id)
        //     ->get();

        // $data['bookings'] = $bookings;

        $data = DB::table('bookings')
            ->select(
                "bookings.id as booking_id",
                "bookings.user_id",
                "event_id",
                "start as event_date",
                'users.name as user_name',
                'users.title as user_title'
            )
            ->join('events', 'events.id', '=', 'bookings.event_id')
            ->join('users', 'users.id', '=', 'events.user_id')
            ->where('bookings.accepted', 1)
            ->where('bookings.user_id', $this->getAuthUserID('parent'))
            ->get();




        return $this->bookingControllerHandler->show('bookings', $data);
    }


    public function showBooking($booking_id, Request $request)
    {

        $data['booking'] = Booking::query()
            ->select("*")
            ->addSelect([
                "event_date" => Calender::select('start')->whereColumn('id', 'bookings.event_id')
            ])
            ->where('id', $booking_id)
            ->first();

        if ($data['booking']['doctor_code']) {
            $data['doctor'] = DB::table("users")
                ->select('users.name', 'users.title')
                ->leftJoin("events", "events.user_id", '=', 'users.id')
                ->where('events.id', '=', $data['booking']['event_id'])
                ->first();
        }

        return $this->bookingControllerHandler->show('booking', $data);
    }

    public function changeDoctor(Request $request)
    {
        $request->validate([
            'start' => ['required']
        ]);

        $doctors = Calender::query()
            ->select('user_id')
            ->addSelect([
                'doctor_name' => User::select("name")->whereColumn('id', 'user_id'),
                'title_name' => User::select("title")->whereColumn('id', 'user_id'),
            ])
            ->where('start', $request->start)
            ->get();

        return $this->bookingControllerHandler->show('doctors', $doctors);
    }

    public function acceptBooking(Booking $booking, Request $request)
    {
        $request->validate([
            'status' => ['required', 'boolean'],
            'event_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer'],
            'accepted_notes' => ['nullable', 'string'],
            'doctor_name' => ['required', 'string'],
            'doctor_title' => ['required', 'string']
        ]);

        $booking->update([
            'accepted' => $request->status,
            'accepted_notes' => $request->accepted_notes,
        ]);

        $event = Calender::where('id', $request->event_id)->first();
        $doctor = [
            "doctor_name" => $request->doctor_name,
            "doctor_title" => $request->doctor_title
        ];
        $user = ChildParent::where('id', $request->user_id)->first();

        $user->notify(new AcceptBookingNotification($event, $booking, $doctor));

        $event->update([
            'status' => 1
        ]);

        return $this->bookingControllerHandler->show('booking', $booking->fresh());
    }

    public function show(Calender $calender)
    {
        return $this->ControllerHandler->show("calender", $calender);
    }

    /**
     * @param CalenderRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(CalenderRequest $request)
    {

        //        return response(['k'=>$request->start]);
        return $this->ControllerHandler->store("calender", $request->validated());
    }

    /**
     * @param CalenderRequest $request
     * @param Calender $calender
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */

    public function update(CalenderRequest $request, Calender $calender)
    {
        // here some validation check parent or admin
        return $this->ControllerHandler->update("calender", $calender, $request->validated());
    }


    public function destroy(Calender $calender)
    {
        // here some validation check parent or admin

        return $this->ControllerHandler->destory("calender", $calender);
    }
}
