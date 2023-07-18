<template>
  <div class="border-b-2 rounded max-w-full mb-4 min-w-min bg-[#F8F8F8]">
    <div class="shadow p-4 font-bold rounded flex justify-between">
      <div class="flex">
        <div><img src="../image/header/Group463.png" /></div>
        <p class="text-xl m-auto p-2 font-thin">اكاديميه سوا</p>
      </div>
      <div class="my-auto font-thin text-[#148A98]">{{ date }}</div>
    </div>
    <div class="mt-4 border-b-2 p-2 rounded font-thin text-right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
  },
};
</script>
