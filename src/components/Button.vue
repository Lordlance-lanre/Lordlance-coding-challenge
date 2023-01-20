<template>
	<div>
		<button @mouseover="openProfile" class="py-5">
			<img src="../assets/Vector (9).png" alt="">
		</button>
			<div v-if="open">
				<button @click="getProfile" class="py-1 px-4 shadow-md">View Profile
				</button>
			</div>
	</div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios"


const open = ref(false)
const router = useRouter()


const openProfile = () =>{
	open.value = !open.value
}

const getProfile = () =>{
	router.push('/users')
}
</script>