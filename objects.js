           //синтаксис
/*user = {
    name: 'Вася',
	surname: 'Петров',
};
user.name = 'Сергей';
delet user.name;*/

            //проверка пуст ли объект
/*function isEmpty(obj){
   var count = 0
   for (var key in obj){
        count++
   }
   if (count == 0){
        return true
   }
   return false
}

var schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );*/

            //сумма свойств + свойство с наибольшим значением
/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};*/
/*var sum = 0;
for(var key in obj){
    sum = sum + obj['key']
}*/
/*var max = 0
var maxKey = ''
for (var key in salaries){
    if (salaries['key'] > max){
	    max = salaries['key']
		maxKey = key
	}

	alert(maxKey || 'Нет сотрудников')*/

            // умножение численных свойств на 2
// до вызова
/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function multiplyNumeric(menu){
    for (var prop in menu){
	    if (isNumeric(menu['prop'])){
		    menu['prop']*=2
		}
	}
};

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};*/