const router = require('express').Router();
const path = require('path');

// Function that sends 'index.html' as a response to a client when a GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// Function that sends 'notes.html" as a response to a client when a GET request is made 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;