export default (express, bodyParser, createReadStream, crypto, http) => {
    const app = express();


    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 
    

    app
    .use((r, res, next) => { r.res.set(CORS); next(); })
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/sha1/:input', r => {
    
    })
    
    .get('/login/', (req, res) => res.send('goss'))
    .get('/code/', (req, res) => {
 
    })
    ;

    app.all('/req/', (req, res) => {
         
    })
 
     
    return app;

};
