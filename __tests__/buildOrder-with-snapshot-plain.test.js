'use strict';

const fixtures = require('../__fixtures__/buildOrder');
const orders = require('../');

it('builds correctly (with plain snapshot)', () => {
  const result = orders.buildOrder(fixtures.listItems);

  expect(result).toMatchSnapshot();
});
