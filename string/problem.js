// 1. reverse string

const reverse = 'Hello JavaScript'
// console.log({reverse})

// using reduce method
const reverStringUsingReducer = reverse.split('').reduce((curr, char) => char + curr, '')
// console.log({reverStringUsingReducer})

// using spreadOprator
const spreadOprator = [...reverse].reverse().join('')
// console.log(spreadOprator)

// basic string
const split = reverse.split('').reverse().join('')
// console.log(split)




// 2.How to remove a character from string in JavaScript

// using reverse method
const replace = reverse.replace("H", "G")
// console.log(replace)

// using slice method
const slice = reverse.slice(1,)
// console.log(slice)

// 3.Delete first character of a string in JavaScript F

// Using slice() Method
// Using substr() Method
// Using replace() method
// Using the substring() method  
// Using String.prototype.split()
// Using Array shift()
const jsfirstCharDelete = reverse.slice(1,)
const jsfirstCharDeleteSub = reverse.split('')
jsfirstCharDeleteSub.shift();
// console.log(jsfirstCharDeleteSub.join(''))


// 4.How to remove text from a string in JavaScript ?

// Method 1: Using replace() method
// Method 2: Using replace() method with Regex
// Method 3: Using substr() method
// Method 4: Using replaceAll() method
// Method 5: Using split() and join() method


const str = new String('aman')
console.log(str)


// 1. Write a JavaScript function to check whether an 'input' is a string or not.

const is_string = (value) => {
    if (typeof (value) == "string") {
        return true;
    } else {
        return false;
    }
}

// 2. Write a JavaScript function to check whether a string is blank or not.

const is_empty = (value) => {
    if (value.length <= 0) {
        return false
    } else {
        return true
    }
}

// 3. Write a JavaScript function to split a string and convert it into an array of words.

const is_Arry = (value) => {
    const newValue = value.trim().split(" ")
    return newValue
}

// 4. Write a JavaScript function to extract a specified number of characters from a string.

const extractNumber = (start, end, name) => {
    const value = name.slice(start, end)
    return value
}

// 5. Write a JavaScript function to convert a string into abbreviated form.

const abbreviatedFrom = (value) => {
    console.log({ value });
    const newValue = value.trim('').split(' ')[0] + " " + value.trim('').split(' ')[1].charAt(0)
    return newValue
}
// Aman S

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.


const unauthorized = (value) => {
    console.log({ value });
    const newValue = value.trim('').split('shukla')[0] + "..." + value.trim('').split('shukla')[1]
    return newValue
}

// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const string_parameterize = (value) => {
    const newValue = value.trim('').split(' ').join('-')
    return newValue.toLowerCase()
}


// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
const capitalize = (value) => {
    const newValue = value.trim('').charAt(0).toUpperCase() + value.slice(1)
    return newValue
}

// substr -   1st value chhod sb deta h 

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

const capitalize_Words = (value) => {
    const newValue = value.trim('').split(' ').map((v) => {
        return v.charAt(0).toUpperCase() + v.substr(1)
    })
    return newValue.join(' ')
}


// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

const swapcase = (value) => {
    const newValue = value.replace(/([A-Z]+)|([a-z]+)/g, function (match, chr) {
        return !chr ? match.toUpperCase() : match.toLowerCase()
    })
    return newValue
}


// 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

const camelize = (value) => {
    const newValue = value.trim('').split(" ").join('')
    return newValue
}

// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

const uncamelize = (value, space) => {
    const newValue = value.replace(/([A-Z]+)/g, function (match, chr) {
        return chr ? space + chr : ""
    })
    return newValue
}


// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"


const humanize_format = (value) => {
    const myValue = value % 10;
    switch (myValue) {
        case 1:
            return value + "st";
        case 2:
            return value + "nd";
        case 3:
            return value + "rd";
        default:
            return value + "th";
    }
};

// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

const text_truncate = (name, length, ending = "") => {
    return name.slice(0, length) + (length ? (ending || "...") : "")
}


// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// Define a function called string_chop, taking two parameters: str (the input string) and size (the size of each chunk).
string_chop = function (str, size) {
    // Check if the input string is null; if so, return an empty array.
    if (str == null) return [];
    // Convert the input string to a string if it's not already.
    str = String(str);
    // Convert the size parameter to an integer using the bitwise NOT operator.
    size = ~~size;
    // Check if the size is greater than 0; if so, split the string into chunks of the specified size using a regular expression and return the result as an array.
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
// Test the function with different input strings and sizes, and log the results to the console.



// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

const count = (value, name) => {
    const newValue = value.toLowerCase().trim('').split(' ').filter((va) => {
        return va == name
    })
    return newValue.length
}


// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

const formatted_string = (left_pad, value, pad_name) => {
    if (pad_name == 'l') {
        return (left_pad + value).slice(-left_pad.length)
    } else {
        return (value + left_pad).substring(0, left_pad.length)
    }
}


// 21. Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

const repeat_string = (name, number) => {
    if (!number) {
        return "Error in string or count."
    } else {
        return name.repeat(number)
    }
}
// if i want multiple add same thing than use reapet in js 


// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

const subStrAfterChars = (name, cut, value) => {
    if (value == "a") {
        return name.split(cut)[0]
    } else {
        return name.split(cut)[1]
    }
}


// 23. Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// Output :
// "w3resource"
// "w3resource"
// "w3resource"

const strip = (value) => {
    return value.trim('')
}


// 24. Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

const truncate = (name, number) => {
    return name.split(' ').map((v, index) => {
        return number < (index + 1) ? "" : v
    }).join(' ')
}


// 25. Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

function alphabetizeString(str) {
    return str.split('')
        .sort()
        .join('');
}


// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"


const remove_first_occurrence = (value, filtername) => {
    return value.split(' ').filter((v) => v !== filtername).join(' ')
}


// 27. Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// Output :
// "3132"
// "313030"

const ascii_to_hexa = (number) => {
    return number.split("").map((v) => v.charCodeAt(0).toString(16)).join('')
}

const ascii_Swap_hexa = (number) => {
    return number.split("").map((v) => v.toString(0).charCodeAt(0)).join('')
}


// 29. Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

const search_word = (value, word) => {
    const newValue = value.trim('').split(' ')
    const finalvalue = newValue.filter((val) => val == word)
    return `'${word}' was found ${finalvalue.length} times`
}

// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa , bb, cc, dd, aa', 'aa'));


// 30. Write a JavaScript function that checks whether a string ends with a specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP  PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false


const string_endsWith = (name, value) => {
    if (value) {
        return name.endsWith(value)
    } else {
        return false
    }
}


// 31. Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.
// Test Data :
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"
const escape_html = (str) => {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;');
}

// Test Data
// console.log(escape_html('PHP & MySQL')); // Output: "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));




// 32. Write a JavaScript function to remove non-printable ASCII characters.
// Test Data :
// console.log(remove_non_ascii('???????PHP-MySQL??????'));
// "PHP-MySQL"

const remove_non_ascii = (name) => {
    return name.split('?').filter((v) => v !== '')[0]
}

// 33. Write a JavaScript function to remove non-word characters.
// Test Data :
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"

const remove_non_word = (value) => {
    return value.split(' ')[0] + "-" + value.split(' ')[2]
}


// 34. Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises.  python exercises.'));
// "Php Exercises. Python Exercises."

const sentenceCase = (value) => {
    return value.toLowerCase().split(' ').map((v) => {
        return v.charAt(0).toUpperCase() + v.substr(1,)
    }).join(' ')
}

// 35. Write a JavaScript function to remove HTML/XML tags from a string.
// Test Data :
// console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// "PHP Exercises"

const strip_html_tags = (value) => {
    const v1 = value.replace(/<p><strong><em>/g, '')
    const v2 = v1.split('</em></strong></p>')[0]
    return v2
}

// 36. Write a JavaScript function to create a zero - filled value with an optional +, - sign.
// Test Data:
// console.log(zeroFill(120, 5, '-'));
// "+00120"
// console.log(zeroFill(29, 4));
// "0029"


// 37. Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
// Test Data :
// console.log(compare_strings('abcd', 'AbcD'));
// true
// console.log(compare_strings('ABCD', 'Abce'));
// false

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));
// console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// console.log(sentenceCase('PHP exercises.  python exercises.'));
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// console.log(remove_non_ascii('???????PHP-MySQL??????'));
// console.log(string_endsWith('JS PHP  PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// console.log(ascii_Swap_hexa('3132'));
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(alphabetizeString('United States'));
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// console.log(formatted_string('0000', 123, 'l'));
// console.log(formatted_string('00000000', 123, ''));
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", ''));
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// // console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.', 19))
// console.log(text_truncate('We are doing JS string exercises.', 15, "!!"))
// console.log(humanize_format(2));
// console.log(uncamelize('helloWorld', ' '));
// console.log(uncamelize('helloWorld', '-'));
// console.log(camelize("JavaScript Exercises"))
// console.log(swapcase('AaBbc'));
// console.log(capitalize_Words('js string exercises how are you'));
// console.log(capitalize('js string exercises'));
// console.log(string_parameterize("Robin Singh from USA."));
// console.log(unauthorized('amanshukla@gmail.com'));
// console.log(abbreviatedFrom('Aman Shukla'));
// console.log(is_Arry("AMAN Shukla"));
// console.log(is_string(8));
// console.log(is_empty(""));
// console.log(extractNumber(0, 2, "name"));







