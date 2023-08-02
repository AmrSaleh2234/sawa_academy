<template>
        <div  class=" py-[8%]  relative bg-center bg-cover  max-h-screen">
            <img src="../image/header/112.png" class="absolute  inset-0 w-full h-full object-cover">
            <div style="background: linear-gradient(to right, #74DBC7, #618990); opacity: 50%;" class="absolute inset-0 bg-black"></div>
            <div class="relative background-color lg:w-[50%] px-[5%] z-10 ">
            <h1 style="font-size:40px" class="font-bold   text-right pr-6 text-white" > {{$t("Sawa_Academy_for_Special_Education")}}</h1>
            <h2 style="font-size:35px" class=" text-3xl m-10 text-right text-white ">{{$t("Better_self_care_for_your_child_through_us")}}</h2>
            <div style="color: white;" class="relative flex  justify-between bg-black p-2 opacity-70 w-[100%] rounded-3xl">
                <button class="p-2 text-[#FFCF24]">{{$t("search")}}</button>
                <div class="flex w-[90%]">
                    <input type="search" class="text-center focus:ring-0 border-0 flex text-xs w-[90%] break-words   bg-black md:text-xl" :placeholder="$t('looking_for_a_doctor_health_care_courses')">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <button class="m-auto text-2xl" ><v-icon small>mdi-magnify</v-icon></button>
                    
                </div>
            </div>   
            
        </div>
</div>
</template>
<style scoped>

</style>