<?php

namespace App\Exceptions;

use Exception;
use Inertia\Inertia;
use Inertia\Response;

class WordPressRestApiInvalidUrlException extends Exception
{
    public function report(): bool
    {
        return false;
    }

    public function render(): Response
    {
        return Inertia::render('TheExceptionHandler', [
            'status' => 400,
            'message' => $this->getMessage()
        ]);
    }
}
