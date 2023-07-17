<template>
    <div class=" m-auto md:grid md:grid-cols-3" >
        <div class="aa m-2 border-2 border-neutral-300 border-solid rounded-3xl relative truncate" v-for="(e,i) in cardinfo" :key="i">
            <div><img></div>
            <div class="flex justify-between p-4  text-center">
                <button>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#00A9DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M7 12H17M7 12L11 8M7 12L11 16" stroke="#00A9DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <p style="color:#135C65 ;" class=" text-2xl font-bold tracking-wide	 ">{{e.name}}</p>
            </div>
            <div class="ee flex-wrap w-[50%] h-[87%] top-[0%] left-[50%] bg-white  absolute  translate-x-[100%] "><p class=""> يمكنك من هنا تسجيل طلفك حتي  تتنكمن من التواصل معه</p></div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            cardinfo:this.$attrs.carddeta
        }
    },
   
   

}
</script>