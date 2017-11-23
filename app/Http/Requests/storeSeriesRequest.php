<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeSeriesRequest extends FormRequest
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
            'locale' => 'required|string',
            'name' => 'required|string',
            'description' => 'nullable|integer',
            'published' => 'required|boolean',
            'scholars' => 'required|exists:scholars,id',
            'tags' => 'required|exists:tags,id'
        ];
    }
}
