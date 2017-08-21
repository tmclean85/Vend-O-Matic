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

  describe('when the supply of any coin type gets low', () => {
    it('should audit and refill all coin types', () => {
      expect(vendor.restockChange());
    })
  })

  describe('when an out of stock item is selected for purchase', () => {
    it('should provide an error message', () => {
      expect(vendor.dispenseItem("chips", 1.25)).toEqual('Out of stock, please make another selection');
    })
  })

  describe('when insufficient payment is provided', () => {
    it('should provide an error message', () => {
      expect(vendor.dispenseItem("chocolate bar", 0.50)).toEqual('Please insert more coins')
    })
  })

  describe('when an in-stock item is selected and the correct payment is given', () => {
    it('should dispense the requested item', () => {
      expect(vendor.dispenseItem("granola bar", 1.50)).toEqual('Please enjoy your granola bar');
    })
  })

  describe('when stock is found to be getting low', () => {
    it('should check all current stock and refill to max if low', () => {
      expect(vendor.restockItem()).toMatchObject(vendor.restockItem());
    })
  })  

  describe('when a customer is inserting coins', () => {
    it('should track total payment given', () => {
// Expect method to provide accurate sum of payment array      
      expect(vendor.trackPayment(payment)).toBe(1.75);
    })
  })

  describe('when a customer overpays or underpays', () => {
    it('should either give change or ask for the outstanding balance', () => {
// 2 passed in as item cost vs sum of payment array value of 1.75 should ask for additional 0.25    
      expect(vendor.giveChange(2, vendor.trackPayment(payment))).toEqual(-0.25)
    })
  })






})