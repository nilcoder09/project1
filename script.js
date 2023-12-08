const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function AddTask(){
    if(inputbox.value == ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        inputbox.value = '';
        let span = document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span);
    }
    savedata();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showlist(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showlist();