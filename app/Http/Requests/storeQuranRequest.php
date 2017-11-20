<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeQuranRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'scholar_id' => 'required|integer|exists:scholars,id',
            'recitation_id' => 'required|integer|exists:recitations,id',
            'url' => 'required|url'
        ];

        foreach(config('translatable.locales') as $locale)
        {
            $rules['name.'.$locale] = 'required|string';
        }

        return $rules;
    }
}
