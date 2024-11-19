import express from 'express';
import 'dotenv/config';
import mainRouter from './routes/index.js';
import cors from "cors";
import auth from './middleware.js';
import { BrowserRouter } from 'react-router-dom';

// const mainRouter = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1', mainRouter);
app.use('/api/v1' , auth);

app.listen(port, function (err) {
    if(err) console.log(err);
    else console.log(`server is running at port number ${port}`);
});

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/send' element={<SendMoney/>}/>
            </Routes>
        </BrowserRouter>
    );
};
