function tossCoin(){

    let coin = document.getElementById("coin");
    let sound = document.getElementById("coinSound");

    // 🎵 sound play
    sound.currentTime = 0;
    sound.play();

    let flips = 0;

    // 🔥 spin animation
    let interval = setInterval(() => {

        coin.style.transform = `
            scale(1.5) 
            rotateY(${flips * 180}deg) 
            rotateZ(${flips * 20}deg)
        `;

        coin.innerHTML = "HEAD";

        flips++;

    }, 100);

    setTimeout(() => {

        clearInterval(interval);

        // final state
        coin.innerHTML = "HEAD";

        coin.style.transform = "scale(1) rotateY(0deg) rotateZ(0deg)";
        coin.style.background = "green";
        coin.style.color = "white";

    }, 2000);
}