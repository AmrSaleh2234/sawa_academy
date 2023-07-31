<?php

namespace Modules\Calender\Http\Controllers;

use App\Http\Controllers\ControllerHandler;
use App\Models\ChildParent;
use App\Notifications\AcceptBookingNotification;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\Calender\Entities\Booking;
use Modules\Calender\Entities\Calender;
use Modules\Calender\Http\Controllers\Repository\CalenderRepository;
use Modules\Calender\Http\Controllers\Services\CalenderService;
use Modules\Calender\Http\Requests\CalenderRequest;
use Modules\Calender\Http\Requests\StoreBookingRequest;
use Modules\Calender\Transformers\EventResource;

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
                DB::raw("DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), child_birth_date)), '%Y') + 0 AS child_age"),
                'requester_phone'
            )
            ->addSelect(['event_date' => Calender::select('start')->whereColumn('id', 'bookings.event_id')])
            ->get();

        return $this->bookingControllerHandler->show('bookings', $bookings);
    }
    public function showBooking(Booking $booking, Request $request)
    {
        return $this->bookingControllerHandler->show('booking', $booking);
    }

    public function acceptBooking(Booking $booking, Request $request)
    {
        $request->validate([
            'status' => ['required', 'boolean'],
            'event_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer'],
            'accepted_notes' => ['nullable', 'string']
        ]);

        $booking->update([
            'accepted' => $request->status,
            'accepted_notes' => $request->accepted_notes,
        ]);

        $event = Calender::where('id', $request->event_id)->first();

        $user = ChildParent::where('id', $request->user_id)->first();

        $user->notify(new AcceptBookingNotification($event, $booking));

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
