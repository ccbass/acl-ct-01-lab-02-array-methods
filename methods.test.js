const newMap = require("./methods");

describe('It correctly implements array methods with using built-ins', () => {
    it('MAP: Returns [2, 4, , 8] with n => n * 2 ', () => {
      const mapped = newMap([1, 2, , 4], n => n * 2);
  
      expect(mapped).toEqual([2, 4, , 8]);
    });
  });
  