<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeItemRequest extends FormRequest
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
        return [
            'type' => 'required|integer',
            'series_id' => 'nullable|exists:series,id|required_without:scholars,tags',
            'order' => 'nullable|required_with:series_id|integer',
            'scholars' => 'required_without:series_id|exists:scholars,id',
            'tags' => 'required_without:series_id|exists:tags,id',
            'locale' => 'required|string',
            'name' => 'required|string',
            'language' => 'required|string',
            'description' => 'nullable|string',
        ];
    }
}
