<template>
  <div class="menu-header-title" v-if="addHeader">
    <div class="title-right" v-if="showRightBox">
      <editRightTitle :item="menuHeaderItems.rightTitle" @newItem="setRightTitle" @keyup.enter="submitEdits"/>
      <div class="removeItemBtn" @click="showRightBox = false"></div>
    </div>
    <div class="removeHeaderBtn" @click="$emit('addHeader', false)"></div>
  </div>
</template>

<script>
import EditRightTitle from '@/components/MenuHeader/MenuHeaderEditors/EditRightTitle.vue'
export default {
  name: 'Menu-Header-Title',
  props: {
    addHeader: {
      type: Boolean
    },
    menuHeaderItems: {
      type: Object
    }
  },
  watch: {
    menuHeaderItems (newVal) {
      console.log('MENUHEADERTITLE menuHeaderItems newVal', newVal)
    }
  },
  data () {
    return {
      showRightBox: true,
      leftTitle: this.menuHeaderItems.leftTitle,
      leftSubTitle: this.menuHeaderItems.leftSubTitle,
      rightTitle: this.menuHeaderItems.rightTitle,
      rightSubTitle: this.menuHeaderItems.rightSubTitle

    }
  },
  components: {
    EditRightTitle
  },
  methods: {
    setLeftTitle (data) {
      this.leftTitle = data
      this.submitHeaderEdits()
    },
    setLeftSubTitle (data) {
      this.leftSubTitle = data
      this.submitHeaderEdits()
    },
    setRightTitle (data) {
      this.rightTitle = data
      this.submitHeaderEdits()
    },
    setRightSubTitle (data) {
      this.rightSubTitle = data
      this.submitHeaderEdits()
    },
    submitHeaderEdits () {
      this.editMenu = false
      const newMenuHeaderItems = {
        headerId: this.menuHeaderItems.index,
        leftTitle: this.leftTitle,
        leftSubTitle: this.leftSubTitle,
        rightTitle: this.rightTitle,
        rightSubTitle: this.rightSubTitle,
      }
      this.$emit('addedMenuHeaderItems', newMenuHeaderItems)
    }
  }
}
</script>

<style>

</style>