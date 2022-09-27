let len=Math.floor(Math.random()*10);
let arr=[];
let random=(len)=>{
    for(var i=0;i<len;i++)
    {
        arr[i]=Math.floor(Math.random()*31)+10;
    }
    return console.log(arr);
    }
console.log(random(len));

