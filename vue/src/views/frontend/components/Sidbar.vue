<template>
  <div
    class="bg-[#135C65] z-10 text-cyan-100 md:w-80 w-72 h-full py-[2%] px-2 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
    :class="{ 'fixed translate-x-0 ': sole }"
  >
    <div
      v-if="parentStore.parentAuth"
      class="space-y-2 py-4 border-b-2 border-white border-solid"
    >
      <div><img class="m-auto" src="../image/Ellipse2.png" /></div>
      <p class="text-white text-center">
        {{ parentStore.user.fname }} {{ parentStore.user.lname }}
      </p>
      <p class="text-center text-white">{{ parentStore.user.email }}</p>
    </div>
    <div class="space-y-4 py-6">
      <div class=" ">
        <router-link
          class="flex rtl:flex-row-reverse justify-between p-4"
          :to="{ name: 'New' }"
        >
          <div>
            <font-awesome-icon
              class="text text-white hover:text-red-600"
              icon="fa-solid fa-circle"
            ></font-awesome-icon>
          </div>
          <div class="flex rtl:flex-row-reverse space-x-2">
            <p class="text-white text-xl">اخر المستجدات</p>
            <svg
              class="m-auto"
              width="24px"
              height="24px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M29.977 29.889h132.021v131.89H29.977zm33.749 34.092v0m30.34 0h36.211M63.726 96.06v0m30.34 0h36.211m-67.05 31.936v0m30.34 0h36.211"
                  style="
                    fill: none;
                    stroke: #fff;
                    stroke-width: 12;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 57.5;
                    paint-order: stroke markers fill;
                  "
                ></path>
              </g>
            </svg>
          </div>

        </router-link>
      </div>
      <div class=" ">
        <router-link
          class="flex rtl:flex-row-reverse justify-between p-4"
          :to="{ name: 'Booking' }"
        >
          <div>
            <font-awesome-icon
              class="text text-white hover:text-red-600"
              icon="fa-solid fa-circle"
            ></font-awesome-icon>
          </div>
          <div class="flex space-x-2 rtl:flex-row-reverse">
            <p class="text-white text-xl">{{$t("bookings")}}</p>
            <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path id="Path_215" data-name="Path 215" d="M2,19a2.946,2.946,0,0,0,3,3H19a2.946,2.946,0,0,0,3-3V11H2ZM19,4H17V3a1,1,0,0,0-2,0V4H9V3A.945.945,0,0,0,8,2,.945.945,0,0,0,7,3V4H5A2.946,2.946,0,0,0,2,7V9H22V7A2.946,2.946,0,0,0,19,4Z" transform="translate(-2 -2)" fill="#fff"/>
            </svg>
            
          </div>
        </router-link>
      </div>
      <div class=" ">
        <router-link
          class="flex rtl:flex-row-reverse justify-between p-4"
          :to="{ name: 'Following' }"
        >
          <div>
            <font-awesome-icon
              class="text text-white hover:text-red-600"
              icon="fa-solid fa-circle"
            ></font-awesome-icon>
          </div>
          <div class="flex rtl:flex-row-reverse">
            <p class="text-white text-xl px-2">{{$t("follow_the_child")}}</p>
            <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="22.609" height="20" viewBox="0 0 22.609 20">
              <path id="arrow-undo" d="M25.118,25.066a.87.87,0,0,1-.686-.334,12.265,12.265,0,0,0-3.985-3.642,13.27,13.27,0,0,0-5.765-1.23V24.2a.87.87,0,0,1-1.467.629L3.648,15.694a.87.87,0,0,1,0-1.258L13.215,5.3a.87.87,0,0,1,1.467.629V10.3c4.03.186,7.032,1.68,8.933,4.45,1.575,2.294,2.372,5.472,2.372,9.446A.87.87,0,0,1,25.118,25.066Z" transform="translate(-3.379 -5.066)" fill="#fff"/>
            </svg>
            
          </div>
        </router-link>
      </div>
      <div class=" ">
        <router-link
          class="flex rtl:flex-row-reverse justify-between p-4"
          :to="{ name: 'Edit' }"
        >
          <div>
            <font-awesome-icon
              class="text text-white hover:text-red-600"
              icon="fa-solid fa-circle"
            ></font-awesome-icon>
          </div>
          <div class="flex rtl:flex-row-reverse space-x-2">
            <p class="text-white text-xl">{{$t("evaluation_result")}}</p>
            <svg class="m-auto" id="license-solid" xmlns="http://www.w3.org/2000/svg" width="22.125" height="19.47" viewBox="0 0 22.125 19.47">
              <path id="Path_218" data-name="Path 218" d="M13.754,22.594H3.383A1.383,1.383,0,0,1,2,21.211V7.383A1.383,1.383,0,0,1,3.383,6H22.742a1.383,1.383,0,0,1,1.383,1.383v7.17A5.766,5.766,0,0,0,14.8,21.322l-.643.788Zm-8.3-12.445v1.106H17.211V10.148Zm0,3.872h7.605V12.914H5.457Zm0,4.84h6.914V17.754H5.457Z" transform="translate(-2 -6)" fill="#fff"/>
              <path id="Path_219" data-name="Path 219" d="M29.9,21.619a4.4,4.4,0,1,0-7.446,3.174l-1.341,1.639.622,2.5,2.531-3.084a4.328,4.328,0,0,0,2.454,0l2.531,3.084.622-2.5-1.341-1.639A4.384,4.384,0,0,0,29.9,21.619Zm-7.426,0a3.018,3.018,0,1,0,.007,0Z" transform="translate(-7.891 -9.457)" fill="#fff"/>
            </svg>
            
          </div>
        </router-link>
      </div>
      <div class="w-full" style="border: 1px solid"></div>
      <div class="bottom-0">
        <button
          class="w-full py-2 my-2 text-xl text-white rounded-2xl bg-[#23D1E6] hover:bg-[#0B8897]"
        >

          <router-link :to="{ name: 'Profile' }">{{$t("Modify_profile")}}</router-link>
        </button>
        <button
          @click="parentStore.logout"
          class="w-full py-2 my-2 text-xl rounded-2xl bg-[#EB486D] hover:bg-[#E4234F]"
        >
          {{ $t("sign_out") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useParentStore } from "@/stores/ParentStore.js";
export default {
  props: {
    sole: true,
  },
  data() {
    return {
      parentStore: useParentStore(),
    };
  },
};
</script>
