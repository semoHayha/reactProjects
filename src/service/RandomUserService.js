import {faker} from "@faker-js/faker";

export class RandomUserService {
    static async getPerson() {
        return {
            name: faker.name.findName(),
            imageUrl: `${faker.image.avatar()}?random=${Math.random()}`,
            age: 20+Math.floor(Math.random()*40),
            address: faker.address.streetAddress(),
            phoneNo: faker.phone.phoneNumberFormat(),
            password: faker.internet.password(),
            email: faker.internet.email()
        };
    }
}