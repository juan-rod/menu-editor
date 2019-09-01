<template>
  <div class="title-left-label edit-hover" @dblclick="editItem = true" @keyup.enter="submitEdit">
    <p class="label" v-if="!editItem">{{ item }}</p>
    <input type="text" v-model="newItem" v-focus v-else>
  </div>
</template>

<script>
import EditFields from '@/mixins/EditFields'
export default {
  name: 'EditLeftSubTitle',
  props: ['item'],
  mixins: [ EditFields ],
  // watch: {
  //   item (newVal) {
  //     console.log('EditLeftTitle newVal', newVal)
  //   }
  // },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>