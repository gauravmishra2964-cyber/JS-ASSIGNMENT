JS-Assignment

This repository contains solutions to 6 JavaScript problems for the Fundamentals of Web Design assignment.
Each problem is implemented in a separate JavaScript file and all functions are linked through index.html.

How to Run
Open index.html in any browser.
Click the button for the required question.
Enter the inputs through prompt().
Output is displayed using alert().
1. Digit Gatekeeper (DigiG)
Approach
Take L, R, and K as input.
Traverse every integer from L to R.
For each number:
check whether it is divisible by K
check that it does not contain the digit 0
calculate the sum of digits
check whether the digit sum is prime
Count all valid numbers.
Print the final count.
Time Complexity

O((R − L + 1) × d)
where d is the number of digits.



2. Roll-Seed Lock (RSL)
Approach
Take N and seed as input.
Repeat the transformation exactly 3 times:
if even → N = N/2 + seed
else → N = N*3 - seed
After 3 steps:
check whether the final number is a 3-digit number
extract the middle digit
Print YES if middle digit equals seed, otherwise NO.
Also print the final number.
Time Complexity

O(1)



3. Mirror Corridor (MC)
Approach
Take N and K as input.
Try every X from 0 to 100000.
For each value:
compute num = N + X
reverse its digits
check whether it is a palindrome
check divisibility by K
Print the smallest valid X.
If none exists, print -1.
Time Complexity

O(100000 × d)
Since d is small, effectively O(100000).



4. Fare Calculator (FN)
Approach
Compute initial fare:
fare = base + 7 × distance
Add 20 if minutesLate > 15
Add ⌊10% of fare⌋ if distance > 10
If seed is odd, subtract seed
Otherwise, add seed
Round up the final result to the nearest multiple of 5
Display the final fare
Time Complexity

O(1)


5. Skipping Numbers (SN)
Approach
Take N and seed
Let divisor = seed + 2
Start from m = 1
Add each number to the running sum if it is not divisible by divisor
Stop once sum ≥ N
Print m and the computed sum
Time Complexity

O(m)


6. Contest Score Judge (CSJ)
Approach
Compute:
score = 3a + b − 2c
If score < 0, make it 0
If total submissions > 50, subtract 10
Print:
PASS if score ≥ 60
FAIL otherwise
Time Complexity

O(1)



Functions Used
DigiG()
RSL()
MC()
FN()
SN()
CSJ()
