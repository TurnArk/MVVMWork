import {defineStore} from "pinia";
import {ref} from "vue";

export const useList=defineStore('list',()=>{
    const data=ref(["样例1","样例2","样例3","样例4","样例5"])
    const is =ref([false,false,false,false,false])
    function addList(value){
        data.value.unshift(value)
    }
    function deleteList(index){
        data.value.splice(index,1)
        is.value.splice(index,1)
    }
    function changeCheck(index){
        is.value[index]=!is.value[index]
    }
    function checkAll(){
        for(let index in is.value){
            is.value[index]=true
        }
    }
    function deleteAllCheck(){
        for (let index = data.value.length - 1; index >= 0; index--) {
            if (is.value[index]) {
                deleteList(index);
            }
        }
    }
    function changeData(index,value){
        data.value[index]=value
        console.log(index,value)
    }
    return{
        data,
        is,
        addList,
        deleteList,
        changeCheck,
        checkAll,
        deleteAllCheck,
        changeData
    }
})