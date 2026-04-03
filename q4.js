function FC(){
    let B,D,M,S;
    while(1){
    B=prompt("Enter the Base:");
    D=prompt("Enter the distance:");
    M=prompt("Enter the minutes late:");
    S=prompt("Enter the seed:");
    if (B >= 1 && B <= 1000 &&
    D >= 0 && D <= 100 &&
    M >= 0 && M <= 120 &&
    S >= 0 && S <= 9)
    break;
    
    else
        alert("WRONG INPUT TRY AGAIN");
}
    B=Number(B);
    D=Number(D);
    M=Number(M);
    S=Number(S);
    let fare;
    fare=Number(fare);
    fare=B+7*D;
    if(M>15)
        fare+=20;
    if(D>10)
        fare=Math.floor(fare*1.1);
    if(S%2==0)
        fare=fare+S;
    else
        fare=fare-S;
    if(fare%5==0)
        fare=fare;
    else{
        for(let i=1;i<6;i++){
           fare++;
           if(fare%5==0)
            break;          
        }
        }
    alert("THE FARE IS:"+fare);    
}