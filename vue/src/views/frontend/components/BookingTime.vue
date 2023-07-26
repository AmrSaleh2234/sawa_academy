<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 bl bg-no-repeat bg-cover backdrop-blur-sm bg-white/30"
  >
    <div class="backdrop-blur-sm bg-white/30 p-6 md:grid md:grid-cols-12">
      <div class>
        <v-btn
          height="45"
          to="/"
          class="mb-5 text-lg text-white"
          color="#135C65"
          @click="home"
        >
          <v-icon start icon="mdi-arrow-left"></v-icon>
          {{ $t("الرئيسيه") }}
        </v-btn>
      </div>
      <div
        class="flex flex-col items-center justify-center px-6 col-span-10 mx-auto lg:py-0"
      >
        <div class="mb-4 text-center">
          <h1 class="text-3xl py-2 font-bold text-[#FF2A5B] pb-3">
            احجز موعد لابنك
          </h1>
          <p class="text-xl text-[#6D9AA0]">استشارة الاطباء لحاله طفلك</p>
          <p class="text-xl text-[#6D9AA0]">
            والتواصل بشكل صحصيح لاعطائك التشخيص المناسب
          </p>
        </div>
      </div>
    </div>
    <div class="px-[5%] py-[1%] text-right">
      <p class="pb-4 text-2xl font-bold">احجز موعد مع الاخصائي</p>
      <p class="text-[#3AD0FF]">
        يمكنك اختيار الوقت المناسب الذي تريده وحجز استشاره مع اخصائي الاكاديمية
      </p>
    </div>
    <div class="p-[5%]">
      <v-table class="border-2 border-[#967a80]">
        <thead>
          <tr class="bg-[#135C65] border-b-2 border-[#474042]">
            <th class="text-white w-52 text-center">الجمعه,</th>
            <th class="text-white text-center">الخميس</th>
            <th class="text-white text-center">الاربعاء</th>
            <th class="text-white text-center">الثلاثاء</th>
            <th class="text-white text-center">الاثنين</th>
            <th class="text-white text-center">الاحد</th>
            <th class="text-white text-center">السبت</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="w-56" style="position: relative">
              <diV class="time w-full py-2">
                <p
                  class="m-auto w-full text-center hover:hidden lg:hover:block text-sm"
                >
                  12:00 م
                </p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-56" style="position: relative">
              <diV class="time w-full py-2">
                <p
                  class="m-auto w-full text-center hover:hidden lg:hover:block text-sm"
                >
                  12:00 م
                </p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-56" style="position: relative">
              <diV class="time w-full py-2">
                <p
                  class="m-auto w-full text-center hover:hidden lg:hover:block text-sm"
                >
                  12:00 م
                </p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-56" style="position: relative">
              <diV class="time w-full py-2">
                <p
                  class="m-auto w-full text-center hover:hidden lg:hover:block text-sm"
                >
                  12:00 م
                </p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
          </tr>
          <tr>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
          </tr>
          <tr>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
          </tr>
          <tr>
            <td class="w-52 rounded-full" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
            <td class="w-52" style="position: relative">
              <diV class="time w-full py-2">
                <p class="m-auto w-full text-center text-sm">12:00 م</p>
                <button
                  style="position: absolute"
                  class="top-[35%] left-0 text-xs"
                >
                  احجز الان
                </button>
              </diV>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </section>
  >>>>>>> 079b708bccac34a587b92a54930d8179c8347e9e
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      events: [],
      max: 0,
      itemsPerPage: 5,
      desserts: [1, 2, 3],
      headers: [
        {
          title: "الجمعه",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: this.$t("الخميس"), key: "calories" },
        { title: this.$t("الاربعاء"), key: "fat" },
        { title: this.$t("الثلاثاء"), key: "calories" },
        { title: this.$t("الاثنين"), key: "carbs" },
        { title: this.$t("الاحد"), key: "protein" },
        { title: this.$t("السبت"), key: "iron" },
      ],
    };
  },

  methods: {
    getEvents() {
      axios
        .get("/api/calender/events")
        .then((res) => {
          this.events = res.data.events;
          this.max = res.data.max;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getEvents();
  },
};
</script>
<style scoped>
td {
  overflow: hidden;
}
.time {
  border: 1px solid rgb(149, 133, 133);
  border-radius: 30%;
}
td button {
  color: red;
  transform: translateX(-100%);
  transition: all linear 200ms;
}
td:hover button {
  transform: translateX(50%);
}
</style>
