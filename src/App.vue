<template>
  <Home v-show="false" />
  <Login v-show="false" />
  <Registration v-show="false" />
  <UserPage v-show="true" />
</template>

<script>
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Registration from './pages/Registration.vue';
import UserPage from './pages/UserPage.vue';

export default {
  name: "App",
  components: {
    Home,
    UserPage,
    Login,
    Registration,
  },
};
</script>
