<template>
  <div class="min-h-screen">
    <Map />
    <div
      class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
    >
      <div
        class="col-span-1 text-right m-auto visible md:invisible"
        @click="toggle()"
      ></div>
      <div>
        <p
          class="w-full font-bold text-left m-auto col-span-2 px-2 py-4 text-xl text-[#6EB7BF]"
        >
          الملف الشخصي
        </p>
      </div>
      <div class="text-left m-auto">
        <button class=" ">
          <router-link class="flex" to="/web">
            <p class="md:pt-4 py-2 md:text-2xl">الرئيسيه</p>
          </router-link>
        </button>
      </div>
    </div>
    <div class="relative overflow-clip max-w-full max-h-screen flex">
      <sidbar :sole="showsider" />
      <div class="flex-1 overflow-scroll">
        <div
          class="top-0 bg-white absolute text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"
        >
          نتيجه التقيم
        </div>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>طفلي اصبح اكثر مهاره</p>
        </according>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>طفلي اصبح اكثر مهاره</p>
          <p class="text-[#FF3765]">
            تنبيه هام : لايمكن لطفلك الاختبار مره اخر الا بعر مرور 6 اشهر علي
            اخر اختبار
          </p>
        </according>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>طفلي اصبح اكثر مهاره</p>
          <p class="text-[#FF3765]">
            تنبيه هام : لايمكن لطفلك الاختبار مره اخر الا بعر مرور 6 اشهر علي
            اخر اختبار
          </p>
        </according>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>طفلي اصبح اكثر مهاره</p>
          <p class="text-[#FF3765]">
            تنبيه هام : لايمكن لطفلك الاختبار مره اخر الا بعر مرور 6 اشهر علي
            اخر اختبار
          </p>
        </according>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>طفلي اصبح اكثر مهاره</p>
          <p class="text-[#FF3765]">
            تنبيه هام : لايمكن لطفلك الاختبار مره اخر الا بعر مرور 6 اشهر علي
            اخر اختبار
          </p>
        </according>
      </div>
    </div>
    <About />
  </div>
</template>
<script>
import Map from "../components/Map.vue";
import According from "../components/According.vue";
import Sidbar from "../components/Sidbar.vue";
import About from "../components/About.vue";

export default {
  components: { Map, According, Sidbar, About },
  data() {
    return {
      showsider: false,
    };
  },
  methods: {
    toggle() {
      this.showsider = !this.showsider;
    },
  },
};
</script>
