import {faker} from "@faker-js/faker";

export class BirthdayService {
    static async getPeople() {
        let randomNumber = Math.floor(Math.random()*10 + 1);
        const resArr = [];

        [...Array(randomNumber).keys()].forEach(_ => {
            let randomUserData = {
                name: faker.name.findName(),
                imageUrl: faker.image.avatar(),
                age: 20 + Math.floor(Math.random() * 30)
            };

            resArr.push({...randomUserData});
        });

        return resArr;
    }
}