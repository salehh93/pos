<template>
  <div class="">

    <NuxtPage />
    </div>
  
      <footer  class="mt-auto">
    <div class=" container text-center py-3">
        جميع الحقوق محفوظة لدى SalehPay
    </div>
    
</footer>
</template>
 <script setup>
  const nuxtApp = useNuxtApp()
  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script> 