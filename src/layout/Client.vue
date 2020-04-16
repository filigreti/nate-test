<template>
  <main>
    <TopNav class="topnav" />
    <div class="route-container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  components: {
    TopNav,
  },
};
</script>

<style scoped>
.topnav {
  height: 3.8rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  top: 0;
  width: 100%;
  z-index: 3;
  position: fixed;
}
.route-container {
  box-sizing: border-box;
}
</style>
