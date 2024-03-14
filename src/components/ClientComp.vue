<script setup>
import Swal from 'sweetalert2';
import { piniaStore } from '../stores/store'
import { useRouter } from 'vue-router'

    const useStore = piniaStore();
    const router = useRouter()

    const logout = () => {

        Swal.fire({
                toast: true,
                icon: 'info',
                position: 'top-right',
                icon: 'info',
                title: "Do you want to logout?",
                showConfirmButton: false,
                timerProgressBar: true,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: '#4caf50',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Later'
                
            }).then(result => {
                if(result.isConfirmed){
                    
                    useStore.logout();
                    router.push("/login")

                    Swal.fire({
                        toast: true,
                        icon: 'success',
                        position: 'top-right',
                        icon: 'success',
                        title: "Successfully Logged Out, <br>Arigato Gozaimaaaas.",
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 2000,
                    })
                }
            })
    }

</script>

<template>
    <div class="client-container">
        <h3 class="title">client 👨‍💼</h3>
        <button @click="logout()">logout</button>
    </div>
</template>

<style>
</style>