<template>
  <div class="home-container">
   <div class="inner-container">
     <div class="block block-item" :class='{"block-menu" : menuClicked}' @click="menuClicked=!menuClicked">
       <p>Menus</p>
       <div class="menu-list" v-if="menuClicked">
         <ul>
           <router-link to="/menu/brunch" tag="li">Brunch</router-link>
           <router-link to="/menu/dinner" tag="li">Dinner</router-link>
           <router-link to="/menu/cocktails" tag="li">Cocktails</router-link>
           <router-link to="/menu/inserts" tag="li">Inserts</router-link>
         </ul>
       </div>
     </div>
     <div class="block block-item">
       <router-link to="/event-posters" tag="p">Event Posters</router-link>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      menuClicked: false
    }
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
      // react to route changes...
    }
  },
}
</script>
