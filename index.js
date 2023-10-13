const inputbox=document.getElementById("input-box");
const listContainer=document.querySelector(".list-container");

// const add_btn=document.getElementsByTagName("button");
// add_btn.addEventListener("click",handleclick);
function addtask(){
    if(inputbox.value===''){
        alert("You Must Assign  Some Task");
    }
    else{
     // it will create li 
      let li=document.createElement("li");
      // it will give value to li
      li.innerHTML=inputbox.value;
      // this will display li under listcontainer
      listContainer.appendChild(li); 

      let span=document.createElement("span");
      span.innerHTML="\u00D7";
      li.appendChild(span);
    }
    //after adding list clear  input
    inputbox.value="";
    saveData();
} 
listContainer.addEventListener("click",function(event){
    // li must be written in capital
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    // span must be written in capital 
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
getData();