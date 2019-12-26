<template>
  <div class="login-container">
    <div class="login">
      <div class="login-header">
        <h1> Welcome back :)</h1>
      </div>
      <div class="login-body">
        <h1>{{ loginHeader }}</h1>
        <login-form v-if="!register" />
        <register-form  v-else/>
        <div class="errors" v-if="error">
            {{ error.message }}
        </div>
      </div>
      <div class="login-footer">
        <p>{{ footerText }}</p>
        <div  class="register-btn" @click="register = !register">{{ footerButton }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/views/user/LoginForm'
import RegisterForm from '@/views/user/RegisterForm'
import { mapState } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'

// const { mapState } = createNamespacedHelpers('../../store/index.js')
// console.log('mapState', mapState('user'))
export default {
  data () {
    return {
      email: '',
      password: '',
      register: false
    }
  },
  components: { LoginForm, RegisterForm },
  computed: {
    footerText () {
      return this.register ? 'Already have an account?' : "Don't have an account?"
    },
    footerButton () {
      return this.register ? 'Sign In' : 'Register'
    },
    loginHeader () {
      return this.register ? 'New User Sign Up': 'Login'
    },
    ...mapState('user',{
      error: state => state.error
    })
  }
}
</script>

<style>

</style>