<?php

namespace Modules\Calender\Http\Controllers;

use App\Http\Controllers\ControllerHandler;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\Calender\Entities\Calender;
use Modules\Calender\Http\Requests\CalenderRequest;
use Modules\Calender\Transformers\EventResource;

class CalenderController extends Controller
{
    private $ControllerHandler;

    public function __construct()
    {

        $this->ControllerHandler = new ControllerHandler(new Calender());
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
        $events = Calender::query()
            ->select(DB::raw('title,date(start) as start,time(start) as start_time, DAYNAME(start) as day'))
            // ->groupBy('start')
            // ->groupBy('day')
            ->orderBy('start', 'asc') // count(*) as total
            ->whereBetween('start', [Carbon::now()->startOfWeek(Carbon::SATURDAY), Carbon::now()->endOfWeek(Carbon::FRIDAY)])
            ->get();

        $result = [];

        $events->each(function ($event) use (&$result) {
            $result[$event->day][] = [
                'title' => $event->title,
                'start_time' => $event->start_time,
            ];
        });

        return response()->json([
            "events" => $result
        ]);
    }

    /**
     * @param Calender $calender
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
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
