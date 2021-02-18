
const disemvowel = () => {
    const el = document.querySelector("#name-to-disemvowel").value;
    const p = document.querySelector(".disemvowel-string");
    let output = el.replace(/a|e|i|o|u/gi, "");
    p.textContent = output;
    // const str = el.split("").join(" ");
    // const vowels = "aeiou"; 
    // for(const char in str) {
    //     if(!vowels.includes(char.toUpperCase())) {
    //         output += char;
    //     }
    // }
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;
    const p = document.querySelector("#is-palindrome-p");
    let result = "true"; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - i - 1]) {
            result = "false"
        }
    }
    p.textContent = result;
}

const average = (arr) => {
    // arr = [1, 2, 3];
    let sumOfNums = sum(arr) 
    return sumOfNums / arr.length; 
}

const onlyOdds = arr => {
    return arr.filter(num => num % 2 === 1);
}

const sum = (arr) => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        sum += num
    }
    return sum; 
}

const favoriteNumbers = () => {
    let list = document.querySelectorAll("#favorite-numbers li");
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })
    
    let sumOfNums = sum(arr);
    let averageOfNums = average(arr);
    let onlyOddsOfNums = onlyOdds(arr);
    
    const sumOfFav = document.querySelector("#sum-of-favorite-nums");
    sumOfFav.textContent = sumOfNums; 
    
    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent = averageOfNums; 
    
    let oddList = document.querySelector("#list-of-odd-favorite-nums");
    
    
    onlyOddsOfNums.forEach((odd) => {
        const li = document.createElement("li");
        li.textContent = odd;
        oddList.appendChild(li);
    });
}

favoriteNumbers();

const  incrementCount = () => {
    let p = document.querySelector("#click-count");
    let counter = Number(p.textContent);
    p.textContent = ++counter;
}

const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.textContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector(".shopping-list");
    let input = document.querySelector("#add-item").value;
    // const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = input;
    shoppingList.appendChild(listItem)
    document.querySelector("#add-item").value = "";
}


const killButton = () => {
    const button = document.querySelector("#kill-button");
    document.querySelector("#kill-selector").removeChild(button)
    
    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}