<template>
  <div class="nav-editor">
    <transition name="slide">
      <div class="button-group" v-if="openMenu">
        <div class="button" @click="$emit('createNewItem')">
          <i class="fa fa-plus-circle"></i>
          <i>item</i>
        </div>
        <div class="button" @click="$emit('addHeader', true)">
          <i class="fa fa-plus-circle"></i>
          <i>header</i>
        </div>
        <div class="button">
          <i class="fa fa-plus-circle"></i>
          <i>page</i>
        </div>
         <div class="button"@click="$emit('printMenu')">
          <i class="fa fa-plus-circle"></i>
          <i>print</i>
        </div>
      </div>
    </transition>
    <i class="fa nav-icon" 
      :class="{'fa-caret-square-o-right': openMenu, 'fa-caret-square-o-left': !openMenu }"
      @click="openMenu = !openMenu">
    </i>
  </div> 
</template>

<script>
export default {
  name: 'nav-editor',
  data () {
    return {
      openMenu: false
    }
  },
  watch: {
    openMenu () {

    }
  }
}
</script>

<style>
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   /* -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1); */
   transition-timing-function: ease-out;
}

.slide-enter-to, .slide-leave {
   max-width: 150px;
   opacity: 1;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   opacity: 0;
   overflow: hidden;
   max-height: 0;
}

</style>