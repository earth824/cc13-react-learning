const a = 20.1;

const formatTwoDigit = number => number.toFixed(2);

// 1. Name export
export { formatTwoDigit };
export const formatTwoDigit1 = number => number.toFixed(2);
export const formatTwoDigit2 = number => number.toFixed(2);

// 2. Default export
// export default number => number.toFixed(2);
// export default formatTwoDigit;
// export default [0, 1, 2, 3, 4, 5];
export default { name: 'jack' };
