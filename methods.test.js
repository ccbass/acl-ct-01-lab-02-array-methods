const newF = require("./methods");


describe('It correctly implements array methods with using built-ins', () => {
    it('MAP: Returns [2, 4, , 8] with n => n * 2 ', () => {
      const mapped = newF.newMap([1, 2, , 4], n => n * 2);
  
      expect(mapped).toEqual([2, 4, , 8]);
    });

    it('FILTER: Returns [2, 1, 4, , 5, 8] with evens only', () => {
      const filtered = newF.newFilter([2, 1, 4, , 5, 8], n => n % 2 === 0);
  
      expect(filtered).toEqual([2, 4, 8]);
    });

    it('FINDINDEX: Returns 3 looking for first odd', () => {
    const index = newF.newFindIndex([2, , , 1, 5, , 8], n => n % 2 !== 0);

    expect(index).toEqual(3);
    });



  });
  