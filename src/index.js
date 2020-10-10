const express=require('express');
const PORT=3000|| process.env.PORT;
const cors=require('cors');
const app= express();
const morgan=require('morgan');
const {connection} =require('./database/db');

app.use(morgan('dev'));
app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',require('./routes/UserRoutes'));

app.listen(PORT,async()=>{
    connection.sync({force:false}).then(()=>{
        console.log('Excelente');
    })
    console.log(`Server on port ${PORT}`);
})