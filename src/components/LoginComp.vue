<template>
    <!-- (logged out for spamming function or adding more than 10 sets in a day) then when logged in - `We detected an unusual behavior, you're trying to exploit the system. nothing serious though..` after clicking (ok) `banning in 3..2..1.. bye b..!  -->
    <!-- login-container -->
    <div class=" bg-blue-500 md:bg-red-500 lg:bg-blue-100">
        <div class="Parent">
            <div>Boxes - Responsive</div>
            <div class="flex flex-col">
                <div class="flex flex-wrap odd:bg-blue-500 even:bg-red-500">
                    <div class="w-40 grow ">1</div>
                    <div class="w-40 grow">2</div>
                    <div class="w-40 grow">3</div>
                    <div class="w-40 grow">4</div>
                    <div class="w-40 grow">5</div>
                </div>
                
            </div>
            
        </div>

        <!-- <div class="login-sub">
            <h1 class="title antialiased hover:subpixel-antialiased text-3xl mb-5">Socrates Athletes</h1>
            <input 
                class="title px-3 py-1.5 text-sm text-gray-900 border-0 rounded-md ring-1 ring-inset shadow-sm ring-gray-300 bg-white placeholder:text-gray-400 focus:outline-none invalid:text-red-400 invalid:border-red-400" 
                type="text" 
                placeholder="username" 
                v-model="username"
            />
            &nbsp;
            <input 
                class="title px-3 py-1.5 text-sm text-gray-900 border-0 rounded-md ring-1 ring-inset shadow-sm ring-gray-300 placeholder:text-gray-400 focus:outline-none invalid:text-red-400 invalid:border-red-400" 
                type="password" 
                placeholder="password" 
                v-model="password"
                @keyup.enter="login()"
            />
            &nbsp;
            <button 
                class="title px-3 py-1.5 text-sm border-2 rounded-md text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                @click="login()"
            >
                login
            </button>
            <h3 class="title antialiased hover:subpixel-antialiased mt-2 text-sm">version {{version}}</h3>
        </div> -->

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { piniaStore } from '../stores/store';
import { useRouter } from 'vue-router'

    const useStore = piniaStore();
    const router = useRouter()

    const username = ref('');
    const password = ref('');

    const version = ref('0.0.0.1')

    const sampleData = ref([
        { name: 'juswa', occupation: 'tambay' },
        { name: 'juswa2', occupation: 'tambay parin' },
        { name: 'juswa3', occupation: 'tambay nga' },
    ])

    const login = () => {
        
        if(username.value == 1 && password.value == 1){
            useStore.login(username.value, password.value);
            router.push("/admin")

        }else if(username.value == 2 && password.value == 2){
            useStore.login(username.value, password.value);
            router.push("/client")

        }else{ alert('naaaaaayn') }
    }
</script>

<style>

.login-container{
    /* height: 80vh; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* .login-sub > h3{
    text-align: right; 
}

@media (max-width: 470px) {
    .login-sub > input{
        display: block;
        justify-content: center;
    }
    .login-sub > h1{
        text-align: center;
    }
  
} */
    
</style>