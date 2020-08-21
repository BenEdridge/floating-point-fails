const c = require('console');

const runningSum = () => {
  let sum = 0;
  for (let i = 0; i < 100000000; i++){
    const result = 0.1 + 0.2;
    sum += result;
  }
  return sum;
}

c.log(`

You most likely have seen this:
=> 0.1 + 0.2 != ${0.1 + 0.2}

But even "Integers" can be unsafe outside of:
${Number.MIN_SAFE_INTEGER} < N < ${Number.MAX_SAFE_INTEGER}

=> ${Number.MAX_SAFE_INTEGER} + 2 != ${Number.MAX_SAFE_INTEGER + 2}
=> ${Number.MIN_SAFE_INTEGER} - 2 != ${Number.MIN_SAFE_INTEGER - 2}

May not be associative 
(a + b) + c != a + (b + c):

=> (0.1 + 0.2) + 0.3} != 0.1 + (0.2 + 0.3)
=> ${(0.1 + 0.2) + 0.3} != ${0.1 + (0.2 + 0.3)}

May not be distributive
(a + b) × c != a × c + b × c

=> (0.1 + 0.2) × 0.3} != 0.1 × 0.3 + 0.2 × 0.1
=> ${0.1 + 0.2 * 0.3} != ${0.1 * 0.3 + 0.2 * 0.1}

Cancellation (Subtraction of nearly equal operands may cause extreme loss of accuracy)
=> (0.30000000000000004 - 0.35} != 0.30000000000000001
=> 0.30000000000000004 - 0.30000000000000003 = ${0.3000000000000000000 - 0.29999999999999999999}

Equality Checking:

Compounding Errors:
0.1 + 0.2 = ${0.1 + 0.2}

(0.1 + 0.2) * 100,000,000 = 30,000,000

However running this in JS results in: ${runningSum()} almost 0.05 out!

${0.1*0.1*10}

`);
