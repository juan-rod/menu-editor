<template>
  <div class="login-form">
    <input type="email" name="email" v-model="email" label="Your email" placeholder="YOUR EMAIL">
    <input type="password" name="password" label="Your password" placeholder="YOUR PASSWORD" v-model="password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import validate from '@/modules/validation-module';
export default {
 name: 'LoginForm',
 data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(event) {
      // console.log('this.errors', this.errors)
      // if (!validate.email(this.email)) {
        // this.$store.dispatch('setErrors', { message: 'Please enter a valid email address' })
        // this.errors.push('Please enter a valid email address');
      // }
      // console.log('this.errors', this.errors)
      // if (!this.errors.length) {
      //   event.target.classList.add('was-validated');
        this.$store.dispatch('loginUser', { email: this.email, password: this.password })
      // }
    },
  }
}
</script>

<style>

</style>