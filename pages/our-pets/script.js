"use strict";
// hamber-menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener("click", function() {
        document.querySelector(".header-our-pets").classList.toggle("open");
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
    document.querySelector(".header-our-pets").classList.remove("open");
    document.querySelector(".background-layer").classList.remove("open");
});

document.getElementById("nav-list").addEventListener("click", function() {
    document.querySelector(".wrapper").classList.remove("fixed");
    document.querySelector(".header-our-pets").classList.remove("open");
    document.querySelector(".background-layer").classList.remove("open");
});


//pagination

let paginationItems = document.querySelectorAll(".pagination-item");
let pagination = document.querySelector(".pagination");
let pageOne = document.querySelector(".pageOne");
let pageTwo = document.querySelector(".pageTwo");
let pageThree = document.querySelector(".pageThree");
let pageFour = document.querySelector(".pageFour");
let pageFive = document.querySelector(".pageFive");
let pageSix = document.querySelector(".pageSix");
let firstElems = [];
let secondElems = [];
let thirdElems = [];
let fourthElems = [];
let fifthElems = [];
let sixthElems = [];
let firstIndexes = [];
let secondIndexes = [];
let thirdIndexes = [];
let fourthIndexes = [];
let fifthIndexes = [];
let sixthIndexes = [];
let currentPage = 0;
let rightButton = document.querySelector(".right");
let dblRightButton = document.querySelector(".dblRight");
let leftButton = document.querySelector(".left");
let dblLeftButton = document.querySelector(".dblLeft");
let current = document.querySelector(".current");

const initPagination = () => {

    getFirstElems();
    getSecondElems();
    getThirdElems();
    getFourthElems();
    getFifthElems();
    getSixthElems();
    pageTwo.classList.add("hiddenPage");
    pageThree.classList.add("hiddenPage");
    pageFour.classList.add("hiddenPage");
    pageFive.classList.add("hiddenPage");
    pageSix.classList.add("hiddenPage");

    const changePages = (currentPage) => {
        switch(currentPage) {
            case 0:
                pageOne.classList.remove("hiddenPage");
                pageTwo.classList.add("hiddenPage");
                pageThree.classList.add("hiddenPage");
                pageFour.classList.add("hiddenPage");
                pageFive.classList.add("hiddenPage");
                pageSix.classList.add("hiddenPage");
                current.innerText = currentPage + 1;
                break;
            case 1:
                pageOne.classList.add("hiddenPage");
                pageTwo.classList.remove("hiddenPage");
                pageThree.classList.add("hiddenPage");
                current.innerText = currentPage + 1;
                break;
            case 2:
                pageTwo.classList.add("hiddenPage");
                pageThree.classList.remove("hiddenPage");
                pageFour.classList.add("hiddenPage");
                current.innerText = currentPage + 1;
                break;
            case 3:
                pageThree.classList.add("hiddenPage");
                pageFour.classList.remove("hiddenPage");
                pageFive.classList.add("hiddenPage");
                current.innerText = currentPage + 1;
                break;
            case 4:
                pageFour.classList.add("hiddenPage");
                pageFive.classList.remove("hiddenPage");
                pageSix.classList.add("hiddenPage");
                current.innerText = currentPage + 1;
                break;
            case 5:
                pageOne.classList.add("hiddenPage");
                pageTwo.classList.add("hiddenPage");
                pageThree.classList.add("hiddenPage");
                pageFour.classList.add("hiddenPage");
                pageFive.classList.add("hiddenPage");
                pageSix.classList.remove("hiddenPage");
                current.innerText = currentPage + 1;
                break;
        };
    };

    rightButton.addEventListener("click", () => {

        currentPage = currentPage + 1;
        if (currentPage >= 5) {
            currentPage = 5;
            rightButton.classList.remove("control-button");
            dblRightButton.classList.remove("control-button");
            rightButton.classList.add("unactive-control-button");
            dblRightButton.classList.add("unactive-control-button");
        };
        leftButton.classList.remove("unactive-control-button");
        leftButton.classList.add("control-button");
        dblLeftButton.classList.remove("unactive-control-button");
        dblLeftButton.classList.add("control-button");
        changePages(currentPage);
        return currentPage;
    });

    dblRightButton.addEventListener("click", () => {
        currentPage = 5;

        leftButton.classList.remove("unactive-control-button");
        dblLeftButton.classList.remove("unactive-control-button");
        leftButton.classList.add("control-button");
        dblLeftButton.classList.add("control-button");

        rightButton.classList.remove("control-button");
        dblRightButton.classList.remove("control-button");
        rightButton.classList.add("unactive-control-button");
        dblRightButton.classList.add("unactive-control-button");
        changePages(currentPage);
        return currentPage;
    });

    leftButton.addEventListener("click", () => {
        currentPage = currentPage - 1;
        if (currentPage <= 0) {
            currentPage = 0;
            leftButton.classList.add("unactive-control-button");
            dblLeftButton.classList.add("unactive-control-button");
        };
        rightButton.classList.remove("unactive-control-button");
        dblRightButton.classList.remove("unactive-control-button");
        rightButton.classList.add("control-button");
        dblRightButton.classList.add("control-button");
        changePages(currentPage);
        return currentPage;
    });

    dblLeftButton.addEventListener("click", () => {
        currentPage = 0;

        pageOne.classList.remove("hiddenPage");

        leftButton.classList.remove("control-button");
        dblLeftButton.classList.remove("control-button");
        leftButton.classList.add("unactive-control-button");
        dblLeftButton.classList.add("unactive-control-button");

        rightButton.classList.add("control-button");
        dblRightButton.classList.add("control-button");
        rightButton.classList.remove("unactive-control-button");
        dblRightButton.classList.remove("unactive-control-button");
        changePages(currentPage);
        return currentPage;
    });

}

const getFirstElems = () => {
    firstElems = [];
    firstIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    firstElems.push(paginationItems[firstIndx].cloneNode(true));
    firstIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (firstIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[secondIndx].cloneNode(true));
    firstIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[thirdIndx].cloneNode(true));
    firstIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[fourthIndx].cloneNode(true));
    firstIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[fifthIndx].cloneNode(true));
    firstIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[sixthIndx].cloneNode(true));
    firstIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[seventhIndx].cloneNode(true));
    firstIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (firstIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    firstElems.push(paginationItems[eigthIndx].cloneNode(true));
    firstIndexes.push(eigthIndx);

    firstElems.forEach((item) => pageOne.append(item));
};

const getSecondElems = () => {
    secondElems = [];
    secondIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    secondElems.push(paginationItems[firstIndx].cloneNode(true));
    secondIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (secondIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[secondIndx].cloneNode(true));
    secondIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[thirdIndx].cloneNode(true));
    secondIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[fourthIndx].cloneNode(true));
    secondIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[fifthIndx].cloneNode(true));
    secondIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[sixthIndx].cloneNode(true));
    secondIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[seventhIndx].cloneNode(true));
    secondIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (secondIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    secondElems.push(paginationItems[eigthIndx].cloneNode(true));
    secondIndexes.push(eigthIndx);

    secondElems.forEach((item) => pageTwo.append(item));
};

const getThirdElems = () => {
    thirdElems = [];
    thirdIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    thirdElems.push(paginationItems[firstIndx].cloneNode(true));
    thirdIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (thirdIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[secondIndx].cloneNode(true));
    thirdIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[thirdIndx].cloneNode(true));
    thirdIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[fourthIndx].cloneNode(true));
    thirdIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[fifthIndx].cloneNode(true));
    thirdIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[sixthIndx].cloneNode(true));
    thirdIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[seventhIndx].cloneNode(true));
    thirdIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (thirdIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    thirdElems.push(paginationItems[eigthIndx].cloneNode(true));
    thirdIndexes.push(eigthIndx);

    thirdElems.forEach((item) => pageThree.append(item));
};

const getFourthElems = () => {
    fourthElems = [];
    fourthIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    fourthElems.push(paginationItems[firstIndx].cloneNode(true));
    fourthIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (fourthIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[secondIndx].cloneNode(true));
    fourthIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[thirdIndx].cloneNode(true));
    fourthIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[fourthIndx].cloneNode(true));
    fourthIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[fifthIndx].cloneNode(true));
    fourthIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[sixthIndx].cloneNode(true));
    fourthIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[seventhIndx].cloneNode(true));
    fourthIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fourthIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fourthElems.push(paginationItems[eigthIndx].cloneNode(true));
    fourthIndexes.push(eigthIndx);

    fourthElems.forEach((item) => pageFour.append(item));
};

const getFifthElems = () => {
    fifthElems = [];
    fifthIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    fifthElems.push(paginationItems[firstIndx].cloneNode(true));
    fifthIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (fifthIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[secondIndx].cloneNode(true));
    fifthIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[thirdIndx].cloneNode(true));
    fifthIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[fourthIndx].cloneNode(true));
    fifthIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[fifthIndx].cloneNode(true));
    fifthIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[sixthIndx].cloneNode(true));
    fifthIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[seventhIndx].cloneNode(true));
    fifthIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (fifthIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    fifthElems.push(paginationItems[eigthIndx].cloneNode(true));
    fifthIndexes.push(eigthIndx);

    fifthElems.forEach((item) => pageFive.append(item));
};

const getSixthElems = () => {
    sixthElems = [];
    sixthIndexes = [];

    let firstIndx = Math.floor(Math.random() * paginationItems.length);
    sixthElems.push(paginationItems[firstIndx].cloneNode(true));
    sixthIndexes.push(firstIndx);

    let secondIndx = Math.floor(Math.random() * paginationItems.length);

    while (sixthIndexes.includes(secondIndx)) {
        secondIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[secondIndx].cloneNode(true));
    sixthIndexes.push(secondIndx);

    let thirdIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(thirdIndx)) {
        thirdIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[thirdIndx].cloneNode(true));
    sixthIndexes.push(thirdIndx);

    let fourthIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(fourthIndx)) {
        fourthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[fourthIndx].cloneNode(true));
    sixthIndexes.push(fourthIndx);

    let fifthIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(fifthIndx)) {
        fifthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[fifthIndx].cloneNode(true));
    sixthIndexes.push(fifthIndx);

    let sixthIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(sixthIndx)) {
        sixthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[sixthIndx].cloneNode(true));
    sixthIndexes.push(sixthIndx);

    let seventhIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(seventhIndx)) {
        seventhIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[seventhIndx].cloneNode(true));
    sixthIndexes.push(seventhIndx);

    let eigthIndx = Math.floor(Math.random() * paginationItems.length);
    while (sixthIndexes.includes(eigthIndx)) {
        eigthIndx = Math.floor(Math.random() * paginationItems.length);
    };
    sixthElems.push(paginationItems[eigthIndx].cloneNode(true));
    sixthIndexes.push(eigthIndx);

    sixthElems.forEach((item) => pageSix.append(item));
};

initPagination();

//open popup with elements id
document.querySelectorAll(".pagination-item").forEach(item => {
    // document.querySelector(".wrapper").classList.toggle("fixed");
    item.addEventListener("click", () => {
        event._isClickWithInPop = true;
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


// open pop with id
// document.getElementById("Katrine").addEventListener("click", function() {
//     document.querySelector(".popup").classList.toggle("open");
//     document.querySelector(".wrapper").classList.toggle("fixed");
//     event._isClickWithInPop = true;
// });

// close popup
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