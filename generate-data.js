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
        name: faker.commerce.productName(),
        author: faker.name.fullName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(1, 1000, 0, '$'),
        description: faker.commerce.productDescription(),
        createAt: Date.now(),
        updateAt: Date.now(),
        thumbnailUrl: faker.image.imageUrl(400, 400, '', true),
      };

      productList.push(product);
    });
  }

  return productList;
};

(() => {
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);
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
