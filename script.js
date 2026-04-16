function createConfetti() {
    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDelay = Math.random() * 2 + "s";
        piece.style.animationDuration = (2 + Math.random() * 3) + "s";

        container.appendChild(piece);
    }
}

function showBackgroundPhotos() {
    document.getElementById("photoGrid").classList.remove("hidden");
    document.getElementById("photoGrid").classList.add("show-grid");
}

function handleClick(button) {
    const message = document.getElementById("openMessage");

    if (button.innerText === "クリックする") {
        message.innerHTML = '<img src="hopperLizard.jpg" class="main-img">';
        button.innerText = "もう一度‼";

    } else if (button.innerText === "もう一度‼") {
        button.innerText = "頑張ろう！";
        message.innerHTML = '<img src="sukiya.jpg" class="main-img">';

    } else if (button.innerText === "頑張ろう！") {
        button.innerText = "なんで違うか";
        message.innerHTML = '<img src="tohoIce.jpg" class="main-img">';

    } else if (button.innerText === "なんで違うか") {
        button.innerText = "待って";

    } else if (button.innerText === "待って") {
        button.innerText = "やっと見つけたよ";

    } else {
        button.innerText = "TA-DAAAAA!!!";
        message.innerHTML = '<img src="flowers.png" class="main-img">';
        createConfetti();
        showBackgroundPhotos();
    }
}