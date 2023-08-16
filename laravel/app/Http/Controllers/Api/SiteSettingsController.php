<?php

namespace App\Http\Controllers\Api;

use App\Models\SitePage;
use App\Models\SiteSettings as SiteSettingsModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SiteSettings extends Controller
{
    public function index_pages(Request $request)
    {
        $pages = SitePage::all();

        return response()->json([
            'pages' => $pages,
        ], 200);
    }
    public function store_page(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['required', 'image'],
            'description' => ['required', 'string'],
        ]);

        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $name = time() . '.' . $extension;
        $request->image->move(public_path() . '/images/',  $name);
        $image = '/images/' . $name;

        $page = SitePage::create([
            'title' => $request->title,
            'image' => $image,
            'description' => $request->description,
        ]);

        return response()->json([
            'pages' => $page,
        ], 200);
    }
    public function update_page(SitePage $page, Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['nullable', 'image'],
            'description' => ['required', 'string'],
        ]);

        if ($request->file('image')) {

            if (!empty($page->image)) {
                $currentImage = public_path() . $page->image;

                if (file_exists($currentImage)) {
                    unlink($currentImage);
                }
            }

            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $name = time() . '.' . $extension;
            $request->image->move(public_path() . '/images/',  $name);
            $image = '/images/' . $name;
        }

        $page->update([
            'title' => $request->title ?? $page->title,
            'image' => $image ?? $page->image,
            'description' => $request->description ?? $page->description,
        ]);

        return response()->json([
            'pages' => $page->fresh(),
        ], 200);
    }
    public function index_settings(Request $request)
    {
        $settings = SiteSettingsModel::first();
        return response()->json([
            'settings' => $settings,
        ], 200);
    }

    public function update_settings()
    {
    }
}
