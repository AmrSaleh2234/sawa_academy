<template>
    <div class="px-4 relative">
        <div class="md:grid flex flex-col gap-5 sm:grid-cols-6">
            <div class="p-0 m-auto"><img class=" m-auto" src="../image/header/calendar-01 no bg-01.png"></div>
            <div class="col-span-4 text-center m-auto ">
                <p class="flex text-3xl">السبت-12:00 م<svg fill="#135C65" width="35px" height="40px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="18.432"></g><g id="SVGRepo_iconCarrier"><path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path><path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z"></path><path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z"></path></g></svg></p>
            </div>
            <div class=" m-auto md:mr-0">
                <router-link to="/"><font-awesome-icon class="bg-[#135C65] rounded-[50%]  p-2 md:p-4  text-white" icon="fa-solid fa-arrow-left" /></router-link>
            </div>
        </div>
        <div class="m-auto  p-8 rounded-2xl max-w-2xl  text-center space-y-6">
            <div>
             <h2 class="text-right font-bold text-lg">احجز موعد مع الاخصائي</h2>
             <p class="text-right text-[#29CCFF]">برجاء ملئ البيانات</p>
            </div>
             <form class="  space-y-6 shadow p-2 ">
                 <div class=" w-full text-right border p-2">
                     <input type="text" class="w-full text-right border-0 border-b-2" required placeholder=": اسم ولي امر  مقدم الطلب">
                 </div>
                 <div class="">
                     <input type="text" class=" text-[] w-full text-right border-0 border-b-2" required placeholder=":درجه قرابته للطفل ">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": الاسم الرباعي للطفل ">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": مكان وتاريخ الميلاد ">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": لغة الطفل الاساسيه ">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=":الرقم الوطني / الجنسيه">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": العنوان">
                 </div>
                 <div class="relative">
                     <input type="tel"  class="w-full text-right border-0 border-b-2" required placeholder=": رقم هاتف ولي الامر">
                     <span class="absolute top-2 left-0">+20</span>
                 </div>
                 <div class="relative">
                     <input type="tel"  class="w-full text-right border-0 border-b-2" required placeholder=": رقم هاتف اضافي">
                     <span class="absolute top-2 left-0">+20</span>
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": مالك الرقم الاضافي . درجه قرابته بالطفل">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=": مصدر التحويل">
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required placeholder=":  الطبيب الخاص بالطفل">
                 </div>
                 <p  class="p-4 font-bold text-lg text-right">اجب عن الاسئله الاتيه </p>
                 <div class="text-right space-x-4 ">
                     <span class="px-2 font-bold">الجنس</span>
                     <input type="radio" name="gender">
                     <label>ذكر</label>
                     <input type="radio" name="gender">
                     <label>انثي</label>
                 </div>
                 <div class="text-right space-x-2 ">
                     <span class="px-2 font-bold">نرجو تحديد نوع المشكله</span>
                     <input type="radio" name="gender">
                     <label>حركيه</label>
                     <input type="radio" name="gender">
                     <label>سمعيه</label>
                     <input type="radio" name="gender">
                     <label>بصريه</label>
                     <input type="radio" name="gender">
                     <label>عقليه / نمائيه</label>
                     <input type="radio" name="gender">
                     <label>توحد</label>
                     <input type="radio" name="gender">
                     <label>اخري</label>
                 </div>
                 <div class="">
                     <input type="text" class="w-full text-[] text-right border-0 border-b-2" required value=": التسخيص ان وجد">
                 </div>
                 <div class="text-right space-x-2 ">
                     <span class="px-2 font-bold">هل يستخدم الطفل اي معينات حركيه / سمعيه/ بصريه</span>
                     <input type="radio" name="gender">
                     <label>نعم</label>
                     <input type="radio" name="gender">
                     <label>لا</label>
                 </div>
                 <div class="space-y-4">
                     <p class="text-right"> :المشاكل الرئيسيه لدي الطفل حاليا من وجهه نظر الاهل </p>
                     <textarea rows="4" class="w-full"></textarea>
                 </div>
                 <div class="space-y-4">
                     <p class="text-right"> :ما هي اولويه الاهل في البرامج التاهليه للتعامل مع الطفل</p>
                     <textarea rows="4" class="w-full "></textarea>
                 </div>  
                 <div>
                    <input class="border-0 border-b text-center" type="text" placeholder="ادخل كود استشاري تريده">
                 </div>
                 <div class="text-right space-x-4">
                    <span>انا اوافق علي كافه الشروط والاحكام</span>
                    <input type="checkbox">
                 </div>
                 <button type="submit" class="w-full p-2 text-2xl text-white bg-[#148A98] rounded-2xl">احجز الان</button>
             </form>
         </div>
        
    </div>
</template>