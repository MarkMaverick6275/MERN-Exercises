function randRGB(){
    let val1 = 255/ (Math.random()*10);
    let val2 = 255/ (Math.random()*10);
    let val3 = 255/ (Math.random()*10);
    return `rgb(${val1}, ${val2}, ${val3})`
}

let box = document.querySelectorAll(".boxes").forEach(e=>{
    e.style.backgroundColor = randRGB();
    e.style.color = "#fff";
})