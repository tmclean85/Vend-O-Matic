let change = [
  {
    title: "nickel",
    value: 0.05,
    currentQuantity: 10,
    minQuantity: 10,
    maxQuantity: 75
  },
  {
    title: "dime",
    value: 0.10,
    currentQuantity: 15,
    minQuantity: 10,
    maxQuantity: 75    
  },
  {
    title: "quarter",
    value: 0.25,
    currentQuantity: 20,
    minQuantity: 10,
    maxQuantity: 75    
  },
  {
    title: "loonie",
    value: 1,
    currentQuantity: 5,
    minQuantity: 10,
    maxQuantity: 75    
  },
  {
    title: "toonie",
    value: 2,
    currentQuantity: 18,
    minQuantity: 10,
    maxQuantity: 75    
  }
];

let items = [
  {
    type: "chips",
    price: 1,
    currentStock: 0,
    maxStock: 25,
    minStock: 5
  },
  {
    type: "chocolate bar",
    price: 1.25,
    currentStock: 12,
    maxStock: 25,    
    minStock: 5    
  },
  {
    type: "granola bar",
    price: 1.50,
    currentStock: 17,
    maxStock: 25,
    minStock: 5    
  },
  {
    type: "pop",
    price: 0.75,
    currentStock: 8,
    maxStock: 25,
    minStock: 5    
  }
]

class vendingMachine {
  
  checkAvailableStock() {
    for(let i = 0; i < items.length; i++) {
      return ({product: items[i].type, stock: items[i].currentStock})
    }
  }

  checkAvailableFunds() {
    for(let i = 0; i < change.length; i++) {
      return ({denomination: change[i].title, quantity: change[i].currentQuantity})
    }
  }

  restockItem() {
    let newItems = items;
    for(let i = 0; i < newItems.length; i++) {
      if(newItems[i].currentStock <= newItems[i].minStock) {
        newItems[i].currentStock = newItems[i].maxStock;
      }
    }
    return newItems;
  }

  restockChange() {
    let newChange = change;
    for(let i = 0; i < newChange.length; i++) {
      if(newChange[i].currentQuantity <= newChange[i].minQuantity) {
        newChange[i].currentQuantity = newChange[i].maxQuantity;
      }
    }
    return newChange;          
  }

  trackPayment(payment) {
    let finalPayment = 0;
    let newChangeQuantity = change;
    let paymentGiven = payment;
    for(let i = 0; i < paymentGiven.length; i++) {
      finalPayment += (paymentGiven[i].value * paymentGiven[i].given)
      // console.log(finalPayment)
    }
    // console.log('final', finalPayment);
    return finalPayment;
  }

  dispenseItem(item, coinsPaid) {
    let newItems = items;
    let newChange = change;
    for(let i = 0; i < newItems.length; i++) {
      if(newItems[i].type === item) {
        if(newItems[i].currentStock > 0 && newItems[i].price <= coinsPaid) {
          newItems[i].currentStock -= 1;
          const enjoy = ('Please enjoy your ' + item)
          console.log(enjoy)
          return enjoy;
        } else if(newItems[i].currentStock > 0 && newItems[i].price > coinsPaid) { 
          return 'Please insert more coins';
        } else if(newItems[i].currentStock === 0) {
          return 'Out of stock, please make another selection';
        }
      }
    }
  }

  coinValidator(payment) {
    let insertedCoins = payment;
    for(let i = 0; i < insertedCoins.length; i++) {
      let coin = insertedCoins[i].title;
      let wasGiven = insertedCoins[i].given;
      if(wasGiven > 0) {
        if(coin === "nickel" || coin === "dime" || coin === "quarter" || coin === "loonie" || coin === "toonie") {
          console.log('Thank you for the ' + coin);
        } else {
          console.log('I cannot accept this ' + coin)
          return false;
        }
      }  
    }
  }

  giveChange(coinsNeeded, coinsPaid) {
    let currentBalance = (coinsNeeded - coinsPaid);
    if(currentBalance > 0) {
      console.log('insufficient, pay', currentBalance, 'more');
      return (-currentBalance);
    } else {
      console.log('change given:', -currentBalance);
      return(currentBalance);
    }
  }

}

module.exports = vendingMachine;