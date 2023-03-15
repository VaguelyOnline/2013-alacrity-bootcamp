// Given a large body of text - read from a URL?
// Be able to answer the question - how many times does a given word occurr...

// 1. Load the text from the URL - get as string
fetch('https://raw.githubusercontent.com/mxw/grmr/master/src/finaltests/bible.txt')
    .then(response => response.text())
    .then(text => {
        const words = getWords(text);
        const cleanedWords = cleanWords(words);
        const dictionary = buildDictionary(cleanedWords);
        
        // using a JS closure - to ensure the dictionary variable is in scope
        // globalise the function to getWordCount
        window.getWordCount = word => dictionary[cleanWord(word)] || 0;
    });

// Take the raw string, and turn it into an array of words
function getWords(text) {
    return text.split(' ');
}

// Take the array of words, and return an array of 'cleaned' words.
// E.g., Mountain, -> mountain
function cleanWords(words) {
    return words.map(word => cleanWord(word));
}

// Takes a single word, and attempts to 'clean' it for inclusion in the dictionary
function cleanWord(word) {
    return word.toLowerCase();
}

// Take an array of words -> {
//    'word': 34,
//    'the': 72
// }
function buildDictionary(words) {
    const dictionary = {};
    words.forEach(word => {
        // have we seen this word before?
        if (dictionary[word])
            dictionary[word]++;
        else
            dictionary[word] = 1;
    });

    return dictionary;
}