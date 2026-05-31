// Top Bar Close Button

const closeBtn = document.querySelector(".close-btn");
const topBar = document.querySelector(".top-bar");

closeBtn.addEventListener("click", () => {
    topBar.style.display = "none";
});

// collection - Section :---------------------------

const track = document.querySelector(".product-track");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentPosition = 0;
const slideAmount = 320;

nextBtn.addEventListener("click", () => {

    const maxSlide =
        track.scrollWidth -
        track.parentElement.clientWidth;

    if (Math.abs(currentPosition) < maxSlide) {

        currentPosition -= slideAmount;

        if (Math.abs(currentPosition) > maxSlide) {
            currentPosition = -maxSlide;
        }

        track.style.transform =
            `translateX(${currentPosition}px)`;
    }
});

prevBtn.addEventListener("click", () => {

    currentPosition += slideAmount;

    if (currentPosition > 0) {
        currentPosition = 0;
    }

    track.style.transform =
        `translateX(${currentPosition}px)`;
});

// Wishlist :-

const wishlistBtns = document.querySelectorAll(".wishlist");

wishlistBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const icon = btn.querySelector("i");

        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");

    });
});

// Fashion-collection-section :--------------

const tra = document.querySelector(".fashion-slider-track");

const next = document.querySelector(".fashion-next-btn");
const prev = document.querySelector(".fashion-prev-btn");

let cp = 0;

next.addEventListener("click", () => {

    const maxSlide = tra.scrollWidth - tra.parentElement.clientWidth;

    if (Math.abs(cp) < maxSlide) {

        cp -= 320;

        if (Math.abs(cp) > maxSlide) {
            cp = -maxSlide;
        }

        tra.style.transform = `translateX(${cp}px)`;
    }
});

prev.addEventListener("click", () => {

    cp += 320;

    if (cp > 0) {
        cp = 0;
    }

    tra.style.transform = `translateX(${cp}px)`;
});

// whislist :-

const wishlistBtn = document.querySelectorAll(".fashion-wishlist-btn");

wishlistBtn.forEach((btn) => {

    btn.addEventListener("click", () => {

        const icon = btn.querySelector("i");

        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");

    });
});

// Nightwear - section -------

const nightwearTrack = document.querySelector(".nightwear-track");

const nightwearNextBtn = document.querySelector(".nightwear-next-btn");
const nightwearPrevBtn = document.querySelector(".nightwear-prev-btn");

let nightwearPosition = 0;
const nightwearSlideAmount = 320;

nightwearNextBtn.addEventListener("click", () => {

    const maxSlide =
        nightwearTrack.scrollWidth -
        nightwearTrack.parentElement.clientWidth;

    if (Math.abs(nightwearPosition) < maxSlide) {

        nightwearPosition -= nightwearSlideAmount;

        if (Math.abs(nightwearPosition) > maxSlide) {
            nightwearPosition = -maxSlide;
        }

        nightwearTrack.style.transform =
            `translateX(${nightwearPosition}px)`;
    }
});

nightwearPrevBtn.addEventListener("click", () => {

    nightwearPosition += nightwearSlideAmount;

    if (nightwearPosition > 0) {
        nightwearPosition = 0;
    }

    nightwearTrack.style.transform =
        `translateX(${nightwearPosition}px)`;
});

// whislisht :-

const wishlistBt = document.querySelectorAll(".nightwear-wishlist");

wishlistBt.forEach((btn) => {

    btn.addEventListener("click", () => {

        const icon = btn.querySelector("i");

        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");

    });
});

// Favorites - Section :---------------------------------

const favTrack = document.querySelector(".favorites-track");

const favNextBtn = document.querySelector(".favorites-next-btn");
const favPrevBtn = document.querySelector(".favorites-prev-btn");

let favPosition = 0;
const favSlideAmount = 320;

favNextBtn.addEventListener("click", () => {

    const maxSlide =
        favTrack.scrollWidth -
        favTrack.parentElement.clientWidth;

    if (Math.abs(favPosition) < maxSlide) {

        favPosition -= favSlideAmount;

        if (Math.abs(favPosition) > maxSlide) {
            favPosition = -maxSlide;
        }

        favTrack.style.transform =
            `translateX(${favPosition}px)`;
    }
});

favPrevBtn.addEventListener("click", () => {

    favPosition += favSlideAmount;

    if (favPosition > 0) {
        favPosition = 0;
    }

    favTrack.style.transform =
        `translateX(${favPosition}px)`;
});


// wishlist :-

const wishBt = document.querySelectorAll(".favorites-wishlist");

wishBt.forEach((btn) => {

    btn.addEventListener("click", () => {

        const icon = btn.querySelector("i");

        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");

    });
});

//  Tranding - Section :--------------------------------- 

const trandTrack = document.querySelector(".cards-slider");

const trandNextBtn = document.querySelector(".trending-next-btn");
const trandPrevBtn = document.querySelector(".trending-prev-btn");

let trandPosition = 0;
const SlideAmount = 802;

trandNextBtn.addEventListener("click", () => {

    const maxSlide =
        trandTrack.scrollWidth -
        trandTrack.parentElement.clientWidth;

    if (Math.abs(trandPosition) < maxSlide) {

        trandPosition -= SlideAmount;

        if (Math.abs(trandPosition) > maxSlide) {
            trandPosition = -maxSlide;
        }

        trandTrack.style.transform =
            `translateX(${trandPosition}px)`;
    }
});

trandPrevBtn.addEventListener("click", () => {

    trandPosition += SlideAmount;

    if (trandPosition > 0) {
        trandPosition = 0;
    }

    trandTrack.style.transform =
        `translateX(${trandPosition}px)`;
});

// Footer - Section ----------------------------------------------

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;

    alert(`Subscribed with: ${email}`);

    newsletterForm.reset();
});