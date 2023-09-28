nt-scrollspy
=============

![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?style=for-the-badge&logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF?style=for-the-badge)

`nt-scrollspy` is a module that provides navigation to easily navigate to the location of each section of the single page website.
It identifies the location of the section with the value of the `data-title` attribute, creates a navigation, and naturally moves to each section by clicking on the navigation.
As a basic type, it provides navigation styles in the form of `list` and `dot`, and customized styles can be applied.

`nt-scrollspy`는 싱글페이지 웹 사이트의 각 섹션 위치로 쉽게 이동할 수 있도록 네비게이션을 제공하는 모듈이다.
`data-title` 속성 값이 지정된 섹션의 위치를 파악하여 네비게이션을 생성하고 해당 네비게이션을 클릭해서 각각의 섹션으로 자연스럽게 이동하는 기능을 한다.
기본 타입으로 `list`와 `dot` 형태의 네비게이션 스타일을 제공하고있으며 사용자 정의된 스타일 적용도 가능하다. 

---
## Installation

```sh
$ npm install nt-scrollspy --save-dev
```
---

## Usage

```javascript

import NtScrollspy from 'nt-scrollspy';
import 'nt-scrollspy/nt-scrollspy.css';

// Have to call module after mounted html

const scrollspy = new NtScrollspy({
    section: 'section', // class/tag name of section
    title: '.title', // class name of title
    type: 'dot', //'list || 'dot' || '{users}'
    offset: 10
})

scrollspy.init()
```

```html
<div class="wrapper">
    <section data-title="section 1"><div class="title">SECTION 1</div> ... </section>
    <section data-title="section 2"><div class="title">SECTION 2</div> ... </section>
    <section data-title="section 3"><div class="title">SECTION 3</div> ... </section>
    <section data-title="section 4"><div class="title">SECTION 4</div> ... </section>
    ...
</div>
```

---

