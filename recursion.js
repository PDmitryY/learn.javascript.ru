function sum(arr){
	let l = arr.length;
	if (l>0){
		return arr[l-1] + sum(arr.slice(0,(l-1)));
	}
	else
		return 0;
};

console.log(sum([1,2,3,4,5,6]))

