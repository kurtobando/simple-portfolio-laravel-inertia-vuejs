<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('TheContact');
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        return redirect()
            ->route('contact')
            ->with('success', 'Thanks for contacting us!');
    }
}
