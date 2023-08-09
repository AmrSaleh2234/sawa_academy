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
        <div class="m-auto w-full">
      <p class="w-full font-bold text-center text-2xl text-[#6EB7BF]">{{$t("Profile_personly")}}</p>
    </div>
     
     
    </div>
    <div class="relative overflow-clip max-w-full max-h-screen flex">
      <sidbar :sole="showsider" />
      <div class="flex-1 overflow-scroll">
        <div
          class="top-0 bg-white absolute font-bold text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"
        >
        {{ $t("evaluation_result") }}
      </div>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>  {{ $t("My_child_is_getting_more_skilled") }} </p>
          <p class="text-[#FF3765]">
          {{ $t("Important_alert") }}
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
