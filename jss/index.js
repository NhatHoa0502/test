let carts =document.querySelectorAll('.btn');
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}
function onload() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.numbercart').textContent = productNumbers;
    }
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.header__cart-notice').textContent =productNumbers+1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.header__cart-notice').textContent = 1;
    }
}

// const addToCartBTn = document.querySelectorAll(".btn");

// addToCartBTn.forEach( btn => {
//     let parentElement = btn.parentElement.parentElement.parentElement
//     const product = {
//         id: parentElement.querySelector(".product-price").value
//         console.log(id);
//     }
// })