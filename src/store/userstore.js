import axios from "axios";

export const userModule = {
    namespaced: true,
    state() //define your states here
    {
        return {
            userList: [],
            form: {
                name:'',
                email:'',
                phoneNo:'',
                username:'',
                gender:''
            }
        }
    },
    mutations:{   /// changes will be done here in state variable
        SET_USER_LIST(state,payload){
            state.userList = payload
        },
        SET_USER_EDIT_DATA(state,payload){
            state.form = payload;
        },
        SET_INPUT_FIELDS(state,payload)
        {
            console.log('before');
            console.log(state.form.name);
            state.form.name = payload.value;
            console.log('after ', state.form.name);
        },
        REMOVE_USER(state, payload)
        {
            let uIndex = state.userList.map(user => user.id).indexOf(payload);
            state.userList.splice(uIndex,1);
        }
    },
    actions:{  /// will call mutation to update store variable
        addUser(commit,payload)
        {
            console.log(commit);
            console.log(payload);
            axios.post('http://127.0.0.1:8000/api/user-form-save', payload).then((res)=>{
                console.log('user added')
            }).catch((err)=>{
                console.log('error is there')
            });
        },
        getUserList({commit})
        {
            axios.get('http://127.0.0.1:8000/api/user-list').then((res)=>{
                console.log('user list')
                //call mutation
                console.log('res of list');
                console.log(res.data.data);
                commit('SET_USER_LIST', res.data.data)
            }).catch((err)=>{
                console.log('error is there')
            });
        },
        getUserData({commit}, payload)
        {
            axios.get('http://127.0.0.1:8000/api/user-show/' + payload).then((res)=>{
                console.log('user data')
                //call mutation
                console.log('res of data');
                console.log(res.data.data);
                commit('SET_USER_EDIT_DATA', res.data.data)
            }).catch((err)=>{
                console.log('error is there')
            });
        },
        editUser({state,commit},payload)
        {
            console.log(commit);
            console.log(payload);
            console.log(state.form);
            axios.post('http://127.0.0.1:8000/api/user-edit-save/'+ payload, state.form).then((res)=>{
                console.log('user updated')
            }).catch((err)=>{
                console.log('error is there')
            });
        }, 
        deleteUser({state,commit},payload)
        {
            axios.delete('http://127.0.0.1:8000/api/user-delete/'+ payload).then((res)=>{
                commit('REMOVE_USER',payload);
                console.log('user deleted')

            }).catch((err)=>{
                console.log('error is there')
            });
        },
    },
    getters:{ // to get the store variable or hit api also
        totalUsers(state)
        {
            return (state.userList != undefined) ? state.userList.length : 0;
        },
        getUsersbygender: (state) => (gender) => {
            if(gender == undefined)
            {
                console.log('sdf 2');
                return state.userList
            } else {
                if(state.userList != undefined)
                {
                    return [state.userList.find(user => user.gender === gender)]
                }
            }
        }
    }
}