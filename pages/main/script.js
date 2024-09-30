"use strict";
// hamber-menu
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("menu-button").addEventListener("click", function() {
        document.querySelector(".header-main").classList.toggle("open");
        document.querySelector(".background-layer").classList.toggle("open");
        document.querySelector(".wrapper").classList.toggle("fixed");
    })
})

// close menu if click is out of menu
document.getElementById("menu").addEventListener("click", event => {
     event._isClickWithInMenu = true;
});

document.getElementById("menu-button").addEventListener("click", event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener("click", event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".wrapper").classList.remove("fixed");
    document.querySelector(".header-main").classList.remove("open");
    document.querySelector(".background-layer").classList.remove("open");
});

document.getElementById("nav-list").addEventListener("click", function() {
    document.querySelector(".wrapper").classList.remove("fixed");
    document.querySelector(".header-main").classList.remove("open");
    document.querySelector(".background-layer").classList.remove("open");
});


//carousel
let slidElems = document.querySelectorAll('.slider-item');
let carousel = document.querySelector(".carousel");
let prevImg = document.querySelector(".prevImg");
let activeImg = document.querySelector(".activeImg");
let nextImg = document.querySelector(".nextImg");
let prevImages = [];
let activeImages = [];
let nextImages = [];
let activeIndexes = [];
let prevIndexes = [];
let nextIndexes = [];

const initSlider = () => {

    getActiveImageIndexes();

    activeIndexes.forEach((index) => activeImages.push(slidElems[index].cloneNode(true)));
    activeImages.forEach((pet) => activeImg.append(pet));

    getPrevImageIndexes();

    prevIndexes.forEach((index) => prevImages.push(slidElems[index].cloneNode(true)));
    prevImages.forEach((pet) => prevImg.prepend(pet));

    getNextImageIndexes();

    nextIndexes.forEach((index) => nextImages.push(slidElems[index].cloneNode(true)));
    nextImages.forEach((pet) => nextImg.append(pet));

    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newCarouselWidth= (sliderItemWidth * 9 + 90 * 8 + 5) + 'px'
    carousel.style.width = newCarouselWidth;
    carousel.style.left = '-' + (sliderItemWidth * 3 + 90 * 2 + 50) + 'px';
};

const getActiveImageIndexes = () => {

    activeIndexes = [];

    let firstIndx = Math.floor(Math.random() * slidElems.length);
    activeIndexes.push(firstIndx);
    let secondIndx = Math.floor(Math.random() * slidElems.length);
    while (firstIndx === secondIndx) {
        secondIndx = Math.floor(Math.random() * slidElems.length);
    };
    activeIndexes.push(secondIndx);
    let thirdIndx = Math.floor(Math.random() * slidElems.length);
    while (thirdIndx === firstIndx || thirdIndx === secondIndx) {
        thirdIndx = Math.floor(Math.random() * slidElems.length);
    };
    activeIndexes.push(thirdIndx);
};

const getPrevImageIndexes = () => {
    prevIndexes = [];

    let firstIndx = Math.floor(Math.random() * slidElems.length);
    while (activeIndexes.includes(firstIndx)) {
        firstIndx = Math.floor(Math.random() * slidElems.length);
    }
    prevIndexes.push(firstIndx);
    let secondIndx = Math.floor(Math.random() * slidElems.length);

    while (firstIndx === secondIndx || activeIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * slidElems.length);
    };
    prevIndexes.push(secondIndx);
    let thirdIndx = Math.floor(Math.random() * slidElems.length);
    while (thirdIndx === firstIndx || thirdIndx === secondIndx || activeIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * slidElems.length);
    };
    prevIndexes.push(thirdIndx);
};

const getNextImageIndexes = (activeIds) => {

    nextIndexes = [];
    let firstIndx = Math.floor(Math.random() * slidElems.length);
    while (activeIndexes.includes(firstIndx)) {
        firstIndx = Math.floor(Math.random() * slidElems.length);
    }
    nextIndexes.push(firstIndx);
    let secondIndx = Math.floor(Math.random() * slidElems.length);
    while (firstIndx === secondIndx || activeIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * slidElems.length);
    };
    nextIndexes.push(secondIndx);
    let thirdIndx = Math.floor(Math.random() * slidElems.length);
    while (thirdIndx === firstIndx || thirdIndx === secondIndx || activeIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * slidElems.length);
    };
    nextIndexes.push(thirdIndx);
};


let rightButtons = document.querySelectorAll('.right');
rightButtons.forEach((button) => {
    button.addEventListener("click", () => {
        prevImages.forEach((pet) => {
            pet.remove()
        });

        activeImages.forEach((pet) => {
            pet.remove();
            prevImg.append(pet);
        });

        nextImages.forEach((pet) => {
            pet.remove();
            activeImg.append(pet);
        });

        prevImages = activeImages;
        activeImages = nextImages;
        prevIndexes = activeIndexes;
        activeIndexes = nextIndexes;

        nextImages = [];
        getNextImageIndexes();
        nextIndexes.forEach((index) => nextImages.push(slidElems[index].cloneNode(true)));
        nextImages.forEach((pet) => nextImg.append(pet));
    });
});

let leftButton = document.querySelector('.left');
leftButton.addEventListener("click", () => {

    nextImages.forEach((pet) => {
        pet.remove()
    });

    activeImages.forEach((pet) => {
        pet.remove();
        nextImg.append(pet);
    });

    prevImages.forEach((pet) => {
        pet.remove();
        activeImg.append(pet);
    });

    nextImages = activeImages;
    activeImages = prevImages;

    nextIndexes = activeIndexes;
    activeIndexes = prevIndexes;

    prevImages = [];
    getPrevImageIndexes();
    prevIndexes.forEach((index) => prevImages.push(slidElems[index].cloneNode(true)));
    prevImages.forEach((pet) => prevImg.append(pet));
});

initSlider();

//pop up window

// activeImages.forEach((item) => {
//     item.addEventListener("click", () => {
//         let id2 = item.id;
//         console.log("hi");
//         console.log(item);
//         switch(id2) {
//             case "Katrine":
//                 document.querySelector(".katrine").classList.toggle("open");
//                 console.log(id2);
//                 console.log(document.querySelector(".katrine"));
//                 break;
//             case "Jennifer":
//                 document.querySelector(".jennifer").classList.toggle("open");
//                 break;
//             case "Woody":
//                 document.querySelector(".woody").classList.toggle("open");
//                 break;
//             case "Sophia":
//                 document.querySelector(".sophia").classList.toggle("open");
//                 break;
//             case "Timmy":
//                 document.querySelector(".timmy").classList.toggle("open");
//                 break;
//             case "Charly":
//                 document.querySelector(".charly").classList.toggle("open");
//                 break;
//             case "Scarlett":
//                 document.querySelector(".scarlett").classList.toggle("open");
//                 break;
//             case "Freddie":
//                 document.querySelector(".freddie").classList.toggle("open");
//                 break;
//     };
//     });
// });


document.querySelectorAll(".slider-item").forEach((item) => {
    // console.log(item)
    // document.querySelector(".wrapper").classList.toggle("fixed");
    item.addEventListener("click", () => {
        // event._isClickWithInPop = true;
        // console.log("hi");
        let id = item.id;
        switch(id) {
            case "Katrine":
                document.querySelector(".katrine").classList.toggle("open");
                console.log("hi");
                break;
            case "Jennifer":
                document.querySelector(".jennifer").classList.toggle("open");
                break;
            case "Woody":
                document.querySelector(".woody").classList.toggle("open");
                break;
            case "Sophia":
                document.querySelector(".sophia").classList.toggle("open");
                break;
            case "Timmy":
                document.querySelector(".timmy").classList.toggle("open");
                break;
            case "Charly":
                document.querySelector(".charly").classList.toggle("open");
                break;
            case "Scarlett":
                document.querySelector(".scarlett").classList.toggle("open");
                break;
            case "Freddie":
                document.querySelector(".freddie").classList.toggle("open");
                break;
    };
        // document.querySelector(".popup").classList.toggle("open"); ----> open pop without id

    });
});

document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".popup").forEach(item => {
            item.classList.remove("open");
        });
        document.querySelector(".wrapper").classList.remove("fixed");
    });
});

document.body.addEventListener("click", event => {
   if (event._isClickWithInPop) return;
   document.querySelectorAll(".popup").forEach(item => {
        item.classList.remove("open");
    });
});