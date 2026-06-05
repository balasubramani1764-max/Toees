let coin = document.getElementById("coin");

// 🪙 page load aagumbodhu coin look set
coin.innerHTML = "HEAD                  TAIL";
coin.style.background = "gold";
coin.style.color = "black";
function tossCoin(){

    let coin = document.getElementById("coin");
    let sound = document.getElementById("coinSound");

    // 🎵 sound
    sound.currentTime = 0;
    sound.play();

    let flips = 0;

    // 🚀 fast spin animation
    let interval = setInterval(() => {

        coin.style.transform = `
            translateY(${-flips * 5}px)
            scale(1.5)
            rotateY(${flips * 180}deg)
            rotateZ(${flips * 15}deg)
        `;

        coin.innerHTML = (flips % 2 === 0) ? "HEAD" : "TAIL";

        flips++;

    }, 80);

    setTimeout(() => {

        clearInterval(interval);

        let result = Math.random() < 0.5 ? "HEAD" : "TAIL";

        coin.innerHTML = result;

        // 🪙 landing bounce effect
        coin.style.transition = "0.4s ease";
        coin.style.transform = "scale(1.2)";

        setTimeout(() => {
            coin.style.transform = "scale(1)";
        }, 200);

        // 🎨 color
        if(result === "HEAD"){
            coin.style.background = "orange";
            coin.style.color = "white";
        }else{
            coin.style.background = "red";
            coin.style.color = "white";
        }

    }, 1200);
}