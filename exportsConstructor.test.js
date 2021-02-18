jest.mock('./exportsConstructor');
const add = require('./exportsConstructor');

describe('module mocking', () => {
    it("doesn't pollute JavaScript built-in constructors", () => {
        const rec = ''.constructor;
        expect(rec._isMockFunction).toBe(undefined);
    });
});
