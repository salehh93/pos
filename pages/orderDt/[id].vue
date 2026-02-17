<template>
  <div class="Order">
    
    <TheHeader />
    <div class=" py-4 sub-header  shadow-sm position-relative">
       <div class=" container">
        <div class="d-flex gap-2 justify-content-between">
          <div class="title-page fs-20">ملفي الشخصي</div>
      
        </div>
       </div>
    </div>
   
     <!-- loading page -->
 <div class="laoding-page" v-if="laoadingPage" >
  <div   class="spinner-border text-success fs-12 " style="  width: 50px; height: 50px; " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
 </div>

    <div class=" container  py-4 content">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card p-5 my-5 d-flex align-items-center justify-content-center">

                    جاري اعادة توجيهك الى الطلب
                    
                </div>
              
            </div>
        </div>
    </div>
    <!-- <section class=" bg-white">
        <TheFirststep class=" " />
    </section> -->
    <TheFooter />



  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  try {
    // Access the current path and parameters
    const id = route.params.id;

    // Ensure the ID exists before proceeding
    if (id) {
      const newPath = `/dt/${id}`;
      router.replace(newPath);
    } else {
      console.error('ID parameter is missing');
    }
  } catch (error) {
    console.error('Error during redirection:', error);
  }
});
</script>

<style scoped>
.Order {
  font-size: 16px;
  color: #333;
}
</style>
