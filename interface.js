function createPerson(person) {
    console.log(person.age);
}
var person = { name: 'bamboo', age: 18 };
createPerson(person);
function createAnimal(ani) {
    var aniTemp = {
        color: 'yellow',
        size: 100
    };
    if (ani.color) {
        aniTemp.color = ani.color;
    }
    if (ani.size) {
        aniTemp.size = ani.size;
    }
    return aniTemp;
}
createAnimal({ color: 'white' });
