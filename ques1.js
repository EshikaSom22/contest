let reverse=(myName)=>
{
    var len=myName.length;
    var newName='';
for(var i=len-1;i>=0;i--)
{
    newName+=myName[i];
}
return newName;
}
console.log(reverse('eshika'));