<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\SigninRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class SigninController extends Controller
{
    public function index(): Response
    {
        return inertia('Auth/TheSignin');
    }

    public function store(SigninRequest $request): RedirectResponse
    {
        if (!auth()->attempt($request->only('email', 'password'))) {
            return redirect()
                ->route('sign-in')
                ->with('error', 'Incorrect sign-in credentials.');
        }

        $request->session()->regenerate();

        return redirect()->route('dashboard');
    }
}
