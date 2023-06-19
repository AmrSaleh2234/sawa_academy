<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route =  useRoute()
onMounted(() => {
  axios.get(`api/roles/${route.params.id}`);
});

</script>

<template>
  <div>
    this is roles show
  </div>
</template>
