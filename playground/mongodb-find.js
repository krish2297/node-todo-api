//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');
    db.collection('Users').find({name:'Krish'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=> {
        console.log('Unable to fetch data',err);
    })
    


    //db.close();
    

})