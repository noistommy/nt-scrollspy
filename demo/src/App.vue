<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavList from './components/NavList.vue'

import {ref} from 'vue'


const theme = ref('system');

const selectTheme = (mode) => {
  const html = document.documentElement;
  theme.value = mode
  
  html.className = ''
  html.classList.add(`${mode}-mode`);
  
  sessionStorage.setItem('theme-mode', mode)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="greetings">
        <div class="main-title">
          Nt Scrollspy
        </div>
        <div class="sub-title"></div>
        <div class="menu-wrapper">
          <nav>
            <li>
              <div class="ga-buttons round">
                <div class="ga-button icon" :class="{selected: theme === 'light'}" @click="selectTheme('light')"><i class="xi-sun" /></div>
                <div class="ga-button icon" :class="{selected: theme === 'dark'}" @click="selectTheme('dark')"><i class="xi-moon" /></div>
                <div class="ga-button icon" :class="{selected: theme === 'system'}" @click="selectTheme('system')"><i class="xi-desktop" /></div>
              </div>
            </li>
            <li>
              <div class="ga-button icon">
                <i class="xi-github"></i>
                <a href="https://github.com/noistommy/nt-scrollspy.git" class="link" target="_blank"></a>
              </div>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <main>
    <!-- <NavList /> -->
     <div class="nt-scrollspy">
       <div class="section-weapper">
         <HelloWorld msg="SECTION 1" />
       </div>
     </div>
  </main>
</template>

<style scoped>
  header {
    text-align: center;
  }
  .menu-wrapper {
    display: flex;
    justify-content: center;
    padding: 10px;
    nav {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
      }
    }
  }
  .greetings {
    text-align:center;
  }
  .main-title {
    text-align: center;
    font-size: 3em;
    font-weight: 700;
  }
  .sub-title {
    margin-bottom: 10px;
  }
  main {
    margin-top: 100px;
    
  }
  .nt-scrollspy {
    /* border: 1px solid var(--brd); */
  }
</style>
