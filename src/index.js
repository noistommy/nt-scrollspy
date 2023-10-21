import './scrollspy.scss';
class Scrollspy {
    constructor(options = {}) {
        let { scroller, section, title, type, offset } = options
        this.currentTop = 0
        this.currentType = 0
        this.sectionInfo = []
        this.option = {
            scroller: scroller || null,
            section: section || 'section',
            title: title || null,
            type: type || 'dot', //'list || 'dot' || '{users}'
            offset: offset || 0
        }
    }
    createNav() {
        const ul = document.createElement('ul');
        ul.classList.add(`nav-list`, this.option.type)
        const nav = this.setPosition()
        for (let i = 0; i < nav.length; i++) {
            const li = document.createElement('li');
            li.classList.add('type-nav')
            const name = document.createElement('span')
            name.classList.add('name')
            name.innerText = nav[i].title
            li.append(name)
            ul.append(li)
            li.addEventListener('click', () => {
                // console.log(nav[i].offset, this.currentTop)
                this.option.scroller.scrollTop = nav[i].offset
                this.currentTop = nav[i].offset
            });
        }
        this.option.scroller.append(ul)

    }
    connectNav() {
        const ul = document.querySelector('.nav-list')
        const nav = this.setPosition()
        const lis = ul.querySelectorAll('.type-nav')
        for (let i = 0; i < nav.length; i++) {

            // const name = lis[i].querySelector('.name')
            // name.innerText = nav[i].title
            lis[i].addEventListener('click', () => {
                this.option.scroller.scrollTop = nav[i].offset
                this.currentTop = nav[i].offset
            });
        }
    }
    init() {
        this.option.scroller = this.getScrollableNode(document.querySelector('section'))
        console.dir(this.option.scroller)
        this.option.offset = this.option.scroller.offsetTop;
        if(!this.option.scroller) return;
        this.option.scroller.style.scrollBehavior = 'smooth'
        this.currentTop = this.option.scroller.scrollTop;
        if (document.querySelector('.nav-list')) {
            this.connectNav()
        } else {
            this.createNav()
        }
        this.option.scroller.addEventListener('scroll', () => {
            this.currentTop = this.option.scroller.scrollTop
            for (let i = 0; i < this.sectionInfo.length; i++) {
                if (this.currentTop < this.sectionInfo[i].offset) {
                    this.currentType = i - 1;
                    break;
                } else {
                    this.currentType = i;
                }
            }
            this.setActive()
        });
        let time = null
        window.addEventListener('resize', () => {
            clearTimeout(time)
            time = setTimeout(() => {
                // console.log('resize')
                const el = document.querySelector('.nav-list')
                el.parentNode.removeChild(el)
                this.createNav();
            }, 300)

        })
    }
    setPosition() {
        const typeList = document.querySelectorAll(this.option.section);
        const setPos = [];
        typeList.forEach(type => {
            const typeItem = {};
            typeItem.title = type.querySelector(this.option.title).textContent;
            typeItem.offset = type.offsetTop - this.option.offset;
            setPos.push(typeItem);
        });
        this.sectionInfo = setPos
        return setPos;
    }
    setActive() {
        const navs = document.querySelectorAll('.type-nav')
        navs.forEach((item ,i)=> {
            if (i == this.currentType) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    }
    getScrollableNode(node) {
        if (node == null) return null;
        if (document.querySelector('.nt-scroller')) {
            return document.querySelector('.nt-scroller')
        } else if (node.scrollHeight > node.clientHeight) {
            return node;
        } else {
            return this.getScrollableNode(node.parentNode);
        }
    }
}

export default Scrollspy;