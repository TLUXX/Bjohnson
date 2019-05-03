let contacts =
[
  { first_name: 'Brian',
    last_name: 'Johnson' },

  { first_Name: 'Tom',
    last_name: 'Johnson'},

  { first_Name: 'Bill',
    last_name: 'Smith'},

  { first_Name: 'Jane',
    last_name: 'Doe'},
];

var sortByLast = contacts.sort(function (a, b) {
  return a.last_name - b.first_name;
});

console.log(sortByLast);
