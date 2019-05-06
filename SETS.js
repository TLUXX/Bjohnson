var data =[1,2,3];

function myset_add(array, new_values)
{
    array.push(new_values);
    return array;
}
console.log(data);

var result = myset_add(data,4);

console.log(result);

//--------------------------------------
function myset_remove(array, value)
{
var newArray = [];

      for(let i=0;i<array.length;i++)
{
      if(array[i]!=value){
      newArray.push(array[i]);
}
}
    return newArray;
}
result = myset_remove(data, 3);
console.log(result);

//-----------------------------------------

function myset_has(array,value)
{

    for(let i=0;i<array.length;i++)
{
      if(array[i]==value){
      return ("The data set has a value ".concat(value));

}
      else
{
      return ("The data set has no value ".concat(value));

}
}
}
 console.log(myset_has(data,5));

 //---------------------------------------

  function myset_size(array)
{
    return array.length;

 }
console.log("The size of array is ".concat(myset_size(data)));
