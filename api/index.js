const express = require('express')
const app = express()




const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Living@123',
        database: 'finalproject',
        port: 5432
    }
});

app.set("db", db);

app.listen(3001, () => console.log('Example app listening on port 3000!'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())


app.get('/', (req, res) => {
    db
    .select().from('todo_entries')
    .then(todo =>
            res.send(todo)
    )
})

app.post('/tasks', (req, res) => {
    db('todo_entries')
    .insert({description: req.body.description, 
            due_date: req.body.due_date, 
            completed: req.body.completed, 
            deleted: req.body.deleted, 
            todolist_id: req.body.todolist_id
        })
    .then(added => 
        res.send(added)
        )
})

app.delete('/tasks/:id', (req, res) => {
    console.log('Delete request received');
  db('todo_entries')
  .del()
  .where({id: req.params.id })
  .then(deleted =>
    res.send(deleted))
})


