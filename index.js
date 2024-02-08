const totalTemplate = document.getElementById("cartTotal");
const itemTemplate = document.getElementById("cartItem");

function deleteItem(event) {
  $(this).closest('.cart-item-container').remove();
  cart.trigger('update-ticket');
}

function addItem(title, price) {
  const cart = $('#cart-items');
  const newItem = itemTemplate.content.firstElementChild.cloneNode(true);
  cart[0].appendChild(newItem);
  const newCart = cart.find('.cart-item-container').last();
  newCart.data("cost", price)
    .find('.cart-item-heading').html(title);
  newCart.find('.price-value').html(price);

  cart.trigger('update-ticket');
}

function getSubtotal(el) {
  return el.dataset.subtotal * 1;
}

function setup() {
  const t = totalTemplate.content.firstElementChild.cloneNode(true);
  document.querySelector('.cart-math').appendChild(t);
}

function getCost(cart) {
  let sum = 0;
  cart.find('.cart-item-container').each(function(e) {
    sum = sum + ($(this).data('cost') * 1);
  });
  return sum;
}
const calculateserviceCharge = subtotal => {
  const serviceCharge = subtotal * .12;
  const formattedserviceCharge = serviceCharge.toFixed(2);
  return formattedserviceCharge;
};

const calculateTotal = subtotal => {
  const serviceCharge = calculateserviceCharge(subtotal);
  const total = parseFloat(subtotal) + parseFloat(serviceCharge);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const cart = $('#cart-items')
  .on('update-ticket', function() {
    let subtotal = getCost($(this));
    const formattedSubtotal = subtotal.toFixed(2.3);
    const serviceCharge = calculateserviceCharge(subtotal);
    const total = calculateTotal(subtotal);
    $('.cart-math').find('.subtotal-value').html(formattedSubtotal);
    $('.cart-math').find('.tax-value').html(serviceCharge);
    $('.cart-math').find('.total-value').html(total);
  })
  .on('click', '.delete', deleteItem);

$('.btn.food-item').on('click', function(event) {
  const title = $(this).data('title');
  const price = $(this).data('price');
  addItem(title, price);
});
setup();
                
                    const modal = document.querySelector(".bread");
                    const show = document.querySelector('.show');
                    const hide = document.querySelector('.hide');
                    
                    let flag = true;
                    show.onclick = popUp;
              
                    hide.onclick = e => modal.close();
                   
                    function popUp(e) {
                      modal.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    
                   
                    const modal2 = document.querySelector(".starters");
                    const show2 = document.querySelector('.show-2');
                    const hide2 = document.querySelector('.hide-2');

                    show2.onclick = popUp2;
                    hide2.onclick = e => modal2.close();
                   
                    function popUp2(e) {
                      modal2.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal2.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    
                    const modal3 = document.querySelector(".mains");
                    const show3 = document.querySelector('.show-3');
                    const hide3 = document.querySelector('.hide-3');

                    show3.onclick = popUp3;
                    hide3.onclick = e => modal3.close();
                   
                    function popUp3(e) {
                      modal3.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal3.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
 }
                    
                    const modal4 = document.querySelector(".pizza");
                    const show4 = document.querySelector('.show-4');
                    const hide4 = document.querySelector('.hide-4');

                    show4.onclick = popUp4;
                    hide4.onclick = e => modal4.close();

                    function popUp4(e) {
                    modal4.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal4.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                    const modal5 = document.querySelector(".pasta");
                    const show5 = document.querySelector('.show-5');
                    const hide5 = document.querySelector('.hide-5');

                    show5.onclick = popUp5;
                    hide5.onclick = e => modal5.close();

                    function popUp5(e) {
                    modal5.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal5.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    const modal6 = document.querySelector(".steaks");
                    const show6 = document.querySelector('.show-6');
                    const hide6 = document.querySelector('.hide-6');

                    show6.onclick = popUp6;
                    hide6.onclick = e => modal6.close();

                    function popUp6(e) {
                    modal6.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal6.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }

                    const modal7 = document.querySelector(".steakExperience");
                    const show7 = document.querySelector('.show-7');
                    const hide7 = document.querySelector('.hide-7');
                    
               
                    show7.onclick = popUp7;
              
                    hide7.onclick = e => modal7.close();
                   

                    function popUp7(e) {
                      modal7.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    const modal8 = document.querySelector(".chateaubriand");
                    const show8 = document.querySelector('.show-8');
                    const hide8 = document.querySelector('.hide-8');

                    show8.onclick = popUp8;
                    hide8.onclick = e => modal8.close();
                   
                    function popUp8(e) {
                    modal8.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal8.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    const modal9 = document.querySelector(".filletSteak");
                    const show9 = document.querySelector('.show-9');
                    const hide9 = document.querySelector('.hide-9');

                    show9.onclick = popUp9;
                    hide9.onclick = e => modal9.close();
                    

                    function popUp9(e) {
                    modal9.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal9.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }

                    const modal10 = document.querySelector(".ribEye");
                    const show10 = document.querySelector('.show-10');
                    const hide10 = document.querySelector('.hide-10');

                    show10.onclick = popUp10;
                    hide10.onclick = e => modal10.close();
                   

                    function popUp10(e) {
                    modal10.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal10.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    const modal11 = document.querySelector(".flankSteak");
                    const show11 = document.querySelector('.show-11');
                    const hide11 = document.querySelector('.hide-11');
                   
                    show11.onclick = popUp11;
                    hide11.onclick = e => modal11.close();
                   
                    function popUp11(e) {
                    modal11.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal11.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    

                   
                    
                    const modal12 = document.querySelector(".salads");
                    const show12 = document.querySelector('.show-12');
                    const hide12 = document.querySelector('.hide-12');

                    show12.onclick = popUp12;
                    hide12.onclick = e => modal12.close();
                   
                    function popUp12(e) {
                      modal12.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal12.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    
                    const modal13 = document.querySelector(".sides");
                    const show13 = document.querySelector('.show-13');
                    const hide13 = document.querySelector('.hide-13');

                    show13.onclick = popUp13;
                    hide13.onclick = e => modal13.close();
                   
                    function popUp13(e) {
                      modal13.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal13.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
 }
                    
                    const modal14 = document.querySelector(".roasts");
                    const show14 = document.querySelector('.show-14');
                    const hide14 = document.querySelector('.hide-14');

                    show14.onclick = popUp14;
                    hide14.onclick = e => modal14.close();

                    function popUp14(e) {
                    modal14.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal14.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                    const modal15 = document.querySelector(".brunch");
                    const show15 = document.querySelector('.show-15');
                    const hide15 = document.querySelector('.hide-15');

                    show15.onclick = popUp15;
                    hide15.onclick = e => modal15.close();

                    function popUp15(e) {
                    modal15.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal15.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    const modal16 = document.querySelector(".cannoli");
                    const show16 = document.querySelector('.show-16');
                    const hide16 = document.querySelector('.hide-16');

                    show16.onclick = popUp16;
                    hide16.onclick = e => modal16.close();

                    function popUp16(e) {
                    modal16.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal16.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                    const modal17 = document.querySelector(".desserts");
                    const show17 = document.querySelector('.show-17');
                    const hide17 = document.querySelector('.hide-17');

                    show17.onclick = popUp17;
                    hide17.onclick = e => modal17.close();
                 

                    function popUp17(e) {
                    modal17.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal17.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                                        
                    const modal18 = document.querySelector(".gelato");
                    const show18 = document.querySelector('.show-18');
                    const hide18 = document.querySelector('.hide-18');

                    show18.onclick = popUp18;
                    hide18.onclick = e => modal18.close();
                    modal18.onclick = e => modal18.close();

                    function popUp18(e) {
                    modal18.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal18.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                                        
                    const modal19 = document.querySelector(".sorbet");
                    const show19 = document.querySelector('.show-19');
                    const hide19 = document.querySelector('.hide-19');

                    show19.onclick = popUp19;
                    hide19.onclick = e => modal19.close();
                    modal19.onclick = e => modal19.close();

                    function popUp19(e) {
                    modal19.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal19.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                                        
                    const modal20 = document.querySelector(".kids");
                    const show20 = document.querySelector('.show-20');
                    const hide20 = document.querySelector('.hide-20');

                    show20.onclick = popUp20;
                    hide20.onclick = e => modal20.close();

                    function popUp20(e) {
                    modal20.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal20.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                                        
                    const modal21 = document.querySelector(".spritz");
                    const show21 = document.querySelector('.show-21');
                    const hide21 = document.querySelector('.hide-21');
                    
                   
                    show21.onclick = popUp21;
                    hide21.onclick = e => modal21.close();
                    
                    function popUp21(e) {
                    modal21.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal21.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    
                    const modal22 = document.querySelector(".cocktails");
                    const show22 = document.querySelector('.show-22');
                    const hide22 = document.querySelector('.hide-22');

                    show22.onclick = popUp22;
                    hide22.onclick = e => modal22.close();
                   
                    function popUp22(e) {
                      modal22.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal22.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
                    }
                    
                    const modal23 = document.querySelector(".gt");
                    const show23 = document.querySelector('.show-23');
                    const hide23 = document.querySelector('.hide-23');

                    show23.onclick = popUp23;
                    hide23.onclick = e => modal23.close();
                   
                    function popUp23(e) {
                      modal23.showModal();
                      
                        if (!flag) {
                        return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal23.appendChild(newDiv);
                
                        for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                        
                        }
                      }
                      flag = false;
                    
                    
 }
                    
                    const modal24 = document.querySelector(".nacocktails");
                    const show24 = document.querySelector('.show-24');
                    const hide24 = document.querySelector('.hide-24');

                    show24.onclick = popUp24;
                    hide24.onclick = e => modal24.close();

                    function popUp24(e) {
                    modal24.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal24.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                    const modal25 = document.querySelector(".fizz");
                    const show25 = document.querySelector('.show-25');
                    const hide25 = document.querySelector('.hide-25');

                    show25.onclick = popUp25;
                    hide25.onclick = e => modal25.close();

                    function popUp25(e) {
                    modal25.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal25.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                    const modal26 = document.querySelector(".prosecco");
                    const show26 = document.querySelector('.show-26');
                    const hide26 = document.querySelector('.hide-26');

                    show26.onclick = popUp26;
                    hide26.onclick = e => modal26.close();
                    modal26.onclick = e => modal26.close();
                    function popUp26(e) {
                    modal26.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal26.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                                        
                    const modal27 = document.querySelector(".roseProsecco");
                    const show27 = document.querySelector('.show-27');
                    const hide27 = document.querySelector('.hide-27');

                    show27.onclick = popUp27;
                    hide27.onclick = e => modal27.close();
                    modal27.onclick = e => modal27.close();

                    function popUp27(e) {
                    modal27.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal27.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                    const modal28 = document.querySelector(".ferrariBrut");
                    const show28 = document.querySelector('.show-28');
                    const hide28 = document.querySelector('.hide-28');

                    show28.onclick = popUp28;
                    hide28.onclick = e => modal28.close();
                    modal28.onclick = e => modal28.close();

                    function popUp28(e) {
                    modal28.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal28.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                                        
                    const modal29 = document.querySelector(".maxBrut");
                    const show29 = document.querySelector('.show-29');
                    const hide29 = document.querySelector('.hide-29');

                    show29.onclick = popUp29;
                    hide29.onclick = e => modal29.close();
                    modal29.onclick = e => modal29.close();

                    function popUp29(e) {
                    modal29.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal29.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                                        
                    const modal30 = document.querySelector(".whiteWine");
                    const show30 = document.querySelector('.show-30');
                    const hide30 = document.querySelector('.hide-30');

                    show30.onclick = popUp30;
                    hide30.onclick = e => modal30.close();

                    function popUp30(e) {
                    modal30.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal30.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                    const modal31 = document.querySelector(".sanPinot");
                    const show31 = document.querySelector('.show-31');
                    const hide31 = document.querySelector('.hide-31');

                    show31.onclick = popUp31;
                    hide31.onclick = e => modal31.close();
                    modal31.onclick = e => modal31.close();
                    function popUp31(e) {
                    modal31.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal31.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                    
                    
                    const modal32 = document.querySelector(".vernaSauv");
                    const show32 = document.querySelector('.show-32');
                    const hide32 = document.querySelector('.hide-32');

                    show32.onclick = popUp32;
                    hide32.onclick = e => modal32.close();
                    modal32.onclick = e => modal32.close();

                    function popUp32(e) {
                    modal32.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal32.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                    
                                                           
                    const modal33 = document.querySelector(".gaviGavi");
                    const show33 = document.querySelector('.show-33');
                    const hide33 = document.querySelector('.hide-33');

                    show33.onclick = popUp33;
                    hide33.onclick = e => modal33.close();
                    modal33.onclick = e => modal33.close();

                    function popUp33(e) {
                    modal33.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal33.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                             
                    const modal34 = document.querySelector(".praOtto");
                    const show34 = document.querySelector('.show-34');
                    const hide34 = document.querySelector('.hide-34');

                    show34.onclick = popUp34;
                    hide34.onclick = e => modal34.close();
                    modal34.onclick = e => modal34.close();

                    function popUp34(e) {
                    modal34.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal34.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                         
                    
                    const modal35 = document.querySelector(".sicilane");
                    const show35 = document.querySelector('.show-35');
                    const hide35 = document.querySelector('.hide-35');

                    show35.onclick = popUp35;
                    hide35.onclick = e => modal35.close();
                    modal35.onclick = e => modal35.close();

                    function popUp35(e) {
                    modal35.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal35.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                             
                    const modal36 = document.querySelector(".altoChard");
                    const show36 = document.querySelector('.show-36');
                    const hide36 = document.querySelector('.hide-36');

                    show36.onclick = popUp36;
                    hide36.onclick = e => modal36.close();
                    modal36.onclick = e => modal36.close();

                    function popUp36(e) {
                    modal36.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal36.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                             
                                                           
                    const modal37 = document.querySelector(".organicPg");
                    const show37 = document.querySelector('.show-37');
                    const hide37 = document.querySelector('.hide-37');

                    show37.onclick = popUp37;
                    hide37.onclick = e => modal37.close();
                    modal37.onclick = e => modal37.close();

                    function popUp37(e) {
                    modal37.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal37.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                             
                    const modal38 = document.querySelector(".redWine");
                    const show38 = document.querySelector('.show-38');
                    const hide38 = document.querySelector('.hide-38');

                    show38.onclick = popUp38;
                    hide38.onclick = e => modal38.close();

                    function popUp38(e) {
                    modal38.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal38.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                     
                             
                    const modal39 = document.querySelector(".rambler");
                    const show39 = document.querySelector('.show-39');
                    const hide39 = document.querySelector('.hide-39');

                    show39.onclick = popUp39;
                    hide39.onclick = e => modal39.close();
                    modal39.onclick = e => modal39.close();

                    function popUp39(e) {
                    modal39.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal39.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                      
                                                 
                    const modal40 = document.querySelector(".barbera");
                    const show40 = document.querySelector('.show-40');
                    const hide40 = document.querySelector('.hide-40');

                    show40.onclick = popUp40;
                    hide40.onclick = e => modal40.close();
                    modal40.onclick = e => modal40.close();

                    function popUp40(e) {
                    modal40.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal40.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                            
                    const modal41 = document.querySelector(".neroD");
                    const show41 = document.querySelector('.show-41');
                    const hide41 = document.querySelector('.hide-41');

                    show41.onclick = popUp41;
                    hide41.onclick = e => modal41.close();
                    modal41.onclick = e => modal41.close();

                    function popUp41(e) {
                    modal41.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal41.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                                                           
                                        
                             
                    const modal42 = document.querySelector(".montresor");
                    const show42 = document.querySelector('.show-42');
                    const hide42 = document.querySelector('.hide-42');

                    show42.onclick = popUp42;
                    hide42.onclick = e => modal42.close();
                    modal42.onclick = e => modal42.close();
                    
                    function popUp42(e) {
                    modal42.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal42.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                    
                    const modal43 = document.querySelector(".etnaRosso");
                    const show43 = document.querySelector('.show-43');
                    const hide43 = document.querySelector('.hide-43');

                    show43.onclick = popUp43;
                    hide43.onclick = e => modal43.close();
                    modal43.onclick = e => modal43.close();

                    function popUp43(e) {
                    modal43.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal43.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                        
                                                     
                    const modal44 = document.querySelector(".sardoSard");
                    const show44 = document.querySelector('.show-44');
                    const hide44 = document.querySelector('.hide-44');

                    show44.onclick = popUp44;
                    hide44.onclick = e => modal44.close();
                    modal44.onclick = e => modal44.close();

                    function popUp44(e) {
                    modal44.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal44.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                                           
                    const modal45 = document.querySelector(".montepulciano");
                    const show45 = document.querySelector('.show-45');
                    const hide45 = document.querySelector('.hide-45');

                    show45.onclick = popUp45;
                    hide45.onclick = e => modal45.close();
                    modal45.onclick = e => modal45.close();

                    function popUp45(e) {
                    modal45.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal45.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                                           
                                        
                    const modal46 = document.querySelector(".primitivo");
                    const show46 = document.querySelector('.show-46');
                    const hide46 = document.querySelector('.hide-46');

                    show46.onclick = popUp46;
                    hide46.onclick = e => modal46.close();
                    modal46.onclick = e => modal46.close();

                    function popUp46(e) {
                    modal46.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal46.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                    
                    const modal47 = document.querySelector(".roseWine");
                    const show47 = document.querySelector('.show-47');
                    const hide47 = document.querySelector('.hide-47');

                    show47.onclick = popUp47;
                    hide47.onclick = e => modal47.close();

                    function popUp47(e) {
                    modal47.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal47.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                        
                    const modal48 = document.querySelector(".pgRose");
                    const show48 = document.querySelector('.show-48');
                    const hide48 = document.querySelector('.hide-48');

                    show48.onclick = popUp48;
                    hide48.onclick = e => modal48.close();
                    modal48.onclick = e => modal48.close();

                    function popUp48(e) {
                    modal48.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal48.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                               

                    const modal49 = document.querySelector(".luigiD");
                    const show49 = document.querySelector('.show-49');
                    const hide49 = document.querySelector('.hide-49');

                    show49.onclick = popUp49;
                    hide49.onclick = e => modal49.close();
                    modal49.onclick = e => modal49.close();

                    function popUp49(e) {
                    modal49.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal49.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                               
                                                        
                                        
                    const modal50 = document.querySelector(".marottiR");
                    const show50 = document.querySelector('.show-50');
                    const hide50 = document.querySelector('.hide-50');

                    show50.onclick = popUp50;
                    hide50.onclick = e => modal50.close();
                    modal50.onclick = e => modal50.close();

                    function popUp50(e) {
                    modal50.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal50.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                    
                    const modal51 = document.querySelector(".maisonR");
                    const show51 = document.querySelector('.show-51');
                    const hide51 = document.querySelector('.hide-51');

                    show51.onclick = popUp51;
                    hide51.onclick = e => modal51.close();
                    modal51.onclick = e => modal51.close();

                    function popUp51(e) {
                    modal51.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal51.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               

                    const modal52 = document.querySelector(".dessertWine");
                    const show52 = document.querySelector('.show-52');
                    const hide52 = document.querySelector('.hide-52');

                    show52.onclick = popUp52;
                    hide52.onclick = e => modal52.close();

                    function popUp52(e) {
                    modal52.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal52.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                                           
                    const modal53 = document.querySelector(".moscato");
                    const show53 = document.querySelector('.show-53');
                    const hide53 = document.querySelector('.hide-53');

                    show53.onclick = popUp53;
                    hide53.onclick = e => modal53.close();
                    modal53.onclick = e => modal53.close();

                    function popUp53(e) {
                    modal53.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal53.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }          
                    
                    const modal54 = document.querySelector(".rufina");
                    const show54 = document.querySelector('.show-54');
                    const hide54 = document.querySelector('.hide-54');

                    show54.onclick = popUp54;
                    hide54.onclick = e => modal54.close();
                    modal54.onclick = e => modal54.close();

                    function popUp54(e) {
                    modal54.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal54.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }          
                             
                    const modal55 = document.querySelector(".beerCider");
                    const show55 = document.querySelector('.show-55');
                    const hide55 = document.querySelector('.hide-55');

                    show55.onclick = popUp55;
                    hide55.onclick = e => modal55.close();
                    
                    function popUp55(e) {
                    modal55.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal55.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                            
                                        
                                                   
                    const modal56 = document.querySelector(".menabrea");
                    const show56 = document.querySelector('.show-56');
                    const hide56 = document.querySelector('.hide-56');

                    show56.onclick = popUp56;
                    hide56.onclick = e => modal56.close();
                    modal56.onclick = e => modal56.close();

                    function popUp56(e) {
                    modal56.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal56.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                               
                                        
                                                           
                    const modal57 = document.querySelector(".sevenPeaks");
                    const show57 = document.querySelector('.show-57');
                    const hide57 = document.querySelector('.hide-57');

                    show57.onclick = popUp57;
                    hide57.onclick = e => modal57.close();
                    modal57.onclick = e => modal57.close();

                    function popUp57(e) {
                    modal57.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal57.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               

                    const modal58 = document.querySelector(".softDrinks");
                    const show58 = document.querySelector('.show-58');
                    const hide58 = document.querySelector('.hide-58');

                    show58.onclick = popUp58;
                    hide58.onclick = e => modal58.close();

                    function popUp58(e) {
                    modal58.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal58.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }       
                             
                             
                    const modal59 = document.querySelector(".pepsi");
                    const show59 = document.querySelector('.show-59');
                    const hide59 = document.querySelector('.hide-59');

                    show59.onclick = popUp59;
                    hide59.onclick = e => modal59.close();
                    modal59.onclick = e => modal59.close();

                    function popUp59(e) {
                    modal59.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal59.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }            
                             
                                                          
                    const modal60 = document.querySelector(".pepsiMax");
                    const show60 = document.querySelector('.show-60');
                    const hide60 = document.querySelector('.hide-60');

                    show60.onclick = popUp60;
                    hide60.onclick = e => modal60.close();
                    modal60.onclick = e => modal60.close();

                    function popUp60(e) {
                    modal60.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal60.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                         
                                        
                             
                    const modal61 = document.querySelector(".lemonade");
                    const show61 = document.querySelector('.show-61');
                    const hide61 = document.querySelector('.hide-61');

                    show61.onclick = popUp61;
                    hide61.onclick = e => modal61.close();
                    modal61.onclick = e => modal61.close();

                    function popUp61(e) {
                    modal61.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal61.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }            
                             
                    const modal62 = document.querySelector(".stillWater");
                    const show62 = document.querySelector('.show-62');
                    const hide62 = document.querySelector('.hide-62');

                    show62.onclick = popUp62;
                    hide62.onclick = e => modal62.close();
                    modal62.onclick = e => modal62.close();

                    function popUp62(e) {
                    modal62.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal62.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                    
                    const modal63 = document.querySelector(".sparkWater");
                    const show63 = document.querySelector('.show-63');
                    const hide63 = document.querySelector('.hide-63');

                    show63.onclick = popUp63;
                    hide63.onclick = e => modal63.close();
                    modal63.onclick = e => modal63.close();

                    function popUp63(e) {
                    modal63.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal63.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                   
                                        
                    const modal64 = document.querySelector(".oj");
                    const show64 = document.querySelector('.show-64');
                    const hide64 = document.querySelector('.hide-64');

                    show64.onclick = popUp64;
                    hide64.onclick = e => modal64.close();
                    modal64.onclick = e => modal64.close();

                    function popUp64(e) {
                    modal64.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal64.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                           
                    
                    const modal65 = document.querySelector(".appleJuice");
                    const show65 = document.querySelector('.show-65');
                    const hide65 = document.querySelector('.hide-65');

                    show65.onclick = popUp65;
                    hide65.onclick = e => modal65.close();
                    modal65.onclick = e => modal65.close();

                    function popUp65(e) {
                    modal65.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal65.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                           
                                        
                    const modal66 = document.querySelector(".hotDrinks");
                    const show66 = document.querySelector('.show-66');
                    const hide66 = document.querySelector('.hide-66');

                    show66.onclick = popUp66;
                    hide66.onclick = e => modal66.close();
                    
                    function popUp66(e) {
                    modal66.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal66.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                    
                    const modal67 = document.querySelector(".coffee");
                    const show67 = document.querySelector('.show-67');
                    const hide67 = document.querySelector('.hide-67');

                    show67.onclick = popUp67;
                    hide67.onclick = e => modal67.close();
                    modal67.onclick = e => modal67.close();

                    function popUp67(e) {
                    modal67.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal67.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               

                    const modal68 = document.querySelector(".liquerCoffee");
                    const show68 = document.querySelector('.show-68');
                    const hide68 = document.querySelector('.hide-68');

                    show68.onclick = popUp68;
                    hide68.onclick = e => modal68.close();
                    modal68.onclick = e => modal68.close();

                    function popUp68(e) {
                    modal68.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal68.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }               
                                        
                    const modal69 = document.querySelector(".tea");
                    const show69 = document.querySelector('.show-69');
                    const hide69 = document.querySelector('.hide-69');

                    show69.onclick = popUp69;
                    hide69.onclick = e => modal69.close();
                    modal69.onclick = e => modal69.close();
                    
                    function popUp69(e) {
                    modal69.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal69.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                                                           
                                        
                    const modal70 = document.querySelector(".petals");
                    const show70 = document.querySelector('.show-70');
                    const hide70 = document.querySelector('.hide-70');

                    show70.onclick = popUp70;
                    hide70.onclick = e => modal70.close();
                    modal70.onclick = e => modal70.close();
                    
                    function popUp70(e) {
                    modal70.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal70.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                                       
                    const modal71 = document.querySelector(".gBread");
                    const show71 = document.querySelector('.show-71');
                    const hide71 = document.querySelector('.hide-71');

                    show71.onclick = popUp71;
                    hide71.onclick = e => modal71.close();
                    modal71.onclick = e => modal71.close();
                    
                    function popUp71(e) {
                    modal71.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal71.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                                       
                    const modal72 = document.querySelector(".vBurger");
                    const show72 = document.querySelector('.show-72');
                    const hide72 = document.querySelector('.hide-72');

                    show72.onclick = popUp72;
                    hide72.onclick = e => modal72.close();
                  
                    
                    function popUp72(e) {
                    modal72.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal72.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                    const modal73 = document.querySelector(".vBurgerCheese");
                    const show73 = document.querySelector('.show-73');
                    const hide73 = document.querySelector('.hide-73');

                    show73.onclick = popUp73;
                    hide73.onclick = e => modal73.close();
                    modal73.onclick = e => modal73.close(); 
                    

                    function popUp73(e) {
                    modal73.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal73.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }    
                    
                    const modal74 = document.querySelector(".vBurgerNoCheese");
                    const show74 = document.querySelector('.show-74');
                    const hide74 = document.querySelector('.hide-74');

                    show74.onclick = popUp74;
                    hide74.onclick = e => modal74.close();
                    modal74.onclick = e => modal74.close(); 
                    

                    function popUp74(e) {
                    modal74.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal74.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                    const modal75 = document.querySelector(".cBurger");
                    const show75 = document.querySelector('.show-75');
                    const hide75 = document.querySelector('.hide-75');

                    show75.onclick = popUp75;
                    hide75.onclick = e => modal75.close();
                   
                    

                    function popUp75(e) {
                    modal75.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal75.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }    
                    
                    const modal76 = document.querySelector(".cheeseBurger");
                    const show76 = document.querySelector('.show-76');
                    const hide76 = document.querySelector('.hide-76');

                    show76.onclick = popUp76;
                    hide76.onclick = e => modal76.close();
                    modal76.onclick = e => modal76.close(); 
                    

                    function popUp76(e) {
                    modal76.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal76.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                       
                                       
                    const modal77 = document.querySelector(".noCheeseBurger");
                    const show77 = document.querySelector('.show-77');
                    const hide77 = document.querySelector('.hide-77');

                    show77.onclick = popUp77;
                    hide77.onclick = e => modal77.close();
                    modal77.onclick = e => modal77.close(); 
                    

                    function popUp77(e) {
                    modal77.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal77.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                             
                                        
                    const modal78 = document.querySelector(".steakExBlue");
                    const show78 = document.querySelector('.show-78');
                    const hide78 = document.querySelector('.hide-78');

                    show78.onclick = popUp78;
                    hide78.onclick = e => modal78.close();
                    modal78.onclick = e => modal78.close();
                    
                    

                    function popUp78(e) {
                    modal78.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal78.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                             
                    const modal79 = document.querySelector(".steakExRare");
                    const show79 = document.querySelector('.show-79');
                    const hide79 = document.querySelector('.hide-79');

                    show79.onclick = popUp79;
                    hide79.onclick = e => modal79.close();
                    modal79.onclick = e => modal79.close();
                    
                    

                    function popUp79(e) {
                    modal79.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal79.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }                                             
                                        
                    const modal80 = document.querySelector(".steakExRareMed");
                    const show80 = document.querySelector('.show-80');
                    const hide80 = document.querySelector('.hide-80');

                    show80.onclick = popUp80;
                    hide80.onclick = e => modal80.close();
                    modal80.onclick = e => modal80.close();
                    
                    

                    function popUp80(e) {
                    modal80.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal80.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
                    const modal81 = document.querySelector(".steakExMed");
                    const show81 = document.querySelector('.show-81');
                    const hide81 = document.querySelector('.hide-81');

                    show81.onclick = popUp81;
                    hide81.onclick = e => modal81.close();
                    modal81.onclick = e => modal81.close();
                    
                    

                    function popUp81(e) {
                    modal81.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal81.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
                    const modal82 = document.querySelector(".steakExMedWel");
                    const show82 = document.querySelector('.show-82');
                    const hide82 = document.querySelector('.hide-82');

                    show82.onclick = popUp82;
                    hide82.onclick = e => modal82.close();
                    modal82.onclick = e => modal82.close();
                    
                    

                    function popUp82(e) {
                    modal82.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal82.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
                    const modal83 = document.querySelector(".steakExWel");
                    const show83 = document.querySelector('.show-83');
                    const hide83 = document.querySelector('.hide-83');

                    show83.onclick = popUp83;
                    hide83.onclick = e => modal83.close();
                    modal83.onclick = e => modal83.close();
                    
                    

                    function popUp83(e) {
                    modal83.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal83.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
                  
                    const modal84 = document.querySelector(".chateauBlue");
                    const show84 = document.querySelector('.show-84');
                    const hide84 = document.querySelector('.hide-84');

                    show84.onclick = popUp84;
                    hide84.onclick = e => modal84.close();
                    modal84.onclick = e => modal84.close();
                    
                    

                    function popUp84(e) {
                    modal84.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal84.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
            
                                                           
                    const modal85 = document.querySelector(".chateauRare");
                    const show85 = document.querySelector('.show-85');
                    const hide85 = document.querySelector('.hide-85');

                    show85.onclick = popUp85;
                    hide85.onclick = e => modal85.close();
                    modal85.onclick = e => modal85.close();
                    
                    

                    function popUp85(e) {
                    modal85.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal85.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
                    const modal86 = document.querySelector(".chateauRareMed");
                    const show86 = document.querySelector('.show-86');
                    const hide86 = document.querySelector('.hide-86');

                    show86.onclick = popUp86;
                    hide86.onclick = e => modal86.close();
                    modal86.onclick = e => modal86.close();
                    
                    

                    function popUp86(e) {
                    modal86.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal86.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }  
            
                    const modal87 = document.querySelector(".chateauMed");
                    const show87 = document.querySelector('.show-87');
                    const hide87 = document.querySelector('.hide-87');

                    show87.onclick = popUp87;
                    hide87.onclick = e => modal87.close();
                    modal87.onclick = e => modal87.close();
                    
                    

                    function popUp87(e) {
                    modal87.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal87.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                    
                    }
                    
                    const modal88 = document.querySelector(".chateauMedWel");
                    const show88 = document.querySelector('.show-88');
                    const hide88 = document.querySelector('.hide-88');

                    show88.onclick = popUp88;
                    hide88.onclick = e => modal88.close();
                    modal88.onclick = e => modal88.close();
                    
                    

                    function popUp88(e) {
                    modal88.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal88.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                  }
            
                  const modal89 = document.querySelector(".chateauWel");
                  const show89 = document.querySelector('.show-89');
                  const hide89 = document.querySelector('.hide-89');

                  show89.onclick = popUp89;
                  hide89.onclick = e => modal89.close();
                  modal89.onclick = e => modal89.close();
                  
                  

                  function popUp89(e) {
                  modal89.showModal();
                  
                      if (!flag) {
                      return;
                  }
                  let tempCounterBtn = 0;
                  for (let i = 0; i < 0; i++) {
                      let newDiv = document.createElement("div");
                      newDiv.id = "div" + (i + 1);
                      modal89.appendChild(newDiv);

                      for (let x = 0; x < 1; x++) {
                      let btn = document.createElement("button");
                      btn.id = "button-" + (tempCounterBtn + 1);
                      tempCounterBtn++;
                      newDiv.appendChild(btn);
                      btn.onclick = e => modal.close();
                      
                      }
                  }
                  flag = false;
                  
                }
                  const modal90 = document.querySelector(".fSteakBlue");
                  const show90 = document.querySelector('.show-90');
                  const hide90 = document.querySelector('.hide-90');

                  show90.onclick = popUp90;
                  hide90.onclick = e => modal90.close();
                  modal90.onclick = e => modal90.close();
                  
                  

                  function popUp90(e) {
                  modal90.showModal();
                  
                      if (!flag) {
                      return;
                  }
                  let tempCounterBtn = 0;
                  for (let i = 0; i < 0; i++) {
                      let newDiv = document.createElement("div");
                      newDiv.id = "div" + (i + 1);
                      modal90.appendChild(newDiv);

                      for (let x = 0; x < 1; x++) {
                      let btn = document.createElement("button");
                      btn.id = "button-" + (tempCounterBtn + 1);
                      tempCounterBtn++;
                      newDiv.appendChild(btn);
                      btn.onclick = e => modal.close();
                      
                      }
                  }
                  flag = false;
                  
                }
          
                        const modal91 = document.querySelector(".fSteakRare");
                        const show91 = document.querySelector('.show-91');
                        const hide91 = document.querySelector('.hide-91');

                        show91.onclick = popUp91;
                        hide91.onclick = e => modal91.close();
                        modal91.onclick = e => modal91.close();
                        
                        

                        function popUp91(e) {
                        modal91.showModal();
                        
                            if (!flag) {
                            return;
                        }
                        let tempCounterBtn = 0;
                        for (let i = 0; i < 0; i++) {
                            let newDiv = document.createElement("div");
                            newDiv.id = "div" + (i + 1);
                            modal91.appendChild(newDiv);

                            for (let x = 0; x < 1; x++) {
                            let btn = document.createElement("button");
                            btn.id = "button-" + (tempCounterBtn + 1);
                            tempCounterBtn++;
                            newDiv.appendChild(btn);
                            btn.onclick = e => modal.close();
                            
                            }
                        }
                        flag = false;
                        
                      }
                                                                
                      const modal92 = document.querySelector(".fSteakRareMed");
                      const show92 = document.querySelector('.show-92');
                      const hide92 = document.querySelector('.hide-92');

                      show92.onclick = popUp92;
                      hide92.onclick = e => modal92.close();
                      modal92.onclick = e => modal92.close();
                      
                      

                      function popUp92(e) {
                      modal92.showModal();
                      
                          if (!flag) {
                          return;
                      }
                      let tempCounterBtn = 0;
                      for (let i = 0; i < 0; i++) {
                          let newDiv = document.createElement("div");
                          newDiv.id = "div" + (i + 1);
                          modal92.appendChild(newDiv);

                          for (let x = 0; x < 1; x++) {
                          let btn = document.createElement("button");
                          btn.id = "button-" + (tempCounterBtn + 1);
                          tempCounterBtn++;
                          newDiv.appendChild(btn);
                          btn.onclick = e => modal.close();
                          
                          }
                      }
                      flag = false;
                      
                    }
                    const modal93 = document.querySelector(".fSteakMed");
                    const show93 = document.querySelector('.show-93');
                    const hide93 = document.querySelector('.hide-93');

                    show93.onclick = popUp93;
                    hide93.onclick = e => modal93.close();
                    modal93.onclick = e => modal93.close();
                    
                    

                    function popUp93(e) {
                    modal93.showModal();
                    
                        if (!flag) {
                        return;
                    }
                    let tempCounterBtn = 0;
                    for (let i = 0; i < 0; i++) {
                        let newDiv = document.createElement("div");
                        newDiv.id = "div" + (i + 1);
                        modal93.appendChild(newDiv);

                        for (let x = 0; x < 1; x++) {
                        let btn = document.createElement("button");
                        btn.id = "button-" + (tempCounterBtn + 1);
                        tempCounterBtn++;
                        newDiv.appendChild(btn);
                        btn.onclick = e => modal.close();
                        
                        }
                    }
                    flag = false;
                    
                  }
                                                            
                  const modal94 = document.querySelector(".fSteakMedWel");
                  const show94 = document.querySelector('.show-94');
                  const hide94 = document.querySelector('.hide-94');

                  show94.onclick = popUp94;
                  hide94.onclick = e => modal94.close();
                  modal94.onclick = e => modal94.close();
                  
                  

                  function popUp94(e) {
                  modal94.showModal();
                  
                      if (!flag) {
                      return;
                  }
                  let tempCounterBtn = 0;
                  for (let i = 0; i < 0; i++) {
                      let newDiv = document.createElement("div");
                      newDiv.id = "div" + (i + 1);
                      modal94.appendChild(newDiv);

                      for (let x = 0; x < 1; x++) {
                      let btn = document.createElement("button");
                      btn.id = "button-" + (tempCounterBtn + 1);
                      tempCounterBtn++;
                      newDiv.appendChild(btn);
                      btn.onclick = e => modal.close();
                      
                      }
                  }
                  flag = false;
                  
                }                                                             
                                            
                const modal95 = document.querySelector(".fSteakWel");
                const show95 = document.querySelector('.show-95');
                const hide95 = document.querySelector('.hide-95');

                show95.onclick = popUp95;
                hide95.onclick = e => modal95.close();
                modal95.onclick = e => modal95.close();
                
                

                function popUp95(e) {
                modal95.showModal();
                
                    if (!flag) {
                    return;
                }
                let tempCounterBtn = 0;
                for (let i = 0; i < 0; i++) {
                    let newDiv = document.createElement("div");
                    newDiv.id = "div" + (i + 1);
                    modal95.appendChild(newDiv);

                    for (let x = 0; x < 1; x++) {
                    let btn = document.createElement("button");
                    btn.id = "button-" + (tempCounterBtn + 1);
                    tempCounterBtn++;
                    newDiv.appendChild(btn);
                    btn.onclick = e => modal.close();
                    
                    }
                }
                flag = false;
                
              }                                                             
                                          
              const modal96 = document.querySelector(".ribEyeBlue");
              const show96 = document.querySelector('.show-96');
              const hide96 = document.querySelector('.hide-96');

              show96.onclick = popUp96;
              hide96.onclick = e => modal96.close();
              modal96.onclick = e => modal96.close();
              
              

              function popUp96(e) {
              modal96.showModal();
              
                  if (!flag) {
                  return;
              }
              let tempCounterBtn = 0;
              for (let i = 0; i < 0; i++) {
                  let newDiv = document.createElement("div");
                  newDiv.id = "div" + (i + 1);
                  modal96.appendChild(newDiv);

                  for (let x = 0; x < 1; x++) {
                  let btn = document.createElement("button");
                  btn.id = "button-" + (tempCounterBtn + 1);
                  tempCounterBtn++;
                  newDiv.appendChild(btn);
                  btn.onclick = e => modal.close();
                  
                  }
              }
              flag = false;
              
            } 
            
            const modal97 = document.querySelector(".ribEyeRare");
              const show97 = document.querySelector('.show-97');
              const hide97 = document.querySelector('.hide-97');

              show97.onclick = popUp97;
              hide97.onclick = e => modal97.close();
              modal97.onclick = e => modal97.close();
              
              

              function popUp97(e) {
              modal97.showModal();
              
                  if (!flag) {
                  return;
              }
              let tempCounterBtn = 0;
              for (let i = 0; i < 0; i++) {
                  let newDiv = document.createElement("div");
                  newDiv.id = "div" + (i + 1);
                  modal97.appendChild(newDiv);

                  for (let x = 0; x < 1; x++) {
                  let btn = document.createElement("button");
                  btn.id = "button-" + (tempCounterBtn + 1);
                  tempCounterBtn++;
                  newDiv.appendChild(btn);
                  btn.onclick = e => modal.close();
                  
                  }
              }
              flag = false;
              
            }   

            const modal98 = document.querySelector(".ribEyeRareMed");
              const show98 = document.querySelector('.show-98');
              const hide98 = document.querySelector('.hide-98');

              show98.onclick = popUp98;
              hide98.onclick = e => modal98.close();
              modal98.onclick = e => modal98.close();
              
              

              function popUp98(e) {
              modal98.showModal();
              
                  if (!flag) {
                  return;
              }
              let tempCounterBtn = 0;
              for (let i = 0; i < 0; i++) {
                  let newDiv = document.createElement("div");
                  newDiv.id = "div" + (i + 1);
                  modal98.appendChild(newDiv);

                  for (let x = 0; x < 1; x++) {
                  let btn = document.createElement("button");
                  btn.id = "button-" + (tempCounterBtn + 1);
                  tempCounterBtn++;
                  newDiv.appendChild(btn);
                  btn.onclick = e => modal.close();
                  
                  }
              }
              flag = false;
              
            }   
            
            const modal99 = document.querySelector(".ribEyeMed");
              const show99 = document.querySelector('.show-99');
              const hide99 = document.querySelector('.hide-99');

              show99.onclick = popUp99;
              hide99.onclick = e => modal99.close();
              modal99.onclick = e => modal99.close();
              
              

              function popUp99(e) {
              modal99.showModal();
              
                  if (!flag) {
                  return;
              }
              let tempCounterBtn = 0;
              for (let i = 0; i < 0; i++) {
                  let newDiv = document.createElement("div");
                  newDiv.id = "div" + (i + 1);
                  modal99.appendChild(newDiv);

                  for (let x = 0; x < 1; x++) {
                  let btn = document.createElement("button");
                  btn.id = "button-" + (tempCounterBtn + 1);
                  tempCounterBtn++;
                  newDiv.appendChild(btn);
                  btn.onclick = e => modal.close();
                  
                  }
              }
              flag = false;
              
            }
            
            const modal100 = document.querySelector(".ribEyeMedWel");
              const show100 = document.querySelector('.show-100');
              const hide100 = document.querySelector('.hide-100');

              show100.onclick = popUp100;
              hide100.onclick = e => modal100.close();
              modal100.onclick = e => modal100.close();
              
              

              function popUp100(e) {
              modal100.showModal();
              
                  if (!flag) {
                  return;
              }
              let tempCounterBtn = 0;
              for (let i = 0; i < 0; i++) {
                  let newDiv = document.createElement("div");
                  newDiv.id = "div" + (i + 1);
                  modal100.appendChild(newDiv);

                  for (let x = 0; x < 1; x++) {
                  let btn = document.createElement("button");
                  btn.id = "button-" + (tempCounterBtn + 1);
                  tempCounterBtn++;
                  newDiv.appendChild(btn);
                  btn.onclick = e => modal.close();
                  
                  }
              }
              flag = false;
              
            }
                                                            
            const modal101 = document.querySelector(".ribEyeWel");
            const show101 = document.querySelector('.show-101');
            const hide101 = document.querySelector('.hide-101');

            show101.onclick = popUp101;
            hide101.onclick = e => modal101.close();
            modal101.onclick = e => modal101.close();
            
            

            function popUp101(e) {
            modal101.showModal();
            
                if (!flag) {
                return;
            }
            let tempCounterBtn = 0;
            for (let i = 0; i < 0; i++) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + (i + 1);
                modal101.appendChild(newDiv);

                for (let x = 0; x < 1; x++) {
                let btn = document.createElement("button");
                btn.id = "button-" + (tempCounterBtn + 1);
                tempCounterBtn++;
                newDiv.appendChild(btn);
                btn.onclick = e => modal.close();
                
                }
            }
            flag = false;
            
          }                  
          
          const modal102 = document.querySelector(".flankBlue");
            const show102 = document.querySelector('.show-102');
            const hide102 = document.querySelector('.hide-102');

            show102.onclick = popUp102;
            hide102.onclick = e => modal102.close();
            modal102.onclick = e => modal102.close();
            
            

            function popUp102(e) {
            modal102.showModal();
            
                if (!flag) {
                return;
            }
            let tempCounterBtn = 0;
            for (let i = 0; i < 0; i++) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + (i + 1);
                modal102.appendChild(newDiv);

                for (let x = 0; x < 1; x++) {
                let btn = document.createElement("button");
                btn.id = "button-" + (tempCounterBtn + 1);
                tempCounterBtn++;
                newDiv.appendChild(btn);
                btn.onclick = e => modal.close();
                
                }
            }
            flag = false;
            
          }                  
                                        
          const modal103 = document.querySelector(".flankRare");
          const show103 = document.querySelector('.show-103');
          const hide103 = document.querySelector('.hide-103');

          show103.onclick = popUp103;
          hide103.onclick = e => modal103.close();
          modal103.onclick = e => modal103.close();
          
          

          function popUp103(e) {
          modal103.showModal();
          
              if (!flag) {
              return;
          }
          let tempCounterBtn = 0;
          for (let i = 0; i < 0; i++) {
              let newDiv = document.createElement("div");
              newDiv.id = "div" + (i + 1);
              modal103.appendChild(newDiv);

              for (let x = 0; x < 1; x++) {
              let btn = document.createElement("button");
              btn.id = "button-" + (tempCounterBtn + 1);
              tempCounterBtn++;
              newDiv.appendChild(btn);
              btn.onclick = e => modal.close();
              
              }
          }
          flag = false;
          
        }   
        
        const modal104 = document.querySelector(".flankRareMed");
        const show104 = document.querySelector('.show-104');
        const hide104 = document.querySelector('.hide-104');

        show104.onclick = popUp104;
        hide104.onclick = e => modal104.close();
        modal104.onclick = e => modal104.close();
        
        

        function popUp104(e) {
        modal104.showModal();
        
            if (!flag) {
            return;
        }
        let tempCounterBtn = 0;
        for (let i = 0; i < 0; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + (i + 1);
            modal104.appendChild(newDiv);

            for (let x = 0; x < 1; x++) {
            let btn = document.createElement("button");
            btn.id = "button-" + (tempCounterBtn + 1);
            tempCounterBtn++;
            newDiv.appendChild(btn);
            btn.onclick = e => modal.close();
            
            }
        }
        flag = false;
        
      }   

      const modal105 = document.querySelector(".flankMed");
        const show105 = document.querySelector('.show-105');
        const hide105 = document.querySelector('.hide-105');

        show105.onclick = popUp105;
        hide105.onclick = e => modal105.close();
        modal105.onclick = e => modal105.close();
        
        

        function popUp105(e) {
        modal105.showModal();
        
            if (!flag) {
            return;
        }
        let tempCounterBtn = 0;
        for (let i = 0; i < 0; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + (i + 1);
            modal105.appendChild(newDiv);

            for (let x = 0; x < 1; x++) {
            let btn = document.createElement("button");
            btn.id = "button-" + (tempCounterBtn + 1);
            tempCounterBtn++;
            newDiv.appendChild(btn);
            btn.onclick = e => modal.close();
            
            }
        }
        flag = false;
        
      }   
                                                                                    
      const modal106 = document.querySelector(".flankMedWel");
      const show106 = document.querySelector('.show-106');
      const hide106 = document.querySelector('.hide-106');

      show106.onclick = popUp106;
      hide106.onclick = e => modal106.close();
      modal106.onclick = e => modal106.close();
      
      

      function popUp106(e) {
      modal106.showModal();
      
          if (!flag) {
          return;
      }
      let tempCounterBtn = 0;
      for (let i = 0; i < 0; i++) {
          let newDiv = document.createElement("div");
          newDiv.id = "div" + (i + 1);
          modal106.appendChild(newDiv);

          for (let x = 0; x < 1; x++) {
          let btn = document.createElement("button");
          btn.id = "button-" + (tempCounterBtn + 1);
          tempCounterBtn++;
          newDiv.appendChild(btn);
          btn.onclick = e => modal.close();
          
          }
      }
      flag = false;
      
    }                               

    const modal107 = document.querySelector(".flankWel");
      const show107 = document.querySelector('.show-107');
      const hide107 = document.querySelector('.hide-107');

      show107.onclick = popUp107;
      hide107.onclick = e => modal107.close();
      modal107.onclick = e => modal107.close();
      
      

      function popUp107(e) {
      modal107.showModal();
      
          if (!flag) {
          return;
      }
      let tempCounterBtn = 0;
      for (let i = 0; i < 0; i++) {
          let newDiv = document.createElement("div");
          newDiv.id = "div" + (i + 1);
          modal107.appendChild(newDiv);

          for (let x = 0; x < 1; x++) {
          let btn = document.createElement("button");
          btn.id = "button-" + (tempCounterBtn + 1);
          tempCounterBtn++;
          newDiv.appendChild(btn);
          btn.onclick = e => modal.close();
          
          }
      }
      flag = false;
      
    }                               
    const modal108 = document.querySelector(".fries");
    const show108 = document.querySelector('.show-108');
    const hide108 = document.querySelector('.hide-108');

    show108.onclick = popUp108;
    hide108.onclick = e => modal108.close();
    modal108.onclick = e => modal108.close();
    
    

    function popUp108(e) {
    modal108.showModal();
    
        if (!flag) {
        return;
    }
    let tempCounterBtn = 0;
    for (let i = 0; i < 0; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + (i + 1);
        modal108.appendChild(newDiv);

        for (let x = 0; x < 1; x++) {
        let btn = document.createElement("button");
        btn.id = "button-" + (tempCounterBtn + 1);
        tempCounterBtn++;
        newDiv.appendChild(btn);
        btn.onclick = e => modal.close();
        
        }
    }
    flag = false;
    
  }                               
                              
                                                            
                                                        
                                        
                                                          
                       
                                                            
                                                        
                                        
                                                          
                                                                                    
                                            
                                
                                                              
                                                          
                                          
                                                            
                                          
                       
                                                                               
                                                                             
                                                                       
                                  
                                                              
                                                          
                                          
                                                            
                         
                                                              
                                                          
                                          
                                                            
                                                                                      
                                              
                                  
                                                                
                                                            
                                            
                                                              
                                            
                         
                                                                                 
                                                                               
                                                                         
                                    
                         
                                                       
                                                  
                                   
                                                       
                                    
                                                              
                                                                           
                                      
                           
                                                         
                                                    
                                                                         
                                                                                  
                                              
                                  
                                                                
                                                            
                                            
                                                              
                                                                                        
                                                
                                    
                                                                  
                                                              
                                              
                                                                
                                              
                           
                                                                                   
                                                                                 
                                                                           
                                      
                           
                                                         
                                                    
                                     
                                                         
                                      
                                                                
                                                                             
                                        
                             
                              
                                                            
                                                        
                                        
                                                          
                                                                                    
                                            
                                
                                                              
                                                          
                                          
                                                            
                         
                                                              
                                                          
                                          
                                                            
                                                                                      
                                              
                                  
                                                                
                                                            
                                            
                                                              
                                            
                         
                                                                                 
                                                                               
                                                                         
                                    
                         
                                                       
                                                  
                                   
                                                       
                                    
                                                              
                                                                           
                                      
                           
                                                         
                                                    
                                                                         
                                                                                  
                                              
                                  
                                                                
                                                            
                                            
                                                              
                                                                                        
                                                
                                    
                                                                  
                                                              
                                              
                                                                
                                              
                           
                                                                                   
                                                                                 
                                                                           
                                      
                           
                                                         
                                                    
                                     
                                                         
                                      
                                                                
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                                   
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                                            
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                 
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                                            
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                 
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                                   
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                                            
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       

                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                                            
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                 
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                                   
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                                                     
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                                            
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                 
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                                      
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                       
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                                          
                                                           
                                        
                             
                                                           
                                                                             
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                                   
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                     
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                                        
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                         
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                                   
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                     
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                                        
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                     
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                                        
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                                  
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                                        
                
                                                     
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                    
                             
                                                           
                                        
                                                   
                                                                       
                                        
                                                           
                                        
                             
                                                           
                                        
                                                     
                                        
                             
                                                           
                                        
                                                           
                                        
                             
                                                           
                              
