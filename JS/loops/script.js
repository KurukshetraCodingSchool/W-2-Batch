// let var2 = 'kuchh bhi';
// let arr = [25,5,6,"alok",5.2,var2];

// arr.forEach(function(value, index){
//   console.log(`${index} : ${value}`)
// })

let h1 = document.querySelectorAll('h1')

// console.log(h1)
h1.forEach(function(value){
    value.addEventListener('mousemove',()=>{
        value.style.color = 'red';
    })
    value.addEventListener('mouseleave',()=>{
        value.style.color = 'white';
    })

})

// click
// dblclick
// movemove
// moveleave
// moveeneter