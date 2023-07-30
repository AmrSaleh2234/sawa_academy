<template>
  <section
    class=" dark:bg-gray-900 bl bg-[url('../image/header/112.png')] bg-no-repeat bg-cover bg-center backdrop-blur-sm bg-white/40"
  >
  <div style="opacity: 10%;" class="bg-black h-full w-full absolute  "></div>
    <div class="h-full p-6 md:grid md:grid-cols-12" style="backdrop-filter: blur(2px);" >
      <div class="">
        <v-btn
          to="/web"
          height="45"
          class="mb-5 text-lg m-auto text-white"
          color="#135C65"
          @click="home"
        >
          <v-icon start icon="mdi-arrow-left"></v-icon>
          {{ $t("الرئيسيه") }}
        </v-btn>
      </div>
      <div
        class="flex flex-col items-center justify-between px-6  mx-auto md:col-span-10 lg:py-0"
      >
        <div class="text-center m-2">
          <h1 class="text-3xl py-5 font-bold">تسجيل الدخول</h1>
          <p class="text-xl">
            يمكنك الان تسجيل الدخول للحساب خاص بك لدينا لمتابعه طلباتك مباشره
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
        <form @submit.prevent="massegeerror.length == 0 ? parentStore.login(parent) : null"
        style="backdrop-filter: blur(10px); background-color: rgb(247, 243, 243); opacity: 95%;margin-top: 12%;margin-bottom: 12%;"
          class=" space-y-4 rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
        <div v-for="error in massegeerror" :key="error" class="text-center my-2 py-2">
                <p class="text-red-600">{{error}}</p>
              </div>
          <div class="p-2 md:space-y-4 sm:p-8">
            <div class="space-y-6 text-center rounded-2xl p-4 bg-none">
              <div class="flex flex-col">
                <input
                  style="border-bottom: 2px solid black;"
                  v-model="parent.email"
                  type="email"
                  id="child_name"
                  placeholder=" الايميل الالكتروني"
                  class="min-w-full   bg-white/10  focus:ring-0 text-center"
                />
              </div>
              <div class="flex flex-col">
                <input
                  style="border-bottom: 2px solid black;"
                  v-model="parent.password"
                  type="password"
                  id="child_name"
                  placeholder="كلمه السر"
                  class="min-w-full   bg-white/10  focus:ring-0 text-center"
                />
              </div>
              
              <button
                class="w-[90%] p-2 lg:m-0 rounded-3xl bg-[#23D1E6]"
                @click="vaild"
                type="submit"
              >
                تسجيل دخول
              </button>
              <p>
                اذا كنت تمتلك حساب اضغط هنا
                <router-link :to="{name:'SingUp'}" class="px-2 text-[#649297]">
                  انشاء حساب</router-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  </section>
</template>
<script>
 import { useParentStore } from "../../../stores/ParentStore";

export default {
  props: ["alert"],
  data() {
    return {
      parentStore: useParentStore(),
      parent: {
        email: "",
        password: "",
      },
      massegeerror:[]
    };
  },
  methods: {
    vaild(e){
        this.massegeerror=[]
        if(!this.parent.email){
          this.massegeerror.push("ادخل رقم الموبيل")
        }
        if(!this.parent.password){
          this.massegeerror.push("ادخل كلمه المرور")
        }
    },
  }
}
</script>
