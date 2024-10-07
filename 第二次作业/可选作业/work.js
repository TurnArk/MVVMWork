let arr=['浦原喜助','京乐春水','浮竹十四郎','涅茧利']
const table=document.querySelector('#table')
function listRow(){
    let tableElement='';
    for(let i=0;i<arr.length;i++){
        tableElement+=`
            <tr>
                <td>${arr[i]}</td>
                <td><button onclick="change(${i})">编辑</button></td>
                <td><button onclick="del(${i})">删除</button></td>
            </tr>
        `
    }
    table.innerHTML=tableElement
}
listRow()
function inset(event){
    event.preventDefault()
    const listMsg=document.querySelector('#listMsg')
    if(listMsg.value.trim()) {
        arr.push(listMsg.value.trim())
        listRow()
        listMsg.value=''
    }
}


const prom=document.querySelector('#prompt')
let number=0
function change(num){
    prom.style.display='block'
    number=num
}
function writer(){
    const promptMsg=document.querySelector('#promptMsg')
    if(promptMsg.value.trim()) {
        arr[number] = promptMsg.value.trim()
        listRow()
        promptMsg.value=''
    }
    prom.style.display='none'
}
function unchange(){
    prom.style.display='none'
}
function del(num){
    arr.splice(num,1)
    listRow()
}
