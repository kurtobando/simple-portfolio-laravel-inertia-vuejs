<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|min:5|max:255',
            'email' => 'required|email:rfc,dns,spoof,filter',
            'message' => 'required|min:20|max:255',
        ];
    }
}
