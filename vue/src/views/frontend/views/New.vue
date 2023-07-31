<template>

    <Map />
    <div
      class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
    >
      <div
        class="col-span-1 text-right m-auto visible md:invisible"
        @click="toggle()"
      >
        <v-toolbar-title class="">My Menu Bar</v-toolbar-title>
      </div>
      <div>
        <p
          class="w-full text-left m-auto col-span-2 px-2 py-4 text-xl text-[#6EB7BF]"
        >
          الملف الشخصي
        </p>
      </div>
      <div class="text-left m-auto">
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
      <div class="flex-1 py-9 overflow-scroll">
        <div
          class="top-0 bg-white absolute text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"
        >
          اخر المستجدات
        </div>
        <NewAcorrding date="15 مايو" v-for="notification in notifications">
          {{ notification.data.message }}
        </NewAcorrding>
      </div>
    </div>
    <About />

</template>
<script>
import Map from "../components/Map.vue";
import NewAcorrding from "../components/NewAcorrding.vue";
import Sidbar from "../components/Sidbar.vue";
import About from "../components/About.vue";
import axios from "axios";
export default {
  components: { Map, NewAcorrding, Sidbar, About },
  data() {
    return {
      showsider: false,
      notifications: [],
    };
  },
  methods: {
    toggle() {
      this.showsider = !this.showsider;
    },
    getNotifications() {
      axios
        .get("/api/parent/notification")
        .then((res) => {
          this.notifications = res.data.notifications;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNotifications();
  },
};
</script>
