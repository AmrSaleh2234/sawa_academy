<template>
    <div>
         <Map2 ></Map2>
         <Nave />
         <Cons />
        <About />
    </div>
    
</template>
<script setup(props) {
  
}>
import Map2 from '../components/Map2.vue'; 
import Nave from '../components/Nave.vue'; 
import About from '../components/About.vue'; 
import Cons from '../components/Cons.vue'; 

export default {
components:{Map2,Nave,About,Cons},

}
</script>
