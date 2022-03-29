let calcPoints = input => {
    if (input === "win") {
        return 3;
    } else if (input === "tie") {
        return 1;
    } else if (input === "lose") {
        return;
    }
}

console.log(calcPoints("tie"));