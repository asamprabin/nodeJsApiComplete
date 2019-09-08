const bcrypt = require('bcrypt');


function createHash(myPlaintextPassword, saltRounds) {
    var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    return hash;
}

function checkHash(myPlaintextPassword, hash) {
    var check = bcrypt.compareSync(myPlaintextPassword, hash);
    return check;
}

const bcryptUtil = {
    createHash: createHash,
    checkHash: checkHash
}

module.exports = bcryptUtil