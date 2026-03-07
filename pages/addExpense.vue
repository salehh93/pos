<template>
    
    <div class="About d-flex h-100" id="about">
        <Head>
        <Title>صالح باي -  اضافة مصروف</Title>

     </Head>

     <SideBar/>
        <div class="content">
      
      
<TheHeader/>
   
        
        <section class=" py-lg-5 mt-5 px-3">
            <div class="container">
            <div class="row align-items-center justify-content-between pb-3 mt-4 mt-lg-0">
                <div class="col-auto">
                    <h1 class="title-page">إضافة مصروف جديد</h1>
                </div>
                <div class="col-auto">
                        <nuxt-link to="/products" class="btn btn-primary loading-click">
                          <div class="d-flex align-items-center">
                   
                              <span class="">عرض المصروفات</span>

                          </div>

                        </nuxt-link>
                </div>
            </div>
           
                <div class="row">
                    <div class="col-lg-9">
                        <div class="card py-4 px-4">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="    mb-3 ">
                                        <label>عنوان المصروف  *</label>
                                        <input type="text" required="" class="form-control " v-model="form.name"  >
                                    </div>
                                </div>
            
    <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label>المبلغ</label>
                                
                                        <div>
                                            <input type="number" placeholder="00.00" required="" name="" id="" class="form-control " v-model="form.value" >

                                        </div>
                                       
                                    </div>
                                </div>

                              
                            </div>
                 
                            <div class="row gy-3 mt-3 ">

                             
                        <div class="col-lg-12">
                                    <div class="    ">
                                        <label>  نوع المصروف *</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" v-model="form.type" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="fixed">
                                                <label class="form-check-label" for="inlineRadio1">ثابت</label>
                                              </div>
                                              <div class="form-check form-check-inline">
                                                <input class="form-check-input" v-model="form.type" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="variable">
                                                <label class="form-check-label" for="inlineRadio2">متغير</label>
                                              </div>
                                          
                                        </div>     
                                    </div>
                                </div>
                               <div class="col-lg-12">
                                    <div class="    ">
                                        <label>  ثابت من نوع  *</label>
                                        <div>
                                          <select name="" class=" form-select" v-model="form.period" id="">
                                            <option value="daily">يومي</option>
                                            <option value="weekly">اسبوعي</option>
                                            <option value="monthly">شهري</option>
                                            <option value="yearly">سنوي</option>
                                          </select>
                                          
                                        </div>     
                                    </div>
                                </div>

                            
                            <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>من تاريخ</label>
                                
                                        <div>
                                            <input type="date" required="" name="" id=""   class="form-control " v-model="form.startDate" >

                                        </div>
                                    
                                    </div>
                                </div>
                              <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>الى تاريخ</label>
                                
                                        <div>
                                            <input type="date" required="" name="" id=""   class="form-control " v-model="form.endDate" >

                                        </div>
                                    
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label>ملاحظات</label>
                                    
                                            <div>
                                                <textarea  class="form-control" name="address"
                                            placeholder="" rows="4"
                                            id="ServiceDescription1" 
                                            required="" v-model="form.notes"></textarea>
    
                                            </div>
                                        
                                        </div>
                            </div>
                        </div>
                      
                    </div>
                    <div class="col-lg-3">
                   

             


                 
                      
                        <button class="card d-block w-100 p-3 my-3 btn btn-success" @click="addExpense()" type="submit">اضافة</button>


                    </div>
                </div>
         
        </div>
        </div>
        </section>
</div>
   
    </div>    
</template>


<script>

import axios from 'axios';

axios.defaults.baseURL = 'https://pos-sa.cloud/api';
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
     token: localStorage.getItem('accessToken'),
    tokenType: localStorage.getItem('tokenType'),
      userAfter:'',
      allowstockCount :false ,
category: [], // Array to store API data
      form:{
        name:'',
        type:'',
        value:'',
        period:'',
        startDate:null,
        endDate:null,
        notes:'',
      },
      
    }
  },
  computed: {

  },
methods: {

async addExpense() {
  try {
const payload = {
  name: this.form.name,
  type: this.form.type,
  value: Number(this.form.value),
  period: this.form.period,
  startDate: new Date(this.form.startDate).toISOString(),
  endDate: new Date(this.form.endDate).toISOString(),
  notes: this.form.notes || "",
};

    const response = await axios.post(
      "https://pos-sa.cloud/api/expense",
      payload,
      {
        headers: {
          Authorization: `${this.tokenType} ${this.token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Success:", response.data);

  } catch (error) {
    console.error(
      "Expense Error:",
      error.response?.data || error.message
    );
  }
},








  },
  async mounted() {
    
    const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userAfter = JSON.parse(userdata);
    }
    
    await this.getcategory();
  }
}

  
</script>