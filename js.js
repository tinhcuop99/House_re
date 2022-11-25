Array.prototype.map2 = function(callBack) {
	var arrayLength = this.length;
  
	for	( var i = 0; i < arrayLength; i++) {
    callBack(this[i], i);
    
  }
  	
}


var courses = [ 
'Java',
'PHP',
'Javascript'
];

courses.map2(function(course, index) {
	console.log(index, course)
});

