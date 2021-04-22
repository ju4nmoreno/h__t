# Vue Notes

--- Module Content

# Vue Instance Lifecycle

createApp({})

beforeCreate()

created() ----------------
----- | | ---------- Compile template
beforeMount() -------------

// ---

# Vuecli

# Props

```javascript
props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
}
```

[props component vue](https://v3.vuejs.org/guide/component-props.html)

# Components

A “meta component” for rendering dynamic components. The actual component to render is determined by the is prop:

```HTML
<!-- a dynamic component controlled by -->
<!-- the `componentId` property on the vm -->
<component :is="componentId"></component>

<!-- can also render registered component or component passed as prop -->
<component :is="$options.components.child"></component>

<keep-alive>
    <component :is="$options.components.child"></component>
</keep-alive>
```

## register components

### local

### global

## styling

in local componet local

```HTML
<style scoped>
    header {
        font: 1em/1em Arial
    }
</style>
```

## slots

Shorthand: #

Expects: JavaScript expression that is valid in a function argument position (supports destructuring in supported environments). Optional - only needed if expecting props to be passed to the slot.

Argument: slot name (optional, defaults to default)

Limited to:

[more about Slots](https://vuejs.org/v2/api/#v-slot 'vue slots')

```HTML
<!-- Named slots -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  Default slot content

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- Named slot that receives props -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>

<!-- Default slot that receive props, with destructuring -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```

## Teleport

```HTML
<!-- into component -->
<teleport to='body'>
    <h2>Input invalid</h2>
    <P>Please enter at least a few characters...</P>
    <button @click="confirmError">okay</button>
</teleport>
```

## Components files

check recommendation vue has for projects [Style Guia](https://vuejs.org/v2/style-guide/)

## Component Deep Dive

| Component Registration & Styles                                                 | Slots                                                                                                     |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Components can be registe globally or locally: Prefer local registration.       | Slots can beused to add a "placeholder" for dynamic HTML code .                                           |
| Styles ca be globa or scoped to a component: Prefer scped for mmost components. | Multiple, named slots are possible, default fallbacks can be provided. scoped slots allow adv. use-cases. |

| Dynamic Components                                                            | Teleport & Style Guide                                                                  |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Components can be swapped dynamically via the built-in "component" component. | Som structure can be maniputalted via "teleport" - it keeps the component hierarchy     |
| Component caching can be added via the "keep-alive" component.                | Consider following the official style guide to keep your code clean and understandable. |

## http

```javascript
mounted() {

    this.loadExperiences();
}
```

## Vue animations & transitions

### Css Classes

```CSS
.block {
    transitions: transform 0.3s ease-out;
}
.animate: {
    transform: translateX(-50px);
    animation: slide_fade ease-out forwards;
}

@keyframes slide-fade {
    0% {
        transform translateX(0) scale(1)
    }

    70% {
        transform: translateX(-150px) scale(1.1);
    }

    100% {
        transform: translateX(-200px) scale(1);
    }
}
```

### ☕ Vue Animating Enter-Leave State

|    Element not mounted    | Element mounted |    Element not mounted    |
| :-----------------------: | --------------- | :-----------------------: |
| \*-enter-from \*-enter-to |                 | \*-leave-from \*-leave-to |
|      \*-enter-active      |                 |      \*-leave-active      |

```javascript
<transition>
    <div>thiss just a text</div>
</transition>

.v-enter-from {
    opacity: 0;
    transform: translateY(-30px)
}
.v-enter-active {

}
.v-enter-to {}

.v-leave-from{}

.v-leave-active {
    opacity: 1;
    transform: translateY(0px)
}
```

more than one transition component

```javascript
<transition name="para"></transition>
<transition name="modal"></transition>

.[name]-active-to {...
.para-active-to {...
```

only javascript animation

```javascript
beforeEnter(el) {
    el.style.opacity = 0;
},
enter(el, done){
    let round = 0;
    const interval = setIterval(() => {
            el.style.opacity = round * 0.1;
            round++;
            if (round > 100) {
                clearInterval(interval)
                done()
            }
        }, 20)
}


```

## Vue Vuex

• manage state
• predicable state
• clearly data flow

```ditaa {cmd=true args=["-E"]}

┌────────────────────────────────────────────────┐
│| no pues nada │ <---------> | this is another |│
└────────────────────────────────────────────────┘

```

|                             |               Vuex                |                                        |
| :-------------------------: | :-------------------------------: | :------------------------------------: |
| Outsourced state management | predictable state management/flow | Clearly defined data flow: Less errors |

☕
