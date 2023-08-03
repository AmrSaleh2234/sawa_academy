<template>
  <Map />
  <div
    class="flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"
  >
    <div
      class="col-span-1 text-right m-auto visible md:invisible"
      @click="toggle()"
    ></div>
    <div>
      <p
        class="text-center m-auto font-bold col-span-2 px-2 py-4 text-xl text-[#6EB7BF]"
      >
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
    <div class="flex-1">
      <div
        class="bg-white text-2xl w-full text-[#6EB7BF] py-4 text-center shadow"
      >
        متابعه الطفل
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
                    <input
                      type="date"
                      id="birth_date"
                      v-model="child.birth_date"
                      class="border-b focus:ring-0 text-center"
                    />
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
                    <h3 class="text-base font-bold text-right pl-2">الجنس</h3>
                    <label for="female" class="text-lg">FeMale</label>
                    <input
                      type="radio"
                      id="female"
                      class="border ring-1 ring-gray-600 mx-2"
                      name="female"
                      value="0"
                      v-model="child.gender"
                    />

                    <label for="male" class="text-lg">Male</label>
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
      child: {
        name: "",
        parent_id: "",
        birth_date: "",
        name: "",
        gender: "",
        lang: "",
        nationalty: "",
        national_id: "",
        birth_date: "",
        birth_place: "",
        address: "",
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
      this.errors = null;
      this.child.parent_id = this.parentStore.user.id;
      axios
        .post("/api/parent/child/create", this.child)
        .then((res) => {
          this.errors = null;
          Object.keys(this.child).forEach((key) => {
            this.child[key] = null;
          });
          this.getChilds();
          console.log(res);
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
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
