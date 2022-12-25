const succesMessage = document.querySelector(".succes-result");
const overlay = document.querySelector(".overlay");
const submit = document.getElementById("submitbtn");
const okBtn = document.querySelector(".okBtn");
overlay.style.visibility = "hidden";
succesMessage.style.display = "none";
let flag = true;
submit.addEventListener("click", () => {
  if (flag == true) {
    overlay.style.visibility = "visible";
    succesMessage.style.display = "flex";
    flag = false;
  }
});
okBtn.addEventListener("click", () => {
  if (flag == false) {
    overlay.style.visibility = "hidden";
    succesMessage.style.visibility = "hidden";
    flag = true;
  }
});
let checkout = document.querySelector(".totalCheckout");
const priceHam = parseInt(document.querySelector(".price-tag-ham").innerHTML);
const priceHamSp = parseInt(
  document.querySelector(".price-tag-ham-sp").innerHTML
);
const priceHamChe = parseInt(
  document.querySelector(".price-tag-ham-cheese").innerHTML
);
const priceHamSpChe = parseInt(
  document.querySelector(".price-tag-ham-sp-cheese").innerHTML
);
const priceFry = parseInt(document.querySelector(".price-tag-frise").innerHTML);
const priceFrySp = parseInt(
  document.querySelector(".price-tag-frise-sp").innerHTML
);
const priceSoda = parseInt(document.querySelector(".price-tag-soda").innerHTML);
const priceDsoda = parseInt(
  document.querySelector(".price-tag-dSoda").innerHTML
);
const priceSeason = parseInt(
  document.querySelector(".price-tag-seasonSalad").innerHTML
);
const priceSeaser = parseInt(
  document.querySelector(".price-tag-seaserSalad").innerHTML
);
console.log(checkout);
console.log(priceHam);
console.log(priceFry);
console.log(priceHamSp);
console.log(priceSeaser);
console.log(priceSeason);
console.log(priceHamSpChe);
class render {
  constructor(price) {
    this.price = price;
  }
  add() {
    // checkout.innerHTML = 3 + 2;
    if (checkout.innerHTML == 0) {
      checkout.innerHTML = ` `;
      checkout.innerHTML = this.price;
    } else {
      const prevNum = checkout.innerHTML;
      checkout.innerHTML = ` `;

      checkout.innerHTML = Number(prevNum) + this.price;
    }
    // console.log(checkout.innerHTML);
  }
  remove() {
    if (checkout.innerHTML == 0) {
    } else {
      const prevNum = checkout.innerHTML;
      checkout.innerHTML = ` `;

      checkout.innerHTML = Number(prevNum) - this.price;
    }
  }
}

console.log(document.querySelectorAll(".addBtn"));

const addBtns = document.querySelectorAll(".addBtn");
//beacuse the querySelectorAll gives us an html collection we need to loop it to have addEventListener for every addBtn and remBtn
for (const iterator of addBtns) {
  iterator.addEventListener("click", function (e) {
    //iterator is our div with class="add-remove addBtn" from there we go up and manipulate the elements
    let foodprice = parseInt(
      iterator.parentElement.parentElement.parentElement.children.item(1)
        .innerHTML
    );
    const counter = iterator.parentElement.children.item(1);
    if (counter.innerHTML == 0) {
      counter.innerHTML = ` `;
      counter.innerHTML++;
    } else {
      const prevCounter = counter.innerHTML;
      counter.innerHTML = ` `;

      counter.innerHTML = Number(prevCounter) + 1;
    }

    //from the iterator we go up to have acces to the div with class="price" and manipulate it
    let totalPrice = iterator.parentElement.parentElement.children
      .item(1)
      .children.item(0);

    if (totalPrice.innerHTML == 0) {
      totalPrice.innerHTML = Number(counter.innerHTML) * foodprice;
    } else {
      totalPrice.innerHTML = ` `;

      totalPrice.innerHTML = Number(counter.innerHTML) * foodprice;
    }

    //then we goes to payment card to set حق سرویس و کارمزد :
    const card = document.querySelector(".payment-card");
    const service = card.children.item(1).children.item(1).firstChild;
    if (service.innerHTML == 0) {
      service.innerHTML = (5 / 100) * foodprice;
    } else {
      const preService = service.innerHTML;
      service.innerHTML = ` `;

      service.innerHTML = +preService + (5 / 100) * foodprice;
    }
    //we goes to set the final prise now
    const finalPrice = card.children.item(4).children.item(1).firstChild;
    if (finalPrice.innerHTML == 0) {
      finalPrice.innerHTML = +totalPrice.innerHTML - Number(service.innerHTML);
    } else {
      finalPrice.innerHTML = ` `;

      finalPrice.innerHTML = +totalPrice.innerHTML - Number(service.innerHTML);
    }
    console.log(finalPrice);
    //then we build new render class that inherit al methodes that we declare like add and remove and use them to add and remove the number of food from checkout dev
    const priceHamber = new render(foodprice);
    priceHamber.add();
  });
}

const remBtns = document.querySelectorAll(".remBtn");
for (const iterator of remBtns) {
  iterator.addEventListener("click", function (e) {
    const foodprice = parseInt(
      iterator.parentElement.parentElement.parentElement.children.item(1)
        .innerHTML
    );
    const counter = iterator.parentElement.children.item(1);
    if (counter.innerHTML == 0) {
    } else {
      const prevCounter = counter.innerHTML;
      counter.innerHTML = ` `;

      counter.innerHTML = Number(prevCounter) - 1;
    }

    let totalPrice = iterator.parentElement.parentElement.children
      .item(1)
      .children.item(0);

    if (totalPrice.innerHTML == 0) {
      totalPrice.innerHTML = Number(counter.innerHTML) * foodprice;
    } else {
      totalPrice.innerHTML = ` `;

      totalPrice.innerHTML = Number(counter.innerHTML) * foodprice;
    }

    const card = document.querySelector(".payment-card");
    const service = card.children.item(1).children.item(1).firstChild;
    if (service.innerHTML == 0) {
    } else {
      const preService = service.innerHTML;
      service.innerHTML = ` `;

      service.innerHTML = +preService - (5 / 100) * foodprice;
    }

    const priceHamberrem = new render(foodprice);
    priceHamberrem.remove();
    //we do all of it for remove with a slight change
  });
}

const card = document.querySelector(".payment-card");
const discount = card.children.item(3).children.item(0);
console.log(discount);
card.children
  .item(3)
  .children.item(1)
  .addEventListener("click", () => {
    alert("کد تخفیف اشتباه می باشد");
  });

// console.log(service);
