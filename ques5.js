let random=()=>{
    let a=[];
    for(var i=0;i<10;i++)
    {
        a.push(Math.floor(Math.random()*31)+10);
    }
    return a;
    }
    let func=(random)=>{console.log (random())}
func(random);
