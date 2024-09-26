<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Services\ContactService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class ContactController extends Controller
{
    public function __construct(
        private ContactService $contactService
    ) {
        //
    }

    public function index(): Response
    {
        return inertia('TheContact');
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        $this->contactService->sendContactEmail([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
            'ip_address' => $request->ip(),
        ]);

        return redirect()
            ->route('contact')
            ->with('success', 'Thanks for your message. I\'ll be in touch soon as possible.');
    }
}
