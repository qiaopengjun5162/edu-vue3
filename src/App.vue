<script setup lang="ts">
import { RouterView } from "vue-router";
import request from "./utils/request";

request({
  method: "GET",
  // http://localhost:8080/front/ad/getAdList
  url: "/front/ad/getAdList",
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
