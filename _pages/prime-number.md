---
title: "Prime Number"
permalink: /tools/prime-number/
---

Enter a number to check whether it is prime.

<input type="number" id="numberInput" placeholder="Enter a number" style="padding:8px; margin-top:10px;">
<button onclick="checkPrime()" style="padding:8px; margin-left:5px;">Check</button>

<p id="result" style="margin-top:15px; font-weight:bold;"></p>

<script>
function checkPrime() {
    let n = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if (isNaN(n) || n < 2) {
        result.innerHTML = "Please enter an integer greater than 1.";
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.innerHTML = n + " is NOT a prime number.";
            return;
        }
    }

    result.innerHTML = n + " is a PRIME number.";
}
</script>