<template>
  <section
    style=""
    class="bg-gray-50 dark:bg-gray-900 bl bg-[url('../image/header/112.png')] bg-no-repeat bg-cover backdrop-blur-sm bg-white/30"
  >
    <div class="backdrop-blur-sm bg-white/30 p-6 md:grid md:grid-cols-12">
      <div class="">
        <v-btn height="45" class="mb-5 text-lg text-white" color="#135C65" @click="home">
          <v-icon
            start
            icon="mdi-arrow-left"
          ></v-icon>
            {{$t('الرئيسيه')}}
        </v-btn>
      </div>
      <div
        class="flex flex-col items-center justify-between px-6 md:h-screen mx-auto md:col-span-10 lg:py-0"
      >
        <div class="text-center m-2">
          <h1 class="text-3xl py-5 font-bold">تسجيل الدخول</h1>
          <p class="text-xl">
            يمكنك الان تسجيل الدخول للحساب خاص بك لدينا لمتابعه طلباتك مباشره
          </p>
        </div>
        <div
          class="mb-24 backdrop-blur-xl bg-white/30 rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-2 md:space-y-6 sm:p-8">
            <form
              class="space-y-6 text-center rounded-2xl p-4 bg-none"
              action="#"
            >
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 text-center border-0 border-b-2 border-black border-solid"
                  type="email"
                  name="email"
                  placeholder=" الايميل الالكتروني"
                />
              </div>
              <div>
                <input
                  class="backdrop-blur-md bg-white/30 px-16 p-2 m-2 text-center border-0 border-b-2 border-black border-solid"
                  type="password"
                  name="email"
                  placeholder="كلمه السر"
                />
              </div>

              <button class="w-[90%] p-2 lg:m-0 rounded-3xl bg-[#23D1E6]">
                انشاء حساب
              </button>
              <p>
                اذا كنت تمتلك حساب اضغط هنا
                <router-link to="/SingUp" class="px-2 text-[#649297]">
                  انشاء حساب</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

