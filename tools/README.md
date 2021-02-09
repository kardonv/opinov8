# Tools

This module provides several tools for extend arrays and calculate taxes.

## Using

For using these tools you can import them to your own code.

Example:

```javascript
// 1. Using converter from gross to net
const { taxes } = require('tools');

const net = taxes.convertGrossToNet(100, 10); // 10

// 2. Extend array prototype
require('tools');

[1, 2, 3, [1, 2], { a : 5 }].customFlat(); // [1, 2, 3, 1, 2, 5]
```

## Tests

For running test, execute `npm run test`
