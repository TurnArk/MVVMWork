<script setup>
  import {ref} from "vue";
  import {useList} from "@/store/List.js";

  const data=ref()
  function addDATA(){
    useList().addList(data.value)
    data.value=''
  }
</script>

<template>
  <input v-model="data">
  <button @click="addDATA">提交</button>
</template>

<style scoped>

</style>