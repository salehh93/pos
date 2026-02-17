<template>
    <div class="Contact">
      <Head>
        <Title>صالح باي - تواصل معنا</Title>

     </Head>
        <TheHeader />
        <div class=" sub-header text-center shadow-sm position-relative">
            <h2 class="head-section text-center py-0">
                <span>تواصل معنا</span>
            </h2>
        </div>


       <section class=" py-5">
        <div class=" container py-lg-5">
            <div class="row justify-content-center align-items-center">
             
                <div class="col-lg-5">
                    <div class="form">
                        <div class="card  p-5   shadow ">
                            <div class="mb-3 row g-3">
                              
                                <div class="col-12"> 
                                  <input type="text" class="form-control" v-model="form.username"  placeholder="الإسم *" />
                                </div>
                                <div class="col">
                                   <input type="email" class="form-control  text-start" v-model="form.useremail"  placeholder="البريد الإلكتروني" />
                                  </div>
                                  <div class="col">
                                    <div class="input-group" >
                                      <input 
                                      id="inputWhatsapp"
                                      type="text"  
                                      class="form-control text-start fs-14" dir="ltr" 
                                      :class="isActive == true ? 'border-success active':'border-warning'"
                                      v-model="form.mobile" 
                                      @input="checkWhatsAppNumber" 
                                      placeholder="مثال: 599999999">
                                    
                                      

                                    <label class="input-group-text bg-light px-2" :class="isActive == true ? 'border-success':''" for="inputGroupSelect01">
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class=""><g><path d="m0 512 35.31-128C12.359 344.276 0 300.138 0 254.234 0 114.759 114.759 0 255.117 0S512 114.759 512 254.234 395.476 512 255.117 512c-44.138 0-86.51-14.124-124.469-35.31L0 512z" style="" fill="#ededed" data-original="#ededed"></path><path d="m137.71 430.786 7.945 4.414c32.662 20.303 70.621 32.662 110.345 32.662 115.641 0 211.862-96.221 211.862-213.628S371.641 44.138 255.117 44.138 44.138 137.71 44.138 254.234c0 40.607 11.476 80.331 32.662 113.876l5.297 7.945-20.303 74.152 75.916-19.421z" style="" fill="#55cd6c" data-original="#55cd6c"></path><path d="m187.145 135.945-16.772-.883c-5.297 0-10.593 1.766-14.124 5.297-7.945 7.062-21.186 20.303-24.717 37.959-6.179 26.483 3.531 58.262 26.483 90.041s67.09 82.979 144.772 105.048c24.717 7.062 44.138 2.648 60.028-7.062 12.359-7.945 20.303-20.303 22.952-33.545l2.648-12.359c.883-3.531-.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-.883-10.593 2.648l-22.069 28.248c-1.766 1.766-4.414 2.648-7.062 1.766-15.007-5.297-65.324-26.483-92.69-79.448-.883-2.648-.883-5.297.883-7.062l21.186-23.834c1.766-2.648 2.648-6.179 1.766-8.828l-25.6-57.379c-.884-2.649-3.532-5.297-7.063-5.297" style="" fill="#fefefe" data-original="#fefefe" class=""></path></g></svg>
                                    </label>
                                  </div>
                                  
                                    
                                   </div>
                                <div class="col-12"> 
                                    <textarea class="form-control" v-model="form.messagebody" placeholder="الرسالة *" rows="5"></textarea>
                                </div>
                              </div>
                              <div class="">
                               <button @click="sendToContact()" class=" btn btn-success d-block w-100" >إرسال</button>
                               <div v-if="errorMessage" class=" mt-3 px-1 text-center alert alert-danger py-2">
                                {{errorMessage}}
                              </div>
                              <div v-if="show == 'show'" class=" mt-3 px-1 text-center alert alert-success py-2">
                                {{success}}
                              </div>
                              </div>
                        </div>
                       
                    </div>
                  
                </div>
                <div class="col-lg-4">
                  <ul class="contact-us-list">
                    <li class=" d-flex gap-2 mb-2">
                      
                     <div>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47">
                        <defs>
                          <filter id="Ellipse_47" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood flood-color="#c3c3c3" flood-opacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                          </filter>
                        </defs>
                        <g id="Group_173" data-name="Group 173" transform="translate(9 6)">
                          <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_47)">
                            <g id="Ellipse_47-2" data-name="Ellipse 47" transform="translate(9 6)" stroke="#fff" stroke-width="2">
                              <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
                              <circle cx="14.5" cy="14.5" r="13.5" fill="none"/>
                            </g>
                          </g>
                          <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M5.108,14.874C.8,8.629,0,7.988,0,5.693a5.693,5.693,0,0,1,11.385,0c0,2.3-.8,2.936-5.108,9.182a.712.712,0,0,1-1.17,0Zm.585-6.81A2.372,2.372,0,1,0,3.321,5.693,2.372,2.372,0,0,0,5.693,8.065Z" transform="translate(8.807 6.91)" fill="#02f412"/>
                        </g>
                      </svg>
                      
                     </div>

                          <div class="pt-2">
                            فلسطين , غزة
                          </div>
                    </li>
                    <li class=" d-flex gap-2  mb-2">
                      
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47">
                          <defs>
                            <filter id="Ellipse_47" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse">
                              <feOffset dy="3" input="SourceAlpha"/>
                              <feGaussianBlur stdDeviation="3" result="blur"/>
                              <feFlood flood-color="#c3c3c3" flood-opacity="0.161"/>
                              <feComposite operator="in" in2="blur"/>
                              <feComposite in="SourceGraphic"/>
                            </filter>
                          </defs>
                          <g id="Group_173" data-name="Group 173" transform="translate(9 6.151)">
                            <g transform="matrix(1, 0, 0, 1, -9, -6.15)" filter="url(#Ellipse_47)">
                              <g id="Ellipse_47-2" data-name="Ellipse 47" transform="translate(9 6)" stroke="#fff" stroke-width="2">
                                <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
                                <circle cx="14.5" cy="14.5" r="13.5" fill="none"/>
                              </g>
                            </g>
                            <path id="Icon_awesome-phone" data-name="Icon awesome-phone" d="M12.767.636,10.076.015a.625.625,0,0,0-.712.36l-1.242,2.9A.619.619,0,0,0,8.3,4L9.869,5.281A9.59,9.59,0,0,1,5.284,9.866L4,8.3a.62.62,0,0,0-.725-.179L.377,9.362a.628.628,0,0,0-.362.714l.621,2.691a.621.621,0,0,0,.606.481A12.006,12.006,0,0,0,13.249,1.242.62.62,0,0,0,12.767.636Z" transform="translate(8 8.001)" fill="#02f412"/>
                          </g>
                        </svg>
                        
                      </div>

                           <div class="pt-2">
                            <span>00970598258269 </span>  <br><span >00970567161582 </span>
                           </div>
                     </li>

                     <li class=" d-flex gap-2  mb-2">
                      
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47">
                          <defs>
                            <filter id="Ellipse_47" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse">
                              <feOffset dy="3" input="SourceAlpha"/>
                              <feGaussianBlur stdDeviation="3" result="blur"/>
                              <feFlood flood-color="#c3c3c3" flood-opacity="0.161"/>
                              <feComposite operator="in" in2="blur"/>
                              <feComposite in="SourceGraphic"/>
                            </filter>
                          </defs>
                          <g id="Group_173" data-name="Group 173" transform="translate(9 6.187)">
                            <g transform="matrix(1, 0, 0, 1, -9, -6.19)" filter="url(#Ellipse_47)">
                              <g id="Ellipse_47-2" data-name="Ellipse 47" transform="translate(9 6)" fill="rgba(0,0,0,0.88)" stroke="#fff" stroke-width="2">
                                <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
                                <circle cx="14.5" cy="14.5" r="13.5" fill="none"/>
                              </g>
                            </g>
                            <path id="Icon_simple-email" data-name="Icon simple-email" d="M13.7,6.125a6.845,6.845,0,0,1-.221,1.485,4.3,4.3,0,0,1-.577,1.3,3.046,3.046,0,0,1-.979.926,2.762,2.762,0,0,1-1.429.352A2.072,2.072,0,0,1,9.458,9.94a1.77,1.77,0,0,1-.7-.716,2.213,2.213,0,0,1-1.873.94,1.9,1.9,0,0,1-1.635-.879,2.878,2.878,0,0,1-.406-1.018,4.392,4.392,0,0,1-.053-1.329,6.172,6.172,0,0,1,.4-1.627,4.423,4.423,0,0,1,.748-1.246A3.165,3.165,0,0,1,6.974,3.27a2.869,2.869,0,0,1,1.251-.278,3.889,3.889,0,0,1,.748.064,3.062,3.062,0,0,1,.581.174,3.139,3.139,0,0,1,.481.254c.147.095.294.192.441.292l-.363,4.18a1.389,1.389,0,0,0,.011.489.685.685,0,0,0,.149.3.537.537,0,0,0,.242.158.9.9,0,0,0,.851-.168,1.813,1.813,0,0,0,.456-.581,3.739,3.739,0,0,0,.307-.872A5.986,5.986,0,0,0,12.263,6.2a6.943,6.943,0,0,0-.171-2.03A4.036,4.036,0,0,0,11.341,2.6,3.489,3.489,0,0,0,9.994,1.585a4.888,4.888,0,0,0-1.962-.359,4.333,4.333,0,0,0-1.941.423A4.453,4.453,0,0,0,4.616,2.821a5.628,5.628,0,0,0-.965,1.764,7.949,7.949,0,0,0-.406,2.2,7.308,7.308,0,0,0,.207,2.243,4.05,4.05,0,0,0,.819,1.607A3.419,3.419,0,0,0,5.66,11.6a5.325,5.325,0,0,0,1.916.32,6.562,6.562,0,0,0,1.257-.135c.207-.041.4-.091.591-.146a4.45,4.45,0,0,0,.509-.182l.263,1.183a2.918,2.918,0,0,1-.57.282,5.485,5.485,0,0,1-.673.195,6.571,6.571,0,0,1-1.407.158,7.376,7.376,0,0,1-2.564-.413A4.72,4.72,0,0,1,3.113,11.63,5.162,5.162,0,0,1,1.991,9.6a8.656,8.656,0,0,1-.313-2.817,8.592,8.592,0,0,1,.539-2.7,6.691,6.691,0,0,1,1.3-2.148A5.918,5.918,0,0,1,5.5.514,6.2,6.2,0,0,1,8.062,0a6.476,6.476,0,0,1,2.486.445A4.836,4.836,0,0,1,12.343,1.7a5.139,5.139,0,0,1,1.065,1.935A7.4,7.4,0,0,1,13.7,6.125Zm-7.122.813a2.821,2.821,0,0,0,.146,1.4.75.75,0,0,0,.722.473.8.8,0,0,0,.247-.046.881.881,0,0,0,.284-.171,1.518,1.518,0,0,0,.289-.348,2.673,2.673,0,0,0,.265-.589l.284-3.248a1.7,1.7,0,0,0-.441-.058,1.525,1.525,0,0,0-.734.168,1.453,1.453,0,0,0-.52.494,2.9,2.9,0,0,0-.345.813,6.894,6.894,0,0,0-.2,1.111Z" transform="translate(6.33 8)" fill="#02f412"/>
                          </g>
                        </svg>
                        
                      </div>

                           <div class="pt-2">
                            <span>salehhab93@gmail.com </span>  <br><span >info@saleh.ps </span>
                           </div>
                     </li>
               
                </ul>
                </div>
            </div>
        </div>


       </section>




  
        
               
                <TheFooter />
    </div>
</template>


<script>
import axios from 'axios';

  export default {
    
    data() {
      return {
        isActive: false,
        title: '',
        token:'',
        form:{
          username:'',
          useremail:'',
          messagebody:'',
          mobile:'',
        
       },
       success:'',
       errorlist:'',
          errorMessage:'',
          show:''
      }
    },
    methods:{
      checkWhatsAppNumber() {
        // Ensure the input is a string
        let whatsnumber = String(this.form.mobile || '');

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
        this.form.mobile = whatsnumber;

        // Set isActive to true if exactly 10 characters (+ followed by 9 digits)
        this.isActive = whatsnumber.length === 13;
    },
sendToContact(){
  if(this.isActive == true){
    axios.post(`https://dash.saleh.ps/api/v1/contact-us`, {
           name: this.form.username,
          mobile: this.form.mobile,
          subject: 'رساله من صفحة تواصل معنا',
          message: this.form.messagebody,
          email: this.form.useremail,
        }  )
  .then(res => {
  
   console.log('message: '+res);
   this.errortext = res;
   this.errorlist = [];
   this.form = '';
  this.errorMessage = ''
  this.success = 'شكراً لتواصلك... تم إرسال رسالتك بنجاح';
  this.show = 'show'
}).catch((error)=> {
                if (error.response.status == 500) {
          this.errorMessage = error.response.data.msg
          this.success = ''
          this.show = 'hide'
 || {};
        }
        if (error.response.status == 'fail') {
          this.errorMessage = error.response.data.msg
          this.success = ''
          this.show = 'hide'
 || {};
        }

                });
  }
  else{
    this.errorMessage = 'تأكد من إدخال رقم الواتساب بشكل صحيح'
  }
  
  


}
},
    head() {
      return {
        title: 'تواصل معنا',
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