const btn = document.querySelectorAll(".btn")
// console.log(btn)
btn.forEach(function(btn,index){
btn.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement.parentElement
        var productImg =product.querySelector(".product-img_size").src
        var productName = product.querySelector(".product-name").innerText
        var productPrice = product.querySelector(".product-price").innerText
        addcart(productImg,productName,productPrice)
}})
})

function addcart(productImg,productName,productPrice) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll('.name-cart')
        if(productT[i].innerHTML == productName ){
            alert("San Pham Da Co Trong Gio Hanf")
            return 
        }
    }
    var trcontent = '<tr><td><i  class="icon-cart fas fa-trash-alt"></i></td><td><img class="img-cart" src="'+productImg+'" alt=""></td><td><h4 class="name-cart">'+productName+'</h4></td><td><input type="number" name="" id="" value="1" class="number-cart"></td><td><h4 class="price-cart">'+productPrice+'</h4><sup>d</sup></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deletec()
}

function carttotal () {
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.length)
    var totalC = 0;
    for(var i=0;i<cartItem.length;i++){
        var inputvalue = cartItem[i].querySelector(".number-cart").value
        // console.log(inputvalue)
        var productPrice = cartItem[i].querySelector(".price-cart").innerText
        // console.log(productPrice)
        totalA = inputvalue*productPrice*1000
        totalC = totalC +totalA
        // totalD =totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".proce-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')

}
function deletec () {
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".icon-cart")
        productT[i].addEventListener("click",function(event){
            var cartdelete = event.target
            var cartitemR = cartdelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
    }
}
