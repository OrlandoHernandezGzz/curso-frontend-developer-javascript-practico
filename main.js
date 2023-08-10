const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}