<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"

export default {
  name: "Home",
  components: { BlogPost },
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
      ]
    }
  }
};
</script>
