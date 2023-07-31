<template>
  <div class="mt-6">
    <h1 class="border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4">
      {{ $t("bookings") }}
    </h1>

    <RouterLink
      :to="{ name: 'BookingDetails', params: { id: booking.id } }"
      v-for="booking in bookings"
      class="px-3 py-2 mt-2 mb-12 rounded-lg shadow-sm cursor-pointer item flex justify-between bg-gray-50"
    >
      <div class="relative">
        <p class="text-sm">12:00 12-03-2023</p>
        <button class="absolute bottom-0">
          <svg
            class="mx-auto"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="none"
                stroke="#148A98"
                stroke-width="2"
                d="M9,4 L4,9 L9,14 M18,19 L18,9 L5,9"
                transform="matrix(1 0 0 -1 0 23)"
              ></path>
            </g>
          </svg>
          <p class="text-sm text-[#148A98]">متابعة التفاصيل</p>
        </button>
      </div>
      <div class="flex flex-col text-right">
        <p class="font-bold" style="color: #00897b">
          {{ booking.child_name }}
        </p>
        <p class="text-base py-1">{{ booking.child_age }} : العمر</p>
        <p class="text-base py-1">{{ booking.requester_phone }} : رقم الهاتف</p>
        <p class="text-base py-1">{{ booking.event_date }} : موعد الاستشاره</p>
      </div>
    </RouterLink>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      bookings: [],
    };
  },
  methods: {
    getBookings() {
      axios
        .get("/api/calender/bookings")
        .then((res) => {
          this.bookings = res.data.bookings;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBookings();
  },
};
</script>
<style scoped>
.item:hover {
  background-color: #e6f8f6;
  transition: all linear 300ms;
}
</style>
