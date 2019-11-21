<template>
  <div class="menu-header">
    <div class="menu-header-border">
      <div class="dashes">
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
        <span>\</span>
      </div>
      <div class="middle-box"></div>
      <div class="dashes">
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </div>
    </div>
    <div class="menu-header-title">
      <div class="title-label-container">
        <p class="right-title">Brunch</p>
      </div>
        <!-- <div class="title-label-container edit-hover" @dblclick="editItem = true" @keyup.enter="submitEdit">
          <p class="right-title" v-if="!editItem">{{ item }}</p>
          <input type="text" v-model="newItem" v-focus v-else>
        </div> -->
    </div>
  </div>
</template>

<script>
// import EditFields from '@/mixins/EditFields'
export default {
  name: 'MenuHeader'
}
</script>

<style>

</style>