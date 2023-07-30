<template>
    <Map2></Map2>
    <Nave />
    <Cons :event_id="event_id" />
    <About />
</template>
<script setup(props) { }>
import Map2 from "../components/Map2.vue";
import Nave from "../components/Nave.vue";
import About from "../components/About.vue";
import Cons from "../components/Cons.vue";

export default {
  components: { Map2, Nave, About, Cons },
  props: ["event_id"],
};
</script>
