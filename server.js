import * as jsonServer from 'json-server';
import * as cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
    static: false
});

const corsOptions = {
    origin: ["https://mapadeincidentesfront.onrender.com/", "http://localhost:5173"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

server.use(cors(corsOptions));

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`JSON Server está corriendo en el puerto ${port}`);
});