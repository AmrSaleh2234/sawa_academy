<template>
  <Map />
  <div class="w-full p-2 " style="border-bottom: 1px solid black;">
    <div
      class="col-span-1 w-full text-center m-auto visible md:invisible"
      @click="toggle()"
    ></div>
    <div>
      <div class="m-auto">
        <p class="ont text-center font-bold text-2xl text-[#6EB7BF]">
          {{ $t("Profile_personly") }}
        </p>
      </div>
    </div>

  </div>
  <div class="relative max-w-full max-h-screen flex">
    <sidbar :sole="showsider" />
    <div class="flex-1">
<<<<<<< Updated upstream
=======

     <div class="flex w-full justify-between shadow">
>>>>>>> Stashed changes
      <div
        class="bg-white text-2xl px-4 font-bold text-[#6EB7BF] py-4  shadow"
      >
        {{ $t("Child_follow_up") }}
      </div>
      <div class="text-center my-4">
        <router-link
          :to="{ name: 'ReAction' }"
          style="background-color: #135c65"
          class="text-white text-xl p-2  rounded-lg"
        >
          {{ $t("Add_new_child") }} 
        </router-link>
      </div>
     </div>
     
      <div class="overflow-auto" style="height: 70vh">
        <according
          v-for="child in childs"
          class="text-xs block"
          :name="child.name"
          :id="child.id"
          :age="child.age"
          :report_date="child.report_date"
          :report_text="child.report_text"
        >
          <p> {{ $t("My_child_is_getting_more_skilled") }}  </p>

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
