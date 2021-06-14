<template>
  <div class="blog-card">
      <div class="icons">
          <div class="icon">
              <Edit class="edit"/>
          </div><div class="icon">
              <Delete class="delete"/>
          </div>
     </div>
     <img :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="">
     <div class="info">
         <h4>{{ post.blogTitle }}</h4>
         <h6>Post Date: {{ post.blogDate }}</h6>
         <router-link class="link" to="#">
             View The Photos <Arrow class="arrow" /></router-link>
     </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
import Edit from "../assets/Icons/edit-regular.svg"
import Delete from "../assets/Icons/trash-regular.svg"

export default {
    name: 'BlogCards',
    props: ['post'],
    components: {
        Arrow,
        Edit,
        Delete
    },
};
</script>

<style lang="scss" scoped>

.blog-card {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: skyblue;
    min-height: 420px;
    transition: .5s ease all;

    &:hover {
        transform: rotateZ(-10deg) scale(1.1);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    }

    .icons {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: snow;
            transform-box: .5s ease all;

            &:hover {
                background-color: #303030;
            }
        }

    }
}

</style>