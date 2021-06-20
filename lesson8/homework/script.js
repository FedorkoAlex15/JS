function Tags( titleOfTag, action,  attrs){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

let titleOfTag = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
let attrs = [
    {accesskey:  'Активация ссылки с помощью комбинации клавиш.' },
    {coords :  'Устанавливает координаты активной области.' },
    {download : 'Предлагает скачать указанный по ссылке файл.' }
];

let div = '<div>';
let divDescription = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. ';
let divAttr = [
    {align: 'Задает выравнивание содержимого тега <div>.' },
    {title:'Добавляет всплывающую подсказку к содержимому.' }
];




const aTag = new Tags(titleOfTag, action, attrs);
const aTags = new Tags(div, divDescription, divAttr);
console.log(aTag)
console.log(aTags)