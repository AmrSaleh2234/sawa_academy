 <template>
  <div
    style="background-color: #135c65"
    class="grid md:grid-cols-2 p-4 text-center"
  >
    <div class="flex space-x-2">
      <p class="text-white text-sm">
       
        عمان-الرابيه-شارع ميسلون
        <v-icon
        end
        icon="mdi-map-marker"
        class="  text-[#FFCF24]  h-full  "
      ></v-icon>
      </p>
      <p class=" text-white text-sm">
        التواصل : 0096265522688-00962791017001
        <v-icon
        end
        icon="mdi-phone"
        class="  text-[#FFCF24]  w-[20%]bg-[#0D4047] h-full rotate-180 "
      ></v-icon>
      </p>
    </div>
    
     <div class="flex space-x-4" >
      <div class="bg-[#0D4047] w-52 rounded-lg" style="display: flex; align-items: center;">
        <v-icon
        end
        @click="show"
        :icon="show_Password"
       
        class=" text-2xl text-white w-[20%]bg-[#0D4047] h-full"
      ></v-icon>
        <input class="text-center text-white rounded-lg w-full bg-[#0D4047]" :type="pass_type" placeholder="كلمه المرور" >
      </div>
      <div class="bg-[#0D4047] w-52 rounded-lg px" style="display: flex; align-items: center;">
        <v-icon
        end
       
        icon="mdi-account"
        class=" text-2xl text-white px-2 w-[20%]bg-[#0D4047] h-full"
      ></v-icon>
        <input class="text-center px-2 text-white rounded-lg w-full bg-[#0D4047]" type="text" placeholder="اسم المستخدم" >
      </div>
      <div>
        <v-btn to="/register" class="bg-[#FFCF24] text-white text-base">
          تسجيل الدخول 
        </v-btn>
       </div>
       <div>
        <v-btn class="bg-none shadow-0 text-[#FFCF24] text-base">
          انشاء حساب
        </v-btn>
       </div>
     </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_Password: 'mdi-eye-off',
      pass_type:'password'
      
    };
  },
  methods:{
    show(){
      
     if(this.show_Password == 'mdi-eye-off'){
      this.show_Password = 'mdi-eye'
      this.pass_type='text'
      console.log("asc")
     }
     else{
      this.show_Password ="mdi-eye-off"
      this.pass_type='password'
     }
    }
  }
};
</script>
<!-- <script >
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
export default {
  components:{Navbar,NavbarLogo,NavbarCollapse,NavbarLink},
  data() {
    return {
      show_Password: 'mdi-eye-off',
      pass_type:'password'
      
    };
  },
  methods:{
    show(){
      
     if(this.show_Password == 'mdi-eye-off'){
      this.show_Password = 'mdi-eye'
      this.pass_type='text'
      console.log("asc")
     }
     else{
      this.show_Password ="mdi-eye-off"
      this.pass_type='password'
     }
    }
  }
};
</script>
<template>
    <Navbar class=" bg-[#135C65] ">
      <template #logo>
        <NavbarCollapse class="w-[50%] bg-[#135C65] "> 
          <div class="flex space-x-4">
            <p class="text-black text-sm">
             
              عمان-الرابيه-شارع ميسلون
              <v-icon
              end
              icon="mdi-map-marker"
              class="  text-[#FFCF24]  h-full  "
            ></v-icon>
            </p>
            <p class=" text-black text-sm">
              التواصل : 0096265522688-00962791017001
              <v-icon
              end
              icon="mdi-phone"
              class="  text-[#FFCF24]  w-[20%]bg-[#0D4047] h-full rotate-180 "
            ></v-icon>
            </p>
          </div>
        </NavbarCollapse>
 
        
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse  class=" bg-[#135C65] " :isShowMenu="isShowMenu">
          <div class="flex flex-col md:flex-row m-auto  space-x-4" >
            <div class=" m-auto w-52 bg-[#0D4047] rounded-lg" style="display: flex; align-items: center;">
              <v-icon
              end
              @click="show"
              :icon="show_Password"
             
              class=" text-2xl text-white w-[20%]bg-[#0D4047] h-full"
            ></v-icon>
              <input class="text-center  text-white rounded-lg w-full bg-[#0D4047]" :type="pass_type" placeholder="كلمه المرور" >
            </div>
            <div class="bg-[#0D4047] m-auto w-52 rounded-lg px" style="display: flex; align-items: center;">
              <v-icon
              end
             
              icon="mdi-account"
              class=" text-2xl text-white px-2 w-[20%]bg-[#0D4047] h-full"
            ></v-icon>
              <input class="text-center px-2 text-white rounded-lg w-full bg-[#0D4047]" type="text" placeholder="اسم المستخدم" >
            </div>
            <div>
              <v-btn to="/register" class="bg-[#FFCF24] text-white text-base">
                تسجيل الدخول 
              </v-btn>
             </div>
             <div>
              <v-btn class="bg-none shadow-0 text-[#FFCF24] text-base">
                انشاء حساب
              </v-btn>
             </div>
           </div>
        </NavbarCollapse>
      </template>
    </Navbar>
</template>
<style scoped>
.container{
  background-color: ;
}
</style> -->
