<?php

namespace EncurtadorUrl\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use EncurtadorUrl\Models\User;

class UserController extends BaseController
{
    public function store(Request $request)
    {
        $user = User::where('id', $request->input('id'))->first();
        if ($user === null) {
            $user = new User();
            $user->id = $request->input('id');
            if (!$user->save()) {
                return response('Ocorreu um problema!', 500);
            }
            return response()->json($user, 201);
        }
        return response('O usuário já existe!', 409);
    }

    public function destroy($userid)
    {
        $user = User::find($userid);
        if (!$user->delete()) {
            return response('Ocorreu um problema!', 500);
        }
        return response('Usuário deletado.', 200);
    }
}
