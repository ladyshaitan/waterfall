const solution = require('./server/logic/logic.js');

test('takes in a value and returns it', () => {
	expect(solution(5)).toBe(5);
})