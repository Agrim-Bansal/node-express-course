const express = require('express');
const app = express();

mock_user_data = [
  {'name' : 'Agrim'},
  {'name' : 'Arshita'}
]

app.get('/users/:id', (req, res) => {
    res.json({
      success : true,
      message : 'Success!',
      users : req.params.id
    })
})


app.listen(8000, () => {
  console.log('Hello World');
});