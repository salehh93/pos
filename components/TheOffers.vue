<template>
    <div class="TheOffers p-lg-0 p-4" id="TheOffers">
        <div class=" container my-5">
            <div class="card p-lg-4 p-2 border-0">
                <h2 class="head-section text-center mt-4 mb-5">
                    <span>أسعارنا</span>
                </h2>
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
                            {{offer.details}}
                        </div>
                    </div>
                </div>




                    </div>
    
            
                    
                   
    
                </div>
            </div>
        
            
        </div>
    </div>
</template> 

<script>
import axios from 'axios';

export default {
  data() {
    return {
        offers:''
    };
  },
  methods: {
    async getOffrers() {
        

  try {
    const response = await axios.get(`https://dash.saleh.ps/api/v1/offers`);

    // Format orders with formatted dates
 this.offers = response.data.data ;

    
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