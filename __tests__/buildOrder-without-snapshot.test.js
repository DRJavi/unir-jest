'use strict';

const fixtures = require('../__fixtures__/buildOrder');
const orders = require('../');

it('builds correctly (without snapshot)', () => {  
  const result = orders.buildOrder(fixtures.listItems);

  expect(result.items).toEqual([ 'Item 1', 'Item 2', 'Item 5' ]);
  expect(result.total).toBeCloseTo(97.9, 5);
});
