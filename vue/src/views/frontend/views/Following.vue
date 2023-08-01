<template>
  <Map />
  <div
    class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
  >
    <div
      class="col-span-1 text-right m-auto visible md:invisible"
      @click="toggle()"
    >
      <font-awesome-icon
        class="text-2xl md:text-3xl text-right p-4 text-black hover:text-red-600"
        icon="fa-solid fa-bars "
      ></font-awesome-icon>
    </div>
    <div>
      <p class="text-center m-auto col-span-2 px-2 py-4 text-xl text-[#6EB7BF]">
        الملف الشخصي
      </p>
    </div>
    <div class="text-left m-auto">
      <button class=" ">
        <router-link class="flex" to="/web">
          <p class="md:pt-4 py-2 md:text-2xl">الرئيسيه</p>
        </router-link>
      </button>
    </div>
  </div>
  <div class="relative max-w-full max-h-screen flex">
    <sidbar :sole="showsider" />
    <div class="flex-1 overflow-auto">
      <div
        class="bg-white text-2xl overflow-auto w-full text-[#6EB7BF] py-4 text-center shadow"
      >
        متابعه الطفل
      </div>
      <according
        v-for="child in childs"
        class="text-xs block"
        :name="child.name"
        :age="child.age"
      >
        <p>طفلي اصبح اكثر مهاره</p>
      </according>

      <v-row justify="center" class="mx-auto text-center">
        <v-col sm="12" md="6">
          <v-dialog transition="dialog-top-transition" width="800">
            <template v-slot:activator="{ props }">
              <v-btn color="#135c65" class="text-white" v-bind="props">
                اضافه طفل جديد</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  class="text-white"
                  color="#135c65"
                  title="  اضافه طفل جديد"
                ></v-toolbar>
                <div class="flex flex-col gap-4 p-3">
                  <div class="flex flex-col">
                    <label for="child_name" class="text-sm pl-2">{{
                      $t("child_name")
                    }}</label>
                    <input
                      type="text"
                      id="child_name"
                      v-model="child.name"
                      class="border-b focus:ring-0"
                    />
                  </div>
                  <div class="flex flex-col space-y-1">
                    <label for="child_age" class="text-sm pl-2">{{
                      $t("child_age")
                    }}</label>
                    <input
                      type="date"
                      id="child_age"
                      v-model="child.birth_date"
                      class="border-b focus:ring-0"
                    />
                  </div>
                </div>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="addChild">Submit</v-btn>
                  <v-btn variant="text" @click="isActive.value = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
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
import { parse } from "date-fns";
import axios from "axios";
import moment from "moment";
export default {
  components: { Map, According, Sidbar, About },
  data() {
    return {
      showsider: false,
      childs: [],
      parentStore: useParentStore(),
      child: {
        name: "",
        parent_id: "",
        birth_date: "",
      },
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
    addChild() {
      this.child.parent_id = this.parentStore.user.id;
      axios
        .post("/api/parent/child/create", this.child)
        .then((res) => {
          // this.childs.push(res.data.children);
          this.getChilds();
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
