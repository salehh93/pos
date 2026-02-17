<template>
    
    <div class="About d-flex h-100" id="about">
        <Head>
        <Title>صالح باي -  اضافة منتج</Title>

     </Head>

     <SideBar/>
        <div class="content">
      
      
<TheHeader/>
   
        
        <section class=" py-lg-5 mt-5 px-3">
        <div class="container">
            <div class="row align-items-center justify-content-between pb-3 mt-4 mt-lg-0">
                <div class="col-auto">
                    <h1 class="title-page">إضافة منتج جديد</h1>
                </div>
                <div class="col-auto">
                        <button class="btn btn-primary loading-click">
                          <div class="d-flex align-items-center">
                   
                              <span class="">عرض المنتجات</span>

                          </div>

                        </button>
                </div>
            </div>
           
                <div class="row">
                    <div class="col-lg-9">
                        <div class="card py-4 px-4">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="    mb-3 ">
                                        <label>عنوان المنتج  *</label>
                                        <input type="text" required="" class="form-control " v-model="form.name"  >
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="    ">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <label>الفئة التي يتبع لها *</label>
                                            <a href="#" class=" btn btn-success py-1 px-2" data-bs-toggle="modal" data-bs-target="#addtitle">اضافة فئة</a>
                                        </div>

                                        
                                        <div>
                                            <select class="selectpicker show-menu-arrow w-100 border-dark" v-model="form.categoryId">
                                                <option  selected>اختر من القائمة</option>
                                                <option value="6e5b5df4-07c1-4ced-a9d1-e3f2db102f5b">option 1 </option>
                                                <option value="6e5b5df4-07c1-4ced-a9d1-e3f2db102f5b">option 2</option>
                                              </select>
                                        </div>     
                                    </div>
                                </div>


                              
                            </div>
                 
                            <div class="row gy-3 mt-3 ">

                             
                        <div class="col-lg-12">
                                    <div class="    ">
                                        <label>يتم البيع بـ *</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" v-model="form.unitId" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="6e5b5df4-07c1-4ced-a9d1-e3f2db102f5b">
                                                <label class="form-check-label" for="inlineRadio1">بالوحدة</label>
                                              </div>
                                              <div class="form-check form-check-inline">
                                                <input class="form-check-input" v-model="form.unitId" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="6e5b5df4-07c1-4ced-a9d1-e3f2db102f5c">
                                                <label class="form-check-label" for="inlineRadio2">بالوزن</label>
                                              </div>
                                          
                                        </div>     
                                    </div>
                                </div>
                             
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>سعر البيع</label>
                                
                                        <div>
                                            <input type="number" placeholder="00.00" required="" name="" id="" class="form-control " v-model="form.salePrice" >

                                        </div>
                                        <small>لتحديد السعر عند البيع , اترك هذا الحقل فارغاً</small>
                                    </div>
                                </div>
                            <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>التكفلة</label>
                                
                                        <div>
                                            <input type="number" required="" name="" id=""  placeholder="00.00" class="form-control " v-model="form.originalPrice" >

                                        </div>
                                    
                                    </div>
                                </div>
                                   <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>SKU</label>
                                
                                        <div>
                                            <input type="text" placeholder="00" required="" name="" id="" class="form-control " v-model="form.sku" >

                                        </div>
                                        <small>معرف فريد تم تعيينه لعنصر</small>
                                    </div>
                                </div>
            <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>الباركود</label>
                                
                                        <div>
                                            <input type="text" placeholder="00" required="" name="" id="" class="form-control " v-model="form.barcode" >

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="row justify-content-between align-items-center pt-4">
                            <div class="col">
                                <h1 class="title-page mt-3 mb-3">المخزون</h1>
                            </div>
                   
                        </div>
                        <div class="card py-4 px-4 ">
                            <div class="row justify-content-between align-items-center ">
                            <div class="col-auto">
                               <h6>تعقب المخزون</h6>
                            </div>
                   <div class="col-auto ">
                                    <div class="form-check form-switch mb-0">
                                        <input class="form-check-input" v-model="allowstockCount" type="checkbox" role="switch" id="flexSwitchCheckChecked2" checked="">
                                        <label class="form-check-label mb-0" for="flexSwitchCheckChecked2">تفعيل / تعطيل</label>
                                    </div>
                                </div>
                        </div>


                      <div class="row py-3" v-if="allowstockCount==true">
                        <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>متوفر</label>
                                
                                        <div>
                                            <input type="number" placeholder="0" required="" name="" id="" class="form-control " v-model="form.stockCount"  >

                                        </div>
                                    </div> </div>
                                    <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>مخزون منخفض</label>
                                
                                        <div>
                                            <input type="number" placeholder="0" required="" name="" id="" class="form-control " v-model="form.lowStockCount"  >

                                        </div>
                                        <small>كمة المنتج التي سيتم عندها تنبيهك عن المخزون المنخفض</small>
                                    </div> </div>

                      </div>
                          
                        </div>
                      
                    </div>
                    <div class="col-lg-3">
                   

             


                        <div class="card p-3 ">
                                <div class=" me-lg-4 mb-2">الصورة الأساسية</div>
                                <div class="upload-img w-100  ">
                                    <label class="labelfile center mx-auto" for="fileuplaod1"  data-bs-toggle="tooltip" title="اختر الصورة">
                                        <svg id="photo_2_" data-name="photo (2)" xmlns="http://www.w3.org/2000/svg" width="41.229" height="36.508" viewBox="0 0 41.229 36.508">
                                            <g id="Group_11285" data-name="Group 11285" transform="translate(0 0)">
                                              <g id="Group_11284" data-name="Group 11284">
                                                <circle id="Ellipse_362" data-name="Ellipse 362" cx="2.833" cy="2.833" r="2.833" transform="translate(12.707 9.009)" fill="#41bcd0"/>
                                                <path id="Path_13967" data-name="Path 13967" d="M38.79,46.267a8.723,8.723,0,0,0-4.878-2.321v-14.4A5.664,5.664,0,0,0,32.3,25.613,5.5,5.5,0,0,0,28.365,24H5.547a5.664,5.664,0,0,0-3.934,1.613A5.5,5.5,0,0,0,0,29.547V53.034a5.664,5.664,0,0,0,1.613,3.934,5.5,5.5,0,0,0,3.934,1.613h22.07A8.323,8.323,0,0,0,38.79,46.267ZM2.085,29.547a3.293,3.293,0,0,1,1.023-2.4,3.452,3.452,0,0,1,2.439-1.023H28.365a3.493,3.493,0,0,1,3.462,3.462V41.861L26,36.038a1.056,1.056,0,0,0-1.495,0l-8.773,8.812L9.8,38.871a1.056,1.056,0,0,0-1.495,0L2.085,45.165ZM5.508,56.574V56.5a3.452,3.452,0,0,1-2.439-1.023,3.59,3.59,0,0,1-.984-2.439V48.155l6.963-7,5.94,5.94a1.094,1.094,0,0,0,1.495,0l8.773-8.812L31,44.064l-.354.118a3.654,3.654,0,0,0-.511.157c-.157.039-.315.118-.472.157a1.178,1.178,0,0,0-.315.157,3.655,3.655,0,0,0-.393.2l-.59.354c-.118.079-.2.118-.315.2-.079.039-.118.079-.2.118a4.747,4.747,0,0,0-.944.826,8.322,8.322,0,0,0-2.439,5.9,8.649,8.649,0,0,0,.2,1.731c.039.157.079.275.118.433.118.393.236.787.393,1.18v.039a7.215,7.215,0,0,0,.511.944Zm31.748,0a6.223,6.223,0,0,1-8.694.079c-.157-.157-.315-.354-.472-.511-.118-.118-.236-.275-.354-.393a3.736,3.736,0,0,1-.393-.669c-.079-.157-.157-.275-.236-.433a3.323,3.323,0,0,1-.2-.669c-.039-.157-.118-.354-.157-.511a6.511,6.511,0,0,1-.118-1.259,6.315,6.315,0,0,1,1.81-4.406,6.082,6.082,0,0,1,4.406-1.81,6.315,6.315,0,0,1,4.406,1.81,6.149,6.149,0,0,1,1.81,4.406A6.292,6.292,0,0,1,37.256,56.574Z" transform="translate(0 -24)" fill="#41bcd0"/>
                                                <path id="Path_13968" data-name="Path 13968" d="M302.829,264.715a1.372,1.372,0,0,0-.354-.236,1.149,1.149,0,0,0-.354-.079h-.079a1.15,1.15,0,0,0-.354.079.929.929,0,0,0-.354.236l-2.439,2.439a1.057,1.057,0,0,0,1.495,1.495l.629-.629v4.327a1.062,1.062,0,1,0,2.124,0v-4.327l.629.629a1.057,1.057,0,0,0,1.495-1.495Z" transform="translate(-269.232 -240.756)" fill="#41bcd0"/>
                                              </g>
                                            </g>
                                          </svg>
        
        
                                    </label>
                                   <input 
                                    type="file" 
                                    id="fileuplaod1" 
                                    ref="productImage"
                                    name="profile_picture" 
                                    class="fileuplaod" 
                                    @change="form.file = $refs.productImage.files"
                                    />
                                    <img id=""  class="img-preview w-100" src="img/bg-slider.png" alt="your image" />
                                </div>
        
                    
                        </div>
                        <!-- saleh gallery -->
                        <div class="card p-3 mt-3">
                            <div class=" me-lg-4 mb-2">صور أخرى</div>
                            <a href="" class=" text-center p-3 bg-light mb-3 d-block" data-bs-toggle="modal" id="linkMedia" data-bs-target="#selectFromMedia">اختر الصور</a>
                            
                           
                        </div>
                          <!--end saleh gallery -->
                        <div class="card p-3 mt-3">
                           
                            <div class="limit-number mb-3">
                                <label>وصف مختصر (للإرشفة)</label>
                                <textarea  class="form-control" name="address"
                                          placeholder="" rows="4"
                                          id="ServiceDescription1" 
                                          required=""></textarea>
                                <div class="text-number-characters text-end"><span
                                        class="number  mx-1">500</span> حرف
                                </div>
                            </div>
                            
                        </div>
                        <button class="card d-block w-100 p-3 my-3 btn btn-success" @click="addProduct()" type="submit">نشر</button>


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

      form:{
        name:'',
        unitId:'',
        priceToPay:'',
        originalPrice:'',
        salePrice:'',
        sku:'',
        barcode:'',
        stockCount:'',
        lowStockCount:'',
        categoryId:'',
        file: [], 
       
      },
      
    }
  },
  computed: {

  },
   
  methods: {
async addProduct() {
  try {

    if (this.allowstockCount === true) {
      this.form.stockCount = 0;
      this.form.lowStockCount = 0;
    }

    const response = await axios.post(
      'https://pos-sa.cloud/api/product',
      {
        name: this.form.name,
        unitId: null,
        priceToPay: this.form.priceToPay,
        originalPrice: this.form.originalPrice,
        salePrice: this.form.salePrice,
        sku: this.form.sku,
        barcode: String(this.form.barcode || null),
        stockCount: this.form.stockCount,
        lowStockCount: this.form.lowStockCount,
        categoryId: null,
        file : this.form.file
      },
      {
        headers: {
          Authorization: `${this.tokenType} ${this.token}`
        }
      }
    );

    console.log(response.data);
    this.$router.push('/products');

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}







  },
  async mounted() {
   


    const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userAfter = JSON.parse(userdata);
    }
    


  }

}

  
</script>