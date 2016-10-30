class Input {
 getValue() {
     return getById("1").value;
 }  

  render () {

    document.body.appendChild(<input id="1">);
  }
};


class Input2 extends Input{
	getValue() {
    var val = getById("1").value;
  if(_.isNUmber(val)) reuturn val;
  else return 0;
 };
}
