<template>
    <div class="px-4 relative">
        <div class="md:grid md:grid-cols-5 gap-10 grid grid-rows-3">
            <div class="p-0"><img class="h-56 m-auto" src="../image/header/register no bg-01.png"></div>
            <div class="text-center md:col-span-3 m-auto space-y-4 w-full row-span-3">
                <h1 class="text-2xl  font-bold text-[#FF2A5B]">تسجيل طفلك معنا</h1>
                <P class="text-[#135C65] ">يمكنك من هنا تسجيل طفلك معنا لمراقبه <br>مدي  تطور مهارته العقليه والجسديه</P> 
                <div class="m-auto shadow  rounded-2xl max-w-lg  text-center">
                    <form class="p-2  space-y-4">
                        <div>
                            <input type="text" placeholder="الاسم ثلاثي" class="w-full text-center border-0 border-b-2" required>
                        </div>
                        <div>
                            <input type="date" placeholder=" تاريخ الميلاد" class="w-full text-center border-0 border-b-2" required>
                        </div>
                        <div class="relative">
                            <input type="tel" placeholder="  رقم هاتف التواصل" class="w-full text-center border-0 border-b-2" required>
                            <span class="absolute top-2 left-0">+20</span>
                        </div>
                        <div class=" border">
                            <p class="p-2 text-[red]"><span class="text-xl text-black">ملاحظه </span>اذا كان طفلك يعاني من اي امراض يرجي كتابتها</p>
                            <textarea class="w-full border-0 text-center"  placeholder="" rows="4"></textarea>
                        </div>
                        <button type="submit" class="w-full p-4 text-2xl text-white bg-[#148A98] rounded-2xl">التسجيل الان</button>

                      
                    </form>
                </div> 
            </div>
            <div class="m-auto ">
                <router-link to="/"><font-awesome-icon class="bg-[#135C65] rounded-[50%]  p-4  text-white" icon="fa-solid fa-arrow-left" /></router-link>
            </div>
        </div>
        
    </div>
</template>