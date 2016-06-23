'use strict';

function Series(string){
  this.digits = string.split("").map(function(m){return +m;});
};

Series.prototype.slices = function(num) {
	let finalArray = [];
	for(let i = 0; i < this.digits.length; ++i){
	let array = [];
		for(let k = 0; k < num; ++k){
			array.push(this.digits[i]);
			i += 1;
		}
    finalArray.push(array);
		if(this.digits[i] === undefined)return finalArray;
	  i -= num;
	}
	return finalArray;
};

Series.prototype.largestProduct = function(num) {
	if(this.digits.length === 0) return 1;
  if(this.digits.length < num) throw new Error('Slice size is too big.');

  let sliced = this.slices(num);
  let maxed = 0;
  sliced.forEach(function(m){
  	let value = m.reduce(function(a,b){return a*b;});
  	if(value > maxed){
  		maxed = value;
  	}
  });
  return maxed;
};