# strapony
Микро библиотека для работы с DOM деревом и шаблонами.
Видео: https://www.youtube.com/watch?v=ROSgMBnBV-8

## Подключение ##
```html
<script defer src="strapony.js"></script>
```
## Описание ##
### Структура ###
Библиотека создает глобальный объект $={}.
Собирает DOM элементы с атрибутом id в структуру. 
```html
    <div>
        <div id="MAIN.menu">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </div>
```
Создаст структуру $.MAIN.menu, каждый элемент структуры является классом strapony.
### func ###
Напишем новую функцию:
```js
$.MAIN.menu.test = function(){
    alert('Strapony');
}
```
и создадим событие "onclick" на дочерние div элементы, которое будет вызывать "$.MAIN.menu.test()": 
```js
$.MAIN.menu.func('test','div','onclick');
```
выборка происходит по правилам https://www.w3schools.com/cssref/css_selectors.asp, всем элементам назначается атрибут "data-test" равный порядковому номеру в выборке.
### ШАБЛОНЫ ###
Определим шаблон:
```html
    <div id="TPL.card">
        <span>${this.name}</span>
        <p>${this.desc}</p>
    </div>
```
Элементы определенные как шаблон удаляются из основного документа, доступ к ним возможен только через структуру.
Шаблон заполняется по правилам https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.
Для элементов шаблонов создается специальная функция которая обеспечивает высокую скорость заполнения. 
Теперь заполним его и добавим в любой раздел через функцию set:
```js
    let id = 1;
    $.TPL.card.name = 'test';
    $.TPL.card.desc = 'example';
    $.MAIN.menu.set(id,$.TPL.card);
```
id - уникальный идентификатор объекта, если такой идентификатор уже есть в списке то он будет обновлен без создания дубликата.
Удаляются объекты, созданные через шаблон, через функцию del:
```js
    $.MAIN.menu.del(id);
```