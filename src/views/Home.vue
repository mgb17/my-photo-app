<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Blogs from other photo-lovers</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Do not miss a photo. Register for free!</h2>
        <router-link class="router-button" to="#">
          Register for MYphoto <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCards from "../components/BlogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"


export default {
  name: "Home",
  components: { BlogPost, BlogCards, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog photos with all things in it. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "shooting",
      },
      sampleBlogPost: [
        {
          title: 'sample1',
          blogHTML: 'qweqwe',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'sample2',
          blogHTML: 'qweqwe',
          blogCoverPhoto: 'designed-for-everyone'
        },
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
        return this.$store.state.user;
      },
  }
};
</script>

<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 32px;
    color: darkmagenta;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px
      }
    }
  }
}

</style>
