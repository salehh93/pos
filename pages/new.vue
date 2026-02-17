<template>
    <div class="new">
      <Head>
        <Title>صالح باي - طلب خدمة جديدة</Title>

     </Head>
        <TheHeader />
        <div class=" sub-header text-center shadow-sm position-relative">
            <h2 class="head-section text-center py-0">
                <span>طلب خدمة جديدة</span>
            </h2>
        </div>


       <section class=" py-3">
        <div class=" container py-lg-3 content-size">
          <div class=" " :class="modalShow == true ? 'modal-backdrop fade show':'' " ></div>

      <!-- modal -->
      <div class="modal fade " :class="modalShow == true ? 'show d-block':'' "  role="dialog" tabindex="-1" id="otpModalToggle2" aria-hidden="true" aria-labelledby="otpModalToggleLabel2" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="otpModalToggleLabel2">التحقق من رقمك</h1>
              <button type="button" @click="modalShow = false" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-3">
              <div class="img-whats mb-3">
                <img :src="typeMobile == 'whatsapp' ? '/img/whatsapp.png':'/img/sms.png'" class="br-5" width="100%" style="width:100% ;" alt="">
              </div>

             <div class="mt-3 -bottom-1">تم إرسال رمز التحقق إلى <span v-if="typeMobile == 'whatsapp'">رقم واتساب</span><span v-if="typeMobile == 'sms'">رقم الجوال</span> الخاص بك: <span class=" text-bold " dir="ltr">{{ form.whatsapp }}</span> </div>
             <div class="mb-3 mt-2 text-bold">{{ timedown }} <span v-if="Itactive == true"  @click="getCode()" class="fs-14 click text-success mx-1 d-inline-block">طلب كود جديد</span></div>
              <input type="number" v-if="showBox == false" v-model="otpTest"  class="form-control bg-light text-start  border border-success fs-14" id="" placeholder="ادخل الكود هنا">
            </div>
            <div class="modal-footer" >
              <button v-if="showBox == false" class="btn btn-success d-block w-100" data-bs-target="#otpModalToggle" @click="login()" data-bs-toggle="modal">
                <span v-if="loading== false">تحقق</span>
                <div v-if="loading== true" class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>

              </button>
              <div  v-if="showBox == false" class="mt-2  text-center d-flex w-100 align-items-center justify-content-center " >
                <span @click="showBox = true" class=" click d-inline fs-14" >طلب التحقق بطريقة أخرى</span>
              </div>

              <div class="w-100 bg-light p-3 border-1 border br-5" v-if="showBox == true">
                <div class="form-check">
                  <input class="form-check-input" type="radio"  v-model="typeMobile" value="whatsapp" name="flexRadioDefault" id="flexRadioDefault1" checked>
                  <label class="form-check-label" for="flexRadioDefault1">
                    إرسال الكود عبر الواتس اب
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" v-model="typeMobile" value="sms" name="flexRadioDefault" id="flexRadioDefault2" >
                  <label class="form-check-label" for="flexRadioDefault2">
                   إرسال الكود عبر رسائل الSMS
                  </label>
                </div>
                <button type="button"  @click="getCode()"  class=" btn btn-success w-100 d-block mt-3" >إرسال الكود</button>
              </div>

              <!-- <div class="mt-2  text-center d-flex w-100 align-items-center justify-content-center " >
                <span @click="typeMobile = (typeMobile === 'sms' ? 'whatsapp' : 'sms')" class=" click d-inline fs-14">استلم رمز التفعيل عبر <b class="text-info " v-if="typeMobile == 'sms'">SMS</b><b style="color:#55cd6c" class=" " v-if="typeMobile == 'whatsapp'">الواتساب</b></span>
              </div> -->
            </div>
          </div>
        </div>
      </div>


      <!-- modal -->
            <div class="row justify-content-center align-items-center">
             
                <div class="col-lg-6">
                    <div class="steps step-1  form">
                        <div class="card  p-4   shadow ">
                            <div class="mb-3 row g-4">
                              <div class="col-12 text-center" v-if="userAfter!=''">
                                مرحباً بك  <span class=" text-bold">{{ userAfter.name }} </span>
                              </div>
                                <div class="col-12"> 
                                   <div class="">
                                    <label class="mb-2" for="">نوع الخدمة <span class="text-danger fs-18">*</span></label>
                                    <select v-model="form.service_id" name=""  class="fs-14 form-select" id="serviceType">
                                        <option v-for="(serv , i) in services" :key="serv" :index="i" :value="serv.id" >{{serv.name}}</option>
                                        <!-- <option  value="mediation" >وساطة مالية</option> -->
                                        <!-- <option value="vodafone" >شراء أو بيع فودافون كاش</option>
                                        <option value="usdt" >شراء أو بيع USDT</option>
                                        <option value="transfer" >طلب حوالة خارجية</option>
                                        
                                        <option value="hosting" >حجز دومين وإستضافة</option>
                                        <option value="website" >تصميم وبرمجة موقع ويب</option>
                                        <option value="social" >إدارة صفحات السوشيل ميديا</option>
                                        <option value="other" >أخرى</option> -->
                                    </select>

                                </div>
                                  </div>
                                  <div class="col-lg-6" v-if="userAfter ==''"> 
                                    <div class="form-input">
                                        <label class="pb-2" for="">الإسم كاملاً <span class="text-danger fs-18">*</span></label>
                                        <div class="input-group" >
                                          <input type="text" v-model="form.name"   class="form-control text-start  fs-14" id="inputname" placeholder="ادخل إسمك كاملاً">
                                         
                                        </div>
                                       
                                      </div>
                                </div>
                                 
                                <div class="col-lg-6" v-if="userAfter ==''"> 
                                    <div class="form-input">
                                        <label class="pb-2" for="">رقم الواتساب <span class="text-danger fs-18">*</span></label>
                                        <div class="input-group" >
                                            <input 
                                            id="inputWhatsapp"
                                            type="text"  
                                            class="form-control text-end fs-14" dir="ltr" 
                                            :class="isActive == true ? 'border-success active':'border-warning'"
                                            v-model="form.whatsapp" 
                                            @input="checkWhatsAppNumber" 
                                            placeholder="مثال: 599999999">
                                          
                                            

                                          <label class="input-group-text bg-light px-2" :class="isActive == true ? 'border-success':''" for="inputGroupSelect01">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class=""><g><path d="m0 512 35.31-128C12.359 344.276 0 300.138 0 254.234 0 114.759 114.759 0 255.117 0S512 114.759 512 254.234 395.476 512 255.117 512c-44.138 0-86.51-14.124-124.469-35.31L0 512z" style="" fill="#ededed" data-original="#ededed"></path><path d="m137.71 430.786 7.945 4.414c32.662 20.303 70.621 32.662 110.345 32.662 115.641 0 211.862-96.221 211.862-213.628S371.641 44.138 255.117 44.138 44.138 137.71 44.138 254.234c0 40.607 11.476 80.331 32.662 113.876l5.297 7.945-20.303 74.152 75.916-19.421z" style="" fill="#55cd6c" data-original="#55cd6c"></path><path d="m187.145 135.945-16.772-.883c-5.297 0-10.593 1.766-14.124 5.297-7.945 7.062-21.186 20.303-24.717 37.959-6.179 26.483 3.531 58.262 26.483 90.041s67.09 82.979 144.772 105.048c24.717 7.062 44.138 2.648 60.028-7.062 12.359-7.945 20.303-20.303 22.952-33.545l2.648-12.359c.883-3.531-.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-.883-10.593 2.648l-22.069 28.248c-1.766 1.766-4.414 2.648-7.062 1.766-15.007-5.297-65.324-26.483-92.69-79.448-.883-2.648-.883-5.297.883-7.062l21.186-23.834c1.766-2.648 2.648-6.179 1.766-8.828l-25.6-57.379c-.884-2.649-3.532-5.297-7.063-5.297" style="" fill="#fefefe" data-original="#fefefe" class=""></path></g></svg>
                                          </label>
                                        </div>
                                        <small  class="fs-12" >رقمك كاملاً مثال: <span class="text-success" dir="ltr">+970598258269</span></small>
                                      </div>
                                </div>

                                <div class="col-lg-6"  > 
                                    <div class="">
                                     <label class="mb-2" for="">المدة المطلوبة <span class="text-danger fs-18">*</span></label>
                                     <select name="" v-model="form.time"  class="fs-14 form-select" id="inputTime">
                                         <option value="now" >فوراً</option>
                                         <option value="days" >خلال اليوم</option>
                                         <option value="weeks" >خلال ايام</option>
                                         <option value="months" >أكثر من شهر</option>
                                     </select>
 
                                 </div>
                                   </div>

                                <div class="col-lg-6"> 
                                    <div class="form-input">
                                        <label class="pb-2" for="">قيمة المبلغ <span class="text-danger fs-18">*</span></label>
                                        <div class="input-group" >
                                          <input type="number" v-model="form.price"  class="form-control text-start  fs-14" id="inputPrice" placeholder="مثال: 2500">
                                          <select name="" v-model="form.caransy" class="fs-14 form-select" style="max-width:90px" id="iinputcaransy">
                                            <option value="usd" >دولار</option>
                                            <option value="egp" >جنية</option>
                                            <option value="ils" >شيكل</option>
                                            <option value="USDT" >USDT</option>
                                         
                                        </select>
                                        </div>
                                       
                                      </div>
                                </div>
                              
                           
                                <div class="col-12"> 
                                    <label class="pb-2" for="">تفاصيل الطلب <span class="text-danger fs-18">*</span></label>
                                    <textarea class="form-control" v-model="form.dt" id="inputDt"  placeholder="اذا كان لديك تفاصيل اخرى ارجو كتابتها" rows="5"></textarea>
                                </div>
                                <div class="col-12 d-none"> 
                                    <label class="pb-2" for="">ملفات مرفقة</label>
                                    <input type="file"  class="form-control  fs-14" id="" placeholder="" multiple>
                                </div>
     

                              </div>
                              <div class="">
                               <button class=" btn btn-success d-block w-100" v-if="userAfter==''" @click="signup()">
                                <span v-if="loading== false">إرسال</span>
                                <div v-if="loading== true" class="spinner-border text-light" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>
                               </button>
                               <button class=" btn btn-success d-block w-100" v-if="userAfter!=''" @click="completAddOrder()">
                                <span v-if="loading== false">ابدا طلبك</span>
                                <div v-if="loading== true" class="spinner-border text-light" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>

                                </button>

                               <div v-if="message !=''" class=" mt-3 px-1 fs-14 text-center alert alert-danger py-2">
                                {{message}}
                              </div>
                              <!-- <div v-if="show == 'show'" class=" mt-3 px-1 text-center alert alert-success py-2">
                                {{success}}
                              </div> -->
                              </div>
                        </div>
                       
                    </div>
                    <div class="steps step-2 d-none form">
                      <div class="card  p-4   shadow ">
                          <div class="title-success">تم إرسال كود على رقم الواتس اب الخاص بك</div>
                          <div></div>
                       </div>
                       </div> 
                </div>
               
            </div>
        </div>


       </section>




  
        
               
                <TheFooter />
    </div>
</template>


<script>
import axios from 'axios';
import Cors from 'cors';

export default {
  data() {
    return {
      showBox : false ,
      typeMobile : 'whatsapp',
      Itactive: false, // Initial value
      timeRemaining: 0, // Time remaining in milliseconds
      duration: 1.5 * 60 * 1000, // Countdown duration (5 minutes in milliseconds)

      loading: false,

      laoadingPage: false,
      form:{
        type:'',
        name:'',
        whatsapp:'+',
        time:'now',
        price:'',
        caransy:'usd',
        dt:'',
        service_id:1
      //  files:'',
      },
      success:'',
      errorlist:'',
      errorMessage:'',
      show:'',
      
      isActive: false, // New data property for class toggle
      message:'',
      error:'',
      user:'',
      userBefore: '' , 
      otp: '',
      otpTest: '',
      modalShow: false ,
      userId: '',
      userAfter: '',
      services:'',
      loading: false
    }
  },
  computed: {
    // Compute the remaining time as a formatted string
    timedown() {
      const minutes = Math.floor(this.timeRemaining / 60000);
      const seconds = Math.floor((this.timeRemaining % 60000) / 1000);
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    },
  },
  methods: {
    async signup() {
      this.loading = true ;
  // Check if userAfter is not empty and set isActive accordingly
  if (this.userAfter && this.userAfter !== '') {
    this.isActive = true;
  }

  // Proceed only if isActive is true
  if (this.isActive && this.form.name !=''  && this.form.price !=''  && this.form.dt !=''  && this.form.service_id !=''  ) {
    const orderData = {
      name: this.form.name,
      whatsapp: this.form.whatsapp,
      time: this.form.time,
      caransy: this.form.caransy
    };

    // Save specified fields to localStorage
    localStorage.setItem('orderData', JSON.stringify(orderData));
    console.log("Order data saved to localStorage!");
    this.message = '';

    try {
      let response;

      // Conditional API call based on the presence of userAfter
      if (!this.userAfter || this.userAfter === '') {
        response = await axios.post('https://dash.saleh.ps/api/v1/user', {
          name: this.form.name,
          mobile: this.form.whatsapp
        });
      } else {
        response = await axios.post('https://dash.saleh.ps/api/v1/user', {
          name: this.userAfter.name,
          mobile: this.userAfter.mobile
        });
      }

      // Store user data from response
      if (response && response.data) {
        this.userBefore = response.data;
        this.userId = response.data.data.id;

        // Handle successful response
        if (response.data.status === true) {
          this.loading = false ;
          console.log('Signup successful:', response.data.message);
          this.getCode(); // Call getCode method for OTP or other actions
        }
      }
    } catch (error) {
      this.loading = false ;
      // Handle any errors
      this.error = error;
      console.error('An error occurred:', error);
    }
  } else {

    if(this.form.service_id =='' ){
      this.message = "تأكد من إختيار نوع الخدمة";
      const serviceType = document.getElementById('serviceType');
      if (serviceType) {
        serviceType.focus();
      }
    }
    if(this.form.name =='' ){
      this.message = "من إدخال إسمك";
      const inputname = document.getElementById('inputname');
      if (inputname) {
        inputname.focus();
      }
    
    }
    if(this.form.dt =='' ){
      this.message = "تفاصيل إضافية للخدمة";
      const serviceType = document.getElementById('inputDt');
      if (serviceType) {
        serviceType.focus();
      }
    }
    if(this.form.price =='' ){
      this.message = "تأكد من إختيار نوع الخدمة";
      const inputPrice = document.getElementById('inputPrice');
      if (inputPrice) {
        inputPrice.focus();
      }
    }
    if(this.isActive == false){
      this.message = "يرجى مراجعة رقم الواتس اب الخاص بك";
      const inputWhatsapp = document.getElementById('inputWhatsapp');
    if (inputWhatsapp) {
      inputWhatsapp.focus();
    }
    }
    else{
      this.message = "هناك خطأ ما في المدخلات";
    }
    this.loading = false;
    

  }
}
,
async getCode(){
   

   // Start the timer
 
     this.loading = true ;
     this.showBox = false ;
      
  try {
   
      const response = await axios.post('https://dash.saleh.ps/api/v1/otp/send', {
      mobile: this.form.whatsapp,
      by: this.typeMobile
    });

    this.modalShow = true ;
    console.log('get code', response.data.data.otp);

    if (response.data.status === true) {
     // Set the duration based on the type of mobile
   if (this.typeMobile === 'whatsapp') {
     this.duration = 1.5 * 60 * 1000; // 1.5 minutes
   } else if (this.typeMobile === 'sms') {
     this.duration = 5 * 60 * 1000; // 5 minutes
   }
   this.startCountdown();
     this.loading = false;
      console.log(response.data.message);
    }
  } catch (error) {
     this.error = error;
     const inputname = document.getElementById('inputWhatsapp');
     if (inputname) {
       inputname.focus();
     }
   this.loading = false;
    this.error = error;
    console.error('An error occurred:', error);
  }


},
// for time down
startCountdown() {
      this.timeRemaining = this.duration; // Initialize with the duration
      const interval = setInterval(() => {
        this.timeRemaining -= 1000; // Decrement by 1 second
        if (this.timeRemaining <= 0) {
          clearInterval(interval); // Stop the timer
          this.timeRemaining = 0; // Ensure no negative time
          this.Itactive = true; // Mark as finished
        }
      }, 1000);
    },

    async login(){

try {
  const response = await axios.post('https://dash.saleh.ps/api/v1/otp/login', {
    mobile: this.form.whatsapp , 
    otp: this.otpTest
  });


  this.modalShow = false ;
  console.log('success login', response.data.data);
  this.otp = response.data.data.otp;

  if (response.data.status === true) {
    
  localStorage.setItem('user', JSON.stringify(response.data.data));
  console.log("user data saved to localStorage!");
    console.log(response.data.message);
      // Save only the specified fields to localStorage
     

// add order
this.completAddOrder() ; 

  }
} catch (error) {
  // Handle any errors
  this.error = error;
  console.error('An error occurred:', error);
}
},
async completAddOrder(){
  this.loading = true;
  const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userAfter = JSON.parse(userdata);
    }
    console.log('token: '+ `Bearer ` + this.userAfter.token) ;
      try {
  const response = await axios.post('https://dash.saleh.ps/api/v1/order', {
    details: this.form.dt , 
    service_id: this.form.service_id , 
    amount: this.form.price , 
    currency: this.form.caransy , 
    period: this.form.time , 
    
  },
  {
    headers: {
            Authorization: `Bearer ` + this.userAfter.token
          }
  }


);
  if (response.data.status === true) {
    localStorage.setItem('AllorderData', JSON.stringify(response.data.data));
    console.log("All Order data saved to localStorage!");
    this.$router.push(`/dt/`+response.data.data.order_no);
    console.log("order added");
    this.loading = false;
  }
} catch (error) {
  // Handle any errors
  this.error = error;
  console.error('An error occurred:', error);
  

  // Default error message if no specific condition is met
  this.message = "هناك خطأ ما في المدخلات";
  this.loading = false;
}




    },
    sendToContact() {
      // Your existing sendToContact logic...
    },
    checkWhatsAppNumber() {
        // Ensure the input is a string
        let whatsnumber = String(this.form.whatsapp || '');

        // Make sure it starts with '+'
        if (!whatsnumber.startsWith('+')) {
            whatsnumber = '+' + whatsnumber.replace(/\D/g, '');
        } else {
            // Keep only digits after the "+"
            whatsnumber = '+' + whatsnumber.slice(1).replace(/\D/g, '');
        }

        // Limit to 10 characters (1 "+" and 9 digits)
        whatsnumber = whatsnumber.slice(0, 13);

        // Update the model value
        this.form.whatsapp = whatsnumber;

        // Set isActive to true if exactly 10 characters (+ followed by 9 digits)
        this.isActive = whatsnumber.length === 13;
    },
  },
  async mounted() {
    this.startCountdown(); // Start the countdown
    const userdata = localStorage.getItem('user');
    if (userdata) {
        try {
          console.error('have user in local');
            this.userAfter = JSON.parse(userdata);
        


            
        } catch (error) {
            console.error('Failed to parse user data:', error);
        }
    }
    setTimeout(() => {
      if (this.form.whatsapp !='+') {
        this.isActive = true;
      }
              
      }, 1000);
try {
  const response = await axios.get('https://dash.saleh.ps/api/v1/services');

  if (response.data.status === true) {
    console.log('get services its good');
    this.services = response.data.data;
  }
} catch (error) {
  // Handle any errors
  this.error = error;
  console.error('An error occurred:', error);
}



    
    const savedData = localStorage.getItem('orderData');
    if (savedData) {
      this.form = JSON.parse(savedData);

    }
    setTimeout(() => {
      this.form.service_id = this.$route.query.value || '';
      }, 1000);


    

  
    
   
  }

}

  
</script>

<style  scoped>
.active.border-success{
  background-color: #e8fcea;
}

</style>