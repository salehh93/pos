<template>
    <div class="profile">
      <Head>
        <Title>صالح باي - الملف الشخصي</Title>

     </Head>
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
                        <div class="card p-4">

                            <div class="row g-3 justify-content-center border-bottom pb-3">
                               
                                <div class="col-auto">
                                    <img :src="user.image" width="100" class="img-profile" alt="">
                                </div>
                            </div>
                            <div class="row g-3 border-bottom py-3">
                                <div class="col-lg-4 col-6">
                                    الإسم
                                </div>
                                <div class="col text-start" dir="ltr">
                                    {{user.name}}
                                </div>
                            </div>
                            <div class="row g-3 border-bottom py-3">
                                <div class="col-lg-4 col-6">
                                    رقم الواتساب
                                </div>
                                <div class="col text-start" dir="ltr">
                                    {{user.mobile}}
                                </div>
                            </div>
                        
                         
                            <div class="row g-3 border-bottom py-3">
                                <div class="col-lg-4 col-6">
                                    البريد الإلكتروني
                                </div>
                                <div class="col">
                                    {{user.email == null ? 'لا يوجد' : user.email}}
                                </div>
                            </div>
                            <div class="row g-3  pt-3">
                                <div class="col-lg-4 col-6">
                                   نوع الحساب
                                </div>
                                <div class="col">
                                    {{user.user_type == 'client' ? 'زبون' : 'تاجر'}}
                                </div>
                            </div>
                            
                        </div>
                        <NuxtLink class=" btn d-block btn-primary mt-3" to="/orders">عرض طلباتي</NuxtLink>
                        <button @click="logout()" class=" btn d-block btn-outline-danger mt-5" >تسجيل خروج</button>
                    </div>
                </div>
            </div>
            <!-- <section class=" bg-white">
                <TheFirststep class=" " />
            </section> -->
            <TheFooter />
            

    </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        laoadingPage:false ,
        title: '',
        userAfter:'',
        myorders:'',
        user:'',
      }
    },
    methods:{
      async logout() {
  console.log(this.userAfter.token);

  try {
    // Ensure that headers are passed in the correct config object (second parameter)
    const response = await axios.post('https://dash.saleh.ps/api/v1/logout', {}, {
      headers: {
        Authorization: `Bearer ${this.userAfter.token}`
      }
    });
    localStorage.removeItem('user');
    console.log(response.data.message);
    this.$router.push(`/`);
    if (response.data.status === true) {
      // Remove user data from localStorage
      
      
      // Redirect the user after logout
      this.$router.push(`/`); // Or redirect to the login page
    }
  } catch (error) {
    // Handle any errors
    this.error = error;
    console.error('An error occurred:', error);
  }
}

    },
    async mounted(){
    
      this.laoadingPage = true ;
        const userdata = localStorage.getItem('user');
      if (userdata) {
        this.userAfter = JSON.parse(userdata);
      }
      if(this.userAfter == ''){
        this.$router.push(`/login`);
      }
        try {
            const response = await axios.get(`https://dash.saleh.ps/api/v1/user` , {
            headers: {
                    Authorization: `Bearer ` + this.userAfter.token
                  }
          }
          );
  
            if (response.data.status === true) {
              this.laoadingPage = false ;
              console.log('get services its good');
              this.user = response.data.data;
            }
          } catch (error) {
            // Handle any errors
            this.error = error;
            console.error('An error occurred: ', error);
          }
    },
    head() {
      return {
        title: 'الملف الشخصي',
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

<style scoped>
.content{
  min-height: 500px;
}
.img-profile{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #fff;
    -o-object-position: top;
    object-position: top;
}
</style>