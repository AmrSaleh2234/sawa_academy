<template>
  <div class="">
    <div
      class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
    >
      <div class="text-right m-auto visible md:invisible" @click="toggle()">
        <font-awesome-icon
          class="text-2xl md:text-3xl text-right p-4 text-black hover:text-red-600"
          icon="fa-solid fa-bars "
        ></font-awesome-icon>
      </div>
      <div>
        <p
          class="text-center m-auto col-span-2 px-2 py-4 text-xl font-bold text-[#6EB7BF]"
        >
          الملف الشخصي
        </p>
      </div>
      <div class="text-right m-auto">
        <button class=" ">
          <router-link class="flex" to="/web">
            <p class="md:pt-4 py-2 md:text-2xl">الرئيسيه</p>
            <font-awesome-icon
              class="bg-[#135C65] rounded-[50%] m-2 md:p-4 p-2"
              icon="fa-solid fa-arrow-left"
            />
          </router-link>
        </button>
      </div>
    </div>
    <div class="relative overflow-clip max-w-full max-h-screen flex">
      <sidbar :sole="showsider" />
      <div class="flex-1 overflow-scroll">
        <div class="bg-white text-2xl w-full text-[#6EB7BF] p-6 text-right">
          الحجوزات
        </div>
        <div class="p-2 grid gap-5 grid-cols-2 md:grid-cols-3 text-cyan-700">
          <a
            v-for="booking in bookings"
            class="flex m-auto flex-wrap items-center bg-white border-gray-200 rounded-xl shadow-md md:flex-row max-w-sm hover:bg-gray-100"
          >
            <img
              class="object-cover w-full md:w-auto md:h-auto rounded-xl"
              src="../image/Rectangle63.png"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p class="p-2 w-full text-center text-lg text-[#148A98]">
                {{ booking.user_name }}
              </p>
              <p
                class="p-2 w-full text-center border-b text-sm border-black border-solid text-[#148A98]"
              >
                {{ booking.user_title }}
              </p>
              <p class="p-2 text-[#FF3765]">
                {{ event_day(booking.event_date) }}
              </p>
              <p class="px-2 pb-2 text-[#FF3765]">
                {{ event_hour(booking.event_date) }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "../components/Map.vue";
import According from "../components/According.vue";
import Sidbar from "../components/Sidbar.vue";
import axios from "axios";
import moment from "moment";

export default {
  components: { Map, According, Sidbar },
  data() {
    return {
      showsider: false,
      bookings: [],
    };
  },
  methods: {
    toggle() {
      this.showsider = !this.showsider;
    },
    getAppointments() {
      axios
        .get("/api/calender/appointments")
        .then((res) => {
          this.bookings = res.data.bookings;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    event_day(event_day) {
      let day = moment(event_day).format("dddd");
      return `${day}`;
    },
    event_hour(event_hour) {
      let hour = moment(event_hour).format("hh:mm: A");
      return `${hour}`;
    },
  },
  mounted() {
    this.getAppointments();
  },
  computed: {},
};
</script>
