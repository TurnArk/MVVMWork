<script setup>
import {useList} from "@/store/List.js";
</script>

<template>
  <button @click="useList().checkAll()">勾选全部</button>
  <button @click="useList().deleteAllCheck()">删除所选全部</button>
</template>

<style scoped>

</style>