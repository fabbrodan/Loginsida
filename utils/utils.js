function generateRandom () {
    const letters = ['X','Y','Z']
    const randomletter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(math.random() * 10000);
    return `AB${randomNumber}${randomLetter}`;
}

function generateEta() {
    let eta = 10;
    return eta + Math.floor(Math.random() * 20);
}

module.exports = { generateRandom, generateEta }