let names=['Tulsi','Subhradeep','Suvam','Akash'];
let streams=['CSE','ECE','CSE','IT'];
let newArr=(names,streams)=>{
    let arr=[];
    for(var i=0;i<names.length;i++){
arr[i]=`{stream: "${streams[i]}", name: "${names[i]}"}`;
}
return arr;
}
console.log(newArr(names,streams));