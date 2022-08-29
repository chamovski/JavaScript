function strangChange(word) {
    let stringArr = word.split("");
    if (word.length > 0) {
        let lastCharacter = stringArr.pop();
        let firstCharacter = stringArr.shift();
        stringArr.unshift(lastCharacter);
        stringArr.push(firstCharacter);
    }
    return stringArr.join("");
}

console.log(strangChange("eureka"));
console.log(strangChange("tester"));
console.log(strangChange("coffee"));