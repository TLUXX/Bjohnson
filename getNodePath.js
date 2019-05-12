function getNodePath(node)
{
    //check whether the e is empty before proceding
    if(node == null)
    {
        return null;
    }
    //Create array to store e names
    var array= new Array();

    //loop through the es so long as e is not null

    while(node != null)
    {
        array.push(node.nodeName);
        node = node.parentNode;//move to the parent e
    }
    //reverse the array to start with the most high e
    array.reverse();
    return array;
}
