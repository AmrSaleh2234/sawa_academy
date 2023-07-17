<template>
  <div
    style="background-color: #135c65"
    class="grid md:grid-cols-2 p-6 text-center"
  >
    <div class="flex space-x-2">
      <p class="text-white">
        <font-awesome-icon
          class="text-xl pr-2 text-[#FFCF24] m-auto"
          icon="fa-solid fa-location-dot"
        ></font-awesome-icon
        >عمان-الرابيه-شارع ميسلون
      </p>
      <p class="mr-6 text-white">
        <font-awesome-icon
          class="text-xl pr-2 text-[#FFCF24] m-auto"
          icon="fa-solid fa-phone"
        ></font-awesome-icon
        >التواصل : 0096265522688-00962791017001
      </p>
    </div>
    <div class="grid grid-row-4 lg:grid-cols-4 gap-3">
      <div class="flex bg-[#08343A] px-2 rounded-md">
        <input
          class="text-center w-[85%] text-white bg-[#08343A] border-0"
          type="text"
          placeholder="اسم المستخدم"
        />
        <div class="m-auto bg-white rounded-3xl">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#323232"
                stroke-width="2"
              ></path>
              <path
                d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                stroke="#323232"
                stroke-width="2"
              ></path>
              <path
                d="M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="flex bg-[#08343A] rounded-md px-2">
        <input
          class="text-center w-[85%] text-white bg-[#08343A] border-0 rounded-md"
          type="text"
          placeholder="كلمه المرور "
        />
        <div class="m-auto bg-white rounded-3xl">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#323232"
                stroke-width="2"
              ></path>
              <path
                d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                stroke="#323232"
                stroke-width="2"
              ></path>
              <path
                d="M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div>
        <button class="p-2 bg-[#FFCF24] text-white rounded-lg">
          <router-link :to="{ name: 'ParentLogin' }">تسجيل الدخول</router-link>
        </button>
      </div>
      <div>
        <button class="text-[#FFCF24] m-auto">
          <router-link to="/SingUp">انشاء حساب</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
