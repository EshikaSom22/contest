let n=5;
let str='';
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++){
        if(i===1 || i===n)
        {
            str=str+'*';
        }
        else{
            if(j===1 || j===n)
            {
                str=str+"*";
            }
            else{
                str=str+' ';
            }
        }
    }
    str=str+'\n';
}
console.log(str);