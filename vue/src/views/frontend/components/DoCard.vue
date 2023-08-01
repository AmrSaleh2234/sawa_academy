<template >
   <div style="background: linear-gradient(to right, #FF8B6A, #FF566F);" class="p-6 py-16 bg-center bg-cover m-auto relative ">
       <img src="../image/sec1/m.png" class="absolute inset-0 w-full h-full object-cover">
<!--        -->
       <div class="text-center pb-[5%]">
           <h1 class="text-4xl  font-bold text-white tracking-wide ">فريق اكاديميه سوا</h1>
           <p class="text-2xl text-white tracking-wide pt-4 ">لدينا مجموعه من الاخصائين العالجين ذو خبره عاليه</p>
       </div>
       <div class=" m-auto">
           <div class=" m-auto">
               <carousel class="bg-none w-full py-[1%]  " v-bind="settings" :wrap-around="true" :breakpoints="breakpoints" >
                   <slide v-for="image in 7" :key="image" class="w-full widths">
                      <div v-for="index in perPage" :key="index" class=" w-[100%] ">
                       <div class="text-center bg-teal-100 rounded-3xl m-2">
                           <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                           <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                           <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                           <button  class="text-center w-[90%] m-2 p-2 rounded-3xl text-white bg-[#135C65] hover:bg-[#29CCFF]">تواصل الان</button>
                       </div>
                      </div>
                   </slide>
<!--                -->
                   <template  #addons >
<!--                        -->
                     <pagination class="[&>div]:bg-[red] " />
                   </template>
                 </carousel>

           </div>

     </div>
   </div>
</template>
<!-- <script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
  return {
   
  };
}

}
</script> -->
<script>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useWindowSize } from "@vueuse/core";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const perPage = ref(1);

    // Adjust the number of slides per page based on screen size
    // watch(windowSize, () => {
    //     if (windowSize.width >= 768 && windowSize.width < 1024) {
    //     perPage.value = 2;
    //   } else if (windowSize.width >= 1024) {
    //     perPage.value = 3;
    //   } else {
    //     perPage.value = 1;
    //   }
    // });

    onMounted(() => {
      // Initialize the number of slides per page on component mount
      console.log(window.innerWidth);
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        perPage.value = 3;
      } else if (window.innerWidth >= 1024) {
        perPage.value = 5;
      } else {
        perPage.value = 1;
      }
    });

    onBeforeUnmount(() => {
      // Cleanup if necessary
    });

    return {
      perPage,
    };
  },
};
</script>
