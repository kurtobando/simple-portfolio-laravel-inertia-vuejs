<?php

namespace App\Services;

use App\Exceptions\WordPressRestApiInvalidUrlException;
use Illuminate\Support\Facades\Http;

class WordPressRestApiService
{
    private string $url;

    public function __construct(public string $postType = 'projects')
    {
        $this->url = config('wordpress.url');
    }

    public function getPosts(string $status = 'publish'): array|WordPressRestApiInvalidUrlException
    {
        $response = Http::get("{$this->url}/wp-json/wp/v2/{$this->postType}?status={$status}");

        if (!$response->ok()) {
            throw new WordPressRestApiInvalidUrlException("WordPress REST API Url is invalid");
        }

        return $response->json();
    }

    public function getPostBySlug(string $slug, string $status = 'publish'): array|WordPressRestApiInvalidUrlException
    {
        $response = Http::get("{$this->url}/wp-json/wp/v2/{$this->postType}?slug={$slug}&status={$status}");

        if (!$response->ok()) {
            throw new WordPressRestApiInvalidUrlException("WordPress REST API Url is invalid");
        }

        return $response->json();
    }
}
