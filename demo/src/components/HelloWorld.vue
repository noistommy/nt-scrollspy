<script setup>
// import Scrollspy from '../../../src';
// import Scrollspy from '../../../dist/nt-scrollspy.es';
import '../../../src/scrollspy.scss';

import ScrollSpy1 from './ScrollSpy1.vue'
import ScrollSpy2 from './ScrollSpy2.vue'
import ScrollSpy3 from './ScrollSpy3.vue'
import { ref, onMounted } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)



onMounted(() => {
})
</script>

<template>
  <section class="section-item">
    <div class="header">
      <span class="icon">
        <i class="xi-gps"></i>
      </span>
      <div class="title">Dot nav (Base)</div>
    </div>
    <ScrollSpy1 />
  </section>
  <section class="section-item">
    <div class="header">
      <span class="icon">
        <i class="xi-list-dot"></i>
      </span>
      <div class="title">List nav</div>
    </div>
    <ScrollSpy2 />
  </section>
  <section class="section-item">
    <div class="header">
      <span class="icon">
        <i class="xi-user"></i>
      </span>
      <div class="title">Use custom nav</div>
    </div>
    <ScrollSpy3 />
  </section>
</template>

<style lang="scss">
.nt-scrollspy {
  position: relative;
  // border: 1px solid var(--brd);
}
.read-the-docs {
  color: #888;
}

.section-item {
  margin-bottom: 100px;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.8em;
    gap: 10px;
    .icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content:center;
      color: var(--txt);
      background-color: var(--suf);
    }
    .title {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--txt);
    }
  }
  > .nt-scrollspy {
    border: 1px solid var(--brd);
  }
}
.section-wrapper {
  width: 100%;
  height: 500px;
  overflow-y: auto;
}
section.s-section {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid var(--brd);
  &:last-child {
    height: 500px;
  }
}
section > .title {
  font-size: 2em;
  font-weight: 900;
}
.users {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
