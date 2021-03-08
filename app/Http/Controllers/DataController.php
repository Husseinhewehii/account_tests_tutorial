<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Account;
use App\Test;
use Illuminate\Support\Facades\Storage;

class DataController extends Controller
{
    public function index()
    {      
        $accounts = Account::all();
        $accountTestsCount = [];
        
        foreach ($accounts as $account) {
            $accountTestsCount[] = [
                'user_name' => $account->account_username,
                'number_of_tests' => $account->tests->count()
            ];          
        }
        
        $accountTestsCountAsc = $this->getAccountTestsCountAsc($accountTestsCount);
        $accountTestsCountDesc = $this->getAccountTestsCountDesc($accountTestsCount);
        
        $pdfmakeConfig = Storage::disk('resources')->get('pdfmakeConfig.js');

        try {
            $payload = json_encode($accountTestsCountAsc);
            Storage::disk('resources')->put('account_tests.js', $payload);
            Storage::disk('resources')->append('account_tests.js', $pdfmakeConfig);
        } catch (\Exception $error) {
            dd($error);
        }    
    }

    public function getAccountTestsCountAsc($accountTestsCount)
    {
        usort($accountTestsCount, function ($item1, $item2) {
            return $item1['number_of_tests'] <=> $item2['number_of_tests'];
        });
        return $accountTestsCount;
    }

    public function getAccountTestsCountDesc($accountTestsCount)
    {    
        usort($accountTestsCount, function ($item1, $item2) {
            return $item2['number_of_tests'] <=> $item1['number_of_tests'];
        });
        return $accountTestsCount;
    }
}










