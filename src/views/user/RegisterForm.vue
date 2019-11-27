<template>
  <div class="login-form">
    <input type="email" name="email" v-model="email" required invalidFeedback="Please provide an email" placeholder="YOUR EMAIL">
    <input type="password" name="password" v-model="password" required invalidFeedback="Please provide a password" placeholder="YOUR PASSWORD">
    <button type="submit" @click="submit">Sign Up</button>
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
    submit (event) {
      // this.errors = []
      // if (!validate.email(this.email)) {
      //   this.errors.push('Please enter a valid email address')
      // }
      // if (!validate.password(this.password)) {
      //   this.errors.push('Please enter a valid password')
      // }
      // if (this.password !== this.confirmPassword) {
      //   this.errors.push('Passwords do not match')
      // }

      // if (!this.errors.length) {
        this.$store.dispatch('registerUser', { email: this.email, password: this.password })
      // }
    }
  }
}
</script>

<style>

</style>