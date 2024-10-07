const title = document.querySelector('#title')
//改变标题
function changeTitle() {
    title.innerHTML = '欢迎来到我的网站喵'
}

//用dayjs获取并格式化处理当前时间并插入到页面中
const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
let timeElement = document.createElement('div')
timeElement.innerHTML = time
const titleBtn=document.querySelector('#titleBtn')
titleBtn.insertAdjacentElement('afterend',timeElement)


const name = document.querySelector('#name')
const age = document.querySelector('#age')
const list = document.querySelector('#list')
//一个随便给了点东西的数组并执行排序和插入
let arr = [
    {name:'基拉哈斯提',age:18},
    {name:'夏亚阿兹纳布尔',age:42},
    {name:'桃井太郎',age:24}
]
sort()

//该方法用于将数组的元素按顺序添加进网页
function sort(){
    let table = `
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>操作</th>
        </tr>`
    for (let i = 0; i < arr.length; i++) {
        table += `
                <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].age}</td>
                    <td><button onclick="del(${i})">删除</button></td>
                </tr>`
    }
    list.innerHTML = table
}

//删除指定的该条元素
function del(num){
    arr.splice(num,1)
    sort()
}

//该方法用于将填入的数据添加进数组并排序
function add(event) {
    event.preventDefault()
    let nameMsg = name.value
    let ageMsg = age.value
    if (nameMsg !== "" && ageMsg !== "") {
        arr.push({
            name: nameMsg,
            age: Number(ageMsg)
        })
        arr.sort((a, b) => a.age - b.age)
        // console.log(arr)
        sort()
    }
    name.value = null
    age.value = null
}


