function RSL(){
    let N=prompt("Enter the number:");
    let s=prompt("Enter the seed:");
    N=Number(N);
    s=Number(s);
    let K=0;
    while(K!=3){
    if(N%2==0)
        N=Math.floor(N/2)+s;
    else
        N=(N*3)-s;
    K++;
}
   if((Math.floor(N/10)%10)==s && N<1000 && N>99)
     alert("YES  "+N);
   else
    alert("NO"); 

}