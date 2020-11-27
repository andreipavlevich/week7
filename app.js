export default (express, bodyParser, createReadStream, crypto, http) => {
    const app = express();


    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 
    

    app.use((r, res, next) => { r.res.set(CORS); next(); });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/sha1/:input', (req, res) => {
            var hash = crypto.createHash('sha1');
            hash = hash.update(req.params.input);
            hash = hash.digest('hex');
            res.send(hash);
    });
    
    app.get('/login/', (req, res) => res.send('andreipavlevich'))
    app.get('/code/', (req, res) => {
            const path = import.meta.url.substring(7);
            createReadStream(path).pipe(res);
    });

    app.all('/req/:adress', (req, res) => {
        console.log(req.query.addr);
    });
    
    app.get('/*', (req, res) => res.send('andreipavlevich'))
    
    return app;
};
