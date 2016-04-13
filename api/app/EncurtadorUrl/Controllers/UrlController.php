<?php

namespace EncurtadorUrl\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use EncurtadorUrl\Models\Url;

class UrlController extends BaseController
{
    public function index($shortUrl)
    {
        $url = Url::where('shortUrl', $shortUrl)->first();
        if ($url === null) {
            return response('URL não encontrada.', 404);
        }
        return redirect($url->url, 301);
    }
    public function store(Request $request, $userid)
    {
        $url = new Url();
        $url->user_id = $userid;
        $url->url = $request->input('url');
        $url->shortUrl = $url->encurtarUrl(0);
        if (!$url->save()) {
            return response('Ocorreu um problema!', 500);
        }

        //Quase um Transformer :P
        $urlResponse = [
          'id' => $url->id,
          'hits' => empty($url->hits) ? 0 : $url->hits,
          'url' => $url->url,
          'shortUrl' => $url->shortUrl
        ];

        return response()->json($urlResponse, 201);
    }

    public function destroy($shortUrl)
    {
        $url = Url::where('shortUrl', $shortUrl);
        if (!$url->delete()) {
            return response('Ocorreu um problema!', 500);
        }
        return response('URL excluida.', 200);
    }
}
