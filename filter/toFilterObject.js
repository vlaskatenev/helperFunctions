

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


// пример работает с структурой аналогичной массиву cards должен иметь структуру аналогичную массиву cards выше
// выводим в массив уникальные значения по ключам 'article', 'size'
// можно указать любые ключи и любое их количество
// и добавляем счетчик count для подчеста количества уникальных объектов


// для фильтра нужно прописать ключи из объекта
const listKeysForCompare = ['article', 'size']

// главная логика расчета:
function filterValues(cards, listKeysForCompare) {
    return cards.reduce((acc, el) => {
        // создаем копию объекта чтобы не изменять объекты в массиве cards
        const tempElem = { ...el }

        tempElem.count = 1

        // считаем сколько повторяющихся значений из listKeysForCompare есть в аккумулирующем массиве
        const { indexValue, countElements } = toAmountElement(acc, tempElem, listKeysForCompare)

        if (!countElements) {
            acc.push(tempElem)
            return acc
        } else {
            acc[indexValue].count++
            return acc
        }
    }, [])
}

console.log(filterValues(cards, listKeysForCompare))


// pure functions - чистые функции, не изменяют принимаемые значения.
// Вне зависмости когда будут вызваны всегда будут возвращать один ответ
// (конечно в зависмости от переданных аргументов)

// pure functions. Начало
// узнаем повторяется ли объект в массиве, возвращаем количество повторений элемента
// (далее сюда передаем аккумулирующий массив для сравнения)
function toAmountElement(arrayWithObject, objectForCompare, arrayKeys) {
    let indexValue
    const countElements = arrayWithObject.filter((el, index) => {
        indexValue = index
        return toCompareObject(el, objectForCompare, arrayKeys)
    }).length
    return { indexValue, countElements }
}

// сравниваем два объекта на идентичность
function toCompareObject(mainObject, objectForCompare, arrayKeys) {
    if (!arrayKeys) {
        const keysMainObject = Object.keys(mainObject)
        const keysObjectForCompare = Object.keys(objectForCompare)
        arrayKeys = keysMainObject.length === keysObjectForCompare.length
            ? keysMainObject.concat(keysObjectForCompare)
            : keysMainObject
    }
    for (let i = 0; i < arrayKeys.length; i++) {
        if (mainObject[arrayKeys[i]] !== objectForCompare[arrayKeys[i]]) return false
    }
    return true
}

// pure functions. Конец
