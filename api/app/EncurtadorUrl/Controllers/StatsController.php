<?php

namespace EncurtadorUrl\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use EncurtadorUrl\Models\Url;

class StatsController extends BaseController
{
    public function generalStats()
    {
        $totalHits = Url::sum('hits');
        $totalUrls = Url::count();
        $topUrls   = Url::orderBy('hits', 'desc')->take(10)->get();

        $stats = [
          "hits" => $totalHits,
          "urlCount" => $totalUrls,
          "topUrls" => $topUrls
        ];

        return response()->json($stats, 200);
    }

    public function userStats($userid)
    {
        $totalHits = Url::where('user_id', $userid)->sum('hits');
        $totalUrls = Url::where('user_id', $userid)->count();
        $topUrls   = Url::where('user_id', $userid)->orderBy('hits', 'desc')->take(10)->get();

        $stats = [
        "hits" => $totalHits,
        "urlCount" => $totalUrls,
        "topUrls" => $topUrls
      ];

        return response()->json($stats, 200);
    }

    public function urlStats($shortUrl)
    {
        $url = Url::where('shortUrl', $shortUrl)->first();

        $urlStats = [
          "id"       => $url->id,
          "hits"     => empty($url->hits) ? 0 : $url->hits,
          "url"      => $url->url,
          "shortUrl" => $url->shortUrl
        ];

        return response()->json($urlStats, 200);
    }
}
