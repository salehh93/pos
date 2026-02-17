<template>
    <div class="cal" id="cal">
      <Head>
        <Title>صالح باي - الحاسبة</Title>
        <Meta name="keywords" content="صالح باي, الحاسبة, تطبيق الحاسبة, آلة حاسبة, صالح باي الحاسبة, usdt, بنكي  , فودافون كاش" />


     </Head>
        <TheHeader />
        <div class=" sub-header text-center shadow-sm position-relative">
            <h2 class="head-section text-center py-0">
                <span>الحاسبة</span>
            </h2>
        </div>
      <section class="  py-5">
        <div class=" container">
            <div class="row g-4 justify-content-center  align-items-center pb-5">
                <div class="col-md-6">
                   <div class="row">
                <div class="col">
                        <div class="card card-check " :class="typeCheck == 'cash' ? 'active':''">
                            <div class="icon" v-if="typeCheck == 'cash'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                    </g>
                                  </svg>
                                  
                            </div>
                            <div class="icon" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                      <g id="Group_250" data-name="Group 250" transform="translate(-0.499)">
                                        <circle id="Ellipse_29-2" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.321 -0.321)" fill="#fff"/>
                                        <path id="Icon_awesome-check-2" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.439 2.339)" fill="#dfdfdf"/>
                                      </g>
                                    </g>
                                  </svg>
                                  
                                  
                            </div>
                            <input type="radio" value="cash" id="cash"  name="checktype" v-model="typeCheck">
                            <label class="label-type" for="cash"></label>
                            <div class="name-check">الكاش/ بنكي</div>
                        </div>
                    </div>    
                    <div class="col">
                        <div class="card card-check " :class="typeCheck == 'usdt' ? 'active':''">
                            <div class="icon" v-if="typeCheck == 'usdt'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                    </g>
                                  </svg>
                                  
                            </div>
                            <div class="icon" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                      <g id="Group_250" data-name="Group 250" transform="translate(-0.499)">
                                        <circle id="Ellipse_29-2" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.321 -0.321)" fill="#fff"/>
                                        <path id="Icon_awesome-check-2" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.439 2.339)" fill="#dfdfdf"/>
                                      </g>
                                    </g>
                                  </svg>
                                  
                                  
                            </div>
                            <input type="radio" value="usdt" id="usdt"  name="checktype" v-model="typeCheck">
                            <label class="label-type" for="usdt"></label>
                            <div class="name-check">USTD / دولار</div>
                        </div>
                    </div>  
                    <div class="col">
                        <div class="card card-check " :class="typeCheck == 'vodafone' ? 'active':''">
                            <div class="icon" v-if="typeCheck == 'vodafone'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                    </g>
                                  </svg>
                                  
                            </div>
                            <div class="icon" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <g id="Group_194" data-name="Group 194" transform="translate(0.82 0.321)">
                                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.82 -0.321)" fill="#3cb94d"/>
                                      <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.556 2.339)" fill="#fff"/>
                                      <g id="Group_250" data-name="Group 250" transform="translate(-0.499)">
                                        <circle id="Ellipse_29-2" data-name="Ellipse 29" cx="14.5" cy="14.5" r="14.5" transform="translate(-0.321 -0.321)" fill="#fff"/>
                                        <path id="Icon_awesome-check-2" data-name="Icon awesome-check" d="M6.616,18.818.285,12.487a.974.974,0,0,1,0-1.377L1.663,9.732a.974.974,0,0,1,1.377,0L7.3,14l9.134-9.134a.974.974,0,0,1,1.377,0L19.194,6.24a.974.974,0,0,1,0,1.377l-11.2,11.2A.974.974,0,0,1,6.616,18.818Z" transform="translate(4.439 2.339)" fill="#dfdfdf"/>
                                      </g>
                                    </g>
                                  </svg>
                                  
                                  
                            </div>
                            <input type="radio" value="vodafone" id="vodafone" name="checktype" v-model="typeCheck">
                            <label class="label-type" for="vodafone"></label>
                            <div class="name-check"> جنية / دولار</div>
                        </div>
                    </div>                  
                   </div>
                    <div class="mt-3 p-3 border border-dark br-5 bg-white card-cash " v-if="typeCheck == 'cash'">
                      <div class="row g-2">
                        
                        <div class="col-lg-6 col-12">
                          <div class="form-input">
                            <label class="pb-2" for="">قيمة المبلغ </label>
                            
                            <div class="input-group">
                              <input type="number" v-model="cash.price" class="form-control text-start  fs-14" id="inputGroupSelect02" placeholder="مثال: 2500">
                              <label class="input-group-text text-dark fs-12 text-bold" for="inputGroupSelect02">شيكل</label>
                            </div>

                            <small class="fs-12">انت سوف <span v-if="cash.type == 1">تدفع</span> <span v-if="cash.type == 2">تدفع</span> {{cash.price}} شيكل</small>
                          </div>
                        </div>
                      
                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="">قيمة العمولة</label>
                          <select  v-model="cash.percent" class="form-select" id="inputGroupSelect01">
                            <option value="100" selected>0%</option>
                            <option v-for="i in 70" :key="i" :index="i" :value="100 + (i * 0.5)">{{(i * 0.5)}}%</option>

                          </select>
                          <small class="fs-12 mt-2">كل 100  = {{ cash.percent }} </small>
                        </div>
                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="">نوع العمولة</label>
                          <select v-model="cash.type" class="form-select  fs-16" id="">
                            <option value="2" selected> للطرف الاخر</option>
                            <option value="1">العمولة لي</option>
                          </select>
                         
                        </div>
                      </div>
                      <div class="mt-3 p-3 alert alert-success br-5 text-center">
                        <div class="mb-2">المبلغ الذي  سوف <span v-if="cash.type == 1">تستلمة</span> <span v-if="cash.type == 2">تستلمة</span> هو </div>
                        <div class="fs-30 text-bold">{{ cash_result }} شيكل</div>
                      </div>
                     
                    </div>
                    <div class="mt-3 p-3 border border-dark br-5 bg-white card-cash " v-if="typeCheck == 'usdt'">
                      <div class="row g-2">
                        
                        <div class="col-lg-6 col-12">
                          <div class="form-input">
                            <label class="pb-2" for="">قيمة المبلغ </label>
                            
                            <div class="input-group">
                              <input type="number" v-model="usdt.price" class="form-control text-start  fs-14" id="inputGroupSelect002" placeholder="مثال: 2500">

                              <label class="input-group-text text-dark fs-12 text-bold" for="inputGroupSelect002"><span v-if="usdt.type == 2">USDT</span> <span v-if="usdt.type == 1">دولار</span></label>
                            </div>

                            <small class="fs-12">انت سوف <span v-if="usdt.type == 1">تدفع</span> <span v-if="usdt.type == 2">تستلم</span> {{usdt.price}} </small>
                          </div>
                        </div>
                      
                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="inputGroupSelect101">قيمة العمولة</label>
                          <select  v-model="usdt.percent" class="form-select" id="inputGroupSelect101">
                            <option value="100" selected>0%</option>
                            <option v-for="i in 70" :key="i" :index="i" :value="100 + (i * 0.5)">{{(i * 0.5)}}%</option>

                          </select>

                          <small class="fs-12 mt-2">كل 100  = {{ usdt.percent }} </small>
                        </div>
                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="">نوع العمولة</label>
                          <select v-model="usdt.type" class="form-select  fs-16" id="">
                            <option value="2" selected> للطرف الاخر</option>
                            <option value="1">العمولة لي</option>
                          </select>
                         
                        </div>
                      </div>
                      <div class="mt-3 p-3 alert alert-success br-5 text-center">
                        <div class="mb-2">المبلغ الذي  سوف <span v-if="usdt.type == 1">تستلمة</span> <span v-if="usdt.type == 2">تدفعة</span> هو </div>
                        <div class="fs-30 text-bold">{{ usdt_result }} <span v-if="usdt.type == 1">USDT</span> <span v-if="usdt.type == 2">دولار</span></div>
                      </div>
                     
                    </div>
                    <div class="mt-3 p-3 border border-dark br-5 bg-white card-cash " v-if="typeCheck == 'vodafone'">
                      <div class="row g-2">
                        
                        <div class="col-lg-6 col-12">
                          <div class="form-input">
                            <label class="pb-2" for="">قيمة المبلغ </label>
                            
                            <div class="input-group">
                              <input type="number" v-model="vodafone.price" class="form-control text-start  fs-14" id="inputGroupSelect022" placeholder="مثال: 2500">
                              <label class="input-group-text text-dark fs-12 text-bold" for="inputGroupSelect022"><span v-if="vodafone.type == 2">جنية</span> <span v-if="vodafone.type == 1">دولار</span></label>
                            </div>

                            <small class="fs-12">انت سوف <span v-if="vodafone.type == 1">تشتري بـ</span> <span v-if="vodafone.type == 2">تبيع</span> {{vodafone.price}} <span v-if="vodafone.type == 2">جنية</span> <span v-if="vodafone.type == 1">دولار</span></small>
                          </div>
                        </div>

                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="">قيمة الجنية</label>
                          <input type="number" v-model="vodafone.eg" class="form-control text-start fs-14" id="inputGroupSelect023" placeholder="مثال: 51">

                          <small class="fs-12 mt-2">كل 100 دولار  = {{ vodafone.eg * 100 }} </small>
                        </div>
                        <div class="col-lg-3 col-6">
                          <label  class="pb-2" for="">نوع الدفع</label>
                          <select v-model="vodafone.type" class="form-select  fs-16" id="">
                            <option value="2" selected>بيع جنية</option>
                            <option value="1">شراء جنية</option>
                          </select>
                         
                        </div>
                      </div>
                      <div class="mt-3 p-3 alert alert-success br-5 text-center">
                        <div class="mb-2">المبلغ الذي  سوف <span v-if="vodafone.type == 1">تستلمة</span> <span v-if="vodafone.type == 2">تدفعة</span> هو </div>
                        <div class="fs-30 text-bold">{{ vodafone_result }} <span v-if="vodafone.type == 1">جنية</span> <span v-if="vodafone.type == 2">دولار</span></div>
                      </div>
                     
                    </div>

                    <div class="mt-3 text-center fs-10 d-none">صدقة عني وعن عائلتي</div>
                 </div>

             
              
            </div>
        
        </div>
      </section>
        <TheFooter />

   
    </div>    
</template>


<script>
  export default {
    data() {
      return {
        typeCheck: 'cash',
        cash:{
          type:1 ,
          price:null,
          percent:102,
          result:0,
        },
        usdt:{
          type:1 ,
          price:null,
          percent:102,
          result:0,
        },
        vodafone:{
          type:1 ,
          price:null,
          eg:51,
          result:0,
        }
      }
    },
    computed:{
      cash_result(){
        if(this.cash.price == null){this.cash.price = 0}
        if(this.cash.type == 1){
         
          let percent = this.cash.percent / 100 ;
          let result2 = parseFloat(this.cash.price) * percent ;
          console.log('percent : '+percent , 'price :' + this.cash.price);
          return  parseFloat(result2.toFixed(2));;
        }

        if(this.cash.type == 2){
          let result = (this.cash.price / this.cash.percent) * 100;
          console.log(result);
          return parseFloat(result.toFixed(2));
        }
     
        
      
      },
      usdt_result(){
        if(this.usdt.price == null){this.usdt.price = 0}
        if(this.usdt.type == 1){
          let percent = this.usdt.percent / 100 ;
          let result2 = parseFloat(this.usdt.price) * percent ;
          console.log('percent : '+percent , 'price :' + this.usdt.price);
          return  parseFloat(result2.toFixed(2));;
        }

        if(this.usdt.type == 2){
          let result = (this.usdt.price / this.usdt.percent) * 100;
          console.log(result);
          return parseFloat(result.toFixed(2));
        }
     
        
      
      },
      vodafone_result(){
        if(this.vodafone.price == null){this.vodafone.price = 0}
        if(this.vodafone.type == 1){ 
          let result2 = parseFloat(this.vodafone.price) * this.vodafone.eg ;
          return  parseFloat(result2.toFixed(2));
        }

        if(this.vodafone.type == 2){
          let result2 = parseFloat(this.vodafone.price) / this.vodafone.eg ;
          return  parseFloat(result2.toFixed(2));
        }
     
      }
    },
    head() {
      return {
        title: 'الحاسبة',
      }
    }
  }
  
</script>

<style scoped>


</style>