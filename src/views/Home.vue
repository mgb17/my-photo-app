<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Blogs from other photo-lovers</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCards from "../components/BlogCard.vue"

export default {
  name: "Home",
  components: { BlogPost, BlogCards },
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
      sampleBlogCards: [
        { blogTitle: "number 1", blogCoverPhoto: "stock-1", blogDate: "14 June 2021"},
        { blogTitle: "number 2", blogCoverPhoto: "stock-2", blogDate: "14 June 2021"},
        { blogTitle: "number 3", blogCoverPhoto: "stock-3", blogDate: "14 June 2021"},
        { blogTitle: "number 4", blogCoverPhoto: "stock-4", blogDate: "14 June 2021"}
      ]
    }
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

</style>
