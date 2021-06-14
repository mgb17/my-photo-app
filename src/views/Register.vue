<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account
                <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
            </p>
            <h2>Create your MYphoto account now!</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <User class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                    <User class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                    <User class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <Email class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Password" v-model="password">
                    <Password class="icon"/>
                </div>
            </div>
            <button>Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
        
    </div>
  
</template>

<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Password from "../assets/Icons/lock-alt-solid.svg";
import User from "../assets/Icons/user-alt-light.svg";

export default {
    name:"Register",
     components: {
        Email,
        Password,
        User
    },
    data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },

}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>