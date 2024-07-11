const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
