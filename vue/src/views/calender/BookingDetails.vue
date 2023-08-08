<template>
  <div class="mt-6">
    <h1 class="border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4">
      {{ $t("bookings") }} / {{ booking.requester_name }}
    </h1>

    <div class="flex flex-col md:flex-row md:justify-between w-full mt-4 py-2">
      <!-- Left Side -->
      <div
        class="bg-gray-100 rounded-xl text-right pb-6 md:pb-0 px-6 mx-6 self-start"
      >
        <div
          class="border-b relative py-8 flex flex-col items-center justify-center"
        >
          <div
            class="w-full flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div
              @click="changeDoctor(booking.event_date)"
              class="cursor-pointer flex flex-row-reverse pt-4 pb-2 m-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 36 36"
              >
                <path
                  id="edit"
                  d="M0,0V36H36V12.729l-5.906,5.906V30.094H5.906V5.906H17.365L23.271,0ZM31.5,0,29.195,2.305l4.5,4.5L36,4.5ZM28.107,3.393,14.915,16.585l4.5,4.5L32.607,7.893l-4.5-4.5ZM13.258,18.67c-.067,0-.135.006-.2.011v4.263h4.263A4.507,4.507,0,0,0,15.9,19.778a3.761,3.761,0,0,0-2.641-1.107Z"
                />
              </svg>
              <p class="text-sm font-bold px-2">
                {{ doctor ? "تغيير الاخصائي" : "اختر الاخصائي" }}
              </p>
            </div>
            <div class="flex-1">
              <select name="" id="" class="w-full" v-model="doctor">
                <option v-for="new_doctor in new_doctors" :value="new_doctor">
                  {{ new_doctor.name }}
                </option>
              </select>
            </div>
          </div>

          <img
            v-if="doctor"
            v-cloak
            src="@/assets/img/doctor.jpg"
            class="object-cover rounded-xl mt-12"
            width="400"
            alt=""
            srcset=""
          />
          <p class="flex flex-col text-center py-2" v-if="doctor">
            <span style="color: #00897b; font-size: 2rem">
              {{ doctor.name }}
            </span>
            <span style="color: #00897b">{{ doctor.title }}</span>
          </p>
        </div>
        <div>
          <p class="py-2">
            <span>
              <span style="color: #00897b">{{ event_data }}</span>
              : موعد الاستشارة
            </span>
          </p>
          <div class="flex flex-col">
            <label for="notes" class="my-2"> : تقديم ملاحظة</label>
            <textarea
              name="notes"
              v-model="accept_notes"
              id="notes"
              class="border ring-1 ring-black border-black rounded-md focus:ring-black"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <p class="my-9 py-2 border-black">
            <span class="">
              <span style="color: #00897b">{{ booking.requester_name }}</span>
              : اسم مرسل الطلب
            </span>
          </p>
        </div>

        <div class="flex flex-col relative">
          <input
            @click="show_status = !show_status"
            type="button"
            class="w-full my-2 text-center py-2.5 px-4 text-white rounded-lg text-lg font-bold tracking-wider cursor-pointer"
            :class="{
              'bg-emerald-500': new_status == 1,
              'bg-red-500': new_status == 2,
              'bg-yellow-400': new_status == 0,
            }"
            :value="status_text"
          />

          <div class="flex flex-col" v-show="show_status">
            <select
              v-model="new_status"
              class="w-full my-2 text-center py-2.5 px-4 rounded-lg text-lg font-bold tracking-wider cursor-pointer"
              @change="show_status = false"
            >
              <option value="0">Pending</option>
              <option value="1">Accept</option>
              <option value="2">Cancell</option>
            </select>
          </div>
        </div>
        <!--  {{
          status_text
          }} -->
        <button
          @click.prevent="updateBooking"
          id="submit"
          class="w-full text-center py-2.5 px-4 text-white rounded-lg"
          style="background-color: #00838f"
          :disabled="doctor == null"
        >
          update
        </button>
      </div>
      <!-- End Left Side -->
      <!-- Right Side -->
      <div class="flex-1 w-2/3 text-right">
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.requester_name }}</span>
            : إسم ولي الأمر ( مقدم الطلب)
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.relative_degree }}</span>
            : درجة قرابته للطفل
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_name }}</span>
            : الاسم الرباعي للطفل
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_birth_place }}</span>
            : مكان الميلاد
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_birth_date }}</span>
            : تاريخ الميلاد
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_lang }}</span>
            : لغة الطفل الاساسية
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_nationalty }}</span>
            : الجنسية
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_national_id }}</span>
            : رقمه الوطني
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.child_address }}</span>
            : العنوان
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.requester_phone }}</span>
            : رقم هاتف ولي الأمر
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.addtional_phone }}</span>
            : رقم هاتف إضافي
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{
              booking.addtional_phone_owner
            }}</span>
            : مالك الرقم الإضافي
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{
              booking.addtional_phone_degree
            }}</span>
            : درجة قرابته للطفل
          </span>
        </p>
        <p class="border-b-2 my-9 py-2 border-black">
          <span class="">
            <span style="color: #00897b">{{ booking.conversion_type }}</span>
            : مصدر التحويل
          </span>
        </p>
        <div class="flex justify-between items-center">
          <p class="my-9 py-2 border-b" style="color: #00897b">
            <span class="">
              <span>{{ booking.doctor_code }}</span>
              : كود الاخصائي
            </span>
          </p>
          <p
            class="my-9 py-2 flex items-center cursor-pointer"
            @click="show_answer_modal = true"
          >
            <svg
              id="__TEMP__SVG__"
              xmlns="http://www.w3.org/2000/svg"
              width="18.003"
              height="15.754"
              viewBox="0 0 18.003 15.754"
              class="mx-2"
            >
              <path
                id="Path_246"
                data-name="Path 246"
                d="M26.672,10.454a1.125,1.125,0,0,0-1.593,0l-6.75,6.75a1.125,1.125,0,0,0,0,1.593l6.75,6.75a1.126,1.126,0,1,0,1.593-1.593L20.717,18l5.955-5.954a1.125,1.125,0,0,0,0-1.593Z"
                transform="translate(-17.998 -10.123)"
                fill="#135c65"
                fill-rule="evenodd"
              />
              <path
                id="Path_247"
                data-name="Path 247"
                d="M25.875,18a1.125,1.125,0,0,0-1.125-1.125H10.125a1.125,1.125,0,0,0,0,2.25H24.75A1.125,1.125,0,0,0,25.875,18Z"
                transform="translate(-7.872 -10.123)"
                fill="#135c65"
                fill-rule="evenodd"
              />
            </svg>
            <span style="color: #00897b">إجابة الاسألة</span>
          </p>
        </div>
      </div>
      <!-- End Right Side -->
    </div>
  </div>

  <div class="w-full mx-auto">
    <div class="flex justify-center">
      <div
        v-show="show_answer_modal"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="w-1/2 p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl text-center">اجابه الاسئله</h3>
            <svg
              @click="show_answer_modal = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4 text-right">
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="font-bold">
                <span
                  class="font-normal text-gray-400"
                  style="color: #00897b"
                  >{{ booking.child_gender == 1 ? "male" : "female" }}</span
                >
                : الجنس
              </span>
            </p>
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="font-bold">
                <span
                  class="font-normal text-gray-400"
                  style="color: #00897b"
                  >{{ booking.child_problem }}</span
                >
                : نرجو تحديد نوع المشكله
              </span>
              <span class="block">
                <span class="text-sm font-normal text-gray-400">{{
                  booking.child_problems_notes
                }}</span>
              </span>
            </p>
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="font-bold">
                <span
                  class="font-normal text-gray-400"
                  style="color: #00897b"
                  >{{ booking.child_aids == 1 ? "yes" : "no" }}</span
                >
                : هل يستخدم الطفل اي معينات حركيه / سمعيه/ بصريه
              </span>
              <span class="block">
                <span class="text-sm font-normal text-gray-400">{{
                  booking.child_aids_notes
                }}</span>
              </span>
            </p>
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="font-bold">
                : المشاكل الرئيسيه لدي الطفل حاليا من وجهه نظر الاهل
                <span class="block">
                  <span class="text-sm font-normal text-gray-400">{{
                    booking.child_aids_notes
                  }}</span>
                </span>
              </span>
            </p>
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="font-bold">
                : ما هي اولويه الاهل في البرامج التاهليه للتعامل مع الطفل
                <span class="block font-normal text-gray-400">{{
                  booking.parents_priorities
                }}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full mx-auto">
    <div class="flex justify-center">
      <div
        v-show="show_accept_modal"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="w-1/2 p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-end">
            <h3
              class="text-2xl text-center w-full font-bold inline-flex items-center justify-center"
              style="color: #00897b"
            >
              تم تاكيد الحجز
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 36 36"
                class="mx-2"
              >
                <path
                  id="ok-circle"
                  d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,3.911A14.088,14.088,0,1,1,3.913,18,14.089,14.089,0,0,1,18,3.911Zm6.9,5.542L14.465,19.887,11.081,16.5l-3.32,3.318,3.384,3.384,3.342,3.342,3.318-3.32L28.24,12.8,24.9,9.453Z"
                  fill="#66cb19"
                />
              </svg>
            </h3>
            <svg
              @click="show_accept_modal = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div class="mt-4 text-right">
            <p class="border-b-2 my-9 py-2 border-black">
              <span class="text-gray-500 flex items-center justify-end">
                <span
                  class="font-bold text-lg w-1/2 block"
                  style="color: #00897b"
                  >{{ booking.child_name }}</span
                >
                <label class="block w-1/2">{{
                  $t("الاسم الرباعي للطفل")
                }}</label>
              </span>
            </p>

            <p class="border-b-2 my-9 py-2 border-black">
              <span class="text-gray-500 flex items-center justify-end">
                <span
                  class="font-bold text-lg w-1/2 block"
                  style="color: #00897b"
                  >{{ event_data }}</span
                >
                <label class="block w-1/2">{{ $t("موعد الاستشاره") }}</label>
              </span>
            </p>

            <p class="border-b-2 my-9 py-2 border-black" v-if="doctor">
              <span class="text-gray-500 flex items-center justify-end">
                <span
                  class="font-bold text-lg w-1/2 block"
                  style="color: #00897b"
                  >{{ doctor.name }}</span
                >
                <label class="block w-1/2">{{ $t("اسم الاخصائي") }}</label>
              </span>
            </p>

            <p class="border-b-2 my-9 py-2 border-black">
              <span class="text-gray-500 flex items-center justify-end">
                <span
                  class="font-bold text-lg w-1/2 block"
                  style="color: #00897b"
                  >{{ accept_notes }}...</span
                >
                <label class="block w-1/2">{{ $t("ملاحظه") }}</label>
              </span>
            </p>

            <p class="border-b-2 my-9 py-2 border-black">
              <span class="text-gray-500 flex items-center justify-end">
                <span
                  class="font-bold text-lg w-1/2 block"
                  style="color: #00897b"
                  >{{ booking.requester_name }}</span
                >
                <label class="block w-1/2">{{ $t("اسم مرسل الطلب") }}</label>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  props: ["id"],
  data() {
    return {
      booking: {},
      show_status: false,
      doctor: {},
      new_status: null,
      new_doctors: [],
      accept_notes: "",
      show_answer_modal: false,
      show_accept_modal: false,
    };
  },
  methods: {
    getBooking() {
      axios
        .get(`/api/calender/bookings/${this.id}`)
        .then((res) => {
          this.booking = res.data.booking.booking;
          this.new_status = res.data.booking.booking.accepted;
          this.doctor = res.data.booking.doctor;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateBooking() {
      axios
        .post(`/api/calender/bookings/${this.id}/accept`, {
          status: this.new_status,
          accepted_notes: this.accept_notes,
          user_id: this.booking.user_id,
          event_id: this.doctor.event_id,
          doctor_name: this.doctor.name,
          doctor_title: this.doctor.title,
        })
        .then((res) => {
          this.show_accept_modal = true;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeDoctor(start) {
      axios
        .post("/api/calender/change-doctor", {
          start: start,
        })
        .then((res) => {
          this.new_doctors = res.data.doctors;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    event_data() {
      let day = moment(this.booking.event_date).format("dddd");
      let hour = moment(this.booking.event_date).format("hh:mm: A");

      return `${day} -- ${hour}`;
    },

    status_text() {
      if (this.new_status == 0) {
        return "pending";
      } else if (this.new_status == 1) {
        return "accepted";
      } else {
        return "cancelled";
      }
    },
  },
  mounted() {
    this.getBooking();
  },
};
</script>
<style scoped>
.item:hover {
  background-color: #e6f8f6;
  transition: all linear 300ms;
}

#submit:disabled {
  background-color: #5fbec7;
  color: #5fbec7;
  cursor: not-allowed;
}
[v-cloak] {
  display: none;
}
</style>
