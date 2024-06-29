document.getElementById('convertButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertText(inputText);
    document.getElementById('outputText').value = outputText;
});

function convertText(text) {
    const engToThaiMap = {
        'a': 'ฟ',
        'b': 'ิ',
        'c': 'แ',
        'd': 'ก',
        'e': 'ำ',
        'f': 'ด',
        'g': 'เ',
        'h': '้',
        'i': 'ร',
        'j': '่',
        'k': 'า',
        'l': 'ส',
        'm': 'ท',
        'n': 'ื',
        'o': 'น',
        'p': 'ย',
        'q': 'ๆ',
        'r': 'พ',
        's': 'ห',
        't': 'ะ',
        'u': 'ี',
        'v': 'อ',
        'w': 'ไ',
        'x': 'ป',
        'y': 'ั',
        'z': 'ผ',
        'A': 'ฤ',
        'B': 'ฺ',
        'C': 'ฉ',
        'D': 'ฏ',
        'E': 'ฎ',
        'F': 'โ',
        'G': 'ฌ',
        'H': '็',
        'I': 'ณ',
        'J': '๋',
        'K': 'ษ',
        'L': 'ศ',
        'M': '?',
        'N': '์',
        'O': 'ฯ',
        'P': 'ญ',
        'Q': '๐',
        'R': 'ฑ',
        'S': 'ฆ',
        'T': 'ธ',
        'U': '๊',
        'V': 'ฮ',
        'W': '"',
        'X': ')',
        'Y': 'ํ',
        'Z': '('
    };

    let result = '';
    for (let char of text) {
        result += engToThaiMap[char] || char;
    }
    return result;
}