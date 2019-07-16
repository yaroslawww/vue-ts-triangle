<template lang="pug">
    .hello
        br
        h1.font-bold {{ msg }}
        br
        p For a guide and recipes on how to configure / customize this project,
            br
            | check out the 
            a(href="https://cli.vuejs.org" target="_blank" rel="noopener") vue-cli documentation
            | .
        h3.italic Installed CLI Plugins
        ul
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener") babel
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                    target="_blank"
                    rel="noopener") typescript
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
                    target="_blank"
                    rel="noopener") pwa
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                    target="_blank"
                    rel="noopener") eslint
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
                    target="_blank"
                    rel="noopener") unit-mocha
            li
                a( href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
                    target="_blank"
                    rel="noopener") e2e-cypress
        h3.italic Essential Links
        ul
            li
                a(href="https://vuejs.org" target="_blank" rel="noopener") Core Docs
            li
                a(href="https://forum.vuejs.org" target="_blank" rel="noopener") Forum
            li
                a(href="https://chat.vuejs.org" target="_blank" rel="noopener") Community Chat
            li
                a(href="https://twitter.com/vuejs" target="_blank" rel="noopener") Twitter
            li
                a(href="https://news.vuejs.org" target="_blank" rel="noopener") News
        h3.italic Ecosystem
        ul
            li
                a(href="https://router.vuejs.org" target="_blank" rel="noopener") vue-router
            li
                a(href="https://vuex.vuejs.org" target="_blank" rel="noopener") vuex
            li
                a(href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener") vue-devtools
            li
                a(href="https://vue-loader.vuejs.org" target="_blank" rel="noopener") vue-loader
            li
                a(href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener") awesome-vue
        h3.italic Html + Css
        ul
            li
                a(href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noopener") pug
            li
                a(href="https://tailwindcss.com/docs" target="_blank" rel="noopener") tailwindcss
            li
                a(href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener") autoprefixer
            li
                a(href="https://www.purgecss.com" target="_blank" rel="noopener") purgecss

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #f0b506;
  transition: all 0.5s;
  &:hover {
    color: #f0a207;
  }
}
</style>
