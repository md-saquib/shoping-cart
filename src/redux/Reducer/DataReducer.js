

import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

faker.seed(21);


const productData = [...Array(21)].map((prod) => ({

    userId: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    fastDelivery: faker.datatype.boolean(),
    instock: faker.helpers.arrayElement([0, 3, 5, 7, 9]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),


}))

const initialvalue = {
    data: productData
}

export const productReducer = (state = initialvalue, action) => {


    return state;
}
