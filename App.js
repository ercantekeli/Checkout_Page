let buttonMin = document.querySelectorAll(".fa-minus");
let buttonPlus = document.querySelectorAll(".fa-plus");
let counterBag = document.querySelectorAll("#product-quantity");
let deleted = document.querySelectorAll(".remove-product");
let productTotal = document.querySelectorAll("product-line-price");
let productPrice = document.getElementsByTagName("strong")
// console.log(productPrice);

// Array.from(productPrice).forEach 
function calculator(e) {
    if(e.target.classList.contains("fa-plus")){
    let a = +e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML;
    
    let b = +e.target.parentElement.parentElement.previousElementSibling.childNodes[1].firstChild.innerHTML;
    num1 = b;

    let c = +e.target.parentElement.previousElementSibling.innerHTML;

    a = b*c;
    a = a.toFixed(2);


    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = a;   
}
    else{
    let a = +e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML;
    
    let b = +e.target.parentElement.parentElement.previousElementSibling.childNodes[1].firstChild.innerHTML;
    num1 = b;

    let c = +e.target.parentElement.nextElementSibling.innerHTML;

    a = b*c;
    a = a.toFixed(2);
    

    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = a;   

}};



buttonMin.forEach((minus) => {
  minus.addEventListener("click", (e) => {
      let num = +e.target.parentElement.nextElementSibling.innerHTML
      if (num> 0) {
      e.target.parentElement.nextElementSibling.innerHTML -=1 ;
      calculator(e);
      }
    
  });
    
});


buttonPlus.forEach((plus) => {
  plus.addEventListener("click", (e) => {
    //   console.log(e.target);
      let num = +e.target.parentElement.previousElementSibling.innerHTML
      num += 1 ;
      e.target.parentElement.previousElementSibling.innerHTML = num;
      calculator(e);



  });
});


deleted.forEach((remove) => {
  remove.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });
});