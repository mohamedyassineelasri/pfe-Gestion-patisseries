<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $fillable = ['content', 'type', 'status', 'client_id'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
