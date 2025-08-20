// 1. Select ✅
// 2. event ✅
// 3. change html ✅
// 4. change css ✅

let box =  document.querySelector("#box")

box.addEventListener('click',()=>{
// alert("You click sucessfully");
box.style.background = "black";
box.innerHTML = "<h1>hello</h1>"
})