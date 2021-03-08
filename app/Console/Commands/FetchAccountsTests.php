<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Account;
use Illuminate\Support\Facades\Storage;

class FetchAccountsTests extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'report:test {order?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get Accounts Tests Count';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $accounts = Account::all();
        $accountTestsCount = [];
        $pdfmakeConfig = Storage::disk('resources')->get('pdfmakeConfig.js');
    
        foreach ($accounts as $account) {
            $accountTestsCount[] = [
                'user_name' => $account->account_username,
                'number_of_tests' => $account->tests->count()
            ];          
        }

        $accountTestsCount = $this->getAccountTestsCountAsc($accountTestsCount);
        if($this->argument('order') == 'desc'){
            $accountTestsCount = $this->getAccountTestsCountDesc($accountTestsCount);
        }     

        try {
            $payload = json_encode($accountTestsCount);
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
