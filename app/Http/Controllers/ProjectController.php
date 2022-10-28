<?php

namespace App\Http\Controllers;

use App\Services\WordPressRestApiService;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $wp = new WordPressRestApiService();
        $projects = $wp->getPosts();
        $projects = collect($projects)->map(function ($project) {
            return [
                'id' => $project['id'],
                'title' => $project['title']['rendered'],
                'excerpt' => $project['excerpt']['rendered'],
                'slug' => $project['slug'],
            ];
        });

        return inertia('TheProjects', compact('projects'));
    }

    public function show(string $slug): void
    {
        dd($slug);
    }
}
