<template>
    <div class="">
        <Map />
      <div class=" flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid ">
        <div class="m-auto ">
            <button class="">
                <router-link  class=" flex" to="/">
                    <p class="pt-4  text-2xl ">الرئيسيه</p>
                    <font-awesome-icon class="bg-[#135C65] rounded-[50%] m-2 p-4" icon="fa-solid fa-arrow-left" />
                </router-link>
            </button>
        </div>
        <div><p class="text-center   p-6 text-2xl text-[#6EB7BF]" >الملف الشخصي</p></div>
        <div class="m-auto visible md:invisible" @click="toggle()"><font-awesome-icon class="text-3xl text-right   text-black hover:text-red-600 " icon="fa-solid fa-bars "></font-awesome-icon></div>
        
      </div>
        <div class="relative  flex min-h-screen">
            <sidbar :sole="showsider" />
            <div class="flex-1 space-y-10  ">
                <div class="bg-white  text-2xl text-[#6EB7BF] pt-6  text-center"><button >تعديل الملف الشخصي </button></div>
                <div class="p-2  ">
                    <div class="block max-w-md m-auto rounded-lg space-y-6 bg-white">
                        <div><p class="text-center text-[#FF3765]">تنبيه هام : برجاء اختيار حجم الصوره 440 بسكل * 660 بسكيل</p>
                         </div>
                        
                        <form class=" space-y-6 text-center rounded-2xl  p-4 bg-[#F8F8F8]" action="#">
                            <div class="grid grid-cols-2">
                                <input class=" backdrop-blur-md bg-white/30 text-center border-b-2 border-black border-solid border-0  mx-4 p-2" type="email" name="email"  placeholder=" الاسم العائله" required="">
                                <input class=" backdrop-blur-md bg-white/30 text-center border-b-2 border-black border-solid border-0 mx-4  p-2" type="text" name="email" placeholder=" الاسم الاول" required=""> 
                            </div>
                            
                            <div> 
                                <input class=" backdrop-blur-md bg-white/30  px-16 p-2 text-center border-0 border-b-2 border-black border-solid " type="email" name="email"  placeholder=" الايميل الالكتروني" required="">
                            </div>
                            <div>
                                <input class=" backdrop-blur-md bg-white/30 px-16 p-2 m-2 text-center border-0 border-b-2 border-black border-solid " type="text" name="email"  placeholder="كلمه السر" required="">
                            </div>
                        </form>
                        <button class=" p-2 text-center bg-[#148A98] text-white w-full rounded-2xl text-xl">حفظ التغيرات</button>
                    </div>
                </div>
            </div>
        </div>
        <About />
    </div>
</template>
<script>

import Map from '../components/Map.vue'; 
import Sidbar from '../components/Sidbar.vue'; 
import About from '../components/About.vue'; 


export default {
    components:{Map,Sidbar,About},
    data(){
        return{
            showsider:false
        }
    },
    methods: {
        toggle(){
            this.showsider=!this.showsider
        }
    },
}
</script>