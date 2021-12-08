let carts =document.querySelectorAll('.btn');
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}
// function onload() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers){
//         document.querySelector('.numbercart').textContent = productNumbers;
//     }
// }
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

function ChangeProductList(type,element){
    let tabs = document.getElementsByClassName('btn-pre');
    for(i = 0; i< tabs.length ; i++){
        tabs[i].style.background = '#fff';
    }
    element.style.background = '#fa5030';


    switch(type){
        case 'trend':
            document.getElementById('trend').style.display = 'block';
            document.getElementById('sale').style.display = 'none';
            document.getElementById('new').style.display = 'none';
            break;
        case 'sale':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('sale').style.display = 'block';
            document.getElementById('new').style.display = 'none';
            break;
        case 'new':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('sale').style.display = 'none';
            document.getElementById('new').style.display = 'block';
            break;
        case 'exp':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('sale').style.display = 'none';
            document.getElementById('new').style.display = 'block';
            break;
    }
}