function SN() {
    let N = Number(prompt("Enter N:"));
    let S = Number(prompt("Enter S:"));

    let sum = 0;
    let m = 0;
    let d = S + 2;

    while (sum < N) {
        m++;
        if (m % d !== 0) {
            sum += m;
        }
    }

    alert("m = " + m + "\nSum = " + sum);
}