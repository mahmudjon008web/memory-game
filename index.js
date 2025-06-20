const elContainer = document.getElementById("container");
const cards__length = 16;
const cards = [];
let Audio = document.querySelector(".audio");
let images = ["bmw", "bentley", "bugatti2", "ferrari", "lamborghini", "supra", "porsche", "mclaren"];
images.push(...images)
let preShow = undefined;

for(let i=0; i < 100; i++){
    const idx1 = Math.floor(Math.random()  * cards__length);
    const idx2 = Math.floor(Math.random()  * cards__length);

    const memory = images[idx1];
    images[idx1] = images[idx2];
    images[idx2] = memory;
}


images.forEach((item) =>{
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `
        <div class="front">
            <img src="./img/${item}.jpg">
        </div>
        <div class="back"><i class='bx bxs-car car'></i></div>
    `;

    cardEl.addEventListener("click", () => {
        Audio.play();
        if(!cardEl.classList.contains("show")){
            cardEl.classList.add("show");
        }


        if(!preShow){
            preShow = cardEl;
        }
        else{
            const iconOne = preShow.querySelector("img").getAttribute("src");
            const iconTwo = cardEl.querySelector("img").getAttribute("src");
            console.log(iconOne, iconTwo);
            
            if(iconOne !== iconTwo){
                const temp = preShow;
                setTimeout(() =>{
                    temp.classList.remove("show");
                    cardEl.classList.remove("show");
                },1000)
            }
            preShow = undefined
        }
        if (document.querySelectorAll(".card.show").length === cards__length) {
            setTimeout(() => {
                alert("Tabriklaymiz, siz yutdingiz");
                document.body.classList.add("animatsiya");
            }, 500);
        }
    });


    elContainer.appendChild(cardEl);
})

let again = document.querySelector(".again");
again.addEventListener("click", (e)=>{
    e.preventDefault();
    again.classList.add("rotate");
})




