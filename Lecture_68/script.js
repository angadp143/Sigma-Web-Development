console.log("Angad")

// let bhupendraJogis=document.getElementsByClassName("box")
// console.log(boxes)

// bhupendraJogis[2].style.backgroundColor="red"


//document.getElementById("redcode").style.backgroundColor="red"

//document.querySelector(".box").style.backgroundColor="Green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})