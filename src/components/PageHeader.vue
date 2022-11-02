<template>
  <header>
    <RouterLink to="/">
      <img
        alt="MyTasks logo"
        class="logo"
        src="@/assets/logo.png"
        width="45"
        height="45"
      />
    </RouterLink>
    <h1>MyTasks</h1>
    <nav>
      <RouterLink to="/">Login</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  align-items: center;
  background: #1e1818;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  height: var(--pageHeaderHeight);
}

h1 {
  color: #FFF;
}

.router-link-active {
  height: 45px;
}

a {
  color: #ffffff;
  text-decoration: none;
}

@media (min-width: 1024px) {
}
</style>
