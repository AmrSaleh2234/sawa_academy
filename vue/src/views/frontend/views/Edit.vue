<template>
  <Map />
  <div class="flex justify-between p-2">
    <div
      class="col-span-1 text-right m-auto visible md:invisible"
      @click="toggle()"
    ></div>

    <div class="m-auto">
      <v-btn
        height="35"
        to="/web"
        class="text-lg m-auto text-white"
        color="#135C65"
      >
        <router-link :to="{ name: 'home' }">
          <v-icon start icon="mdi-arrow-left"></v-icon>
          {{ $t("home") }}
        </router-link>
      </v-btn>
    </div>
  </div>
  <div class="relative max-w-full max-h-screen flex">
    <sidbar :sole="showsider" />
    <div class="flex-1">
      <div
        class="col-span-1 text-right m-auto visible md:invisible"
        @click="toggle()"
      ></div>
        <div class="m-auto w-full">
      <p class="w-full font-bold text-center text-2xl text-[#6EB7BF]">{{$t("Profile_personly")}}</p>
    </div>
     
     
    </div>
    <div class="relative overflow-clip max-w-full max-h-screen flex">
      <sidbar :sole="showsider" />
      <div class="flex-1 overflow-scroll">
        <div
          class="top-0 bg-white absolute text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"
        >
        {{ $t("evaluation_result") }}
      </div>
        <according class="text-xs block" name="محمد عماد محمد الشيخ" age="15">
          <p>  {{ $t("My_child_is_getting_more_skilled") }} </p>
          <p class="text-[#FF3765]">
          {{ $t("Important_alert") }}
          </p>
        </according>
        
        
        

      </div>
    </div>
  </div>
  <About />
</template>
<script>
import Map from "../components/Map.vue";
import According from "../components/According.vue";
import Sidbar from "../components/Sidbar.vue";
import About from "../components/About.vue";
import { useParentStore } from "../../../stores/ParentStore";
import axios from "axios";
export default {
  components: { Map, According, Sidbar, About },
  data() {
    return {
      showsider: false,
      childs: [],
      parentStore: useParentStore(),
      errors: [],
    };
  },
  methods: {
    toggle() {
      this.showsider = !this.showsider;
    },
    async getChilds() {
      await axios
        .get("/api/parent/child/all")
        .then((res) => {
          this.childs = res.data.childs;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // async getLatestReport(id) {
    //   this.report_date = null;
    //   this.report_text = null;
    //   await axios
    //     .post("/api/calender/booking/child/report", {
    //       child_id: id,
    //     })
    //     .then((res) => {
    //       this.report_text = res.data.report.booking_result;
    //       this.report_date = res.data.report.report_date;
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },

  mounted() {
    this.getChilds();
  },
};
</script>
