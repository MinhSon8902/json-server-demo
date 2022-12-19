const faker = require("faker");
const fs = require("fs");

// set locale to use vietnamese
faker.locale = "vi";

// console.log(faker.datatype.uuid());
// console.log(faker.commerce.product());
// console.log(faker.company.companyName());
// console.log(faker.image.cats());

const randomCategoryList = (n) => {
  if (n <= 0) return [];
  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createAt: Date.now(),
      updateAt: Date.now(),
    };
    categoryList.push(category);
  });

  return categoryList;
};

(() => {
  const categoryList = randomCategoryList(4);
  const db = {
    categories: categoryList,
    products: [],
    profile: {
      name: "MS",
    },
  };

  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully !");
  });
})();
