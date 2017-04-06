// @flow
/**
 * Created by Marko Mlinarević on 06.04.2017..
 */

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `Wah Wah, I am ${this.name}`;
    }
}

export default Dog;
