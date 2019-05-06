function addList(name1, name2){

var fanslist = ["Bob", "Tom", "Jane", "Anne", "Zelend"];
var fanslist2 = [];

fanslist2.push (name1, name2);

var fanslist3 = fanslist.concat(fanslist2);

if (fanslist < fanslist3) {
   console.log ("new name was added");
}
else {
   console.log ("new name not was added");
}
}
console.log(addList([1, 2, 3], "Jay"));

console.log(fanslist);
console.log(fanslist2);
console.log(fanslist3);
