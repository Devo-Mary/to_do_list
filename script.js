let arr = []
let id = 0
let div = document.getElementById('myDIV')
function showArr(a){
    div.innerHTML = ""
    a.forEach(item => {
        div.innerHTML += `<div>
                            <input value="${item.name}" class="changeItem"> 
                            <button onclick= "deleteFunk(${item.id})" class="delete" style="float:right;margin-left:10px ">Delete</button>
                            <button onclick= "editFunk(${item.id},this)" class="edit" style="float:right">Edit</button>
                        </div>
                        `
        })
}

function newElement (){
    let inputValue = document.getElementById('myInput')
    let obj = {id:`${++id}`,name:`${inputValue.value}`}
    let arrFind = arr.find(item => item.name == inputValue.value)

    if (arrFind) {
        alert("metn var")
    }
    else{
        arr.push(obj)
        inputValue.value = ""
    }
    showArr(arr)
}

function editFunk(a,b) {
    let current_input = b.parentElement.firstElementChild
    arr.forEach(item =>{
        if(item.id == a){
            item.name = current_input.value
        }
        console.log(item);
    })
}
function deleteFunk(a) {
    let deleteArr = arr.filter(item => item.id != a)
    arr = deleteArr
    showArr(arr)
}

let mySearch = document.getElementById('mySearch') 
mySearch.addEventListener('keyup', ()=>{
    let searchArr = arr.filter(item =>{
        return item.name.toUpperCase().includes(mySearch.value.toUpperCase())
    })
    console.log(searchArr);
    showArr(searchArr)
})  