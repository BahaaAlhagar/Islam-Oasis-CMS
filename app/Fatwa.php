<?php

namespace App;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use \Dimsav\Translatable\Translatable;

class Fatwa extends Model
{
    use Translatable;

    public $translatedAttributes = ['locale', 'question', 'slug', 'answer'];

    protected $guarded = ['id'];

    public function scholar()
    {
        return $this->BelongsTo(Scholar::class);
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function relatedFatawaByTag()
    {
        $relatedFatawa = Cache::remember('related_fatawa_' .$this->id. '_' .app()->getLocale(), 15, function (){
                return Fatwa::translatedIn(app()->getLocale())
                        ->whereType($this->type)
                        ->whereHas('tags', function ($query){
                            $query->whereIn('id', $this->tags()->pluck('id')->toArray());
                        })->where('id', '<>', $this->id)
                        ->take(10)->inRandomOrder()->get();
            });

        return $relatedFatawa;
    }

    public function scopeWithCurrentLocale($query)
    {
        return $query->with(['translations' => function($query){
                $query->whereLocale(app()->getLocale());
            }]);
    }
}
