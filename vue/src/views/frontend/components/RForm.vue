<template>
  <div>
    <div class="flex justify-between">
      <div style="width: 25%" class="m-auto">
        <img class="h-56 m-auto" src="../image/header/registernobg-01.png" />
      </div>
      <div class="m-auto text-center w-[50%] space-y-2">
        <h1 class="text-3xl font-bold text-[#FF2A5B]">
          {{ $t("Register_your_child") }}
        </h1>
        <h2 class="text-[#6D9AA0] text-lg">
          {{
            $t("From_here_you_can_register_your_child_with_us_to_be_monitored")
          }}
        </h2>
        <h3 class="text-[#6D9AA0] text-lg">
          {{
            $t("The_extent_to_which_his_mental_and_physical_skill_developed")
          }}
        </h3>
      </div>

      <div style="width: 25%" class="relative my-auto">
        <v-icon
          @click="goback"
          style="right: 50%"
          class="bg-[#135C65] text-white p-6 absolute rounded-full"
          start
          icon="mdi-arrow-left"
        ></v-icon>
      </div>
    </div>
    <div
      style="margin-bottom: 2%"
      class="m-auto w-[95%] lg:w-[45%] shadow-xl p-[2%] rounded-xl"
    >
      <form class="space-y-6 p-[5%]">
        <div class="flex flex-col gap-4 p-3">
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("الاسم الرباعي للطفل  ")
            }}</label>
            <input
              type="text"
              id="name"
              v-model="child.name"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['name']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("تاريخ الميلاد")
            }}</label>
            <div class="flex justify-center items-center" id="calender">
              <Calendar
                style="width: 100%; padding: "
                showButtonBar
                v-model="child.birth_date"
                dateFormat="dd/mm/yy"
                :placeholder="$t('date_of_birth')"
              />
            </div>
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['birth_date']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("مكان الميلاد  ")
            }}</label>
            <input
              type="text"
              id="birth_place"
              v-model="child.birth_place"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['birth_place']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>

          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("لغة الطفل الاساسيه  ")
            }}</label>
            <input
              type="text"
              id="lang"
              v-model="child.lang"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['lang']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("الجنسيه")
            }}</label>
            <input
              type="text"
              id="nationalty"
              v-model="child.nationalty"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['nationalty']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("الرقم الوطني")
            }}</label>
            <input
              type="text"
              id="national_id"
              v-model="child.national_id"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['national_id']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div
            class="flex flex-col"
            style="border-bottom: 2px solid rgb(194, 188, 188)"
          >
            <label class="text-base font-bold text-right pl-2">{{
              $t("العنوان")
            }}</label>
            <input
              type="text"
              id="address"
              v-model="child.address"
              class="border-b focus:ring-0 text-center"
            />
          </div>
          <div
            v-if="errors != null"
            class="text-red-600 font-semibold text-sm rounded-md"
          >
            <p v-for="error in errors['address']">
              <span v-for="err in error">{{ err }} </span>
            </p>
          </div>
          <div class="w-full text-right">
            <h3 class="text-base font-bold text-right pl-2 pb-2">الجنس</h3>
            <label for="female" class="text-lg font-bold mt-4">FeMale</label>
            <input
              type="radio"
              id="female"
              class="border ring-1 ring-gray-600 mx-2"
              name="female"
              value="0"
              v-model="child.gender"
            />

            <label for="male" class="text-lg font-bold mt-4">Male</label>
            <input
              type="radio"
              class="border ring-1 ring-gray-600 mx-2"
              id="male"
              name="male"
              value="1"
              v-model="child.gender"
            />
          </div>
        </div>
        <button
          style="padding: 2%"
          class="w-full rounded-3xl bg-[#148A98] text-white text-xl"
          @click.prevent="addChild"
        >
          {{ $t("Register_now") }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import { useParentStore } from "../../../stores/ParentStore";
export default {
  components: { Calendar, Textarea },
  data() {
    return {
      parentStore: useParentStore(),
      errors: [],
      child: {
        parent_id: "",
        name: "",
        birth_date: "",
        birth_place: "",
        lang: "",
        gender: "",
        nationalty: "",
        national_id: "",
        address: "",
      },
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    addChild() {
      this.errors = null;
      this.child.parent_id = this.parentStore.user.id;
      this.child.birth_date = moment(this.child.birth_date).format(
        "YYYY-MM-DD"
      );
      axios
        .post("/api/parent/child/create", this.child)
        .then((res) => {
          this.errors = null;
          Object.keys(this.child).forEach((key) => {
            this.child[key] = null;
          });
          this.$router.push({ name: "Following" });
          console.log(res);
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          console.log(err);
        });
    },
  },
};
</script>
<style>
/* Target the placeholder pseudo-element and set opacity */
input::placeholder {
  opacity: 0.5;
}

#calender input {
  border: none;
  border-bottom: 2px solid #818080;
  text-align: center;
  font-family: "Cairo", sans-serif;
  font-size: 20px;
}
input::placeholder {
  opacity: 50%;
  color: black;
}
</style>
