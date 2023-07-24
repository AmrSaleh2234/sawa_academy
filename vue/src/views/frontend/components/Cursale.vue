<template>
   <div class=" bg-[url('../image/sec1/Group68.png')] bg-cover bg-[#135C65]">
    <div class="m-auto w-full space-y-4 p-[4%]">
        <h1 class="m-auto text-center text-4xl text-white">اهم ما يميزنا</h1>
        <p class="m-auto text-center text-xl text-[#29CCFF]">نبذل جهدا كبيرا لكي نساعدك </p>
    </div>
    <div class="grid grid-cols-10 py-[2%] ">
        <div class="m-auto col-span-2">
            <img  src="../image/sec1/3.png">
        </div>
        <div class="col-span-6 m-auto">
            <carousel class="max-w-3xl "   :autoplay="3000" :wrap-around="true" :breakpoints="breakpoints" >
                <slide v-for="image in images" :key="image">
                 <img class="w-[80%]" src="../image/sec1/113.png" >
                </slide>
            
                <template #addons>
                  <navigation class=" bg-[#FFCF24] rounded-[50%]  text-white " />
                </template>
              </carousel>
        </div>
        <div class="m-auto col-span-2">
            <img  src="../image/sec1/2.png">
        </div>
       </div>
       <div class="grid grid-cols-10 ">
        <div class="col-span-2"></div>
        <div class="col-span-8 w-[80%] py-[3%] text-center">
            <p class="text-white text-center">ىتساشلالؤلاتىشسى اسشؤلاسنش لاىؤسشرؤ سشى الاتس’ْ</p>
            <p class="text-white text-center">مةنتالراشلاتشسؤلالآ  شستلا</p>
        </div>
        <div class="col-span-2"></div>
       </div>
   </div>
  </template>
  
  <script>
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
      images: [
        {
          url: '../image/sec1/113.png',
          alt: 'Image 1'
        },
        {
            url: '../image/sec1/113.png',          
            alt: 'Image 2'
        },
        {
            url: '../image/sec1/113.png',          
            alt: 'Image 3'
        },
        {
            url: '../image/sec1/113.png',          
            alt: 'Image 4'
        },
        {
            url: '../image/sec1/113.png',          
            alt: 'Image 5'
        }
      ]
    };
  }
  
  }
  </script>