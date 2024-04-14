const { v4: uuidv4 } = require('uuid');

function generateId() {
    return `id_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;
}

module.exports = {
    generateId,
    generateUuid: uuidv4
};