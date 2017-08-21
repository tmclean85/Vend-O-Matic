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
    currentStock: 4,
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
      return (items[i].type, items[i].currentStock)
    }
  }

  checkAvailableFunds() {
    for(let i = 0; i < change.length; i++) {
      return (change[i].title, change[i].currentQuantity)
    }
  }

  restockItem() {
    console.log(items)
    const newItems = items;
    for(let i = 0; i < newItems.length; i++) {
      if(newItems[i].currentStock <= newItems[i].minStock) {
        newItems[i].currentStock = newItems[i].maxStock;
      }
    }
    console.log(newItems);
    return newItems;
  }

  



}

module.exports = vendingMachine;