<?php

namespace EncurtadorUrl\Models;

use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    protected $table = "urls";

    protected $fillable = ['url', 'shortUrl'];

    public $timestamps = true;

    protected $hidden = ['created_at', 'updated_at', 'user_id'];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function encurtarUrl($count)
    {
        $shortUrl = substr(str_shuffle('123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'), 0, 5);
        $existe = $this->where('shortUrl', $shortUrl)->first();
        if ($existe !== null) {
            return $this->encurtarUrl(1);
        }
        return $shortUrl;
    }
}
