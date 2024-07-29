// var button = document.getElementById("signupButtonmain");

// button.addEventListener("click", function () {
//     window.location.href = "/signup.html";
// });

function navigateToHome() {
   window.location.href = "/";
   return false;
}

// document.getElementById("signupButton").addEventListener("click", function() {
//     window.location.href = "/index.html";

//     this.classList.add("active");
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const lazyImages = document.querySelectorAll("img[data-src]");

//     const lazyLoad = function () {
//        lazyImages.forEach(img => {
//           if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
//              img.src = img.dataset.src;
//              img.removeAttribute("data-src");
//           }
//        });
//     };

//     lazyLoad();

//     document.addEventListener("scroll", lazyLoad);
//     window.addEventListener("resize", lazyLoad);


//     const navLinks = document.querySelectorAll(".navigation a");
//     navLinks.forEach(link => {
//        link.setAttribute("title", `Visit ${link.textContent} page`);
//     });

//     const playlistItems = document.querySelectorAll(".spotify-playlist .item");
//     playlistItems.forEach(item => {
//        item.addEventListener("mouseenter", function () {
//           this.classList.add("hover");
//        });
//        item.addEventListener("mouseleave", function () {
//           this.classList.remove("hover");
//        });
//     });
//  })