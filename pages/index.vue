<template>
  <section class="container" id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
export default {
  components:{
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
    }).then(res => {
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail 
          }
        })
      };
    });
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: 'A new Begining',
  //         previewText: 'This will be awesome!',
  //         thumbnailUrl: 'https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2015/04/17/150417194023_einstein-lengua.jpg',
  //         id: 'a-new-begining'
  //       },
  //       {
  //         title: 'A Second Begining',
  //         previewText: 'This will be awesome! Awesome, awesome!',
  //         thumbnailUrl: 'https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2015/04/17/150417194023_einstein-lengua.jpg',
  //         id: 'a-second-begining'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
#posts{
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

@media(min-width: 35rem){
  #posts{
    flex-direction: row;
  }
}

</style>
