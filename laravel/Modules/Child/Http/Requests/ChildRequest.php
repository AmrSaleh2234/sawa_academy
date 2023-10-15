<?php

namespace Modules\Child\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChildRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
//            "parent_id" => "required|integer",
            "name" => "required|string",
//            'gender' => ['required', 'in:0,1'],
//            'lang' => ['required', 'string'],
//            'nationalty' => ['required', 'string'],
//            'national_id' => ['required', 'string'],
            "birth_date" => ["required", "date"],
//            'birth_place' => ['required', 'string'],
//            'address' => ['required', 'string'],

        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
