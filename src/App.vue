<template>
  <Home v-show="false" />
  <UserPage v-show="true"/>
</template>

<script>
import Home from './pages/Home.vue';
import UserPage from './pages/UserPage.vue';

export default {
  name: "App",
  components: {
    Home,
    UserPage
  },
};
</script>
