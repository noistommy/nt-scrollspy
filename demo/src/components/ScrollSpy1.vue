<script setup>
  import Scrollspy from '../../../src';
  import { ref, onMounted, watch } from 'vue'


  const elRef = ref(null)
  const menu = ref(null)
  const listType = ref('dot')

  onMounted(() => {
    menu.value = new Scrollspy({
      container: elRef.value,
      section: 'section',
      title: '.title',
      type: listType.value, //'list || 'dot' || '{users}'
      offset: 125
    })
    console.log(menu.value.option.type)
    menu.value.init()
  })

  
</script>

<template>
  <div class="nt-scrollspy ss1" ref="elRef">
    <div class="section-wrapper">
      <section class="s-section ga-green-text " data-title="section 1"><div class="title">SECTION 1</div></section>
      <section class="s-section ga-yellow-text " data-title="section 2"><div class="title">SECTION 2</div></section>
      <section class="s-section ga-blue-text " data-title="section 3"><div class="title">SECTION 3</div></section>
    </div>
  </div>
</template>