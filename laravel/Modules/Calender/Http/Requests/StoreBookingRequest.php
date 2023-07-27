<?php

namespace Modules\Calender\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'event_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer'],
            // Requester Info
            'requester_name' => ['required', 'string'],
            'requester_phone' => ['required', 'string'],
            'relative_degree' => ['required', 'string'],
            'addtional_phone' => ['required', 'string'],
            'addtional_phone_owner' => ['required', 'string'],
            'addtional_phone_degree' => ['required', 'string'],
            //Child
            'child_name' => ['required', 'string'],
            'child_gender' => ['required', 'in:0,1'],
            'child_lang' => ['required', 'string'],
            'child_nationalty' => ['required', 'string'],
            'child_national_id' => ['required', 'string'],
            'child_birth_date' => ['required', 'date'],
            'child_birth_place' => ['required', 'string'],
            'child_address' => ['required', 'string'],
            "conversion_type" => ['required', 'string'],
            'child_doctor' => ['required', 'string'],

            'child_problem' => ['required', 'string'],
            'child_problems_notes' => ['required', 'string'],
            "child_aids" => ['required', 'boolean'],
            "child_aids_notes" => ['required_if:child_aids,1', 'string'],
            'child_parents_problems' => ['required', 'string'],
            'parents_priorities' => ['required', 'string'],
            "doctor_code" => ['required', 'integer'],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth('parent')->check();
    }
}
