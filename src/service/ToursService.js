import {faker} from "@faker-js/faker";

export class ToursService {
    static async getPlaces() {
        const resArr = [];

        [...Array(5).keys()].forEach(_ => {
            const randomPlace = {
                name: faker.address.country(),
                price: faker.commerce.price(),
                text: faker.lorem.paragraph(5),
                imageUrl: `${faker.image.nature()}?random=${Math.random()}`,
                showFullText: false
            }

            resArr.push({...randomPlace});
        });

        return resArr;
    }
}