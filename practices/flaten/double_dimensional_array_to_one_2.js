'use strict';
function double_to_one(collection) {
  //在这里写入代码
  var ar = new Array();
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
			var res = [];
			var json = {};
			for (var i = 0; i < newArr.length; i++) {
				if (!json[newArr[i]]) {
					res.push(newArr[i]);
					json[newArr[i]] = 1;
				}
			}
			return res;
}
module.exports = double_to_one;
