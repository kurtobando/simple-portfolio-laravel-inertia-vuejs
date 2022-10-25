<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        public string $name,
    ) {
        //
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('me@kurtobando.com', 'Kurt Obando'),
            subject: 'Thank you for contacting, ' . $this->name,
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.contact-mail',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
