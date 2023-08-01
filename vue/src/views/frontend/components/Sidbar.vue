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
            <p class="text-white text-xl">الحجوزات</p>
            <svg
              class="m-auto"
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3.5 0V5M11.5 0V5M3 7.5H6M12 7.5H9M3 10.5H6M9 10.5H12M1.5 2.5H13.5C14.0523 2.5 14.5 2.94772 14.5 3.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V3.5C0.5 2.94772 0.947715 2.5 1.5 2.5Z"
                  stroke="#ffffff"
                ></path>
              </g>
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
            <p class="text-white text-xl">متابعه الطفل</p>
            <svg
              class="m-auto"
              fill="#ffffff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="26px"
              height="26px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,2-1.989 c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,30.62 c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414 s0.211,1.039,0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586 c0.781-0.781,0.781-2.048,0-2.828L24.142,49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"
                  ></path>
                </g>
              </g>
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
            <p class="text-white text-xl">نتيجه التقييم</p>
            <svg
              class="m-auto"
              width="24px"
              height="24px"
              viewBox="0 -5.5 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>

              <g id="SVGRepo_iconCarrier">
                <title>header [#ffffff]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-99.000000, -165.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M46.15,5 C47.88985,5 49.3,6.343 49.3,8 C49.3,9.657 47.88985,11 46.15,11 C44.41015,11 43,9.657 43,8 C43,6.343 44.41015,5 46.15,5 L46.15,5 Z M46.15,7 C45.57145,7 45.1,7.449 45.1,8 C45.1,8.551 45.57145,9 46.15,9 C46.72855,9 47.2,8.551 47.2,8 C47.2,7.449 46.72855,7 46.15,7 L46.15,7 Z M43,15 L64,15 L64,13 L43,13 L43,15 Z M51.4,7 L64,7 L64,5 L51.4,5 L51.4,7 Z M51.4,11 L64,11 L64,9 L51.4,9 L51.4,11 Z"
                        id="header-[#ffffff]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </router-link>
      </div>
      <div class="w-full" style="border: 1px solid"></div>
      <div class="bottom-0">
        <button
          class="w-full py-2 my-2 text-xl text-white rounded-2xl bg-[#23D1E6] hover:bg-[#0B8897]"
        >
          <router-link :to="{ name: 'Profile' }"
            >تعديل الملف الشخصي</router-link
          >
        </button>
        <button
          @click="parentStore.logout"
          class="w-full py-2 my-2 text-xl rounded-2xl bg-[#EB486D] hover:bg-[#E4234F]"
        >
          تسجيل الخروج
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
