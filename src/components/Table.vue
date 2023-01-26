<template>
<div class="">
	<div class="w-full overflow-x-auto">
		<table class="mt-10 w-full overflow-x-auto ">
		<tr class="text-[13px] md:text-[20px] w-full">
			<th >
				<div class="flex">
					<p >Organization</p>
				    <img src="../assets/Vector (8).png" class="mx-1 w-2 md:mt-3 h-2 mt-1">
				</div>
				

			</th>
			<th >
				<div class="flex px-1">
					<p>Username</p>
				    <img src="../assets/Vector (8).png" class="mx-1 md:mt-3 w-2 h-2 mt-1">
				</div>
				
			</th>
			<th>
				<div class="flex px-1">
					<p>Email</p>
				   <img src="../assets/Vector (8).png" class="mx-1 w-2 h-2 mt-1 md:mt-3">
				</div>
				
			</th>
			<th>
				<div class="flex px-1">
					<p class="text-[12px] md:text-[18px]">Phone Number</p>
				   <img src="../assets/Vector (8).png" class="mx-1 md:mt-3 w-2 h-2 mt-1">
				</div>
			</th>
			<th>
				<div class="flex px-1">
				  <p>Date Joined</p>
				  <img src="../assets/Vector (8).png" class="mx-1 w-2 h-2 md:mt-3 mt-1">
				</div>
			</th>
			<th>
				<div class="flex px-1">
				   	<p>Status</p>
				    <img src="../assets/Vector (8).png" class="mx-1 md:mt-3 w-2 h-2 mt-1">
				</div>
			</th>
			<th>
				
			</th>
		</tr>
		<tr v-for="user in users" :key="user.id" class="text-[7px] md:text-xs">
			<td>
				{{user.orgName}}
			</td>
			<td>
				{{user.userName}}
			</td>
			<td>
				{{user.email}}
			</td>

			<td>
				{{user.phoneNumber}}
			</td>
			<td>
				{{user.createdAt}}
			</td>
			<td>
				<span v-if="user.id % 2 === 0" id="statusActive">{{statusType.active}}</span>
				<span v-if="user.id % 2 === 1" id="statusPending">{{statusType.pending}}</span>
				<span v-if="user.id % 3 === 0"  id="statusInactive">{{statusType.inactive}}</span>
				<span v-if="user.id % 3 === 1" id="statusListed">{{statusType.blacklisted}}</span>	
			</td>
			<td><router-link :to="{name: 'user', params: {id: user.id}}">
						<Button @click="viewProfile(user)"/>
					</router-link>
			</td>
		</tr>
	</table>
	</div>
	

	<div class="">
		<div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
	  	<div class="flex flex-1 justify-between sm:hidden">
	    <a href="#"  class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
	    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
	  	</div>
	  	<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
	    <div>
	      <p class="text-sm text-gray-700">
	        Showing
	        <span class="font-medium">1</span>
	        to
	        <span class="font-medium">10</span>
	        of
	        <span class="font-medium">97</span>
	        results
	      </p>
	    </div>
	    <div>
	      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
	        <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
	          <span class="sr-only">Previous</span>
	          <!-- Heroicon name: mini/chevron-left -->
	          <svg id="previous" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
	            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
	          </svg>
	        </a>
	        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
	        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
	        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
	        <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
	        <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
	        <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
	        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
	        <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a>
	        <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
	          <span class="sr-only">Next</span>
	          <!-- Heroicon name: mini/chevron-right -->
	          <svg id="next" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
	            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
	          </svg>
	        </a>
	      </nav>
	    </div>
  	</div>
	</div>
</div>
</div>
</template>

<script setup>
import Button from "../components/Button.vue"
import {ref, onMounted, computed} from 'vue'
import axios from "axios"


const currentPage = ref(1)
const totalPages = ref(100)
const perPage = ref(10)
const users = ref([])
const baseUrl = ref("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=1&size=10")

const statusType = ref({
	active: "Active",
	pending: "Pending",
	blacklisted: "Blacklisted",
	inactive: "Inactive"
})

const getUsers = () => {
	axios.get(baseUrl.value)
		 .then((res) => {users.value = res.data; 
		 	console.log(users.value);
		 	let allUsers = JSON.stringify(users.value)
		    localStorage.setItem("users",allUsers);
		})
}

onMounted(() =>{
	getUsers()
})

const viewProfile = (user) =>{
	console.log('userProfile>>', user);
	let newUser = JSON.stringify(user.profile);
	localStorage.setItem('user', newUser);

	let getGuarantor = JSON.stringify(user.guarantor);
	localStorage.setItem('guarantor', getGuarantor)
}
</script>

<style scoped>
#statusActive{
	color: #14e35d;
}
#statusInactive{
	color: #a8a59b;
}
#statusPending{
	color: #f1f743;
}
#statusListed{
	color: #f24949;
}
	
</style>