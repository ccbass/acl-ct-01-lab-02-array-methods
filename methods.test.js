const newF = require("./methods");


describe('It correctly implements array methods with using built-ins', () => {
    it('MAP: It correctly returns an array with callbacks applied.', () => {
        const mapped = newF.newMap([1, undefined, 2, , 4], n => n * 2);

        expect(mapped).toEqual([2, NaN, 4, , 8]);
    });

    it('FILTER: It correctly returns a filtered array', () => {
        const filtered = newF.newFilter([2, 1, 4, , 5, 8], n => n % 2 === 0);
  
        expect(filtered).toEqual([2, 4, 8]);
    });

    it('FINDINDEX: It correctly returns an index if an element returns true', () => {
        const index = newF.newFindIndex([2, , , 1, 5, , 8], n => n % 2 !== 0);

        expect(index).toEqual(3);
    });

    it('FINDINDEX: It correctly returns index -1 if no element returns true', () => {
        const index = newF.newFindIndex([2, , 4, , 6, 8], n => n % 2 !== 0);

        expect(index).toEqual(-1);
    });

    it('REDUCE: It correctly applies a callback and returns the reduced value', () => {
        const reduced = newF.newReduce([1, 2, , 4, 5], (acc, item) => acc + item, 0);

        expect(reduced).toEqual(12);
    });

    it('REDUCE: It correctly applies a callback and returns the reduced value with no intial value', () => {
        const reduced = newF.newReduce([1, , , 2, , 4, 5], (acc, item) => acc + item);

        expect(reduced).toEqual(12);
    });

    it('REDUCE: It correctly parses a non-sum reduce callback', () => {
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

    it('EVERY: It correctly returns true when all', () => {
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
        expect(mockedFunc).toHaveBeenCalledWith(6, expect.any(Number))

        expect(mockedFunc.mock.calls[0][0]).toEqual(4);
        expect(mockedFunc.mock.results[0].value).toEqual(6);

        expect(mockedFunc.mock.calls[2][0]).toEqual(7);
        expect(mockedFunc.mock.results[2].value).toEqual(9);
    });

    it('Correctly accepts the Index parameter in callbacks, except REDUCE', () => {
        const mockedFunc = jest.fn( (n, index) => n * 2)
        const mockedReduceFunc = jest.fn( (accum, n, index) => accum + n)
        const arrayData = [1, 2, 3]

        const mockedMap = newF.newMap(arrayData, mockedFunc)
        const mockedFilter = newF.newFilter(arrayData, mockedFunc)
        const mockedFindIndex = newF.newFindIndex(arrayData, mockedFunc)
        const mockedEvery = newF.newEvery(arrayData, mockedFunc)
        const mockedForEach = newF.newForEach(arrayData, mockedFunc)
        const mockedReduce = newF.newReduce(arrayData, mockedReduceFunc)

        // called 13 times, 3 per non-reduce function, 1 for filter.
        expect(mockedFunc).toHaveBeenCalledTimes(13)
        expect(mockedFunc).toHaveBeenCalledWith(1, expect.any(Number))
        
        // called twice, because of absent initial value
        expect(mockedReduceFunc).toHaveBeenCalledTimes(2)
        expect(mockedReduceFunc).toHaveBeenCalledWith(1, expect.any(Number), expect.any(Number))
        
    })

  });
  