<template>
    <div class="Offers" id="Offers">
        <Head>
            <Title>صالح باي - الأسعار والعروض</Title>
    
         </Head>
         <TheHeader />
         <div class=" sub-header text-center shadow-sm position-relative">
             <h2 class="head-section text-center py-0">
                 <span>الأسعار والعروض</span>
             </h2>
         </div>

             <!-- loading page -->
             <div class="laoding-page" v-if="laoadingPage" >
                <div   class="spinner-border text-success fs-12 " style="  width: 50px; height: 50px; " role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
               </div>
               
        <div class="content-h container my-5">
            <div class="card p-lg-4 p-2 border-0">
               
                <div class="row g-4 align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="card-user bg-light border user-awnaer br-10 border-success mb-3" v-for="(offer, i) in offers" :key="offer" :index="i" >
                            <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                                <div class="user-dt" ><div class="d-flex align-items-center gap-3" >
                                    <div class="dt-user" ><div class="user-type fs-16" >{{offer.name}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="price" >
                            <b>{{offer.details}}</b>
                        </div>
                    </div>
                </div>

                <div class="card border-0">
                    <div class="row g-3">
                        <div class="col-6">
                            <a href="https://wa.me/+972598258269" class=" btn btn-success br-10-i w-100">طلب تفاوض على السعر</a>
                        </div>
                        <div class="col-6">
                            <a href="https://chat.whatsapp.com/LVq2VuYHIuF1h2kPdUVvjK" class=" btn btn-primary br-10  w-100">تابع الأسعار عالواتساب</a>
                        </div>
                    </div>
                </div>


                    </div>
    
            
                    
                   
    
                </div>
            </div>
        
            
        </div>
        <TheFooter />
    </div>
</template> 

<script>
import axios from 'axios';

export default {
  data() {
    return {
        offers:'',
        laoadingPage: false,
    };
  },
  methods: {
    async getOffrers() {
        this.laoadingPage = true;

  try {
    const response = await axios.get(`https://dash.saleh.ps/api/v1/offers`);

    // Format orders with formatted dates
 this.offers = response.data.data ;
 this.laoadingPage = false;
    
  } catch (error) {
    console.error('An error occurred:', error);
    this.$toast.error('حدث خطأ أثناء جلب العروض. الرجاء المحاولة لاحقًا.');
  } 
}

  },
  async mounted() {
    this.getOffrers();
  },
};
</script>
