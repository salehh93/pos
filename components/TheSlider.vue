<template #prevArrow="arrowOption" #nextArrow="arrowOption">
  <div class="slider h-100 align-items-center d-md-flex position-relative px-lg-0 px-3">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-lg-5 order-last order-lg-first">
          <h1 class="text-dark bold before-c fs-25-i ">
            <div class="pb-1 mb-1">دعنا نساعدك في</div>
            
            <div class="slider-container">
              <div class="slide">تسويق مشروعك</div>
              <div class="slide">إنشاء تطبيقك</div>
              <!-- <div class="slide">التواسط مع طرف اخر</div> -->
              <!-- <div class="slide">في تحصيل أموالك</div> -->
              
              <div class="slide">إنجاز طلبك بسرعة النقرررة</div>
              <div class="slide">متابعة مشروعك</div>
            </div>
          </h1>
          <p class="my-4">
فريقنا المتكامل يرافقك من الفكرة إلى القمة، لنطور ونُدير مشروعك باحترافية ليصل إلى أفضل مكانة في السوق.
          </p>
           <div class="mb-5 d-md-none d-block">
            <img src="/img/logos.png" format="webp" width="250" class="img-logos" alt="Saleh Pay -  طرق دفع امنه" />
          </div>

          <div>
            <NuxtLink class="btn btn-success" to="/Services">خدماتنا </NuxtLink>
          </div>
         
        </div>
        <div class="col-lg-auto text-lg-end text-center">
          <img src="/img/saleh-img2.png" format="webp" width="500" class="img-slider" alt="Saleh Pay - صالح باي" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000); // Adjust the interval as needed

  showSlide(currentIndex); // Initialize the first slide
});
</script>
<style>
.slider-container {
  overflow: hidden;
  height: 40px; /* Adjust based on your text height */
  position: relative;
}

.slide {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: start;
  transition: top 1s ease-in-out;
  opacity: 0;
  font-size: 28px;
}

.slide.active {
  top: 0;
  opacity: 1;
}


</style>