<template>
    <div>
        <Map />
        <LoginForm />
        <About />


    </div>
</template>
<script>
import Map from '../components/Map.vue'; 
import LoginForm from '../components/LoginForm.vue'; 
import About from '../components/About.vue';

export default {
components:{Map,LoginForm,About},

  

}
</script>