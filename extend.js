class Input {
	constructor(){
		this.id = new Date().getTime();
	}

    getValue() {
    	
        var val = document.getElementById(this.getID()).value;
        console.log(val);
        return val;
    }

    getID(){
    	return this.id;
    }

    render () {
    	var node = document.createElement('input');
    	node.id = this.getID();
    	node.addEventListener("change", this.getValue.bind(this));
        document.body.appendChild(node);
    }
};

class Input2 extends Input{
	getValue() {
        var val = super.getValue();
        debugger;
        function isNumber(n) {
            return typeof n === 'number' && n % 1 == 0;
        }
        console.log(isNumber(+val))
        if(isNumber(+val)) return val;
        else return 0;
    }
};

let j = new Input();
j.render();

let input2 = new Input2();
input2.render();

let k = new Input();
k.render();
