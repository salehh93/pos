<template>
    
    <div class=" d-flex h-100" id="pay">
        <Head>
        <Title>صالح باي -   تاكيد الطلب</Title>

     </Head>

     <SideBar/>
        <div class="content">
      
      
<TheHeader/>
   
           <section class=" py-lg-5 mt-5">
        <div class="container">
            
            <div class="row justify-content-center">
                <div class="col-lg-10">
   
              <div class="card  mt-2 p-3">
             
            
                <div class="text-center">
                     <h1 class="title-page fs-30-i text-dark">{{ totalPrice }} <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="30" height="30" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 19c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h4c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9H7v11c0 .6-.4 1-1 1z" fill="#000000" data-original="#000000" class=""></path><path d="M18 19h-4c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h3V6c0-.6.4-1 1-1s1 .4 1 1v12c0 .6-.4 1-1 1z" fill="#000000" data-original="#000000" class=""></path></g></svg></h1>
                     <p class="text-center">اجمالي المبلغ المستحق</p>
                </div>
               
            </div>

            <div class="card  mt-2 p-2">
             
            

   <div 
  class="row mb-3 pt-4 justify-content-between align-items-center"
  v-for="(item, index) in order.items"
  :key="index"
>

  <div class="col-auto">
   <span class="ps-3 ps-5"> {{ item.productName }}</span>
    <span class="mx-2 bold" dir="ltr">
      {{ item.quantity }} X
    </span>
  </div>

  <div class="col-auto">
    {{ item.quantity * item.unitPrice }}
  </div>

  <!-- زر الحذف -->
  <button  style="
    position: absolute;
    width: 35px;
    height: 35px;
    padding: 0;
    border-radius: 50%;
    right: 10px;
"
      class="btn btn-sm btn-danger"
      @click="removeItem(index)"
    >
      حذف
    </button>

</div>
                                       
            </div>
                   <!-- Modal -->
                            <div class="modal fade" id="pay_step1_Modal" tabindex="-1" aria-labelledby="pay_step1_ModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="pay_step1_ModalLabel">بجامة بيتي  ( <span class=" text-right" dir="rtl"> 2 * 100 = 200 </span> )</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body bg-light ">
                                        <div class="  card-proparty " >
                                          
                                            <div class="mb-3">
                                              <div class="mb-2">
                                                السعر
                                              </div>
                                              <div class="input-group">
                                                <input type="number" maxlength="10000" id="firstPrice" class="form-control" placeholder="00.00" >
                                                <button class="input-group-text  btn-light" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M6 19c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h4c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9H7v11c0 .6-.4 1-1 1z" fill="#00000" data-original="#000000" class=""></path><path d="M18 19h-4c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h3V6c0-.6.4-1 1-1s1 .4 1 1v12c0 .6-.4 1-1 1z" fill="#00000" data-original="#000000" class=""></path></g></svg></button>
                                              </div>
                                            </div>
                                            <div class="mb-3">
                                                <div class="mb-2">
                                                الكمية
                                                </div>
                                                <div class="row">
                                                       <div class="col-auto"><button class=" btn btn-dark fs-18">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 1">
  <g id="Group_112" data-name="Group 112" transform="translate(-356.5 -253)">
    <line id="Line_9" data-name="Line 9" y2="24" transform="translate(380.5 253.5) rotate(90)" fill="none" stroke="#fff" stroke-width="1"/>
  </g>
</svg>
                                                    </button></div>


                                                    
                                                    <div class="col"><input type="number"  class="form-control text-center" value="1" id="priceCar" placeholder="" ></div>
                                                 <div class="col-auto"><button class="btn btn-dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
  <g id="Group_112" data-name="Group 112" transform="translate(-356.5 -241.5)">
    <line id="Line_8" data-name="Line 8" y2="24" transform="translate(368.5 241.5)" fill="none" stroke="#fff" stroke-width="1"/>
    <line id="Line_9" data-name="Line 9" y2="24" transform="translate(380.5 253.5) rotate(90)" fill="none" stroke="#fff" stroke-width="1"/>
  </g>
</svg>
   
                                                    </button></div>
                                                </div>
                                                
                                              </div>
                                         
                                       
                      
                                           
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                      
                                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ازاله من الطلبية</button>
                                      <button type="button" class="btn btn-success px-5" data-bs-dismiss="modal">حفظ</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- Modal -->
<div class="card py-3 px-4 mt-3">
                            <div class="row justify-content-between align-items-center ">
                            <div class="col-auto">
                               <h6>اضافة معلومات الزبون (اختياري)</h6>
                            </div>
                   <div class="col-auto ">
                                    <div class="form-check form-switch mb-0">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" >
                                        <label class="form-check-label mb-0" for="flexSwitchCheckChecked2">تفعيل / تعطيل</label>
                                    </div>
                                </div>
                        </div>


                      <div class="row py-3">
                        <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>الإسم</label>
                                
                                        <div>
                                            <input type="text" placeholder="ادخل الاسم" required="" name="" id="" class="form-control " value="" data-np-intersection-state="visible">

                                        </div>
                                    </div> </div>
                                    <div class="col-lg-6">
                                    <div class="mb-3">
                                        <label>رقم التواصل</label>
                                
                                        <div>
                                            <input type="number" placeholder="0" required="" name="" id="" class="form-control " value="" data-np-intersection-state="visible">

                                        </div>
                                    </div> </div>

                      </div>
                          
                        </div>
               <div class="row align-items-center justify-content-between pb-3 mt-4 mt-lg-0 gy-3">
             
                <div class="col">

                    <div class="card p-3">
                           <div class="row justify-content-between align-items-center gy-3">
                            
                               <div class="col-md-3">
                                <button type="button" class="btn btn-dark py-2 w-100" >
                                  حفظ والدفع لاحقاً
                             
                                </button>
                               </div>
                              <div class="col">
                                <div class="row">
                                     <div class="col-md-6">
                           <button 
  type="button"
  class="btn btn-success py-2 w-100"
  @click="createOrder('cash')"
>
   الدفع نقدا
</button>
                               </div>
                               
                                <div class="col-md-6">
                            <button 
  type="button"
  class="btn btn-warning py-2 w-100"
  @click="createOrder('card')"
>
   الدفع بطاقة
</button>
                               </div>

                                </div>
                              </div>
                             
                           </div>
                    </div>
                </div>
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

export default {
  data() {
    return {
      order: {
        clientId: null,
        paymentStatus: "unpaid",
        notes: "",
        tax: 0,
        discount: 0,
        items: []
      },

      token: process.client ? localStorage.getItem('accessToken') : '',
      tokenType: process.client ? localStorage.getItem('tokenType') : ''
    }
  },

  mounted() {
    this.getItemsFromLocal();
  },

  computed: {

    totalPrice() {
      return this.order.items.reduce((sum, item) => {
        return sum + (item.quantity * item.unitPrice);
      }, 0);
    }

  },

  methods: {
removeItem(index) {

  // حذف من المصفوفة
  this.order.items.splice(index, 1);

  // تحديث localStorage
  localStorage.setItem("order", JSON.stringify(this.order));

},
    getItemsFromLocal() {

      if (!process.client) return;

      const savedOrder = localStorage.getItem("order");

      if (savedOrder) {
        this.order = JSON.parse(savedOrder);
      }
    },

   async createOrder(paymentType) {

  try {

    let paymentStatus = "unpaid";

    if (paymentType === "cash" || paymentType === "card") {
      paymentStatus = "paid";
    }

    const payload = {
      clientId: this.order.clientId,
      paymentStatus: paymentStatus,
      notes: this.order.notes,
      tax: this.order.tax,
      discount: this.order.discount,
      items: this.order.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        notes: item.notes || ""
      }))
    };

    const response = await axios.post(
      'https://pos-sa.cloud/api/order',
      payload,
      {
        headers: {
          Authorization: `${this.tokenType} ${this.token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("Order Created:", response.data);

    localStorage.removeItem("order");
    this.order.items = [];

    alert("تم إنشاء الطلب بنجاح ✅");

  } catch (error) {
    console.error("Error creating order:", error);
  }
}

  }
}
</script>