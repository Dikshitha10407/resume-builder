// 1. Import the Express module 
const express = require('express'); 
// 2. Initialize the Express application 
const app = express(); 
// 3. Define the Port number 
const PORT = 3000; 
// 4. Define a basic GET route for the home page ('/') 
app.get('/', (req, res) => { 
    res.send('Welcome to your first Node.js & Express Server!'); 
}); 
// 5. Define an API route returning JSON data 
app.get('/api/user', (req, res) => { 
    res.json({ 
        id: 101, 
        name: "Rahul", 
        role: "MERN Stack Intern", 
        status: "Active" 
    }); 
}); 
// 6. Start the server and listen on the defined port 
app.listen(PORT, () => { 
    console.log(`Server is running successfully on http://localhost:${PORT}`); 
});