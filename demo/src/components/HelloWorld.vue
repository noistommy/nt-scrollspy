<script setup>
// import Scrollspy from '../../../src';
import Scrollspy from '../../../dist/nt-scrollspy.es';
import '../../../dist/nt-scrollspy.css';
import { ref, onMounted } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)



onMounted(() => {
  const smenu = new Scrollspy({
    section: 'section',
    title: '.title',
    type: 'list', //'list || 'dot' || '{users}'
    offset: 10
  })
  smenu.init()
})
</script>

<template>
  <div class="section-wrapper">
    <section class="s-section">
      <div>
        <h1 class="title">{{ msg }}</h1>

        <div class="card">
          <button type="button" @click="count++">count is {{ count }}</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>

        <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
          >, the official Vue + Vite starter
        </p>
        <p>
          Install
          <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
          in your IDE for a better DX
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </div>
    </section>
  </div>
  <section class="s-section" data-title="section 2"><div class="title">SECTION 2</div></section>
  <section data-title="section 3"><div class="title">SECTION 3</div></section>
  <section class="s-section" data-title="section 4"><div class="title">SECTION 4</div></section>
  <section data-title="section 5"><div class="title">SECTION 5</div></section>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
.section-wrapper {
  width: 100%;
}
section {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
section .title {
  font-size: 2em;
  font-weight: 900;
}
</style>
