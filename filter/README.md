## Функция helper для фильтрации данных внутри объекта

### Пример объекта

```js
const cards = [
    {
        name: 'card-1',
        cost: 2998,
        article: 111,
        size: 15.5,
    },
    {
        name: 'card-2',
        cost: 9,
        article: 222,
        size: 15,
    },
    {
        name: 'card-3',
        cost: 989,
        article: 333,
        size: 15,
    },
    {
        name: 'card-4',
        cost: 94,
        article: 222,
        size: 19,
    },
    {
        name: 'card-5',
        cost: 1289,
        article: 333,
        size: 15,
    },
    {
        name: 'card-6',
        cost: 99,
        article: 333,
        size: 17,
    },
    {
        name: 'card-7',
        cost: 4489,
        article: 333,
        size: 18,
    },
];
```
Пример работает с структурой аналогичной массиву cards выше.

Вводим в массив listKeysForCompare уникальные значения по ключам 'article', 'size' (можно указать любые ключи и любое их количество) и добавляем счетчик count для подчеста количества уникальных объектов

Прописываем ключи по которым выполняется фильтрация

```js
const listKeysForCompare = ['article', 'size']
console.log(filterValues(cards, listKeysForCompare))
```

```js
node toFilterObject.js
[
  { name: 'card-1', cost: 2998, article: 111, size: 15.5, count: 1 },
  { name: 'card-2', cost: 9, article: 222, size: 15, count: 1 },
  { name: 'card-3', cost: 989, article: 333, size: 15, count: 1 },
  { name: 'card-4', cost: 94, article: 222, size: 19, count: 2 },
  { name: 'card-6', cost: 99, article: 333, size: 17, count: 1 },
  { name: 'card-7', cost: 4489, article: 333, size: 18, count: 1 }
]
```