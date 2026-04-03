function CSJ(){
    let a = Number(prompt("Enter Correct Answers"));
    let b= Number(prompt("Enter Partially Correct Answers"));
    let c= Number(prompt("Enter Wrong Answers"));
    a=Number(a);
    b=Number(b);
    c=Number(c);
    let Score;
    Score=Number(Score);
    Score=3*a+b-2*c;
    if(Score<0)
        Score=0;
    
    if(a+b+c>50)
       Score-=10;    
    
    if(Score>=60)
        alert("PASS "+Score);
    else
        alert("FAIL");
}