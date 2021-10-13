<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero";
import Login from "@/components/Login";

export default {
  name: "Home",
  components: {
    Hero,
    Login,
  },
};
</script>
