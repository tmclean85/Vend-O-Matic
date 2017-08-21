const vendingMachine = require('../src/data.js');
const items = require('../src/data.js');
const change = require('../src/data.js');

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




})