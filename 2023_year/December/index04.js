// count vowels in a string in javascript

function countAllTheVowels(string) { 

    const numberOfVowels = string.match(/[aeiou]/gi).length;

    return numberOfVowels;
}
console.log(countAllTheVowels("nimisha")); // 3