<?php

namespace Modules\Calender\Http\Controllers\Services;

class CalenderService
{

    public static function groupEventsOnTheSameDay($events)
    {
        $result = [];
        $max = 0;
        $events->each(function ($event) use (&$result, &$max) {
            $result[$event->day][] = [
                'title' => $event->title,
                'start_time' => $event->start_time,
                'id' => $event->id,
            ];

            if (count($result[$event->day]) > $max) {
                $max = count($result[$event->day]);
            }
        });

        return [
            "events" => array_reverse($result),
            'max' => $max

        ];


        /*
            $max = 0;

            $events->each(function ($event) use (&$result, &$max) {
                $result[$event->day]['day'] = $event->day;
                $result[$event->day]['events'][] = [
                    'title' => $event->title,
                    'start_time' => $event->start_time,
                ];

                if (count($result[$event->day]['events']) > $max) {
                    $max = count($result[$event->day]['events']);
                }
            });

            return response()->json([
                "events" => array_reverse(array_values($result)),
                'max' => $max
            ]);

        */
    }
}
