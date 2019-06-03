class MySet {
constructor(array) {
 		if (array) {
 			this.data = array;
 		} else {
 			this.data = [];
 		}
  }

//<________________________->
add(value) {
this.data.push(value);
}

//<________________________-
remove(value) {
for (var i = this.data.length - 1; i >= 0; i--) {
		if (this.data[i] == value) {
				this.data.splice(i, 1);
			}
		}
}

//<________________________>
size() {
	return this.data.length;
	}

//<_______________________>
has(value) {
	let exists = false;

	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i] == value) {
				exists = true;
		} else {
				exists = false;
		}
}

return exists;
}

//<___________________________>
isEqual(set) {
	let array = set.toArray();

	if (this.data.length != array.length) {
		return false;
		}

	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i] != array[i]) {
			return false;
			}
		}

		return true;
  }

//<___________________________>
	toArray() {
		let array = this.data;
		return array;
	}
//___________________________>

	forEach(callback) {
		this.data.forEach(function(value) {
			callback(value);
		});
	}

//<______________________>
	clone() {
		return new MySet(this.data);
	}
}

// Tests

let ms1 = new MySet();
ms1.add(4);
ms1.add(4);
ms1.add(5);
ms1.add(6);
ms1.remove(5);
console.log(ms1.toArray());

let ms2 = new MySet([1,2,1,3]);
console.log(ms2.toArray());
console.log(ms2.has(3));
console.log(ms2.size());

let test_set = new MySet(),
compare_set = new MySet([1,2]);
test_set.add(1); test_set.add(2);
test_set.add(2);
if (!test_set.isEqual(compare_set)) {
	console.log("Repeated adds fail");
}
