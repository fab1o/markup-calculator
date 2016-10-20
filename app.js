var MARKUP = {

    FLAT: 5,
    EACH_PERSON: 1.2,

    CATEGORY: {
        DRUGS: 7.5,
        FOOD: 13,
        ELECTRONICS: 2
    }

};

function flatMarkup (basePrice) {

    var markup = basePrice * (MARKUP.FLAT / 100);

    return basePrice + markup;
}

function workMarkup (basePrice, qtyPeople) {

    var markup = (qtyPeople * MARKUP.EACH_PERSON) / 100;

    return flatMarkup(basePrice) * markup;
}

function categoryMarkup (basePrice, category) {

    var markup = MARKUP.CATEGORY[category.toUpperCase()] / 100;

    return flatMarkup(basePrice) * (isNaN(markup) ? 0 : markup);
}

function calculate (basePrice, qtyPeople, category) {

    var flatMarkupPrice = flatMarkup(basePrice);

    var workMarkupPrice = workMarkup(basePrice, qtyPeople);
    var categoryMarkupPrice = categoryMarkup(basePrice, category);

    var total = flatMarkupPrice + workMarkupPrice + categoryMarkupPrice;

    return +(Math.round(total + "e+2")  + "e-2");
}

module.exports = {

    markupCalculator: function(basePrice, qtyPeople, category) {

        return calculate(basePrice, qtyPeople, category);
    }

};