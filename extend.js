class Input {
 getValue() {
     return getElementById("1").value;
 }; 

  render () {
    document.body.appendChild('innerHTML id="1"');
  };
};

class Input2 extends Input{
	getValue() {
    var val = super.getValue();
  if(_.isNUmber(val)) return val;
  else return 0;
 };
 render () {
    super.render();
  };
}