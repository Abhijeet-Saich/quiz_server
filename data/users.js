const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "quiz_user",
            password: "password",
            emailId: "xyz@gmail.com",
        },
    ]
}

module.exports = userdata;