<?php

namespace Modules\Child\Http\Controllers;

use App\Http\Controllers\ControllerHandler;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Child\Entities\Child;
use Modules\Child\Http\Controllers\Repository\ChildRepository;
use Modules\Child\Http\Controllers\Services\ChildService;
use Modules\Child\Http\Requests\ChildRequest;
use Modules\Child\Transformers\ChildResource;
use Modules\Evaluation\Entities\Evaluation;

class ChildController extends Controller
{


    private $ControllerHandler;

    public function __construct()
    {

        $this->ControllerHandler = new ControllerHandler(new Child());
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function index()
    {


        return $this->ControllerHandler->getAll("children");

    }

    /**
     * @param Child $child
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function show(Child $child)
    {

        $child->childInMonths =(new ChildService)->calcChildAgeInMonths($child);

        return $this->ControllerHandler->show("child", $child);
    }

    /**
     * @param ChildRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(ChildRequest $request)
    {

        $data = $request->validated();


        return $this->ControllerHandler->store("children", $data);
    }

    /**
     * @param ChildRequest $request
     * @param Child $child
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */

    public function update(ChildRequest $request, Child $child)
    {

        // here some validation check parent or admin


        return $this->ControllerHandler->update("child", $child, $request->validated());
    }


    public function destroy(Child $child)
    {
        // here some validation check parent or admin


        return $this->ControllerHandler->destory("children", $child);

    }


    public function childAndEvaluation(Child $child, Evaluation $evaluation)
    {

        return $this->ControllerHandler->show("child",  (new ChildService)->getChildWithAgeInMonthAndCheckIfCanDoExam( $child ,$evaluation));
    }

    public function getChildAndSideProfile(Child $child)
    {
        return $this->ControllerHandler->show('sideProfile', (new ChildService)->getChildWithSideProfile($child));
    }


}
