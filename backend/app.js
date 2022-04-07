const express = require('express')
const cors = require('cors')
const app = express()


const beansRouter = require('./routes/beans')
const { saveUsers, getUsers } = require('./database/operations')
const PORT = 5000


app.use(cors())
app.use(express.json())
app.use('/api/beans', beansRouter)

async function saveAllUsers() {
    const database = await getUsers();
    if (database < 1) {
        saveUsers();
    }
}

saveAllUsers();



app.listen(5000, () => console.log(`Server started on port ${PORT}`))
