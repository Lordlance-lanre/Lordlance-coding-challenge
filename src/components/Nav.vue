<template>
	<div class="w-full">
		<nav class="mt-5 mx-4 md:mx-10 flex justify-between">	
	      <div class="flex mt-2 md:mt-1">
	        <img src="../assets/Union.svg"  class="w-3 h-3">
	        <img src="../assets/lendsqr.svg" class="w-12 md:w-16 h-12 md:h-16 -mt-[16px] md:-mt-[24px]">
	      </div>
	      <div >
	      	<button class="md:hidden" @click="openToggle">
	      		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
	      	</button>

	      </div>

	      <div class="hidden md:block">
	      	<input type="text" class="border-2 border-slate-200 w-[100px] md:py-1 px-2 md:w-[300px] text-xs md:mt-[-20px] rounded outline-none" placeholder="Search for anything">
	      	<button class="rounded-md ">
	      		<img src="../assets/Vector (6).png" class="absolute bg-cyan-500 px-3 md:px-4 py-[3px] md:py-2 md:-my-[19px] -my-[14px] -mx-2 rounded" alt="">
	      	</button>
	      </div>

	      <div class="flex md:flex hidden">
	      	<p class="hover:underline mx-1 text-sm mt-1 md:text-lg md:-mt-0 text-indigo-600">Doc</p>
	      	<img src="../assets/Vector (5).png" class="w-3 md:w-4 md:h-5 h-3 mx-2 mt-2 md:mt-1">
	      	<img src="../assets/avatar-svgrepo-com.svg" class="w-4 h-4 mt-1 md:w-8 md:h-8 md:-mt-1">
	      	<p class="text-[10px] mx-1 mt-1 md:mt-1">Adedeji</p>
	      	<img src="../assets/arrow-down.png" class="w-3 h-3 mt-2 md:mt-2">
	      </div>
    	</nav>
    	
	</div>
</template>

<script setup>
import {ref} from 'vue'

const toggle = ref(false)

const openToggle = () =>{
	toggle.value = !toggle.value
}	
</script>