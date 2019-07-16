// 接口，验证、功能拆分

interface Person {
  name: string,
  age: number
}

function createPerson(person:Person) {
  console.log(person.age);
}

let person = { name: 'bamboo', age: 18 }

createPerson(person);

// ? 表示该参数是可选的
interface Animal {
  color: string,
  size?: number
}

function createAnimal(ani:Animal) {
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

createAnimal({color: 'white'});