<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('TheContact');
    }

    public function store(ContactRequest $request): void
    {
//        dd($request->all());
    }
}
