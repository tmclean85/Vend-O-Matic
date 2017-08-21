const vendingMachine = require('../src/data.js');
const items = require('../src/data.js');
const change = require('../src/data.js');

describe('vendingMachine', () => {
  beforeEach(() => {
    vendor = new vendingMachine;
  });

  describe('checking available item stock', () => {
    it('should return available stock for each item', () => {
      expect(vendor.checkAvailableStock());
    })
  })

  describe('check available funds in machine', () => {
    it('should return available funds by coin type', () => {
      expect(vendor.checkAvailableFunds());
    })
  })

  describe('restock items when they get low', () => {
    it('should refill items when they reach their minStock point', () => {
      expect(vendor.restockItem());
    })
  })


})