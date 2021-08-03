import axios from 'axios'

const url = 'http://localhost:5000/posts';
const userUrl = 'http://localhost:5000/user';

export const fetchLists = () => axios.get(url);
export const createList = (newPost) => axios.post(url, newPost);
export const updateList = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteList = (id) => axios.delete(`${url}/${id}`);

// export const fetchUser = (user) => {
//      axios.post('http://localhost:5000/user/get-user',
//     {
//         email:user.email,
//         password:user.password
//     }
//     ).then(res=>{
//         console.log(res);
//         return res
//     }).catch(err=>{
//         console.log('err',err)
//     });
// }
export const createUser = (newUser) => axios.post(`${userUrl}/create-user`, newUser);
export const fetchUser = async (user)=>{
    const response = await fetch('http://localhost:5000/user/get-user',
    {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(
            {
                        email:user.email,
                        password:user.password
                    }
        )
    }

    )
    return  response.json();     
}