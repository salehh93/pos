<template>
    <div class="login">
      <Head>
        <Title>صالح باي - الدخول</Title>

     </Head>
     <div class="login-page py-lg-0">
        <div class=" partaner2sectoins row  mx-0 g-0 align-items-center justify-content-between ">
          
            <div class="col-lg-6 h-100 position-relative bg-light shadow">
                <div class=" h-100 py-5 overflow-auto">
                   <div dir="rtl" class="  h-100">
                        <div class="row mx-0 g-0 align-items-center justify-content-center h-100">
                            <div class="col-lg-8">
                                <div>
                                  
                                    <div class="p-lg-0 p-4">
                                       <div class=" d-flex align-items-lg-center justify-content-between mb-3 mt-5">
                                        <div class="h3 text-primary">أهلا بعودتك</div>
                                       
                                       </div>
                              
                                     
                                    <div class=" py-2"> <hr></div>
                                    
                                        <div class="">
                                            <div class="mb-3 fs-18">
                                                الرجاء ادخال اسم المستخدم و كلمة المرور
                                                 </div>
                                            <div class="mb-4">
                                                
                                                <input type="email" class="form-control " placeholder="البريد الإلكتروني*" v-model="form.email" id="email">
                                             </div>
                                               <div class="mb-4">
                                                
                                                <input type="text" class="form-control " placeholder="اسم المستخدم *"  v-model="form.name" id="">
                                             </div>
                                            
                                             <div class="mb-4">
                                            
                                                <input type="password" class="form-control " id="Password" placeholder="كلمة المرور *"  v-model="form.password">
                                             </div>
                                             <div class="mb-4 fs-14">
                                               <a class=" fs-14 dark-light" href="forget-password.html">نسيت كلمة المرور</a>
                                             </div>
                                             <div class="mb-4">
                                                 <button class=" btn btn-primary px-5 br-30-i " @click="register()">تسجيل دخول</button>
                                             </div>
                                            <div class="mb-4" v-if="error !=''">
                                                {{ error }}
                                            </div>
                                          
                                           </div>
                                    
                                    </div>
                                </div>
                               </div>
                        </div>
                      
                   </div>
                </div>
            </div>
            <div class="col-lg-6 h-100 ">
                <div class=" left-background-login h-100"  >
                   <div class="row mx-0 g-1 align-items-end justify-content-center h-100">
                       <div class="col-lg-10">
                        <div class="pt-4 p-lg-0 p-4">
                           <img src="img/login.svg" width="100%" alt="">
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
import Cors from 'cors';

export default {
  data() {
    return {
      userAfter:'',
      error:'',
      form:{
        
        name:'',
        email:'',
        password:'',
       
      },
      
    }
  },
  computed: {

  },
   
  methods: {
    async register() {
  try {

    const response = await axios.post(
      'https://pos-sa.cloud/api/auth/register',
      {
        email: this.form.email,
        name: this.form.name,
        password: this.form.password,
      }
    );

    // استخراج البيانات
    const userId = response.data.userId;
    const expiresAt = response.data.expiresAt;

    // حفظ في localStorage
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiresAt', expiresAt);

    // أو تخزين ككائن واحد
    localStorage.setItem('user', JSON.stringify(response.data));

    console.log('Saved userId:', userId);

    this.$router.push('/dashboard');

  } catch (error) {
    console.error(error);
  }
}
,






  },
  async mounted() {
   


    const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userAfter = JSON.parse(userdata);
    }
    


  }

}

  
</script>

<style  scoped>
.active.border-success{
  background-color: #e8fcea;
}

</style>