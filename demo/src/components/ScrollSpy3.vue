<script setup>
  import Scrollspy from '../../../src';
  import { ref, onMounted } from 'vue'

  const elRef = ref(null)
  
  onMounted(() => {
    const smenu = new Scrollspy({
      container: elRef.value,
      section: 'section',
      title: '.title',
      type: 'user-list', //'list || 'dot' || '{users}'
      offset: 125
    })
    smenu.init()
  })

</script>

<template>
  <div class="nt-scrollspy ss3" ref="elRef">
    <div class="section-wrapper" >
      <section class="s-section ga-green-text " data-title="section 1"><div class="title">SECTION 1</div></section>
      <section class="s-section ga-yellow-text " data-title="section 2"><div class="title">SECTION 2</div></section>
      <section class="s-section ga-blue-text " data-title="section 3"><div class="title">SECTION 3</div></section>
    </div>
  </div>
</template>

<style lang="scss">
  .user-list {
    position: absolute;
    width: 100%;
    top: 10px;
    display: flex;
    justify-content:center;
    gap: 10px;
    .type-nav {
      padding: 6px 10px;
      &:hover {
        background-color: var(--suf);
      }
      &.active {
        background-color: var(--primary);
      }
    }
  }
</style>