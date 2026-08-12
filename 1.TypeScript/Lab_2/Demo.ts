import { myName} from "./Person";
import Person from "./Person";

console.log(`myName: ${myName}`);

// var person1= new Person();
// person1.id=1;
// person1.name="Nguyen Van A";
// person1.address="Ha Noi";

// var person2= new Person();  
// person2.id=2;   
// person2.name="Nguyen Van B";
// person2.address="Hai Phong";
var person1= new Person(1, "Nguyen Van A", "Ha Noi");
var person2= new Person(2, "Nguyen Van B", "Hai Phong");


console.log(`Person 1, id: ${person1.getId()}, name: ${person1.name}, address: ${person1.address}`);
console.log(`Person 2, id: ${person2.getId()}, name: ${person2.name}, address: ${person2.address}`);

person1.go();
person1.showInfo();



