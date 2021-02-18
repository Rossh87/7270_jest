class MyString extends String {
    constructor(primitive = '') {
        super(primitive);
    }
}

module.exports = {
    value: MyString,
};
