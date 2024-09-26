<?php

namespace App\Http\Controllers;

use App\Exceptions\WordPressRestApiInvalidUrlException;
use App\Services\WordPressRestApiService;
use Inertia\Response;

class ProjectController extends Controller
{
    public function __construct(
        private WordPressRestApiService $wordPressRestApiService
    ) {
        //
    }

    /**
     * @throws WordPressRestApiInvalidUrlException
     */
    public function index(): Response
    {
        $projects = $this->wordPressRestApiService->getPosts();
        $projects = collect($projects)->map(function ($project) {
            return [
                'id' => $project['id'],
                'title' => $project['title']['rendered'],
                'excerpt' => $project['excerpt']['rendered'],
                'slug' => $project['slug'],
                'tools' => $project['acf']['tools'],
                'demo' => $project['acf']['demo'],
                'source' => $project['acf']['source'],
            ];
        });

        return inertia('TheProjects', compact('projects'));

    }

    /**
     * @throws WordPressRestApiInvalidUrlException
     */
    public function show(string $slug): Response
    {
        $project = $this->wordPressRestApiService->getPostBySlug($slug);
        $project = collect($project)->map(function ($project) {
            return [
                'id' => $project['id'],
                'title' => $project['title']['rendered'],
                'content' => $project['content']['rendered'],
                'tools' => $project['acf']['tools'],
                'demo' => $project['acf']['demo'],
                'source' => $project['acf']['source'],
            ];
        })->first();

        return inertia('TheProject', compact('project'));
    }
}
