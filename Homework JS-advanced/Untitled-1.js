class Person {
    constructor(userAge, userName, userSurname){
        this.age = userAge;
        this.name = userName;
        this.surname = userSurname;
    }
}
var a, b, c;
a = new Person(27, "Alex", "Laaaaaaa");
b = new Person(30, "Olya", "Paaaaaaa");
c = new Person(20, "Mary", "Faaaaaaa");

var arr = [a, b, c];




arr.sort(function(a, b){
    return a.age - b.age;
});

console.log(arr[0]);
