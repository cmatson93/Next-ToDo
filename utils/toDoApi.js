import axios from 'axios';

export default {
    createToDo: function (toDo) {
        console.log('toDo', toDo);
        axios.post('/api/todos', toDo).then(res => {
            console.log(res);
        });
    },
    // updateUser: function (user) {
    //     axios.patch('/api/users/update', user).then(res => {
    //         console.log(res);
    //     });
    // },
    getToDos: function () {
        return axios.get('/api/todos')
        .then(res => {
            console.log("TODOS...", res);
            return res;
        })
    }
}