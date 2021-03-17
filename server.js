const express = require('express');
const app = express();

mock_user_data = [
  {'name' : 'Agrim'},
  {'name' : 'Arshita'}
]

app.get('/users', (req, res) => {
    res.json({
      success : true,
      message : 'Success!',
      users : mock_user_data
    })
})


app.listen(8000, () => {
  console.log('Hello World');
});