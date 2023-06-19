<?php

namespace Modules\Calender\Http\Controllers;

use App\Http\Controllers\ControllerHandler;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
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
        return response(['calender'=>EventResource::collection(Calender::currentAuth()->get())]);

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
