let streams=['CSE','ECE','CSE','IT'];
let names=['Tulsi','Subhradeep','Suvam','Akash'];
let newArr=streams.map(function(value,index){
    return {stream:value,name:names[index]}
});
console.log(newArr);