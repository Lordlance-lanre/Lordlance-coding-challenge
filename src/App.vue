<template>
  <div class="wrapper">

      <nav>
        <RouterLink class="login" to="/">Login</RouterLink> 
        <RouterLink class="dash" to="/dashboard">Dashboard</RouterLink>
        <RouterLink class="users" to="/users">Users</RouterLink> 
      </nav>
    </div>

  <RouterView />
</template>

<style scoped>
  .login{
    display: none;
  }
  .dash{
    display: none;
  }
  .users{
    display: none;
  }
</style>


