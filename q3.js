function  MC(){
    let N=prompt("Enter the number:");
    let K=prompt("Enter the K:");
    N=Number(N);
    K=Number(K);  
    let p=1;  
    for(let i=0;i<=100000;i++){
    let k=N+i;
    let revnum=0;
    
    revnum=Number(revnum);
    k=Number(k);
        while (k > 0) {
        revnum = revnum * 10 + k % 10;
        k = Math.floor(k / 10);
    }
    if(revnum==(N+i) && (N+i)%K==0){
        alert("NUMBER IS:"+revnum);
        p=0;
        break;
     }
    }
    if(p==1)
        alert("-1");
}

