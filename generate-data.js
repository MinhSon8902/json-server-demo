var faker = require("faker");

// set locale to use vietnamese
faker.locale = "vi";

console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.commerce.productDescription());
console.log(faker.image.cats());
console.log(faker.commerce.product());
console.log(faker.random.imageUrl());
console.log(faker.random.findName());
