
// const red= document.getElementById("red")
// const blue= document.getElementById("blue")
// const orange= document.getElementById("orange")
// const green= document.getElementById("green")
// const purple= document.getElementById("purple")

// red.addEventListener("click", ()=>{
//     document.body.style.backgroundColor="red"
// })

// blue.addEventListener("click", ()=>{
//     document.body.style.backgroundColor="blue"
// })

// green.addEventListener("click", ()=>{
//     document.body.style.backgroundColor="green"
// })

// orange.addEventListener("click", ()=>{
//     document.body.style.backgroundColor="orange"
// })


// purple.addEventListener("click", ()=>{
//     document.body.style.backgroundColor="p"
// })


const button = document.querySelectorAll("button")

button.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        
    document.body.style.backgroundColor= button.id
    })
})