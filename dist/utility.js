"use strict";
{
    const title = ['book', 'pen', 'pencil'];
    const listGoods = {
        book: {
            id: 321313323,
            price: 5000,
            title: 'book',
        },
        pen: {
            id: 1354535456,
            title: 'pen',
            count: 15,
            price: 1000,
        },
        pencil: {
            id: 1354535456,
            title: 'pen',
            count: 15,
            price: 1000,
        },
    };
    const getGoods = () => fetch('https://api.com').then((response) => response.json());
}
