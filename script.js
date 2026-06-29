// ==========================
// LOADING
// ==========================
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
}, 3000);

// ==========================
// EFEK MENGETIK JUDUL
// ==========================
const text = "Adell ❤️";
let typingIndex = 0;

function typing() {
    if (typingIndex < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(typingIndex);
        typingIndex++;
        setTimeout(typing, 150);
    }
}

setTimeout(typing, 3200);

// ==========================
// BINTANG
// ==========================
const stars = document.getElementById("stars");

for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    stars.appendChild(star);
}

// ==========================
// ELEMENT
// ==========================
const hero = document.querySelector(".hero");
const envelopePage = document.querySelector(".envelope-page");
const letterPage = document.querySelector(".letter-page");
const galleryPage = document.querySelector(".gallery-page");
const countdownPage = document.querySelector(".countdown-page");

const music = document.getElementById("bgMusic");

// ==========================
// TOMBOL MULAI
// ==========================
document.getElementById("startBtn").onclick = () => {

    music.volume = 1;
    music.play();

    hero.classList.add("fade-out");

setTimeout(()=>{
    hero.style.display="none";

    envelopePage.style.display="flex";
    envelopePage.classList.add("fade-in");
},600);

};

// ==========================
// SURAT
// ==========================
const surat = `Buat cewe lucu ini,

Makasih yaa udah ngertiin aku,
ngertiin sifatku,
ngertiin kesibukanku.

Aku seneng bisa ketemu kamu.

Udah segitu aja ya hehe 😁🤏

Oh iyaa...

Jangan lupa rajin kasi nen yaa hehe ❤️`;

document.getElementById("openLetter").onclick = () => {

    envelopePage.classList.add("fade-out");

    setTimeout(() => {

        envelopePage.style.display = "none";

        letterPage.style.display = "flex";
        letterPage.classList.add("fade-in");

        const area = document.getElementById("letterText");
        area.innerHTML = "";

        let i = 0;

        function ketik() {

            if (i < surat.length) {

                area.innerHTML += surat.charAt(i);
                i++;
                setTimeout(ketik, 35);

            } else {

                setTimeout(() => {

                    letterPage.classList.add("fade-out");

                    setTimeout(() => {

                        letterPage.style.display = "none";
                        galleryPage.style.display = "flex";
                        galleryPage.classList.add("fade-in");

                    }, 600);

                }, 2500);

            }

        }

        ketik();

    }, 600);

};

// ==========================
// GALERI -> COUNTDOWN
// ==========================
document.getElementById("nextPage").onclick = () => {

    galleryPage.classList.add("fade-out");

    setTimeout(() => {

        galleryPage.style.display = "none";

        countdownPage.style.display = "flex";
        countdownPage.classList.add("fade-in");

    }, 600);

};
// ==========================
// COUNTDOWN
// ==========================
const startDate = new Date("2026-05-08T00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
// ==========================
// LIGHTBOX
// ==========================

const lightbox = document.getElementById("lightbox");
const preview = document.getElementById("preview");

document.querySelectorAll(".gallery img").forEach(img => {

    img.onclick = () => {

        preview.src = img.src;

        lightbox.style.display = "flex";

    };

});

document.getElementById("closeBtn").onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

};
const questionPage = document.querySelector(".question-page");
const endPage = document.querySelector(".end-page");

document.getElementById("loveBtn").onclick = () => {

    countdownPage.style.display = "none";

    questionPage.style.display = "flex";

};


document.getElementById("hugBtn").onclick=()=>{

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

    document.getElementById("question").style.display="block";

    setTimeout(()=>{
        alert("❤️ Aku akan selalu memilih kamu. Terima kasih sudah menjadi bagian dari hidupku ❤️");
    },1000);

};

const noBtn=document.getElementById("noBtn");

const yesBtn=document.getElementById("yesBtn");
yesBtn.onclick=()=>{
canvas.style.display = "block";

for(let i=0;i<8;i++){

    setTimeout(()=>{
        new Firework();
    }, i*500);

}
    setTimeout(()=>{

    alert("❤️ YEAYYYY ❤️\n\nAku sayang kamu selamanya 🥰");
    console.log("Fade Out Jalan");
    fadeOutMusic();

    document.querySelector(".question-page").style.display="none";

    document.querySelector(".end-page").style.display="flex";

    document.querySelector(".end-page").classList.add("fade-in");

    setInterval(createHeart,300);

},4500);
}

noBtn.onmouseover=()=>{

const x=Math.random()*300-150;

const y=Math.random()*200-100;

noBtn.style.transform=`translate(${x}px,${y}px)`;

}
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function Firework(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height/2;

for(let i=0;i<80;i++){

particles.push({

x:this.x,

y:this.y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100

});

}

}

function animateFirework(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animateFirework);

}

animateFirework();
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}
animateFirework();
function fadeOutMusic(){

    let volume = music.volume;

    const fade = setInterval(()=>{

        if(volume > 0.05){

            volume -= 0.05;
            music.volume = volume;

        }else{

            music.volume = 0;
            music.pause();
            clearInterval(fade);

        }

    },200);

}


