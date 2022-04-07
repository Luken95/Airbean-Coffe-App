const nedb = require('nedb-promise');
const database = new nedb({ filename: 'users.db', autoload: true});

const users = [{
            "id":1,
            "username": "Anders",
            "email": "anders@anders.se",
            "orderhistorik": []
        },

        {
            "id":2,
            "username":"Bosse",
            "email":"bosse@bosse.se",
            "orderhistorik": []
        },

        {
            "id":3,
            "username":"Christoffer",
            "email":"christoffer@christoffer.se",
            "orderhistorik": []
        }]


async function getUsers() {
    return await database.find({});
}

async function saveUsers() {
    database.insert(users)
}

async function findUser(username) {
    return await database.findOne({ username: username})
}

async function addOrder(username, order) {
  console.log(username);
  console.log(order);

    database.update({
        username: username
        },{
        $push: {
            orderhistorik: order
        }

    })
}

module.exports = {saveUsers, findUser, addOrder, getUsers}
