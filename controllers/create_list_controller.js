module.exports.home= function(req,res){
    Todo.create({
        work: req.body.work,
        org: req.body.org,
        duedate: req.body.duedate
    }, function(err, newTodo){
        if(err){console.log('error in creating a contact'); return;}

        console.log('**********', newTodo);
        return res.redirect('back');
    });
}