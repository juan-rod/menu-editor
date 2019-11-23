<template>
  <div class="home-container-wrapper">
    <div class="home-container" :class="{ 'show-tools': showTools }">
      <aside class="sidebar-container">
        <div class="sidebar">
          <div class="logo">LOGO</div>
          <section class="section-1">
            <h2>Menu</h2>
            <ul>
              <li>Start New</li>
              <li>Previous Brunch</li>
              <li>Previous Dinner</li>
            </ul>
          </section>
          <section class="section-2">
            <h2>Poster</h2>
            <ul>
              <li>Start New</li>
              <li>Previous Posters</li>
              <!-- <li>Previous Dinner</li> -->
            </ul>
          </section>
          <section class="section-3">
            <i class="fa fa-lg fa-cog"></i>
          </section>
        </div>
      </aside>
      <!-- <nav class="nav"></nav> -->
      <main>
        <div class="main-content">
          <div class="toolbar">
            <i class="tools-btn" @click="openTools">Tools</i>
          </div>
        </div>
        <menu-template></menu-template>
      </main>
    </div>
    <div class="side-tool-bar">
      <ul>
        <li>New Page</li>
        <li>Add Item</li>
        <li>Download</li>
        <li>Save</li>
      </ul>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MenuTemplate from '@/views/MenuTemplate.vue'
export default {
  name: 'home',
  components: { MenuTemplate },
  data () {
    return {
      menuClicked: false,
      showTools: false,
      moveTools: false
    }
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
      // react to route changes...
    }
  },
  methods: {
    openTools () {
      this.showTools = !this.showTools
      setTimeout(() => {
        this.moveTools = !this.moveTools
        if (!this.showTools) {
          return
        }
      }, 1000);
    }
  }
}
</script>
