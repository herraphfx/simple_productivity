const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;




const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-54-164-40-66.compute-1.amazonaws.com' || '127.0.0.1',
        user:    'yhrjktgszcxxyn' || 'postgres',
        password:  '171fa30856e8c5071b95e02068c9def350aa76a896be5672cce24769094c0653'|| 'Living@123',
        database: 'd7b2gkdhbgcege' || 'finalproject',
        port: 5432,
        ssl: { 
            rejectUnauthorized: false 
        }
    }
});

app.set("db", db);

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

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


