// 2. Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity
// 0. Модифицировать функцию подсчета стоимости товаров из прошлого задания.Теперь для расчета стоимости, товары должны соответствовать хотя бы одному из условий:
// - товар в наличии
// - стоимость товаров одного вида выше 500

type Product = {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
};
// Пример входных данных:
const products = [
  { name: 'A', price: 100, quantity: 2, inStock: true },
  { name: 'B', price: 40, quantity: 5, inStock: false },
  { name: 'C', price: 10, quantity: 0, inStock: true },
  { name: 'D', price: 200, quantity: 3, inStock: false }
];

function basket(products: Product[]) {
  let total = 0;

  // Перебираем каждый товар в корзине
  for (const item of products) {
    const itemTotal = item.price * item.quantity; //общая стоимость конкретного товара
    // Проверяем условия: товар в наличии либо стоимость товара > 500
    if ((item.inStock || itemTotal > 500) && item.quantity > 0) {
      console.log(`${item.name}: ${item.price} * ${item.quantity} = ${itemTotal}`);
      total += itemTotal; // Добавляем к общей сумме
    } else {
      console.log(`${item.name} нет в наличии или стоимость <= 500 или количество < 1`);
    }
  }
  console.log(`Общая стоимость: ${total}`);
  return total;
}
basket(products);
