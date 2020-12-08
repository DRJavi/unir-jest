'use strict';

const fixtures = require('../__fixtures__/buildOrder');
const orders = require('../');

it('builds correctly (with advanced snapshot)', () => {  
  const result = orders.buildOrder(fixtures.listItems);
 
  expect(result.total).toBeCloseTo(97.9, 5);
  expect(result).toMatchSnapshot({
    total: expect.any(Number)
  });
});
