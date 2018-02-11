

var getUser = (id, callback) => {

    console.log('calling getUser');

    var user = {
        id: id,
        name: "Casey"
    };

    setTimeout(() => {

        console.log('waiting!');
        callback(user);
    }, 3000)

};

getUser(31, (userObject) => {

    console.log(userObject);

});