<script setup>
import {useList} from "@/store/List.js";
import {ref} from "vue";

defineProps({
  is:Boolean,
  data:String,
  index:Number
})
const newMessage=ref()
const change=ref(true)
const changeData=(index)=>{
  useList().changeData(index,newMessage.value)
  change.value=true
  newMessage.value=''
}
</script>

<template>
  <input type="checkbox" :checked="is" @change="useList().changeCheck(index)">
  <span v-if="change">
    {{data}}
    <button @click="change=!change">修改</button>
  </span>
  <span v-else>
    <input type="text" placeholder="按回车确定修改" v-model="newMessage" @keyup.enter="changeData(index)">
  </span>
</template>

<style scoped>

</style>