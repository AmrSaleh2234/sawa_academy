
<template>
  <div class="m-auto grid grid-row-3 md:grid-cols-3 gap-3 py-[3%]">
    <div class="animate relative w-full ">
      <v-card class="mx-auto w-full rounded-xl" max-width="65%">
        <div class="animate__animated animate__bounceInLeft">
          <div class="animte right-0 absolute m-auto h-full w-[50%] bg-white">
            <div class="inner p-[10%] m-auto h-full w-full text-[#A5E9FF]">
              <p class="w-full h-full m-auto text-center">
                اكاديمه سوا للتربيه
              </p>
            </div>
          </div>
          <img class="imge" src="../image/sec1/1.png" />
        </div>

        <v-card-actions class="ssc">
          <router-link
            :to="{ name: 'Edit' }"
            class="text-lg lg:text-xl p-2 text-[#135C65] z-10"
          >
            {{ $t("evaluation_result") }}
          </router-link>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-arrow-left"
            size="small"
            color="#135C65"
            style="border: 2px solid #135c65"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="animate relative">
      <v-card class="mx-auto rounded-xl" max-width="65%">
        <div class="">
          <div class="animte right-0 absolute m-auto h-full w-[50%] bg-white">
            <div class="inner p-[10%] m-auto h-full w-full text-[#A5E9FF]">
              <p class="w-full h-[50%] pt-[20%] text-center">
                اكاديمه سوا للتربيه
              </p>
            </div>
          </div>
          <img class="imge" src="../image/header/2.png" />
        </div>

        <v-card-actions>
          <router-link
            :to="{ name: 'BookingTime' }"
            class="text-lg lg:text-xl p-2 text-[#135C65] z-10"
          >
            {{ $t("Book_an_appointment") }}
          </router-link>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-arrow-left"
            size="small"
            color="#135C65"
            style="border: 2px solid #135c65"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="animate relative">
      <v-card class="mx-auto rounded-xl" max-width="65%">
        <div class="w-full">
          <div class="animte right-0 absolute m-auto h-full w-[50%] bg-white">
            <div class="inner p-[10%] m-auto h-full w-full text-[#A5E9FF]">
              <p class="w-full h-full text-center">اكاديمه سوا للتربيه</p>
            </div>
          </div>
          <img class="imge w-full" src="../image/header/3.png" />
        </div>

        <v-card-actions>
          <router-link
            :to="{ name: 'ReAction' }"
            class="lg:text-xl text-lg p-2 text-[#135C65] z-10"
          >
            {{ $t("Register_your_child") }}
          </router-link>
          <v-spacer></v-spacer>
          <v-btn
            icon="mdi-arrow-left"
            size="small"
            color="#135C65"
            style="border: 2px solid #135c65"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.animte {
  transform: translateX(100%);
  transition: 0.8s;
}
.animate:hover .animte {
  transform: translateX(0%);
}
.animate:hover .imge {
  transform: translateX(-50%);
  transition: 0.8s;
}
</style>
