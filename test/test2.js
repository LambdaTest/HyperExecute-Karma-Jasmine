describe('addition', function () {
    it('should add two numbers and return the result', function () {
        expect(window.add(500, 456)).toBe(956);
    });
});

describe('subtraction', function () {
    it('should subtract two numbers', function () {
        expect(window.subtract(2000, 188)).toBe(1812);
    });
});

describe('updateAppState2', function () {
    it('should push a new state into the browser history', function () {
        window.updateAppState({
            message: 'Getting Started with HyperExecute'
        });
        expect(window.history.state).toEqual({
            message: 'Getting Started with HyperExecute'
        })
    });
});
