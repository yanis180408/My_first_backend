const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
    function getRandomValuesWithinRange(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }
    sinastra_songs = ["Accidents Will Happen", "After You've Gone", "All of You","Blame It on My Youth", "Blue Hawaii", "Bonita", "The Boys Night Out","Call Me", "The Call of the Canyon", "Can I Steal a Little Love?", "C'est Magnifique","The Days of Wine and Roses", "Dick Haymes, Dick Todd and Como", "Embraceable You","Exodus", "Gunga Din", "Here Comes the Night", "Hey Look, No Crying", "I Had the Craziest Dream","If I Ever Love Again"];
    random_index = getRandomValuesWithinRange(0, sinastra_songs.length);
    res.send(sinastra_songs[random_index]);

})
app.get('/birth_date', (req, res) => {
    sinastra_birth_date = "December 12, 1915";
    res.send(sinastra_birth_date);
})
app.get('/birth_city', (req, res) => {
    sinastra_birth_city = "Hoboken, New Jersey";
    res.send(sinastra_birth_city);
})
app.get('/wives', (req, res) => {
    sinastra_wives = "Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx";
    res.send(sinastra_wives);

})
app.get('/picture', (req, res) => {
    res.redirect("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra_(1957_studio_portrait_close-up).jpg");
})
app.get('/protected', (req, res) => {
    if (req.headers.authorization){ 
        array = atob(req.headers.authorization.split(' ')[1]).split(':');
    
        username = array[0];
        password = array[1]; 
        if (username == 'admin' && password == 'admin'){
            return res.send('Welcome, authenticated client');
        }

    }
      
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Not authorized');

})
app.listen(port, () => {
    console.log("Server started "+ port);

});
