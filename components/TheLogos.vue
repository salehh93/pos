<template>
    <div class="logos">


      <vueper-slides 
      class="no-shadow"
      lazy lazy-load-on-drag
      :visible-slides="5"
      slide-multiple
      :gap="3" 
      
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } , 1360: { visibleSlides: 5, slideMultiple: 1 } }"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
           />
      </vueper-slides>
      
    </div>
</template>


<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

  export default {
    components: {
     

    VueperSlides, VueperSlide,

  },
  data(){
    return{
        slides:[
                {
                    title: 'logo 1',
                    content: 'content',
                    image: '/client-1.png'

                },
                {
                    title: 'logo 2',
                    content: 'content',
                    image:'/client-2.png'

                },
                {
                    title: 'logo 3',
                    content: 'content',
                    image: '/client-3.png'

                },
                {
                    title: 'logo 4',
                    content: 'content',
                    image: '/client-4.png'

                },
                {
                    title: 'logo 2',
                    content: 'content',
                    image:'/client-2.png'

                },
                {
                    title: 'logo 3',
                    content: 'content',
                    image: '/client-3.png'

                },
                {
                    title: 'logo 4',
                    content: 'content',
                    image: '/client-4.png'

                },
  
        ],

    }
  },
  


  }

</script> 

