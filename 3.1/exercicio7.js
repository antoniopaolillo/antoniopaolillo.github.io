let a = 5, b = 8, c = 8;
if (a > b) {
    if (a > c) {
        console.log("a é maior");
    } else if (b > c) {
        console.log("b é maior");
    } else {
        console.log("c é maior");
    }
} else if (b > c) {
    console.log("b é maior");
} else {
    console.log("c é maior");
}