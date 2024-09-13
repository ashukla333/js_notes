const a = "Hello Broh Hello how are"   //string
const b = new String("Hello Broh")   //string Object

// length
const string = a.length

// if  i want specific carector then use charAt
const st = a.charAt(4)

// index of lastIndexOf use to file index 
const strd = a.indexOf('Hello')  // 1st wale hello ka he position leta h
const str = a.lastIndexOf("Hello") //  last wale hello ka position leta h
// console.log(strd,str);

// slice & subString
const slice = a.slice(4, 1)   //cut krke 1 index se last index tak deta  h value,   last se -1 -2 start hota h usko bhi consider krta h ye ,if 4,1 pass then also not consider 0 give 
const subString = a.substring(4, 1) //negative number behaives like 0,its give save reverse or number
// console.log(slice)    
// console.log(subString);

// split  method 

const splits = a.split(' ')   // array me string dal ke deta h  or '' gap krne pe hello or ' ' krne pe hole word ko one by one deta h
// console.log(splits); //[ 'Hello', 'Broh', 'Hello', 'how', 'are' ]

const split = a.split('')   // array me string dal ke deta h  or '' gap krne pe hello or ' ' krne pe hole word ko one by one deta h
// console.log(split);  //['H', 'e', 'l', 'l', 'o',' ', 'B', 'r', 'o', 'h',' ', 'H', 'e', 'l', 'l','o', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e']


const splite = a.split('o')   // array me string dal ke deta h  or '' gap krne pe hello or ' ' krne pe hole word ko one by one deta h
// console.log(splite);  //[ 'Hell', ' Br', 'h Hell', ' h', 'w are' ]


const splitelimit = a.split('o', 2)   // array me string dal ke deta h  or '' gap krne pe hello or ' ' krne pe hole word ko one by one deta h
// console.log(splitelimit);  //[ 'Hell', ' Br' ]


// include method 

const include = a.includes('hello')
// console.log(include);  //false

const includes = a.includes('Hello')
// console.log(includes);  //true


const position = a.includes('Hello', 5)
// console.log(position);  //true  check  after 5 index number position

// startWith && endWith
// check value start end with same carrector or not give true and falsey value
const start = a.startsWith('hello')
// console.log(start); //false

const startWith = a.startsWith('Hello')   // start kissse ho rha h
// console.log(startWith); //true

// endsWith

const end = a.endsWith('hello')
// console.log(end); //false

const ends = a.endsWith('are')
// console.log(ends); //true   end kisse ho rha h



//concat method
// use to add two string

const concat = a.concat(b)
// console.log(concat); //Hello Broh Hello how areHello Broh

// repeat
const repeat = a.repeat(2)
// console.log(repeat,"repe");   jine bar number rhega utne bar print hoga

// console.log(a,b);

// trim
const news = "  He Va  "
const trim = news.trim('')
// console.log(news.trimStart('')); //pitche se 
// console.log(news.trimEnd(''));  //age se 
// console.log(trim);  //gap ko kam krne ke leye use hota h 


// pad start & end
const startPadss = "pad".padStart(3)
const startPad = "pad".padEnd(10, "vc")

const startPads = "pad".padStart(6, "pod")
// console.log({startPads,startPad,startPadss});
// 3 step ka extra gap chahiye hota h


// searchMethod 

// its use in search(RegExp)

const search = a.search(/ow/)
// console.log({search}); //18  age pitche jha se rhega value waha ka he number dega elese nhi dega
// console.log({search:a.search(/re/)});


// match & match all

// match also use to find regular expression 
// but using match its give o/p inside the []  and search its give index number

const match = a.match(/ow/)
// console.log(match); //['ow',index: 18,input: 'Hello Broh Hello how are',groups: undefined]
const matchs = a.match(/ow/gi)
// console.log(matchs); //['ow']
const matchss = a.matchAll(/lo/g)
// console.log(...matchss); //['ow']  jitne bhi honge sb array me mil jayenge

// lower case & uppercase

const lower = a.toUpperCase()
const lowers = a.toLowerCase()
// console.log({lower,lowers});


// to string & value Off