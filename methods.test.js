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

    it('REDUCE: Returns 12, sum a+b reduce', () => {
        const reduced = newF.newReduce([1, 2, , 4, 5], (acc, item) => acc + item, 0);

        expect(reduced).toEqual(12);
    });

    it('REDUCE: Returns 12, sum a+b reduce, NO INTIAL VAL', () => {
        const reduced = newF.newReduce([1, , , 2, , 4, 5], (acc, item) => acc + item);

        expect(reduced).toEqual(12);
    });

    it('REDUCE: reduce name lengths to length counter object', () => {
        const names = [  
            'porsche',
            'cythia',
            'rich',
            'holly',
            'alexia',
            'junior',
            'jewell',
            'cornelius',
            'allegra',
            'valene',
            'emily',
            'ayana',
            'kathi',
            'loren',
            'aron',
            'khalilah',
            'britni',
            'renita',
            'margurite',
            'cherryl'
        ];
        const lengthCallback = (total, { length }) => {
            const lengthKey = length.toString();
            if(!(lengthKey in total)) total[lengthKey] = 1;
            else {total[lengthKey]++};
            return total;
        }

        const reduced = newF.newReduce(names, lengthCallback, {});

        expect(reduced).toEqual({ '4': 2, '5': 5, '6': 7, '7': 3, '8': 1, '9': 2 });
    });

    it('EVERY: Returns true when all values are even', () => {
        const every = newF.newEvery([2, 4, ,6, 8], n => n % 2 === 0);

        expect(every).toEqual(true);
    });

    it('EVERY: Returns false if not all values are even', () => {
        const every = newF.newEvery([2, , 4, 5, 6, 8], n => n % 2 === 0);

        expect(every).toEqual(false);
    });
    
    it('FOREACH: Checks # of callbacks and function calling', () => {
        const mockedFunc = jest.fn((item, index) => item + 2)

        const forEach = newF.newForEach([4, 6, , 7, 4], mockedFunc);

        expect(mockedFunc).toHaveBeenCalledTimes(4)
        expect(mockedFunc).toHaveBeenCalledWith(6)

        expect(mockedFunc.mock.calls.length).toEqual(4);
        
        expect(mockedFunc.mock.calls[0][0]).toEqual(4);
        expect(mockedFunc.mock.results[0].value).toEqual(6);

        expect(mockedFunc.mock.calls[2][0]).toEqual(7);
        expect(mockedFunc.mock.results[2].value).toEqual(9);
    });


  });
  