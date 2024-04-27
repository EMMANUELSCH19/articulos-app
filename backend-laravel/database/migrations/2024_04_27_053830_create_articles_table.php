<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('banner_url')->nullable();
            $table->string('author');
            $table->text('content');
            $table->string('likes');
            $table->string('visits');
            $table->foreignId('categories_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('social_networks_id')->references('id')->on('social_networks')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('pages_id')->references('id')->on('pages')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
