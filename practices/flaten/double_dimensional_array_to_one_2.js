'use strict';
function double_to_one(collection) {
  //在这里写入代码
			var arr = [];
			var newArr = [];
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
			var result = [];
			var col = {};
			for (var i = 0; i < newArr.length; i++) {
				if (!col[newArr[i]]) {
					result.push(newArr[i]);
					col[newArr[i]] = 1;
				}
			}
			return result;
}
module.exports = double_to_one;
