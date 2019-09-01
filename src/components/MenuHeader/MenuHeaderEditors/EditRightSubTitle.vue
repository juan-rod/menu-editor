<template>
  <div class="title-right-label edit-hover" @dblclick="editItem = true" @keyup.enter="submitEdit">
    <p class="right-details" v-if="!editItem">{{ item }}</p>
    <input type="text" v-model="newItem" v-focus v-else>
  </div>
</template>

<script>
import EditFields from '@/mixins/EditFields'
export default {
  name: 'EditRightSubTitle',
  props: ['item'],
  mixins: [ EditFields ]
}
</script>

<style>

</style>