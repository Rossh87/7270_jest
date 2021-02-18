jest.mock('./exportsExtended');
const add = require('./exportsExtended');

describe('module mocking', () => {
    it("doesn't pollute JavaScript built-in constructors", () => {
        const rec = ''.constructor;
        console.log(rec);
        expect(rec._isMockFunction).toBe(undefined);
    });
});
