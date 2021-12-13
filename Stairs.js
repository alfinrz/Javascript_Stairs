//stairs
const stair_climb = price(cost){
    let step1 = 0, step2 = 0;
    
    for (let i = cost.lenght-1; i>=0;){
        let currentstep = cost[i] + Math.min(step1, step2)
        {step1 = step2; step2 = currentstep;}
    } 
    console.log(Math.min(step1, step2));
}