<script setup>
</script>

<template>

<div>
    <nave-1 />
    <nave />
    <HeadeForm />
    <Services />
    <card :carddeta="mycard" />
    <DoCard />
    <See />
    <About /> 
</div>






</template>
<script setup(props) {
  
}>
import Nave from '../components/Nave.vue'; 
import HeadeForm from '../components/HeadeForm.vue'; 
import Services from '../components/Services.vue'; 
import Card from '../components/Card.vue'; 
import About from '../components/About.vue'; 
import DoCard from '../components/DoCard.vue'; 
import See from '../components/See.vue'; 
import Nave1 from '../components/Nave1.vue'; 
import getcard from '../json/card.json'; 



export default {
components:{Nave,HeadeForm,Services,Card,About,DoCard,See,Nave1},
data(){
    return{
        mycard:getcard
    }
}
  

}
</script>


