<?php

namespace App\Exceptions;

use Exception;
use Inertia\Response;

class WordPressRestApiInvalidUrlException extends Exception
{
    public function report(): bool
    {
        return false;
    }

    public function render(): Response
    {
        return inertia('TheExceptionHandler', [
            'status' => 400,
            'message' => $this->getMessage(),
        ]);
    }
}
