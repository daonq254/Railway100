export default class Person {
  private id: number;
  name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }


  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  } 

  go(): void {
    console.log("I can go!!");
  }

  showInfo(): void {
    // console.log("id:"+ this.id + " name:" + this.name + " address:" + this.address);
    // Template string: ``  ${}
    console.log(`id: ${this.id}, name: ${this.name}, address: ${this.address}`);
  }
}

export  var myName = "daonq";

export var person1 = new Person(1, "Nguyen Van A", "Ha Noi");

// export { Person };
