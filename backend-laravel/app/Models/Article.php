<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function socialNetworks()
    {
        return $this->hasMany(SocialNetwork::class);
    }

    public function pages ()
    {
        return $this->belongsToMany(Page::class);
    }
    
}
