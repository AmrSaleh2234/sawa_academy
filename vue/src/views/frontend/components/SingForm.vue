<template>
  <section  class="bg-gray-50 relative dark:bg-gray-900 bl bg-[url('../image/header/112.png')] bg-no-repeat bg-cover bg-center  ">
    <div style="opacity: 10%;" class="bg-black h-full w-full absolute  "></div>
    <div class=" bg-white/30 p-6 md:grid md:grid-cols-10" style="backdrop-filter: blur(1px);" >
      <div class>
        <v-btn to="/web" height="45" class="mb-5 text-lg text-white" color="#135C65" >
          <v-icon
            start
            icon="mdi-arrow-left"
          ></v-icon>
            {{$t('الرئيسيه')}}
        </v-btn>
        
      </div>
      <div
        class="flex flex-col items-center z-40 justify-center px-6 col-span-10 mx-auto lg:py-0">
        <div class="mb-4 text-center">
          <h1 class="text-3xl py-2 font-bold">انشاء حساب</h1>
          <p class="text-xl">
            يمكنك الان انشاء حساب خاص بك لدينا لمتابعه طلباتك مباشره
          </p>
        </div>
        <div v-show="parentStore.showErrors" class="my-4">
          <p v-show="!parentStore.errors" class="bg-red-200 text-red-700 px-3 py-2 rounded-lg">{{ parentStore.errorMessage }}</p>
          <div class="bg-red-200 text-red-700 px-3 py-2 rounded-lg" v-show="parentStore.errors">
            <p v-for="error in parentStore.errors" class="p-1">
              <p v-for="err in error">{{ err }}</p>
            </p>
          </div>
        </div>
        <div
        style="backdrop-filter: blur(10px); background-color: rgb(247, 243, 243); opacity: 95%;"
                  class="w-full  shadow-md  rounded-3xl z-30 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div  class="p-2 md:space-y-6 sm:p-8">

            <form  class="space-y-4 text-center rounded-2xl p-4 bg-none " @submit.prevent="massegeerror.length == 0 ? parentStore.register(parent) : null">
              <div v-for="error in massegeerror" :key="error">
                <p class="text-red-600">{{error}}</p>
              </div>
              <div class="grid grid-cols-2 gap-5">
                <div  class="flex flex-col">
                  <input
                  v-model="parent.lname"
                    style="border-bottom: 2px solid black;"
                    type="text"
                    id="child_name"
                    placeholder="اسم العائله"
                    class="min-w-full   bg-white/10  focus:ring-0 text-center"
                  />
                </div>
                <div class="flex flex-col">
                  <input
                  v-model="parent.fname"
                    style="border-bottom: 2px solid black;"
                    type="text"
                    id="child_name"
                    placeholder=" الاسم الاول"
                    class="min-w-full   bg-white/10  focus:ring-0 text-center"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <input
                v-model="parent.phone"
                  style="border-bottom: 2px solid black;"
                  type="text"
                  id="child_name"
                  placeholder="رقم الموبيل"
                  class="min-w-full   bg-white/10  focus:ring-0 text-center"
                />
              </div>
              <div class="flex flex-col">
                <input
                v-model="parent.email"
                  style="border-bottom: 2px solid black;"
                  type="text"
                  id="child_name"
                  placeholder="الايميل الالكتروني"
                  class="min-w-full   bg-white/10  focus:ring-0 text-center"
                />
              </div>
              <div class="flex flex-col">
                <input
                v-model="parent.password"
                  style="border-bottom: 2px solid black;"
                  type="password"
                  id="child_name"
                  placeholder="كلمه السر"
                  class="min-w-full   bg-white/10  focus:ring-0 text-center"
                />
              </div>
              <div class="flex flex-col">
                <input
                  style="border-bottom: 2px solid black;"
                v-model="parent.password_confirmation"
                  type="password"
                  id="child_name"
                  placeholder=" تاكيد كلمه السر"
                  class="min-w-full  bg-white/10  focus:ring-0 text-center"
                />
              </div>
              
              <button type="submit" @click="vaild()" class="mb-5 rounded-xl w-full p-2 text-lg text-white bg-[#23D1E6]">{{$t('انشاء حساب')}}</button>
              <p>
                اذا كنت تمتلك حساب اضغط هنا
                <router-link
                  :to="{ name: 'parentLogin' }"
                  class="px-2 text-[#649297]"
                  >تسجيل الدخول</router-link  
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {useParentStore} from "../../../stores/ParentStore"
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';

export default {
  components:{Button,InputText,InlineMessage},
  data() {
    return {
      alert:{},
      alert_text:null,
      alert:{},
      massegeerror:[],
      parentStore:useParentStore(),
      parent: {
        fname: null,
        lname: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null
      },
    };
  },
  methods: {
    
    // register() {
    //   axios
    //     .post("api/parent/register", this.parent)
    //     .then((res) => {
    //       if(res.data.status == 201)
    //     {
         
    //       this.alert_text="children added successfully "
    //     }
        
    //     })
    //     .catch((err) => {
    //       this.alert.show = true;
    //       this.alert.message = err.response.data.message;
    //       this.alert.errors = err.response.data.errors;
    //       console.log(err);
    //       console.log(err);
    //     });
    // },
    // vaild(e){
    //   this.massegeerror=[]
    //   if(!this.parent.fname){
    //     this.massegeerror.push("ادخل اسم الاول")
    //   }
    //   if(!this.parent.lname){
    //     this.massegeerror.push("ادخل اسم العائله")
    //   }
    //   if(!this.parent.phone){
    //     this.massegeerror.push("ادخل رقم الموبيل")
    //   }
    //   if(!this.parent.password){
    //     this.massegeerror.push("ادخل كلمه المرور")
    //   }
    //   if(!this.parent.password_confirmation){
    //     this.massegeerror.push("تاكيد كلمه المرور")
    //   }
    //   e.preventDefault();
  // },
}
}
</script>
