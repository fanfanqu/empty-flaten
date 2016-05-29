'use strict';
function double_to_one(collection) {
  //在这里写入代码
            var ar = Array();
			var newArr = new Array()
			for (var i = 0; i < collection.length; i++) {
				ar[i] = collection[i];
				if (ar[i].constructor == Number) {
					newArr.push(ar[i])
				} else {
					for (var j = 0; j < ar[i].length; j++) {
						newArr.push(ar[i][j]);
					}
				}
			}
			return newArr;
}
module.exports = double_to_one;
