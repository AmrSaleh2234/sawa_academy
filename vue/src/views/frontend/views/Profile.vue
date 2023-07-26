<template>
    <div class="">
        <Map />
      <div class=" flex  border-b-2 p-2 border-x-cyan-950 border-solid ">
        <div class="m-auto ">
            <v-btn height="45" class="mb-5 text-lg m-auto text-white" color="#135C65" @click="home">
                <v-icon
                  start
                  icon="mdi-arrow-left"
                ></v-icon>
                  {{$t('الرئيسيه')}}
              </v-btn>
           
        </div>
        <div class="m-auto"><p class="text-center   p-6 text-2xl text-[#6EB7BF]" >الملف الشخصي</p></div>
        <div @click="toggle" class=" m-auto md:invisible"><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 91.914 91.914" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="1.124" width="89.666" height="14.089"></rect> <rect x="26.29" y="25.494" width="64.447" height="14.09"></rect> <rect x="1.124" y="52.33" width="89.666" height="14.09"></rect> <rect x="26.29" y="77.825" width="64.447" height="14.089"></rect> </g> </g> </g></svg></div>
        
      </div>
        <div class="relative  flex ">
            <sidbar class="h-full" :sole="showsider" />
            <div class="flex-1 space-y-10  ">
                <div class="bg-white  text-2xl text-[#6EB7BF] pt-6  text-center"><button >تعديل الملف الشخصي </button></div>
                
                <div class="p-2 ">
                    <div class="block max-w-lg m-auto rounded-lg space-y-6 bg-white">
                        <div style="font-size:16px" class="flex"><p class="m-auto text-center text-[#FF3765]">تنبيه هام : برجاء اختيار حجم الصوره 440 بسكل * 660 بسكيل</p>
                            <div class="px-1 card flex justify-content-center">
                                <Knob text-color="#FFD02B" rangeColor="white" valueColor="#FFD02B" :strokeWidth="5" :size="70" class="h-28" v-model="value" />
                            </div>
                         </div>
                        
                        <form class=" space-y-10 text-center rounded-2xl  p-6 bg-[#F8F8F8]" action="#">
                            <div class="grid grid-cols-2">
                                <div  class=" m-auto ml-4 bg-[#F8F8F8] " style="display: flex; align-items: center;border-bottom:2px solid rgb(0, 0, 0) ">
                                    <input  :readonly="!editing" style="font-size:20px" class="backdrop-blur-md bg-white/30  focus:ring-0  w-full p-2 text-center  border-0" type="email" v-model="last_name" >
                                    <v-icon
                                    end
                                    @click="toggleEditing"
                                    :icon="editing ? 'mdi-check' : 'mdi-pencil'"
                                    
                                    color="red"
                                    class=" text-2xl text-white  bg-[#fefefe] h-full "
                                  ></v-icon>
                                </div> 
                                <div  class=" m-auto ml-4 bg-[#F8F8F8] " style="display: flex; align-items: center;border-bottom:2px solid rgb(0, 0, 0) ">
                                    <input  :readonly="!editing" style="font-size:20px" class="backdrop-blur-md bg-white/30  focus:ring-0  w-full p-2 text-center  border-0" type="email" v-model="first_name" >
                                    <v-icon
                                    end
                                    @click="toggleEditing"
                                    :icon="editing ? 'mdi-check' : 'mdi-pencil'"
                                    
                                    color="red"
                                    class=" text-2xl text-white  bg-[#fefefe] h-full "
                                  ></v-icon>
                                </div>                            </div>
                            
                            
                            <div class=" m-auto  bg-[#F8F8F8] " style="display: flex; align-items: center;border-bottom:2px solid rgb(0, 0, 0) ">
                                <input  :readonly="!editing" style="font-size:18px" class="backdrop-blur-md bg-white/30  focus:ring-0  w-full p-2 text-center  border-0" type="email" v-model="email" >
                                <v-icon
                                end
                                @click="toggleEditing"
                                :icon="editing ? 'mdi-check' : 'mdi-pencil'"
                                
                                color="red"
                                class=" text-2xl text-white  bg-[#fefefe] h-full "
                              ></v-icon>
                            </div>
                            <div  class=" m-auto  bg-[#F8F8F8] " style="display: flex; align-items: center;border-bottom:2px solid rgb(0, 0, 0) ">
                                <input  :readonly="!editing" style="font-size:18px" class="backdrop-blur-md bg-white/30  focus:ring-0  w-full p-2 text-center  border-0" type="password" v-model="password" >
                                <v-icon
                                end
                                @click="toggleEditing"
                                :icon="editing ? 'mdi-check' : 'mdi-pencil'"
                                
                                color="red"
                                class=" text-2xl text-white  bg-[#fefefe] h-full "
                              ></v-icon>
                            </div>
                            
                        </form>
                        <button class=" p-4 mt-10 text-center bg-[#148A98] text-white w-full rounded-2xl text-xl">حفظ التغيرات</button>
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
import Knob from 'primevue/knob';


export default {
    components:{Map,Sidbar,About,Knob},
    data(){
        return{
            password:"123456",
            first_name:"محمد ",
            last_name:"عماد",
            email:"mohamed@gmail.com",
            showsider:false,
            value: 65,
            editableValue: 'Edit me!',
      editing: false,
        }
    },
    methods: {
        toggleEditing() {
      this.editing = !this.editing;
    },
        toggle(){
            this.showsider=!this.showsider
        },
        home(){
            
        }
    },
}
</script>