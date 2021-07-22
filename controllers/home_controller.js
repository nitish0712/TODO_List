module.exports.home = function(req,res){

    Todo.find({}, function(err, lists){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
    })

    return res.render('home',{
        title: "TODO List",
        todo_List : lists
    });
}


