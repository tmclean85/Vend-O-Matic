let change = [
  {
    title: "nickel",
    value: 0.05,
    currentQuantity: 10
  },
  {
    title: "dime",
    value: 0.10,
    currentQuantity: 15
  },
  {
    title: "quarter",
    value: 0.25,
    currentQuantity: 20
  },
  {
    title: "loonie",
    value: 1,
    currentQuantity: 5
  },
  {
    title: "toonie",
    value: 2,
    currentQuantity: 10
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

  dispenseItem(item, payment) {
    const newItems = items;
    const newChange = change;
    for(let i = 0; i < newItems.length; i++) {
      if(newItems[i].type === item) {
        if(newItems[i].currentStock > 0 && newItems[i].price <= payment) {
          console.log(newItems[i].currentStock)
          newItems[i].currentStock -= 1;
          console.log(newItems[i].currentStock)          
          console.log(item);
          return item;
        } else if(newItems[i].currentStock > 0 && newItems[i].price > payment) { 
          console.log('insufficient payment');
          return 'Please insert more coins';
        } else if(newItems[i].currentStock === 0) {
          console.log('no stock');
          return 'Out of stock, please make another selection';
        }
      }
    }
  }

}


module.exports = vendingMachine;