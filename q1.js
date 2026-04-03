function DigiG(){
    let L = Number(prompt("Enter L"));
    let R = Number(prompt("Enter R"));
    let K = Number(prompt("Enter K"));
    let z, a = 0, b = 1, c, s = 0, t;
    for(let i = L; i <= R; i++){
        z = i;
        a = 0;
        b = 1;
        t = 1;   
        while(z > 0){
            c = z % 10;
            if(c == 0){
                t = 0;
                break;
            }
            a += c;
            z = Math.floor(z / 10);
        }
        if(t == 0)
            continue;
        if(a < 2) 
            b = 0;
        for(let j = 2; j * j <= a; j++){
            if(a % j == 0){
                b = 0;
                break;
            }
        }
        if(i % K == 0 && b == 1)
            s++;
    }
   alert("No of such integers are: " + s);
}