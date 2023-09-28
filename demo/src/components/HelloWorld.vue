<script setup>
import Scrollspy from '../../../src';
// import Scrollspy from '../../../dist/nt-scrollspy.es';
import '../../../src/scrollspy.scss';
import { ref, onMounted } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)



onMounted(() => {
  const smenu = new Scrollspy({
    section: 'section',
    title: '.title',
    type: 'dot', //'list || 'dot' || '{users}'
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
      </div>
    </section>
  </div>
  <section class="s-section" data-title="section 2"><div class="title">SECTION 2</div></section>
  <section data-title="section 3"><div class="title">SECTION 3</div></section>
  <section class="s-section" data-title="section 4"><div class="title">SECTION 4</div></section>
  <section data-title="section 5"><div class="title">SECTION 5</div></section>
</template>

<style lang="scss">
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
.users {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
