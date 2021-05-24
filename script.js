const animationFunc = ()=>{
    let temp = document.getElementById("temp");
    temp.innerHTML = "&#xf2cb";

    setTimeout( ()=>{
        temp.innerHTML = "&#xf2ca";
    },50);

    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c9";
    },100);

    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c8";
    },150);

    setTimeout( ()=>{
        temp.innerHTML = "&#xf2c7";
    },200);
}

setInterval(animationFunc,250);

