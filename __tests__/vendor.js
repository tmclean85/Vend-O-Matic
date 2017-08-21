const vendingMachine = require('../src/data.js');
const items = require('../src/data.js');
const change = require('../src/data.js');

let payment = [
  {
    title: "nickel",
    value: 0.05,
    given: 0
  },
  {
    title: "dime",
    value: 0.10,
    currentQuantity: 15,
    given: 5
  },
  {
    title: "quarter",
    value: 0.25,
    currentQuantity: 20,
    given: 1
  },
  {
    title: "loonie",
    value: 1,
    currentQuantity: 5,
    given: 1
  },
  {
    title: "toonie",
    value: 2,
    currentQuantity: 10,
    given: 0    
  }  
];


describe('vendingMachine', () => {
  beforeEach(() => {
    vendor = new vendingMachine;
  });

  describe('when checking current machine stock', () => {
    it('should return available stock for each item', () => {
      expect(vendor.checkAvailableStock()).toMatchObject(vendor.checkAvailableStock());
    })
  })

  describe('when checking current machine funds', () => {
    it('should return available funds by coin type', () => {
      expect(vendor.checkAvailableFunds()).toMatchObject(vendor.checkAvailableFunds());
    })
  })

  describe('when an item is selected for purchase', () => {
    it('should either dispense the item or give an out of stock or insufficient payment message', () => {
      expect(vendor.dispenseItem("chips", 1.25));
    })
  })

  describe('when stock is getting low', () => {
    it('should check current stock and refill to max if low', () => {
      expect(vendor.restockItem()).toMatchObject(vendor.restockItem());
    })
  })  

  describe('track total money inserted', () => {
    it('should track payment', () => {
      expect(vendor.trackPayment(payment)).toBe(1.75);
    })
  })




})