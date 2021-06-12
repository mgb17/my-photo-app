<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class="header" :to="{ name: 'Home' }">Your-Photo</router-link>
          </div>
          <div class="nav-links">
              <ul>
                  <router-link class="link" to="#">Home</router-link>
                  <router-link class="link" to="#">Blogs</router-link>
                  <router-link class="link" to="#">Post Photos</router-link>
                  <router-link class="link" to="#">Login/Register</router-link>
              </ul>
          </div>
      </nav>
      <menuIcon class="menu-icon"/>
      <transition>
               <ul class="mobile-nav">
                  <router-link class="links" to="#">Home</router-link>
                  <router-link class="links" to="#">Blogs</router-link>
                  <router-link class="links" to="#">Post Photos</router-link>
                  <router-link class="links" to="#">Login/Register</router-link>
              </ul> 
      </transition>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'navigation',
    components: {
        menuIcon
    }
}
</script>

<style scoped>
header {
    background-color: #fff;
    padding: 0 25px;
    z-index: 99;
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;
}

.link:hover {
        color: #1eb8b8;
    }


nav {
    display: flex;
    padding: 25px 0;
}
    
.branding {
    display: flex;
    align-items: center;
}

.header {
    font-weight: 600;
    font-size: 24px;
    color: black;
}


.nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 32px;
}

.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
}

.link {
    margin-right: 32;
}

.mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0
}

.links {
    padding: 15px 0;
    color: #fff;
}

</style>