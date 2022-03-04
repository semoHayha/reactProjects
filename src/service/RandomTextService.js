import {faker} from "@faker-js/faker";

export class RandomTextService {
    static async getRandomText(count) {
        let resText = "";

        [...Array(count).keys()].forEach(_ => {
            resText += faker.random.words(50)+".\n\n"
        });

        return resText;
    }
}