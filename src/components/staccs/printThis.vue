<template>
  <div class="h-screen flex flex-col justify-between items-center">
    <div></div>

    <div class="max-h-[70vh] min-h-[50vh] border p-10 w-10/12 max-w-screen-md border-slate-300 flex justify-center items-center overflow-auto">
      <div class="h-48 flex flex-col justify-between items-center">
        <div class="flex flex-col justify-center items-center">
            <p class="print:hidden">CTRL + P</p>
            <p class="print:hidden text-center">or Click that button below!</p>
        </div>
        <button class="print:hidden transition-colors py-1 px-5 border rounded text-slate-500 hover:text-slate-700 border-slate-400 hover:border-slate-400 hover:bg-blue-200" @click="print">Print</button>
      </div>
      
      <p class="hidden print:block first-line:uppercase first-line:text-4xl first-line:font-bold first-line:text-slate-900 first-line:mr-3 first-line:float-left">Hi! I'm Josh, <br>
        and I just wanna say you're doin' good! and you're awesome! Keep going 'kay?, hai hai!</p>
    </div>   

    <div class="border border-slate-300 p-5 hover:bg-gray-100 hover:cursor-pointer">
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-700 hover:stroke-slate-900">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue';

    const print = () => {
        nextTick(() => {
            window.print();
        });
    }
    
</script>