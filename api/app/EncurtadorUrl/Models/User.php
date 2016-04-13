<?php

namespace EncurtadorUrl\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Url;

class User extends Authenticatable
{
    protected $primaryKey = 'id';
    
    public $incrementing = false;

    protected $fillable = ['id'];

    public $timestamps = false;

    public function urls()
    {
        return $this->hasMany(Url::class);
    }
}
