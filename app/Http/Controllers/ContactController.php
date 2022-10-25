<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Mail\ContactMailReceived;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
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
        Mail::to($request->email)->send(new ContactMail(name: $request->name));
        Mail::to(config('mail.from.address'))->send(new ContactMailReceived(
            name: $request->name,
            email: $request->email,
            message: $request->message,
        ));

        return redirect()
            ->route('contact')
            ->with('success', 'Thanks for your message. I\'ll be in touch soon as possible.');
    }
}
