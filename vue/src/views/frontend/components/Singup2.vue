<template>
  <div class="">
    <div
      class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
    >
      <div class="text-right m-auto visible md:invisible" @click="toggle()">
        <font-awesome-icon
          class="text-2xl md:text-3xl text-right p-4 text-black hover:text-red-600"
          icon="fa-solid fa-bars "
        ></font-awesome-icon>
      </div>
      <div>
        <p
          class="text-center m-auto col-span-2 px-2 py-4 text-xl text-[#6EB7BF]"
        >
          الملف الشخصي
        </p>
      </div>
      <div class="text-right m-auto">
        <button class=" ">
          <router-link class="flex" to="/">
            <p class="md:pt-4 py-2 md:text-2xl">الرئيسيه</p>
            <font-awesome-icon
              class="bg-[#135C65] rounded-[50%] m-2 md:p-4 p-2"
              icon="fa-solid fa-arrow-left"
            />
          </router-link>
        </button>
      </div>
    </div>
    <div class="relative overflow-clip max-w-full max-h-screen flex">
      <sidbar :sole="showsider" />
      <div class="flex-1 overflow-scroll">
        <div
          class="bg-white text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"
        >
          الحجوزات
        </div>
        <div
          class="p-2 grid gap-5 grid-cols-2 md:grid-cols-3 overflow-scroll text-cyan-700"
        >
          <a
            class="flex m-auto flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-sm hover:bg-gray-100"
          >
            <img
              class="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              src="../image/Rectangle63.png"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p
                class="p-2 border-b-2 border-black border-solid text-[#148A98]"
              >
                اخصائي تربيه طفوله
              </p>
              <p class="p-2 text-[#FF3765]">اليوم : الاحد</p>
              <p class="px-2 pb-2 text-[#FF3765]">الساعه :10 م</p>
              <button class="w-full p-2 rounded-2xl bg-[#48A700]">
                اتصل الان
              </button>
            </div>
          </a>
          <a
            class="flex m-auto flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-sm hover:bg-gray-100"
          >
            <img
              class="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              src="../image/Rectangle63.png"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p
                class="p-2 border-b-2 border-black border-solid text-[#148A98]"
              >
                اخصائي تربيه طفوله
              </p>
              <p class="p-2 text-[#FF3765]">اليوم : الاحد</p>
              <p class="px-2 pb-2 text-[#FF3765]">الساعه :10 م</p>
              <button class="w-full p-2 rounded-2xl bg-[#48A700]">
                اتصل الان
              </button>
            </div>
          </a>
          <a
            class="flex m-auto flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-sm hover:bg-gray-100"
          >
            <img
              class="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              src="../image/Rectangle63.png"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p
                class="p-2 border-b-2 border-black border-solid text-[#148A98]"
              >
                اخصائي تربيه طفوله
              </p>
              <p class="p-2 text-[#FF3765]">اليوم : الاحد</p>
              <p class="px-2 pb-2 text-[#FF3765]">الساعه :10 م</p>
              <button class="w-full p-2 rounded-2xl bg-[#48A700]">
                اتصل الان
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "../components/Map.vue";
import According from "../components/According.vue";
import Sidbar from "../components/Sidbar.vue";

export default {
  components: { Map, According, Sidbar },
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
