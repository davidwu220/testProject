import express from 'express';
import exphbs from 'express-handlebars';
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 5000);

app.get('/', function (req, res) {
    res.render('home');
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});