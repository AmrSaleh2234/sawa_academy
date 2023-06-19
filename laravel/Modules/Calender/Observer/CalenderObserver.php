<?php

namespace Modules\Calender\Observer;

use Carbon\Carbon;
use Modules\Calender\Entities\Calender;

class CalenderObserver
{
    /**
     * @param Calender $calender
     * @return void
     */
    public function saving (Calender $calender)
    {
        $calender->start=Carbon::parse($calender->start)->format('Y-m-d');
        $calender->end=Carbon::parse($calender->end)->format('Y-m-d');
        $calender->user_id = auth()->user()->id ;
    }
}
