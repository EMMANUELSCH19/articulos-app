<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RedesSociales extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function articulos()
    {
        return $this->belongsTo(Articulos::class);
    }
}
