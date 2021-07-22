// setting up ejs
const { name } = require('ejs');
//setting up express
const express = require('express');

//giving the port no 8000 for personal use
const port = 8000;

// initiating express
const app = express();

//const expressLayouts = require('express-ejs-layouts');

//configuring the mongoose for mongodb
const db=require('./config/mongoose');
const Todo = require('./models/todo');

//app.use(expressLayouts);
//using the routes
//app.use('/',require('./routes'));

//setting the view engine and joining the views folder for ejs files
//connecting the assets folder for the file 
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));


//homepage 
app.get('/',function(req,res){

    Todo.find({}, function(err, lists){
        if(err){
            console.log('Error in fetching lists from db');
            return;
        }

        return res.render('home',{
            title: "My Todo List",
            todo_list: lists
        });
    });
    
});


//adding the items  
app.post('/create_list',function(req,res){

    Todo.create({
        work: req.body.work,
        org: req.body.org,
        duedate: req.body.duedate
    }, function(err, newTodo){
        if(err){console.log('error in creating a list'); return;}

        console.log('**********', newTodo);
        return res.redirect('back');
    });
});

//deleting the multiple items or single item if needed
app.post('/delete-tasks', function(req,res){

    let idCollection = req.body.delete;
    //checking typeof 
    //console.log("idCollection", idCollection, typeof(idCollection));
    //single deletion
    if(typeof(idCollection)=="string"){
        Todo.findByIdAndDelete(idCollection, function(err){
            if(err){
                console.log('error in deleting an object from database');
                return;
            }
            return res.redirect('back');
        });
    }
    //multiple deletions
    else{
        for(let id of idCollection){
            Todo.findByIdAndDelete(idCollection, function(err){
                if(err){
                    console.log('error in deleting an object from database');
                    return;
                }
            });
        }
        return res.redirect('back');
    }
});

//Another way of deleting using Ajax
// app.post('/delete-tasks', function(req,res){
//     var items=[];
//     console.log("req.body", req.body);

//     for(var key in req.body){
//         items=req.body[key];
//     }
//     Todo.remove({_id:{$in:items}},function(err, data){
//         if (err) throw err;
//         res.json(data);
//     });
// });



//setting up the coneection to port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});