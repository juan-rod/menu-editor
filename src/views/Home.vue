<template>
  <div class="home-container-wrapper">
    <sidebar />
    <toolbar @printMenu="printMenu" />
    <div class="home-container" :class="{ 'show-tools': tools, 'container-right': sidebar }">
      <topbar @showTools='showTools' @showSidebar='showSidebar' />
      <!-- <dashboard /> -->
      <menu-template :printMe="printMe"></menu-template>
      <bottombar />
    </div>
  </div>
</template>

<script>
import MenuTemplate from '@/views/MenuTemplate'
import Toolbar from '@/components/navs/Toolbar'
import Sidebar from '@/components/navs/Sidebar'
import Topbar from '@/components/navs/Topbar'
import Bottombar from '@/components/navs/Bottombar'
import Dashboard from '@/components/Dashboard'
export default {
  name: 'home',
  components: { MenuTemplate, Sidebar, Topbar, Toolbar, Bottombar, Dashboard },
  data () {
    return {
      menuClicked: false,
      tools: false,
      sidebar: false,
      printMe: false
    }
  },
  methods: {
    printMenu (data) {
      this.printMe = true
    },
    showTools (data) {
      this.tools = data
    },
    showSidebar (data) {
      this.sidebar = data
    }
  }
}
</script>
