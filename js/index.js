
/**
 * render Footer
 */
const printFooter = function(){
    $('.footer').empty();
    let year = new Date().getFullYear();
    let url = window.location.href;
    let prefix = "";
    if(url.includes("product-type") || url.includes("product-details")){
        prefix = ".";
    }
    $('.footer').append(`
    <div class='footer-box1'>
            <div class='footer-center-box'>
                <p class='footer-title'>Dr. Kellie Middleton Fundation</p>
                <p class='footer-content'>street address</p>
                <p class='footer-content'>city, state, zip code</p>
                <p class='footer-title'>contact Us</p>
                <p class='footer-content'>Phone: phone number </p>
                <p class='footer-content'>Email: email address</p>
            </div>
        </div>
        <div class='footer-box2'>
            <div class='footer-center-box'>
                <p class='footer-title'>Financial Reports</p>
                <p class='footer-content'>insert link here</p>
                <p class='footer-title'>Follow Us On</p>
                <p class='footer-media-logo'>
                    <a href="#" alt='facebook link'
                        target='_blank'><i class="fab fa-facebook"></i></a>
                    <a href="#" alt='linkedin link' target='_blank'><i
                            class="fab fa-linkedin"></i></a>
                    <a href="#" alt='twitter link' target='_blank'><i
                            class="fab fa-twitter"></i></a>
                </p>
            </div>
        </div>       
        <div class="footer-box3">
            <div class='footer-logo'><img src='${prefix}./img/logo-new.png' alt='everel america logo' /></div>
        </div>
        <div class='footer-box4'>Dr. Kellie Middleton Fundation &copy;${year}-All rights reserved<br/>
        </div>`);
}
printFooter();


/*
 * render navigation bar
 */
const printNavigation = function(){
    let url = window.location.href;
    let prefix = "";
    if(url.includes("product-type") || url.includes("product-details")){
        prefix = "../";
    }
    $('.header-nav').empty();
    $('.header-nav').append(`
        <a href="${prefix}index.html" class="header-nav-item">Home</a>
        <a href="${prefix}#intro" class="header-nav-item">About Us</a>
        <a href="${prefix}#contact" class="header-nav-item">Contact Us</a>
    `);

    $('.navigation__nav').empty();
    $('.navigation__nav').append(`
    <ul class="navigation__list">
        <li class="navigation__item"><a href="${prefix}index.html" class="navigation__link" ><span>01</span>Home</a></li>
        <li class="navigation__item"><a href="${prefix}#intro" class="navigation__link" ><span>02</span>About Us</a></li>
        <li class="navigation__item"><a href="${prefix}#contact" class="navigation__link" ><span>05</span>Contact Us</a></li>
    </ul>
    `);
}

printNavigation();


/*
 *sticky feature for nav-bar 
 */
function navSticky(x) {
    let navbar1 = document.getElementById('header-top');


    if (x.matches) {
        if (window.pageYOffset >= 100) {
            navbar1.classList.add("sticky");
        } else {
            navbar1.classList.remove("sticky");
        }
    }
}

let viewPort = window.matchMedia("(min-width: 56.26em)");
window.onscroll = function () { navSticky(viewPort) };


