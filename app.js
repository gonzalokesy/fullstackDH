// ------- Requiriendo express. 
const express = require ('express');
const app = express (); 


// ------- Requiriendo path y estableciendo carpeta estática.  
const path = require ('path'); 
const publicPath = path.resolve( __dirname, './public');

app.use(express.static(publicPath))

// ------- Levantando servidor. 

app.listen (("port", process.env.PORT || 3030), () => {
    console.log('Servidor corriendo corriendo correctamente en http://localhost:3030/');
})  

// ------- Levantando servidor.
app.get('/', (req, res) => { 
    res.sendFile (path.resolve( __dirname, './views/home.html'))
})

app.get('/register', (req, res) => { 
    res.sendFile (path.resolve( __dirname, './views/register.html'))
})

app.get('/login', (req, res) => { 
    res.sendFile (path.resolve( __dirname, './views/login.html'))
})