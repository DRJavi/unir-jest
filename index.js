"use strict";

var _ = require("lodash");

module.exports = {
    'buildOrder': function(listItems) {
        var total = listItems.reduce((accumulator, current) => {
            return accumulator + current.quantity * current.price;
        }, 0);
        // total = total * 1.10;
        var items = _
            .chain(listItems)
            .orderBy('name')
            .map('name')
            .value();

        return {items: items, total: total};
    }
}