<template>
  <div class="about">
    <Nav />

    <section class="bg-slate-100 py-5 w-full">
      <div class="">
        <h2 class="font-bold text-2xl mx-5 md:mx-28">Users</h2>
        <div class="grid grid-cols-4 mt-4">
          <div class="py-1 shadow-md px-3 md:py-5">
            <img src="../assets/Vector2.png" class="flex mx-auto w-4 md:w-5">
            <p class="text-center text-[9px] md:text-sm mt-1">Users</p>
            <p class="text-center font-bold" >2,453</p>
          </div>

          <div class="shadow-lg px-3">
            <img src="../assets/Vector3.png" class="flex mx-auto w-3 md:w-5 py-1">
            <p class="text-center md:text-sm text-[9px]">Active Users</p>
            <p class="text-center font-bold">2453</p>
          </div>

           <div class="py-[4px] shadow-lg px-3">
            <img src="../assets/Vector1.png" class="flex mx-auto w-3 md:w-5">
            <p class="text-center text-[9px] md:text-sm mt-1">Users With Loans</p>
            <p class="text-center font-bold">12,453</p>
          </div>

          <div class="py-[10px] shadow-lg px-3 md:px-10">
            <img src="../assets/Vector4.png" class="flex mx-auto w-3 md:w-5">
            <p class="text-center md:text-sm mt-1 text-[9px]">Users With Savings</p>
            <p class="text-center font-bold">102,453</p>
          </div>
        </div>

        <div>

          <Table/>
        </div>
      </div>
    </section>
  </div>
</template>

<style>

</style>
<script setup>
  import Nav from "../components/Nav.vue"
  import Table from "../components/Table.vue"
</script>