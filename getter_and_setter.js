/*
Напишите конструктор User для создания объектов:

С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
*/
function User() {
  let firstName = null;
  let surName = null;
  this.setFirstName = function(name){
  	firstName = name;
  };
  this.setSurname = function(surname){
  	surName = surname;
  };

  this.getFullName = function(){
  	return firstName + " " + surName;
  }

}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов