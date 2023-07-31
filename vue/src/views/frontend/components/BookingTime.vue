<template>
  <div class="switcher">
    <Map/>
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
            <th class="text-white w-52 text-center" v-for="( event, key) in tableEvent ">{{ key }}</th>
          </tr>


          </thead>
          <tbody>
          <tr v-if="events.events" v-for="i in  events.max">
            <td class="w-56" style="position: relative" v-if="events.max"
                v-for="j in Object.keys(events.events).length">
              <diV class="time w-full py-2">
                <p
                    class="m-auto w-full text-center hover:hidden lg:hover:block text-sm" v-if="events.events"
                >
                  {{ Object.values(tableEvent)[j - 1][i - 1]?.start_time }}
                </p>
                <button
                    style="position: absolute"
                    @click="submit(Object.values(tableEvent)[j - 1][i - 1]?.id)"
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
    <About/>
  </div>
</template>
<script>
import axios from "axios";

import Map from "../components/Map.vue";

import About from "../components/About.vue";
import Sidbar from "@/views/frontend/components/Sidbar.vue";
import Knob from "primevue/knob";
import FileUpload from "primevue/fileupload";


export default {
  data() {
    return {
      events: [],
      tableEvent: {},
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
        {title: this.$t("الخميس"), key: "calories"},
        {title: this.$t("الاربعاء"), key: "fat"},
        {title: this.$t("الثلاثاء"), key: "calories"},
        {title: this.$t("الاثنين"), key: "carbs"},
        {title: this.$t("الاحد"), key: "protein"},
        {title: this.$t("السبت"), key: "iron"},
      ],
    };
  },
  components: {Map, About},

  methods: {
    getEvents() {
      axios
          .get("/api/calender/events")
          .then((res) => {
            this.events = res.data.events;

            this.max = res.data.max;
            Object.keys(res.data.events.events).forEach((elem) => {
              if (!this.events.events.Saturday)
                this.events.events.Saturday = []
              this.tableEvent.Saturday = this.events.events.Saturday


              if (!this.events.events.Sunday)
                this.events.events.Sunday = []
              this.tableEvent.Sunday = this.events.events.Sunday


              if (!this.events.events.Monday)
                this.events.events.Monday = []
              this.tableEvent.Monday = this.events.events.Monday


              if (!this.events.events.Tuesday)
                this.events.events.Tuesday = []
              this.tableEvent.Tuesday = this.events.events.Tuesday


              if (!this.events.events.Wednesday)
                this.events.events.Wednesday = []
              this.tableEvent.Wednesday = this.events.events.Wednesday


              if (!this.events.events.Thursday)
                this.events.events.Thursday = []
              this.tableEvent.Thursday = this.events.events.Thursday


              if (!this.events.events.Friday)
                this.events.events.Friday = []
              this.tableEvent.Friday = this.events.events.Friday
            });
            console.log(this.tableEvent)


          })

          .catch((err) => {
            console.log(err);
          });
    },
    submit(id) {
      this.$router.push({name: 'more', params: {event_id: id}})
      console.log(id)
    }
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
