<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/cadastro">Cadastro</router-link> |
      <router-link to="/listagem">Listagem</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #5acdfa;
  --primary-darker: #3f98bb;
  --secondary: #f5a8b8;
  --background: #424242;
}
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--background);
  margin: 0;
  padding: 0;
}

#nav {
  padding: 20px;
  background: var(--background);
}

#nav a {
  font-weight: bold;
  color: #c2c2c2;
}
#nav a:hover {
  color: var(--secondary);
}
#nav a.router-link-exact-active {
  color: var(--primary);
}

button {
  background: var(--primary);
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 0px 2px var(--primary-darker);
  cursor: pointer;
  margin: 4px;
  padding: 8px 16px;
}

button:focus {
  box-shadow: 1px 1px 0px 1px var(--primary-darker);
  transform: translate(2px, 2px);
}
</style>
