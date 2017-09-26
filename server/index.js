import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html')); 
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port: 3000');
});