
<template>
  <div>
    <div class="flex justify-between">
      <div style="width: 25%;" class="m-auto ">
        <img class="h-56 m-auto" src="../image/header/registernobg-01.png" />
      </div>
      <div class="m-auto text-center w-[50%] space-y-2 ">
        <h1 class="text-3xl font-bold text-[#FF2A5B]">{{$t("Register_your_child")}}</h1>
        <h2 class="text-[#6D9AA0] text-lg">{{$t("From_here_you_can_register_your_child_with_us_to_be_monitored")}}</h2>
        <h3 class="text-[#6D9AA0] text-lg">{{ $t("The_extent_to_which_his_mental_and_physical_skill_developed") }} </h3>
        
      </div>
     
      <div style="width: 25%; ;" class="relative my-auto ">
        <v-icon
        @click="goback"
          style="right: 50%;"
          class="bg-[#135C65]  text-white p-6 absolute rounded-full "
          start
          icon="mdi-arrow-left"
        ></v-icon>
      </div>
    </div>
    <div style="margin-bottom: 2%;" class=" m-auto w-[95%] lg:w-[45%] shadow-xl p-[2%] rounded-xl">
      <form class="space-y-6 p-[5%]">
        <div>
          <input  style="border-bottom: 2px solid #9B9B9B; padding: 1.5%;" type="text"  class="text-center w-full text-lg focus:ring-0 placeholder-[black] " :placeholder="$t('Full_Name')">
        </div>
        <div class="flex justify-center items-center " id="calender">
          <Calendar  style="width: 100%;padding: ;"
          showButtonBar
          v-model="date"
          dateFormat="dd/mm/yy"
          :placeholder="$t('date_of_birth')"
          />
        </div>
        <div>
          <input  style="border-bottom: 2px solid #9B9B9B; padding: 1.5%;" type="number"  class="text-center w-full text-lg focus:ring-0 " :placeholder="$t('phone_number')">
        </div>
        <div style="border: 2px solid #9B9B9B;">
          <p class="p-2 text-[#FF2A5B] text-center">
            <span class="text-xl  text-black">{{ $t("Note") }} </span>{{ $t('if_your_child_suffers_from_any_diseases_please_write_them_down') }}
          </p>
          <textarea
            class="w-full border-0 text-center focus:ring-0"
            placeholder=""
          ></textarea>
        </div>
        <button style="padding: 2%;" class="w-full rounded-3xl bg-[#148A98] text-white text-xl">{{$t("Register_now")}}</button>
        
      </form>
    </div>
   
  
  </div>
</template>
<script>
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';

export default {
  components:{Calendar,Textarea},
  data(){
    return{
      date:"",
      otpCode: '',
      
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    },
     
  }
}
</script>
<style>
    /* Target the placeholder pseudo-element and set opacity */
    input::placeholder {
      opacity: .5;
    }

    #calender  input{
      border: none;
      border-bottom: 2px solid #818080;
      text-align: center;
      font-family: 'Cairo', sans-serif;
      font-size: 20px;
    }
    input::placeholder{
      opacity: 50%;
      color: black;
    }
  </style>