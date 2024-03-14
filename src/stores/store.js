import { defineStore } from 'pinia';

export const piniaStore = defineStore('store', {
    state: () => {
        return {
            username: localStorage.getItem('username') || null,
        }
    },

    actions: {
        // localStorage.setItem('isLoggedIn', 'false');
        // localStorage.removeItem('username');

        login(username, password, name){
            this.username = username;

            if(username == 1 && password == 1){
                localStorage.setItem('username', 'admin');

            }else if(username == 2 && password == 2){
                localStorage.setItem('username', 'client');

            }
        },

        logout(){
            localStorage.removeItem('username');
        }
        
    },

    getters: {
    },
})