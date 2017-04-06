/**
 * Created by Marko Mlinarević on 06.04.2017..
 */

import Dog from './dog';

test('Dog.bark', () => {
    const testDog = new Dog('Test');
    expect(testDog.bark()).toBe('Wah Wah, I am Test');
});
