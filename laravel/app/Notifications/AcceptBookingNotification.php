<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AcceptBookingNotification extends Notification
{
    use Queueable;


    /**
     * Create a new notification instance.
     */
    public function __construct(private $event, private $booking)
    {
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }


    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $time = Carbon::parse($this->event->start)->format("H:i A");
        return [
            "message" => "يرجي العلم بأنه تم حجز استشارة مع الطبيب : احمد إبراهيم استشاري مخ واعصاب في يوم الثلاثاء الساعة الواحدة ظهرا{$time} الموعد غدا", "data" => [
                'event' => $this->event->id,
                'booking' => $this->booking->id,
                'event_start' => Carbon::parse($this->event->start)->format("H:i A")
            ]
        ];
    }
}
