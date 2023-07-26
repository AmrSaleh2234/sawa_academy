<!-- <template>
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
</script> -->
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
<template>
  <nav class="bg-[#135C65] p-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Your logo or brand content goes here -->
      <div class="flex mx-2">
        <div>
          <p style="font-size:20px" class="text-white text-base">
         
            عمان-الرابيه-شارع ميسلون
            <v-icon
              end
              icon="mdi-map-marker"
              class="text-[#FFCF24] h-full"
            ></v-icon>
          </p>
        </div>
        <div class="mx-2">
          <p style="font-size:20px" class=" text-white text-base">
            التواصل : 0096265522688-00962791017001
            <v-icon
            end
            icon="mdi-phone"
            class="  text-[#FFCF24]   h-full rotate-180 "
          ></v-icon>
          </p>
        </div>
      </div>

      <!-- Your navigation links go here -->
      <div class="hidden lg:block space-x-4">
        <div class="flex flex-col md:flex-row m-auto  space-x-4" >
          <div  class=" m-auto w-52 bg-[#0D4047] rounded-lg" style="display: flex; align-items: center;border:1px solid white">
            <v-icon
            end
            @click="show"
            :icon="show_Password"
           
            class=" text-2xl text-white w-[20%] bg-[#0D4047] h-full"
          ></v-icon>
            <input style="font-size:18px" class="focus:ring-0 text-center text-sm text-white rounded-lg w-full bg-[#0D4047]" :type="pass_type" placeholder="كلمه المرور" >
          </div>
          <div class="bg-[#0D4047] m-auto w-52 rounded-lg  md:max-w-xs " style="display: flex; align-items: center;border:1px solid white">
            <v-icon
            end
           
            icon="mdi-account"
            class=" text-white   bg-[#0D4047] h-full"
          ></v-icon>
            <input style="font-size:18px" class="focus:ring-0 text-center text-sm text-white rounded-lg w-full bg-[#0D4047]" type="text" placeholder="اسم المستخدم" >
          </div>
          <div>
            <v-btn
              :to="{ name: 'parentLogin' }"
              class="bg-[#FFCF24] text-white text-base"
            >
              تسجيل الدخول
            </v-btn>
          </div>
          <div>
            <div class="bg-none shadow-0 text-[#FFCF24] text-base">
              <v-btn :to="{ name: 'SingUp' }" class="text-base">
                انشاء حساب
              </v-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu toggle button -->
      <div class="lg:hidden flex items-center">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden fix bg-[#135C65] p-4">
      <div class="flex flex-col w-full  lg:flex-row m-auto  space-y-4" >
        <div class=" m-auto  bg-[#0D4047] w-full rounded-lg" style="display: flex; align-items: center;">
          <v-icon
          end
          @click="show"
          :icon="show_Password"
         
          class=" text-2xl text-white w-[20%] bg-[#0D4047] h-full"
        ></v-icon>
          <input class="text-center focus:ring-0 text-white rounded-lg w-full bg-[#0D4047]" :type="pass_type" placeholder="كلمه المرور" >
        </div>
        <div
          class="m-auto bg-[#0D4047] w-full rounded-lg"
          style="display: flex; align-items: center"
        >
          <v-icon
          end
         
          icon="mdi-account"
          class=" text-2xl text-white px-2 w-[20%] bg-[#0D4047] h-full"
        ></v-icon>
          <input class="focus:ring-0 text-center  text-white rounded-lg w-full bg-[#0D4047]" type="text" placeholder="اسم المستخدم" >
        </div>
        <div class="">
          <v-btn to="/register" class="bg-[#FFCF24] m-auto w-full  text-white text-base">
            تسجيل الدخول 
          </v-btn>
        </div>
        <div>
          <v-btn class="bg-none w-full shadow-0 text-[#FFCF24] text-base">
            انشاء حساب
          </v-btn>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      show_Password: "mdi-eye-off",
      pass_type: "password",
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style>
/* No custom styling required since we're using Tailwind CSS classes */
</style>
