<template>
    <div class="About" id="about">
      <Head>
        <Title>صالح باي - من نحن</Title>

     </Head>
        <TheHeader />
        <div class=" sub-header text-center shadow-sm position-relative">
            <h2 class="head-section text-center py-0">
                <span>من نحن</span>
            </h2>
        </div>
      <section class="  py-5">
        <div class=" container">
          <div class="row justify-content-center">
              <div class="col-lg-9">
                <div class="row g-4 justify-content-around  align-items-center pb-5">
                  <div class="col-md-6">
                      <div class="img-about">
                       <img src="/img/about-1.png" width="80%" alt="">
                      </div>
                   </div>
  
                  <div class="col-lg-5">
                      <div class="content-product p-4">
                          <div class="title-about-section">
                            التأسيس
                          </div>
                          <p class=" my-4">
                            تأسسنا في أصعب بيئات العمل وأقسى الظروف، حيث تم تشكيل الفريق وسط الحرب ومن قلب المجاعة ونقص الموارد، في اختبار إلهي لرفض الربا والاستغلال والمتاجرة بحاجات الناس. ونأمل من الله التوفيق فيما نصبو إليه.
                          </p>
  
                      
                      </div>
                  </div>
                
              </div>
              <div class="row g-4 justify-content-around  align-items-center pb-5">
                  <div class="col-md-6 order-lg-last text-lg-end">
                      <div class="img-about">
                       <img src="/img/about-2.png" width="80%" alt="">
                      </div>
                   </div>
  
                  <div class="col-lg-5">
                      <div class="content-product p-4">
                          <div class="title-about-section">
                              رسالتنا
                          </div>
                          <p class=" my-4">
  
                            رسالتنا للعالم أجمع: مهما اجتمعت قوى الشر لقتل الحياة في غزة، سننهض من تحت الركام من جديد، ونحلق في سماء التقدم والتألق، ونحقق أفضل المكانات
                          </p>
  
                  
                      </div>
                  </div>
                
              </div>
              </div>
          </div>
          
            
        </div>
      </section>

      <div class=" container my-5 box ">
        <TheStats />
      </div>
   
<section class=" bg-white">
    <TheFirststep class=" " />
</section>

       
        <TheFooter />

   
    </div>    
</template>


<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    head() {
      return {
        title: 'من نحن',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            
            hid: '',
            name: '',
            content: ''
          }
        ]
      }
    }
  }
  
</script>