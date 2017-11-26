<?php

namespace App;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class FatwaTranslation extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];

    use HasSlug;
    
    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('question')
            ->saveSlugsTo('slug');
    }

    public function fatwa()
    {
    	return $this->belongsTo(Fatwa::class);
    }
}
