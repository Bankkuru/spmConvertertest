const converter = require('./converter.js')

test(' USD is $0.00 when you input THB is 0', () => {
    expect(converter(0)).toEqual('$0.00');
});

test('USD is $ 3.00 when you input is 100', () => {
    expect(converter(100)).toEqual('$3.00');
});

test('USD is $ 15.00 when you input is 500', () => {
    expect(converter(500)).toEqual('$15.00');
});

test('USD is error when you input is String', () => {
    expect(converter('String')).toEqual('error');
});