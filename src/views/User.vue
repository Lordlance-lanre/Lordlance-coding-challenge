<template>
<div class="w-full bg-slate-100 h-screen">
	<div class="py-4 mx-5">
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute mt-1 w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
			</svg>
		</span>
		<button @click="returnBack" class="px-7 bg-slate-200 py-1">Return to DashBoard</button>
	</div>

	<div class="text-center mt-7 text-2xl md:text-5xl font-semibold">
		<h2>Welcome {{getId.userName}}</h2>
	</div>


	<div class="mx-5 mt-10 text-xs md:text-sm font-semibold text-center md:text-left">
		User Details Page
	</div>
		
	<section class="mt-4">
		<p class="text-center bg-rose-200 font-semibold rounded">Personal Information</p>
		<div class="mt-4 py-1 w-48 block mx-auto">
				<img :src="getObj.avatar" class="flex mx-auto rounded-full">
			</div>

		<div class="text-center mt-5 md:grid grid-cols-4 md:mt-4">
			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">Email Address</h3>
				<p class="text-[8px]">{{getId.email}}</p>
			</div>
			
			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">Phone Number</h3>
				<p class="text-[8px]">{{getId.phoneNumber}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">First Name</h3>
				<p class="text-[8px]">{{getObj.firstName}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">Last Name</h3>
				<p class="text-[8px]">{{getObj.lastName}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">Gender</h3>
				<p class="text-[8px]">{{getObj.gender}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">BVN</h3>
				<p class="text-[8px]">{{getObj.bvn}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">Address</h3>
				<p class="text-[8px]">{{getObj.address}}</p>
			</div>

			<div class="mt-4 py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs  font-semibold">Currency</h3>
				<p class="text-[8px]">{{getObj.currency}}</p>
			</div>
		</div>	

		<div>
			<p class="mt-7 md:mt-20 text-center bg-rose-200 font-semibold rounded">Guarantors Information</p>
		</div>

		<div class="py-4 md:grid grid-cols-5">
			<div class="mt-4 text-center py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">First Name</h3>
				<p class="text-[8px]">{{getGuarantor.firstName}}</p>
			</div>

			<div class="mt-4 text-center py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">Last Name</h3>
				<p class="text-[8px]">{{getGuarantor.lastName}}</p>
			</div>

			<div class="mt-4 text-center py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">Phone Number</h3>
				<p class="text-[8px]">{{getGuarantor.phoneNumber}}</p>
			</div>

			<div class="mt-4 text-center py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">Gender</h3>
				<p class="text-[8px]">{{getGuarantor.gender}}</p>
			</div>

			<div class="mt-4 text-center py-1 bg-slate-200 w-48 block mx-auto">
				<h3 class="text-xs font-semibold">Home Address</h3>
				<p class="text-[8px]">{{getGuarantor.address}}</p>
			</div>
		</div>
	</section>	
	
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' 
import axios from "axios"

const users = ref([])
const getId = ref({})
const getObj = ref({
	firstName: "",
	lastName: " ",
	phoneNumber: "",
	avatar: "",
	gender: "",
	bvn: "",
	address: "",
	currency: ""
})
const getGuarantor = ref({
	firstName: "",
	lastName: "",
	phoneNumber: "",
	gender: "",
	address: ""
})
const props = defineProps(['id'])
const route = useRoute()
const router = useRouter()
const baseUrl = ref("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")	
const newElement = () =>{
	axios.get(baseUrl.value + "/" + route.params.id)
       .then((res) => { 
       	getId.value = res.data;

       	let profileObj = JSON.parse(localStorage.getItem('user'))
		// console.log("profileObj>>",profileObj)
		getObj.value = profileObj
		console.log("getObj>>",getObj.value);

		let guarantorProfile = JSON.parse(localStorage.getItem('guarantor'))
		getGuarantor.value = guarantorProfile;
		console.log('getGuarantor>>', getGuarantor.value)
       })
}

onMounted(() =>{
	newElement()
})




const returnBack = () =>{
	setTimeout(() => router.push('/dashboard'), 1000)
	localStorage.removeItem('user');
	localStorage.removeItem('guarantor');
}
</script>