<template>
  <Map />
  <div class="flex justify-between p-2">
    <div
      class="col-span-1 text-right m-auto visible md:invisible"
      @click="toggle()"
    ></div>
    <div>
      <div class="m-auto">
        <p class="ont text-center font-bold text-2xl text-[#6EB7BF]">{{$t("Profile_personly")}}</p>
      </div>
    </div>
    <div class="m-auto">
      <v-btn
        height="35"
        to="/web"
        class=" text-lg m-auto text-white"
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
        class="bg-white text-2xl w-full text-[#6EB7BF] py-4 text-center shadow"
      >
      {{ $t("Child_follow_up") }}
      </div>

      <div class="overflow-auto" style="height: 70vh">
        <according
          @getLatestReport="getLatestReport"
          v-for="child in childs"
          class="text-xs block"
          :name="child.name"
          :age="child.age"
        >
          <p>طفلي اصبح اكثر مهاره</p>
        </according>
      </div>
      <div class="w-full mx-auto text-center my-2">
        <router-link
          :to="{ name: 'ReAction' }"
          style="background-color: #135c65"
          class="text-white py-2 px-3 rounded-lg"
        >
          اضافه طفل جديد
        </router-link>
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
      report: "",
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

    async getLatestReport() {
      await axios
        .get("/api/parent/child/report")
        .then((res) => {
          this.report = res.data.report;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getChilds();
  },
};
</script>
