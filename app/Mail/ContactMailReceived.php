<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMailReceived extends Mailable implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    public function __construct(
        public string $name,
        public string $email,
        public string $message,
    ) {
        //
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New mail from your website',
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.contact-mail-received',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
