<script setup>
import Item from "@/components/Item.vue";
import {useList} from "@/store/List.js";

const data=useList().data
const is=useList().is
</script>

<template>
  <ul>
    <li v-for="(item,index) in data" :key="index" >
      <Item :data="item" :is="is[index]" :index="index"/>
      <button @click="useList().deleteList(index)">删除</button>
    </li>
  </ul>
</template>

<style scoped>

</style>