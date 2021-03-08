<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Test;

class Account extends Model
{
    protected $table = 'accounts';
        
    public function tests()
    {
        return $this->hasMany(Test::class, 'test_account_id', 'account_id');
    }
}
