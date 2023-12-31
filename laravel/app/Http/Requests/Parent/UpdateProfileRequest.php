<?php

namespace App\Http\Requests\Parent;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth('parent')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "fname" => ['required', 'string'],
            "lname" => ['required', 'string'],
            "email" => ['required', 'string', 'email'],
            'image' => ['nullable', 'image'],
            "password" => ["nullable", "string"]
        ];
    }
}
