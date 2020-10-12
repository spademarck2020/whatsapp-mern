//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1088207',
    key: '3a553bb6e9ad72f658b7',
    secret: 'efd967a50e3c61cbc0be',
    cluster: 'ap1',
    encrypted: true
});

//middleware
app.use(express.json())

app.use(cors())


//DB config
const connection_url = 'mongodb+srv://admin:Bxm15e08U60P0Laf@cluster0.y0lhp.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open',()=>{
    console.log("DB connected")

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on('change',(change)=>{
         console.log('This is change',change)

         if(change.operationType === 'insert'){
             const messageDetails = change.fullDocument;
             pusher.trigger('messages','inserted',
             {
                 id: messageDetails._id,
                 name: messageDetails.name,
                 message: messageDetails.message,
                 timestamp:messageDetails.timestamp,
                 received:messageDetails.received
             })
         }else{
             console.log("Error on pusher")
         }
    })
})

//????

//api routes
app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req,res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage,(err,data) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port,()=>{
    console.log(`Listening on localhost:${port}`)
})