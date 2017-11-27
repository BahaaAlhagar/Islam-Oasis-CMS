<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeFatwaRequest extends FormRequest
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
            'scholar_id' => 'required_if:type,1|exists:scholars,id',
            'locale' => 'required|string',
            'question' => 'required|string',
            'answer' => 'required|string',
            'tags' => 'required|exists:tags,id'
        ];
    }
}
