<template>
    
    <div class=" d-flex h-100" id="orders">
        <Head>
        <Title>صالح باي -   الطبات</Title>

     </Head>

     <SideBar/>
        <div class="content">
      
      
<TheHeader/>
   
           <section class=" py-lg-5 mt-5">
        <div class="container">
               <div class="row align-items-center justify-content-between pb-3 mt-4 mt-lg-0 gy-3">
             
                <div class="col">
                    <div class="card p-3">
                           <div class="row justify-content-between align-items-center gy-3">
                               <div class="col-lg-6 col-md-6">
                                   <div class="row align-items-center">
                                  
                                       <div class="col-12">
                                           <div class="fs-17 mb-2 text-dark">عناصر الطلبية</div>
                                           <div class=" ">{{ totalItemsCount }} عناصر</div>
                                    </div>
                                   </div>
                               </div>
                               <div class="col-md-3">
                                <button type="button" class="btn btn-dark py-2 w-100" 
                                :class="{ 'disabled': totalPrice === 0 }"
  :style="totalPrice === 0 ? 'pointer-events:none; opacity:0.6;' : ''"
  >
                                  حفظ والدفع لاحقاً
                             
                                </button>
                               </div>
                               <div class="col-md-3">
                             <nuxt-link
  to="pay"
  class="btn btn-success py-2 w-100"
  :class="{ 'disabled': totalPrice === 0 }"
  :style="totalPrice === 0 ? 'pointer-events:none; opacity:0.6;' : ''"
>
دفع الان ( <b>{{ totalPrice }} شيكل</b> )
</nuxt-link>



                                        <!-- Modal -->
                            <div class="modal fade" id="pay_step1_Modal" tabindex="-1" aria-labelledby="pay_step1_ModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="pay_step1_ModalLabel">{{ orderStep1.productName || '' }}   ( <span dir="rtl">
  {{ orderStep1.quantity }} × 
  {{ orderStep1.productPrice }} =
  {{ orderStep1.quantity * orderStep1.productPrice }}
</span> )</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body bg-light ">
                                        <div class="  card-proparty " >
                                          
                                            <div class="mb-3">
                                              <div class="mb-2">
                                                السعر
                                              </div>
                                              <div class="input-group">
                                               <!-- السعر -->
<input 
  type="number"
  v-model.number="orderStep1.productPrice"
  class="form-control"
  placeholder="00.00"
/>
                                                <button class="input-group-text  btn-light" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 19c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h4c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9H7v11c0 .6-.4 1-1 1z" fill="#00000" data-original="#000000" class=""></path><path d="M18 19h-4c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h3V6c0-.6.4-1 1-1s1 .4 1 1v12c0 .6-.4 1-1 1z" fill="#00000" data-original="#000000" class=""></path></g></svg></button>
                                              </div>
                                            </div>
                                            <div class="mb-3">
                                                <div class="mb-2">
                                                الكمية
                                                </div>
                                            <div class="row align-items-center">

  <div class="col-auto">
    <button 
      class="btn btn-dark"
      @click="decreaseQty"
    >-</button>
  </div>

  <div class="col">
    <input 
      type="number"
      v-model.number="orderStep1.quantity"
      min="1"
      class="form-control text-center"
    />
  </div>

  <div class="col-auto">
    <button 
      class="btn btn-dark"
      @click="increaseQty"
    >+</button>
  </div>

</div>
                                                
                                              </div>
                                         
                                       
                      
                                           
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                      
                                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">الغاء</button>
                                      <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="addToLocalStorage()">تأكيد</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- Modal -->
                               </div>
                           </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center justify-content-between pb-3 mt-4 py-5 mt-lg-0">
                <div class="col-auto">
                    <h1 class="title-page">المبيعات</h1>
                </div>
                <div class="col-auto">
                    <div class="d-flex ">

                                    <div class="btn-group me-2">
                                        <button class="btn setting-dropdonw bg-light-white dropdown-toggle  px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg id="settings_1_" data-name="settings (1)" xmlns="http://www.w3.org/2000/svg" width="14.201" height="14.201" viewBox="0 0 16.201 16.201">
                                                <path id="Path_14069" data-name="Path 14069" d="M8.609,16.2H7.592A1.493,1.493,0,0,1,6.1,14.71v-.344a6.54,6.54,0,0,1-1.016-.422l-.244.244a1.491,1.491,0,0,1-2.109,0l-.719-.719a1.491,1.491,0,0,1,0-2.109l.244-.244A6.541,6.541,0,0,1,1.835,10.1H1.491A1.493,1.493,0,0,1,0,8.609V7.592A1.493,1.493,0,0,1,1.491,6.1h.344a6.542,6.542,0,0,1,.422-1.016l-.244-.244a1.491,1.491,0,0,1,0-2.109l.719-.719a1.491,1.491,0,0,1,2.109,0l.244.244A6.547,6.547,0,0,1,6.1,1.835V1.491A1.493,1.493,0,0,1,7.592,0H8.609A1.493,1.493,0,0,1,10.1,1.491v.344a6.54,6.54,0,0,1,1.016.422l.244-.244a1.491,1.491,0,0,1,2.109,0l.719.719a1.491,1.491,0,0,1,0,2.109l-.244.244A6.541,6.541,0,0,1,14.366,6.1h.344A1.493,1.493,0,0,1,16.2,7.592V8.609A1.493,1.493,0,0,1,14.71,10.1h-.344a6.542,6.542,0,0,1-.422,1.016l.244.244a1.491,1.491,0,0,1,0,2.109l-.719.719a1.491,1.491,0,0,1-2.109,0l-.244-.244a6.547,6.547,0,0,1-1.016.422v.344A1.493,1.493,0,0,1,8.609,16.2ZM5.244,12.947a5.6,5.6,0,0,0,1.45.6.475.475,0,0,1,.356.46v.7a.543.543,0,0,0,.542.542H8.609a.543.543,0,0,0,.542-.542v-.7a.475.475,0,0,1,.356-.46,5.6,5.6,0,0,0,1.45-.6.475.475,0,0,1,.577.073l.5.5a.542.542,0,0,0,.767,0l.719-.719a.542.542,0,0,0,0-.767l-.5-.5a.475.475,0,0,1-.073-.577,5.594,5.594,0,0,0,.6-1.45.475.475,0,0,1,.46-.356h.7a.543.543,0,0,0,.542-.542V7.592a.543.543,0,0,0-.542-.542h-.7a.475.475,0,0,1-.46-.356,5.6,5.6,0,0,0-.6-1.45.475.475,0,0,1,.073-.577l.5-.5a.542.542,0,0,0,0-.767L12.8,2.685a.542.542,0,0,0-.767,0l-.5.5a.475.475,0,0,1-.577.073,5.6,5.6,0,0,0-1.45-.6.475.475,0,0,1-.356-.46v-.7A.543.543,0,0,0,8.609.949H7.592a.543.543,0,0,0-.542.542v.7a.475.475,0,0,1-.356.46,5.6,5.6,0,0,0-1.45.6.475.475,0,0,1-.577-.073l-.5-.5a.542.542,0,0,0-.767,0L2.684,3.4a.542.542,0,0,0,0,.767l.5.5a.475.475,0,0,1,.073.577,5.594,5.594,0,0,0-.6,1.45.475.475,0,0,1-.46.356h-.7a.543.543,0,0,0-.542.542V8.609a.543.543,0,0,0,.542.542h.7a.475.475,0,0,1,.46.356,5.6,5.6,0,0,0,.6,1.45.475.475,0,0,1-.073.577l-.5.5a.542.542,0,0,0,0,.767l.719.719a.542.542,0,0,0,.767,0l.5-.5A.477.477,0,0,1,5.244,12.947Z" transform="translate(0 0)" fill="#929292"></path>
                                                <path id="Path_14070" data-name="Path 14070" d="M148.125,151.65a3.525,3.525,0,1,1,3.525-3.525A3.529,3.529,0,0,1,148.125,151.65Zm0-6.1a2.576,2.576,0,1,0,2.576,2.576A2.579,2.579,0,0,0,148.125,145.549Z" transform="translate(-140.024 -140.024)" fill="#929292"></path>
                                            </svg>
                                            <span class="px-2">حسب القسم</span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-custom-sa" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">
                                        <div class="col">قسم الحريمي</div>

                                            </a></li>
 <li><a class="dropdown-item" href="#">
                                        <div class="col">قسم اطفال</div>

                                            </a></li>
                                        </ul>
                                    </div>
                                <input type="text" class="form-control" placeholder="بحث" />
                                </div>


                

                  
                </div>
            </div>
            <div class="card  mt-2 p-2">
             
                             <table class="table position-relative mt-2" style="width:100%">
    <thead>
        <tr>
            <th class="text-center" style="width: 5%">#</th>
            <th style="width: 5%">الصورة</th>
            <th class="text-start" style="width: 20%">اسم المنتج</th>
            <th style="width: 20%">متوفر بالمخزن</th>
            <th style="width: 20%">السعر</th>
            <th style="width: 20%">الحالة</th>
            <th class="" style="width: 10%">الإجراءات</th>
        </tr>
    </thead>
    <tbody>
        <tr @click="addOrderStep1(product.id , product.name  , product.salePrice)" data-bs-toggle="modal" data-bs-target="#pay_step1_Modal" v-for="(product, index) in products" :key="product.id">
            <td class="text-center" style="width: 5%">{{ index + 1 }}</td>
            <td style="width: 5%">
                <img :src="product.images?.[0]?.url 
      ? 'https://pos-sa.cloud/api/' + product.images[0].url 
      : '/img/profile.png'" class="img-table" alt="">
            </td>
            <td style="width: 20%">
                <div class="fs-14-i mb-1">{{ product.name }}</div>
                <div class="fs-12-i text-light">{{ product.category?.name || 'بدون قسم' }}</div>
            </td>
            <td class="fs-14-i" style="width: 20%">{{ product.stockCount }}</td>
            <td class="fs-14-i" style="width: 20%">${{ product.salePrice }}</td>
            <td style="width: 20%">
                <span v-if="product.stockCount > 10" class="bg-light br-5 px-3 py-2 text-success">متاحة</span>
                <span v-else-if="product.stockCount > 0" class="bg-light br-5 px-3 py-2 text-danger">أوشك على النفاذ</span>
                <span v-else class="bg-light br-5 px-3 py-2 text-muted">غير متوفر</span>
            </td>
            <td class="text-end" style="width: 10%">
                <div class="btn-group">
                    <button class="btn setting-dropdonw dropdown-toggle fs-14" data-bs-toggle="dropdown">اجراءات</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click="editProduct(product)">تعديل</a></li>
                        <li><a class="dropdown-item text-danger" href="#" @click="deleteProduct(product.id)">حذف</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
</table>
               
            </div>
        </div>
        </section>
</div>
   
    </div>    
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
        orderItems: [] ,
        orderStep1 : {
            productId: null,
            productName: null,
            productPrice: 1,
             quantity: 1,
            notes: ""

        },
      products: [], // Array to store API data
      token: localStorage.getItem('accessToken'),
    tokenType: localStorage.getItem('tokenType'),
    }
  },
  computed: {

  totalItemsCount() {
    return this.orderItems.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  },

  totalPrice() {
    return this.orderItems.reduce((sum, item) => {
      return sum + (item.quantity * item.unitPrice);
    }, 0);
  }

},
  mounted() {
     this.getProducts();
  this.loadOrder();

  },
 methods: {
loadOrder() {

  if (!process.client) return;

  const savedOrder = localStorage.getItem("order");

  if (savedOrder) {
    const parsed = JSON.parse(savedOrder);
    this.orderItems = parsed.items || [];
  }
},
  addOrderStep1(productId, productName, productPrice){
    this.orderStep1.productId = productId;
    this.orderStep1.productName = productName;
    this.orderStep1.productPrice = productPrice;
    this.orderStep1.quantity = 1;
    this.orderStep1.notes = "";
  },

  increaseQty(){
    this.orderStep1.quantity++;
  },

  decreaseQty(){
    if(this.orderStep1.quantity > 1){
      this.orderStep1.quantity--;
    }
  },

  addToLocalStorage() {

    if (!process.client) return;

    let order = JSON.parse(localStorage.getItem("order"));

    if (!order) {
      order = {
        clientId: null,
        paymentStatus: "unpaid",
        notes: "",
        tax: 0,
        discount: 0,
        items: []
      };
    }

    const existingItem = order.items.find(
      item => item.productId === this.orderStep1.productId
    );

    if (existingItem) {
      // 🔥 تحديث الكمية والسعر بالقيمة الجديدة
      existingItem.quantity = this.orderStep1.quantity;
      existingItem.unitPrice = this.orderStep1.productPrice;
    } else {
      order.items.push({
        productId: this.orderStep1.productId,
        productName: this.orderStep1.productName,
        quantity: this.orderStep1.quantity,
        unitPrice: this.orderStep1.productPrice,
        notes: this.orderStep1.notes
      });
    }

    localStorage.setItem("order", JSON.stringify(order));

    console.log("Saved Order:", order);
    this.loadOrder();
  },

      async getProducts() {
      try {
        const response = await axios.get('https://pos-sa.cloud/api/product', {
          headers: {
            Authorization: `${this.tokenType} ${this.token}`
          }
        });
        // Assuming the API returns the array directly or in a 'data' property
        this.products = response.data; 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  }
}
</script>