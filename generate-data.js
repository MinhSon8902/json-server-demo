const { faker } = require('@faker-js/faker');
const fs = require('fs');

// set locale to use vietnamese
faker.setLocale = 'vi';

const randomCategoryList = (n) => {
  if (n <= 0) return [];
  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createAt: Date.now(),
      updateAt: Date.now(),
    };
    categoryList.push(category);
  });

  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];
  const productList = [];

  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        author: faker.name.fullName(),
        description: faker.commerce.productDescription(),
        createAt: Date.now(),
        updateAt: Date.now(),
        imageUrl: faker.image.imageUrl(400, 400, '', true),
      };

      productList.push(product);
    });
  }

  return productList;
};

(() => {
  const categoryList = randomCategoryList(6);
  const productList = randomProductList(categoryList, 50);
  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: 'MS',
    },
  };

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully !');
  });
})();
