<template>
    <!-- (logged out for spamming function or adding more than 10 sets in a day) then when logged in - `We detected an unusual behavior, you're trying to exploit the system. nothing serious though..` after clicking (ok) `banning in 3..2..1.. bye b..!  -->
    <!-- login-container -->
    
    <div class="w-full pt-10 flex flex-col items-center gap-5 bg-blue-100">

        <div class="Parent w-11/12">
            <p>Responsive | Try to resize the screen / this is the largest screen size</p>
            <div class=" bg-green-500 md:bg-red-500 lg:bg-blue-500">
                <p>hi!</p>
            </div>
            <p>Blue = largest</p>
            <p>Red = medium</p>
            <p>Green = smallest</p>
           
        </div>

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>

        <div class="Parent w-11/12">

            <h1>Boxes - Responsive | static</h1>
            <div class="flex flex-wrap gap-4">
                <div class="w-40 h-40 border grow flex justify-center items-center bg-blue-500">1</div>
                <div class="w-40 h-40 border grow flex justify-center items-center bg-blue-500">2</div>
                <div class="w-40 h-40 border grow flex justify-center items-center bg-blue-500">3</div>
                <div class="w-40 h-40 border grow flex justify-center items-center bg-blue-500">4</div>
                <div class="w-40 h-40 border grow flex justify-center items-center bg-blue-500">5</div>
            </div>
        </div>

        <div class="Parent w-11/12">
            <h1>Boxes - Responsive | dynamic with odd and even modifiers</h1>
            <div class="flex flex-wrap gap-4">
                <div v-for="data in sampleData" :key="data.name" class="w-40 h-40 border grow flex justify-center items-center even:bg-green-400 odd:bg-red-400">
                    <div>
                        <p>{{ data.name }}</p>
                    </div>
                </div>
            </div>
        </div>    

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>

        <div class="Parent w-11/12">
            <h1>Open modifier to conditionally details</h1>
            <div class="max-w-lg mx-auto p-8">
                <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                    <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                    Why do they call it Ovaltine?
                    </summary>
                    <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                    </div>
                </details>
            </div>
            
        </div>

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>

        <div class="Parent w-11/12">
            <h1>Using arbitrary variants | selects all h2 elements within the element where you’ve added the class</h1>
            <div class="[&_h2]:mt-4">
            <h2>Lorem ipsum...</h2>
            <ul>
                <li>
                <h2>Lorem ipsum...</h2>
                </li>
                <!-- ... -->
            </ul>
            </div>
            
        </div>

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>
        
        <div class="Parent w-11/12 ">
            <h1>Form State | Input Validation</h1>
            <div class="max-w-sm mx-auto bg-white shadow pt-6 pb-5 px-6">
                <form>
                    <div>
                    <label for="email-2" class="block text-sm font-medium text-slate-700">Email</label>
                    <div class="mt-1">
                        <input type="email" name="email" id="email-2" class="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" placeholder="you@example.com">
                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p>
                    </div>
                    </div>
                </form>
            </div>
            
        </div>

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>

        <div class="Parent w-11/12">
            <h1>Styling based on parent state (group-{modifier}) | group & group-hover</h1>
            <a href="#" class="group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
            <div class="flex items-center space-x-3">
                <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"></path>
                </svg>
                <h3 class="text-sm text-slate-900 font-semibold group-hover:text-white">New project</h3>
            </div>
            <p class="text-sm text-slate-500 group-hover:text-white">Create a new project from a variety of starting templates.</p>
            </a>
            
        </div>

        <div class="Parent w-11/12">
            <hr class="border border-gray-400">
        </div>

        <div class="Parent w-11/12">
            <h1>Differentiating nested groups | group/{name} & group-hover/{name}</h1>
            <ul role="list" class="mx-auto max-w-md bg-white p-2 shadow">
                <li class="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-slate-100">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="w-full text-sm leading-6">
                    <a href="#" class="font-semibold text-slate-900"><span class="absolute inset-0 rounded-xl" aria-hidden="true"></span>Leslie Abbott</a>
                    <div class="text-slate-500">Co-Founder / CEO</div>
                    </div>
                </div>
                <a href="#" class="group/edit invisible relative flex items-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200 group-hover/item:visible">
                    <span class="font-semibold transition group-hover/edit:text-gray-700">Call</span>
                    <svg class="mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                </li>
                <li class="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-slate-100">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="w-full text-sm leading-6">
                    <a href="#" class="font-semibold text-slate-900"><span class="absolute inset-0 rounded-xl" aria-hidden="true"></span>Hector Adams</a>
                    <div class="text-slate-500">VP, Marketing</div>
                    </div>
                </div>
                <a href="#" class="group/edit invisible relative flex items-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200 group-hover/item:visible">
                    <span class="font-semibold transition group-hover/edit:text-gray-700">Call</span>
                    <svg class="mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                </li>
                <li class="group/item relative flex items-center justify-between rounded-xl p-4 hover:bg-slate-100">
                <div class="flex gap-4">
                    <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                    </div>
                    <div class="w-full text-sm leading-6">
                    <a href="#" class="font-semibold text-slate-900"><span class="absolute inset-0 rounded-xl" aria-hidden="true"></span>Blake Alexander</a>
                    <div class="text-slate-500">Account Coordinator</div>
                    </div>
                </div>
                <a href="#" class="group/edit invisible relative flex items-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200 group-hover/item:visible">
                    <span class="font-semibold transition group-hover/edit:text-gray-700">Call</span>
                    <svg class="mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                </li>
            </ul>
            
        </div>

        <div class="Parent w-11/12">
            <h1>Differentiating nested groups | group/{name} & group-hover/{name}</h1>
            <fieldset class="mx-auto max-w-md bg-white p-8 text-sm shadow">
                <div class="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">Published status</div>
                <input id="draft" class="peer/draft form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" name="status" checked=""><label class="peer-checked/draft:text-sky-500 font-medium" for="draft">Draft</label> <input id="published" class="peer/published form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300" type="radio" name="status"><label class="peer-checked/published:text-sky-500 font-medium" for="published">Published</label>
                <div class="peer-checked/draft:block mt-4 hidden text-gray-500">Drafts are only visible to administrators.</div>
                <div class="peer-checked/published:block mt-4 hidden text-gray-500">Your post will be publicly visible on your site.</div>
            </fieldset>
            
        </div>

        

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
        { name: 'odd numbers are red' },
        { name: 'even numbers are green' },
        { name: 'odd numbers are red' },
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