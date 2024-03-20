<template>
    <div class="h-screen flex flex-col justify-around items-center">
        <!-- <div></div> -->
        <div class="max-w-screen-sm max-h-96 overflow-auto">
            <div class="flex flex-wrap gap-4">
                <!-- even:bg-green-100 odd:bg-red-100 -->
                <div v-for="list in lists" :key="list" class="w-40 h-20 border border-slate-300 grow flex justify-center items-center ">
                    <router-link class="h-20 w-screen flex justify-center items-center hover:bg-blue-200" :to="list.to">
                        <div>
                            <p>{{ list.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>   
        <p class="text-xs md:flex block text-center text-slate-400 hover:text-slate-900">Created with 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-1 w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            and 
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" class="mx-1">
                <path fill="currentColor" d="M1.382 8.505v5.058a5.057 5.057 0 0 0 5.057 5.058h3.677a5.057 5.057 0 0 0 5.057-5.058V8.506zM11.887.16a.69.69 0 0 1 .086.972c-.642.765-.784 1.287-.586 1.637c.062.109.593.948.715 1.207c.276.585.312 1.152.074 1.822a4.622 4.622 0 0 1-.751 1.328h3.881c.437.016.754.127.95.335c.11.114.188.258.237.432l.06-.002a3.448 3.448 0 0 1 0 6.897l-.116-.004A6.438 6.438 0 0 1 10.117 20H6.438a6.436 6.436 0 0 1-6.436-6.437V8.337c-.02-.433.062-.74.244-.92c.183-.18.453-.277.809-.29h2.953a.689.689 0 0 1 .144-.17C4.762 6.44 5.16 5.9 5.36 5.337c.114-.32.101-.51-.022-.771c-.078-.166-.569-.942-.667-1.116c-.539-.952-.242-2.044.728-3.202a.69.69 0 1 1 1.057.886c-.642.765-.783 1.287-.585 1.637c.061.109.593.948.715 1.207c.275.585.312 1.152.073 1.822a4.622 4.622 0 0 1-.75 1.328h.858a.689.689 0 0 1 .144-.17C7.52 6.44 7.918 5.9 8.118 5.337c.114-.32.102-.51-.022-.771c-.078-.166-.569-.942-.667-1.116c-.539-.952-.242-2.044.729-3.202a.69.69 0 1 1 1.056.886c-.641.765-.783 1.287-.585 1.637c.062.109.593.948.715 1.207c.276.585.312 1.152.073 1.822a4.622 4.622 0 0 1-.75 1.328h.859a.689.689 0 0 1 .143-.17c.61-.518 1.007-1.058 1.207-1.621c.114-.32.102-.51-.022-.771c-.078-.166-.568-.942-.667-1.116c-.538-.952-.242-2.044.729-3.202a.69.69 0 0 1 .971-.086m4.665 9.11v4.138a2.069 2.069 0 0 0 0-4.138"/>
            </svg> using Vuejs and Tailwindcss by <b class="ml-1">Jovi Joshua Tania</b>
        </p>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

    // get the route list on router/index.js to create a dynamic implementation of route(to) calling
    const lists = reactive([
        { name:'001 - Filter', image: '', to: '/filter'},
        { name:'002 - Computed', image: '', to: '/filter'},
        { name:'003 - Filter', image: '', to: '/filter'},
        { name:'004 - Filter', image: '', to: '/filter'},
        { name:'005 - Filter', image: '', to: '/filter'},
        { name:'006 - Filter', image: '', to: '/filter'},
        { name:'007 - Filter', image: '', to: '/filter'},
        { name:'008 - Filter', image: '', to: '/filter'},
        { name:'009 - Filter', image: '', to: '/filter'},
        { name:'006 - Filter', image: '', to: '/filter'},
        { name:'007 - Filter', image: '', to: '/filter'},
        { name:'008 - Filter', image: '', to: '/filter'},
        { name:'009 - Filter', image: '', to: '/filter'},
        { name:'006 - Filter', image: '', to: '/filter'},
        { name:'007 - Filter', image: '', to: '/filter'},
        { name:'008 - Filter', image: '', to: '/filter'},
        { name:'009 - Filter', image: '', to: '/filter'},
        { name:'006 - Filter', image: '', to: '/filter'},
        { name:'007 - Filter', image: '', to: '/filter'},
        { name:'008 - Filter', image: '', to: '/filter'},
        { name:'009 - Filter', image: '', to: '/filter'}
    ])
</script>