'use strict';
function double_to_one(collection) {
  //在这里写入代码
            var arr = Array();
			var newArr = new Array()
			for (var i = 0; i < collection.length; i++) {
				arr[i] = collection[i];
				if (arr[i].constructor == Number) {
					newArr.push(arr[i])
				} else {
					for (var j = 0; j < arr[i].length; j++) {
						newArr.push(arr[i][j]);
					}
				}
			}
			return newArr;
}
module.exports = double_to_one;
