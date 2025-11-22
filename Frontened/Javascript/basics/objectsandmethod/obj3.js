function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
const car = { brand: "Toyota", model: "Innova", year: 2022 };
printObject(car);
