console.log("Angad is Mahabharat Character")
console.log("Angad is a Nephew of Sughriv")

setTimeout(() => {
    console.log("Studied at Lovely Professional University")
}, 2000);

console.log("Angad is a son of Bali")


const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Angad");
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)