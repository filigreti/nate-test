<template>
  <header id="top-nav-container">
    <div
      :class="[
        $route.name !== 'AccountSettings'
          ? 'd-flex w-100 h-100 justify-content-between align-items-center'
          : 'd-flex w-100 h-100 justify-content-end align-items-center',
      ]"
    >
      <div
        v-if="$route.name !== 'AccountSettings'"
        class="d-flex align-items-center justify-content-between top"
      >
        <img src="@/assets/logo.png" alt="" />
        <router-link class="header-one" to="/">Dashboard</router-link>
        <router-link class="header-two disable" to="/insurance"
          >Buy insurance</router-link
        >
      </div>
      <div class="d-flex align-items-center">
        <img src="@/assets/avatar.svg" class="mr-3" alt="" />
        <div class="d-flex align-items-center">
          <div class="header-one mr-1">Lois Durello</div>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3298 1.02356L10.3297 1.02363L6.00477 5.07401L1.67128 1.02356C1.49501 0.858813 1.21135 0.858813 1.03509 1.02356C0.854971 1.19191 0.854971 1.46831 1.03509 1.63666L5.67812 5.97644C5.76656 6.0591 5.87751 6.1 5.99622 6.1C6.10507 6.1 6.22503 6.05989 6.31431 5.97644L10.9563 1.63763C11.1463 1.46937 11.1462 1.19206 10.966 1.02356C10.7897 0.858813 10.506 0.858813 10.3298 1.02356Z"
              fill="#240F00"
              stroke="black"
              stroke-width="0.2"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
#top-nav-container {
  box-sizing: border-box;
  padding: 0 5rem;
}
.top {
  width: 17em;
}
.disable {
  pointer-events: none !important;
  cursor: default;
}
</style>
