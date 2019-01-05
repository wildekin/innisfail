<template>
  <div class="Site">
    <header class="Header">My Header</header>
    <main class="Main">
      <nuxt/>
    </main>
    <footer class="Footer">My footer</footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.Site {
  display: flex;
  flex-direction: column;
}
.Main {
  flex: 1;
}
.Footer {
  align-self: flex-end;
}
</style>

