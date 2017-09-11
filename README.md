# strapony
Инновационная библиотека для работы с DOM деревом, созданием шаблонов и управлением одностраничного приложения!
обучающее видео: https://www.youtube.com/watch?v=ROSgMBnBV-8

## Подключение ##
Скачивайте файл и подключайте к проекту.
```html
<script defer src="strapony.js"></script>
```
## Туториал ##
### Структура ###
Библотека создает глобальный объект $={}, собирает DOM элементы с атрибутом id в структуру, пример:
```html
    <div id="MAIN">
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
Дополним структуру новой функцией
```js
$.MAIN.menu.test = function(){
    alert('Strapony');
}
```
и создадим событие "onclick" на дочерние div элементы, которое будет вызывать "$.MAIN.menu.test()": 
```js
$.MAIN.menu.func('test','div','onclick');
```
выборка происходит по правилам https://www.w3schools.com/cssref/css_selectors.asp, всем элементам назначается атрибут "data-test" равный номеру в выборке.
### ШАБЛОНЫ ###
создадим шаблон:
```html
    <div id="TPL.card">
        <span>${this.name}</span>
        <p>${this.desc}</p>
    </div>
```
все елементы которые начинаются с "TPL." автоматические удаляются со страницы.
шаблон заполняется по правилам https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.
тепер заполним его и дабавим в любой раздел через функцию set:
```js
    let id = 1;
    $.TPL.card.name = 'test';
    $.TPL.card.desc = 'example';
    $.MAIN.menu.set(id,$.TPL.card);
```
id - уникальный идентификатор объекта, если такой идентификатор уже есть в списке то он будет обновлен без создания дубликата.
Удаляются объекты созданные через шаблон через функцию del:
```js
    $.MAIN.menu.del(id);
```


