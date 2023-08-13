<template>
  <div
    style="
      background: linear-gradient(to right, #ff8b6a, #ff566f);
      padding-bottom: 2%;
      padding-top: 2%;
    "
    class="p-6 bg-center bg-cover m-auto relative"
  >
    <img
      src="../image/sec1/m.png"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!--        -->
    <div style="padding-bottom: 2%" class="text-center">
      <h1 class="text-4xl font-bold text-white tracking-wide">
        {{ $t("Sawa_Academy_team") }}
      </h1>
      <p class="text-2xl text-white tracking-wide pt-4">
        {{ $t("We_have_a_group_of_highly_experienced_therapists") }}
      </p>
    </div>
    <div class="m-auto">
      <div class="m-auto">
        <carousel
          class="bg-none w-full"
          v-bind="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="image in 5" class="w-full widths">
            <div v-for="doctor in doctors" class="w-[80%]">
              <div class="text-center bg-teal-100 rounded-3xl m-2">
                <!-- Doctor -->
                <div class="bg-white rounded-3xl">
                  <img class="m-auto px-5" :src="doctor.image" />
                </div>
                <p class="text-center pt-2 opacity-80">{{ doctor.name }}</p>
                <p class="text-center text-teal-400 pb-4 p-1">
                  {{ doctor.title }}
                </p>
                <!-- Doctor -->
              </div>
            </div>
          </slide>
          <!--                -->
          <template #addons>
            <!--                        -->
            <pagination class="[&>div]:bg-[red]" />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useWindowSize } from "@vueuse/core";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const perPage = ref(1);

    onMounted(() => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        perPage.value = 3;
      } else if (window.innerWidth >= 1024) {
        perPage.value = 5;
      } else {
        perPage.value = 1;
      }
      getDoctors();
    });

    onBeforeUnmount(() => {
      // Cleanup if necessary
    });

    const doctors = ref([]);

    const getDoctors = () => {
      axios
        .get("/api/doctors")
        .then((res) => {
          doctors.value = res.data.doctors;
          console.log(doctors.value);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      perPage,
      doctors,
    };
  },
};
</script>
