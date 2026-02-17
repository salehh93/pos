<template>
    <div class="testimonial">
        <div class=" container mt-5 pt-5 position-relative">
            <h2 class="head-section text-center mt-4 mb-5 pb-4">
                <span>أراء العملاء</span>
            </h2>
            <div class="card bg-white border-0 show p-4" dir="ltr">
                
      <vueper-slides 
      class="no-shadow"
      :visible-slides="2"
      slide-multiple
      :gap="2" 
      
        :dragging-distance="200"
        :autoplay="true"
    :autoplay-timeout="3000" 
    :pause-on-hover="true" 

        :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
           >
          <template #content>
            <div class="card card-user br-10 p-3 bg-light border-0" dir="rtl">
                <div class="d-flex ">
                    <div class="img-user">
                        <img :src="slide.image" alt="">
                    </div>
                    <div class="content-user px-2">
                        <div class="user-name">{{slide.username}}</div>
                        <span class="number" dir="ltr">
                            {{ slide.whatsapp }}
                        </span>
                        <div class="user-title mb-2">{{slide.title}}</div>
                        <div class="user-text">
                            {{slide.content}}
                        </div>
                    </div>
                </div>
            </div>
          </template>
           </vueper-slide>
      </vueper-slides>
 
            </div>
        </div>
        
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
              
                {   username: "Mohammed",
                
                    title: 'مدير جروبات  الحوالات المالية - غزة',
                    whatsapp:'+972 56-***-**31',
                    content: `علاقتي مع صالح باي تجاوزت التوقعات في جميع الجوانب التي يحتاجها أي عميل. 

الميزة الأبرز كانت المرونة العالية في التعامل مع طلباتي، بالإضافة إلى الدعم المتواصل والاستجابة السريعة لأي استفسار أو مشكلة. 

لم أكن بحاجة إلى مقارنة خدماتهم بخيارات أخرى لأن التجربة معهم كانت متكاملة؛ جودة الخدمة، سرعة الأداء، والشفافية في الأسعار جعلت من صالح باي الخيار الأول والأخير بالنسبة لي. 

بالمختصر خدماته كانت ضغطة زر واحدة لا أكثر.`,
                    image: '/img/users/user2.jpg'

                },
                {   username: "محمود الأغواني",
                    title: 'مدير شركة Aysel Media',
                    whatsapp:'+972 59-***-**25',
                    content: `بصفتي مدير شركة Aysel Media، أود التعبير عن خالص تقديري للأستاذ صالح حبوش، الذي أثبت أنه نموذج للتميز والاحترافية في مجال الحوالات المالية. يتمتع بمصداقية لا تُضاهى، ودقة في المواعيد، وحلول مالية تلبي أعلى معايير الكفاءة والشفافية. التعامل معه يمنحك راحة البال والثقة المطلقة. أوصي به بشدة لكل من يبحث عن شريك مالي يُعتمد عليه.`,
                    image: '/img/users/user3.jpg'

                },
                {   username: "د.نادر منير",
                    title: 'Founder & Director of Al Amal Clinic',
                    whatsapp:'+970 59-***-**39',
                    content: `
تجربتي مع صالح في استقبال الحوالات كانت استثنائية بكل المقاييس. ما يميز التعامل معهم هو الثقة الكاملة، السرعة في التنفيذ، والأسعار المناسبة التي يصعب العثور عليها في أي مكان آخر. لقد أصبح صالح الخيار الأول بالنسبة لي لتنفيذ جميع معاملاتي المالية بكفاءة وراحة`,
                    image: '/img/users/user4.jpg'

                },
           
                {   username: "معتز نصار",
                    title: `صاحب جروبات 'غزة للصرافة والحوالات المالية'`,
                    whatsapp:'+972 59-***-**70',
                    content: `أشهد شهادة حق عن التعامل مع الأخ صالح، من خلال تجربتي الشخصية في شراء الشرائح الإلكترونية وتعاملات USDT، كان قمة في الأمانة والمصداقية. شخص جدير بالثقة، وبتعامله الراقي يكسبك راحة البال. أنصح الجميع بالتعامل معه بثقة، خاصة وأنا كصاحب جروبات 'غزة للصرافة والحوالات المالية' أعتبره واحداً من أفضل الأشخاص في هذا المجال. كل التوفيق لك يا صالح.
`,              
                    image: '/img/users/user5.jpg'

                },
                {   username: "احمد عاشور",
                    title: 'تاجر معتمد',
                    content: `بُنيت علاقتي بصالح باي بأهم صفات في تعامل بالمعاملات المالية الثقة والامانة وسرعة التنفيذ والسعر المميز 
وتميز بأستغنائي عن البحث عن منصات اخرى.
واريد شكره على امانته وعلى تعامله المتميز بارك الله فيه.
`,
                    whatsapp:'+972 59-***-**38',
                    image: '/img/users/user6.jpg'

                },
                {   username: "محمد ابوشعبان",
                    title: 'Acoounting Manger',
                    whatsapp:'+20 102-***-**17',
                    content: `اتسمت علاقتي بصالح باي بأهم ثلاث أمور تبحث عنها مع أي منصة للتعاملات المالية، الدقه والثقه والسعر المميز والسرعه في المعامله ولا يوجد أي خوف أو تخوفات من المعامله معه فشعرت بالإرتياح عندما تعاملت معه وأنا أعرفه شخصيا فهو من العائلات المعروفه لدينا`,
                    image: '/img/users/user7.jpg'

                },

                
  
        ],

    }
  },
  


  }

</script> 

