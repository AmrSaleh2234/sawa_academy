<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 bl bg-[url('../image/header/112.png')] bg-no-repeat bg-cover backdrop-blur-sm bg-white/30"
  >
    <div class="backdrop-blur-sm bg-white/30 p-6 md:grid md:grid-cols-12">
      <div class>
        <button class="py-12">
          <router-link class="flex" to="/">
            <p class="pt-4 text-2xl">الرئيسيه</p>
            <font-awesome-icon
              class="bg-[#135C65] rounded-[50%] m-2 p-4"
              icon="fa-solid fa-arrow-left"
            />
          </router-link>
        </button>
      </div>
      <div
        class="flex flex-col items-center justify-center px-6 col-span-10 mx-auto lg:py-0"
      >
        <div class="mb-4 text-center">
          <h1 class="text-3xl py-2 font-bold">انشاء حساب</h1>
          <p class="text-xl">
            يمكنك الان انشاء حساب خاص بك لدينا لمتابعه طلباتك مباشره
          </p>
        </div>
        <div
          class="w-full backdrop-blur-xl bg-white/30 rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-2 md:space-y-6 sm:p-8">
            <form
              class="space-y-6 text-center rounded-2xl p-4 bg-none"
              @submit.prevent="register"
            >
              <div class="grid grid-cols-2">
                <input
                  class="backdrop-blur-md bg-white/30 text-center border-b-2 border-black border-solid border-0 mx-4 p-2"
                  type="text"
                  placeholder=" الاسم العائله"
                  v-model="parent.lname"
                />
                <input
                  class="backdrop-blur-md bg-white/30 text-center border-b-2 border-black border-solid border-0 mx-4 p-2"
                  type="text"
                  placeholder=" الاسم الاول"
                  v-model="parent.fname"
                />
              </div>
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 m-2 text-center border-0 border-b-2 border-black border-solid"
                  type="text"
                  name="email"
                  placeholder="رقم الموبيل"
                  v-model="parent.phone"
                />
              </div>
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 text-center border-0 border-b-2 border-black border-solid"
                  type="email"
                  name="email"
                  placeholder=" الايميل الالكتروني"
                  v-model="parent.email"
                />
              </div>
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 m-2 text-center border-0 border-b-2 border-black border-solid"
                  type="text"
                  name="email"
                  placeholder="كلمه السر"
                  v-model="parent.password"
                />
              </div>
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 text-center border-0 border-b-2 border-black border-solid"
                  type="password"
                  name="email"
                  placeholder=" تاكيد كلمه السر"
                  v-model="parent.password_confirmation"
                />
              </div>
              <button class="w-[90%] p-2 lg:m-0 rounded-3xl bg-[#23D1E6]">
                انشاء حساب
              </button>
              <p>
                اذا كنت تمتلك حساب اضغط هنا
                <router-link to="/Login" class="px-2 text-[#649297]"
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

export default {
  data() {
    return {
      parent: {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    register() {
      axios
        .post("api/parent/register", this.parent)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
