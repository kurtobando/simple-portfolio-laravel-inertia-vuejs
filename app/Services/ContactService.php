<?php

namespace App\Services;

use App\Mail\ContactMail;
use App\Mail\ContactMailReceived;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactService
{
    public function __construct(
        private Contact $contact
    ) {
        //
    }

    /**
     * @param array{
     *     name: string,
     *     email: string,
     *     message: string,
     *     ip_address: string,
     * } $data
     * @return void
     */
    public function sendContactEmail(array $data): void
    {
        $this->contact->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'message' => $data['message'],
            'ip_address' => $data['ip_address'],
        ]);

        Mail::to($data['email'])->send(new ContactMail($data['name']));
        Mail::to(config('mail.from.address'))->send(new ContactMailReceived(
            name: $data['name'],
            email: $data['email'],
            message: $data['message'],
        ));
    }
}
