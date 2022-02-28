<template>
  <Home v-if="true" />
  <Login v-if="false" />
  <UserPageMyTrips v-if="false" />
  <Registration v-if="false" />
</template>

<script>
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Registration from "./pages/Registration.vue";
import UserPageMyTrips from "./pages/UserPageMyTrips.vue";

export default {
  name: "App",
  components: {
    Home,
    Login,
    Registration,
    UserPageMyTrips,
  },
};
</script>
