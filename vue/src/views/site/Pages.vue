<template>
  <div class="" style="padding: 1rem 1.5rem">
    <h2 class="text-2xl font-bold">{{ $t("Pages") }}</h2>
    <p class="text-lg" style="color: #42a5f5; padding: 0.5rem 0">
      {{ $t("Pages_menu") }}
    </p>
  </div>

  <div
    class="px-6 py-2 mt-2 mb-12 rounded-lg shadow-sm cursor-pointer item flex justify-between bg-gray-50"
  >
    <div class="relative flex flex-col items-center mx-4">
      <p class="text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </p>
    </div>
    <div class="flex flex-col text-right">
      <p class="text-xl py-1">Main Page</p>
      <p class="text-base py-1 px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis a
        laudantium ea molestiae quibusdam nisi eveniet commodi architecto nulla
        cum doloribus perspiciatis fugit voluptatibus assumenda, minus
        necessitatibus quo inventore. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Omnis saepe sapiente reiciendis nihil quis perferendis
        ullam placeat ipsam eius officiis error possimus modi quidem repellat,
        laborum nisi, soluta earum voluptatum!
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style>
.item:hover {
  background-color: #e6f8f6;
  transition: all linear 300ms;
}
</style>
