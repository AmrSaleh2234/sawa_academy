<template>
    <div class="p-6 py-16 bg-cover m-auto bg-[url('../image/sec1/Group68.png')]  bg-[#FF5C74]">
        <div class="text-center pb-[5%]">
            <h1 class="text-3xl  font-bold text-white tracking-wide ">فريق اكاديميه سوا</h1>
            <p class="text-white tracking-wide ">لدينا مجموعه من الاخصائين العالجين ذو خبره عاليه</p>
        </div>
        <div class=" m-auto">
            <div class=" m-auto">
                <carousel class="bg-none w-full py-[5%] "  :wrap-around="true" :breakpoints="breakpoints" >
                    <slide v-for="image in 6" :key="image" class="w-full ">
                        
                       <div class="flex w-[100%] justify-between   ">
                        <div class="text-center bg-teal-100 rounded-3xl m-2">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                        <div class="text-center bg-teal-100 rounded-3xl m-2">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                        <div class="text-center bg-teal-100 rounded-3xl m-2 ">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                        <div class="text-center bg-teal-100 rounded-3xl m-2 ">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                        <div class="text-center bg-teal-100 rounded-3xl m-2 ">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                        <div class="text-center bg-teal-100 rounded-3xl m-2 ">
                            <div class="bg-white rounded-3xl"><img class="m-auto px-5" src="../image/sec1/Doctor-PNG-Clipart.png"></div>
                            <p class=" text-center pt-2 opacity-80">د/ احمد ابراهيم</p>
                            <p class="text-center text-teal-400 p-1">اخصائي مخ واعصاب</p>
                            <button style="background-color: #135C65;" class="text-center w-[90%] m-2 p-2 rounded-3xl text-white">تواصل الان</button>
                        </div>
                       
                       </div>
                    </slide>
                
                    <template  #addons >
                        
                      <pagination class="rounded-full " />
                    </template>
                  </carousel>
            </div>
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