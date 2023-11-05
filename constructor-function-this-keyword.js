function car(name,milage,max_speed) {
    this.name=name;
    this.milage=milage;
    this.max_speed=max_speed;
}

const c = new car("swift",20,130);

console.log(c.name);
console.log(c.milage);
console.log(c.max_speed);