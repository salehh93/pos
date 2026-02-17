<template>
    <div class="orders">
      <Head>
        <Title>صالح باي - طلباتي</Title>

     </Head>
            <TheHeader />
             <!-- loading page -->
         <div class="laoding-page" v-if="laoadingPage" >
          <div   class="spinner-border text-success fs-12 " style="  width: 50px; height: 50px; " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
         </div>
            <div class=" py-4 sub-header  shadow-sm position-relative">
               <div class=" container">
                <div class="d-flex gap-2 justify-content-between">
                  <div class="title-page fs-20">طلباتي</div>
                  <div class="row g-2 justify-content-end">
                    <div class="col-auto">
                      <select class=" form-select">
                        <option value="available" selected>طلبات قيد التنفيذ</option>
                        <option value="complate" >طلبات مكتملة</option>
                        <option value="not_complate" >طلبات مرفوضة</option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <NuxtLink class=" btn btn-success" to="/new">طلب خدمة جديدة</NuxtLink>
                    </div>
                  </div>
                </div>
               </div>
            </div>
           
            
            <div class=" container  py-3 content">
              <table id="" class="table  position-relative mt-2" style="width:100%">
                <thead class="bg-light">
                 
                    <th style="width: 20%"> الخدمة</th>
                    <th class=" text-start" style="width: 8%">المبلغ</th>
                    <th style="width: 10%">الحالة</th>
                    <th style="width: 10%">يتابعها</th>
                    <th style="width: 10%">تاريخ الإنشاء</th>
                    <th class="text-center" style="width: 5%">الخيارات</th>
                </thead>
                <tbody>
                   
                     <tr v-for="(order , i) in myorders" :index="i" :key="order.id">
                      <td data-label="نوع الخدمة" style="width: 20%">
                        <nuxt-link :to="'/dt/'+order.order_no" class="text-dark">
                        <div class="d-flex gap-2">
                          <!-- <div class="img"><img src="/img/icon1.svg" width="25" class="img-table" alt=""></div> -->
                          <div class="title-type" v-if="order.service">
                            {{order.service.name}} 
                          <div class="fs-10 mt-1">{{order.order_no}}</div>
                          </div>
                        </div>
                      </nuxt-link>
                      </td>
                      <td data-label="المبلغ" style="width: 8%">
                          <div class="fs-14-i mb-1">{{order.amount + ' ' + order.currency}}</div>
                      </td>
                      <td data-label="الحالة" class="fs-14-i" style="width: 10%"><span class="alert mb-0 py-1 px-1 alert-success">قيد التنفيذ</span></td>
                      <td data-label="يتابعها" class="fs-14-i" style="width: 10%">
                         <span v-if="order.admin.name">{{ order.admin.name }}</span> <span v-else>الإدارة</span>
                      </td>
                      <td data-label="تاريخ الإنشاء" class="fs-14-i" style="width: 10%">
                        {{ order.formattedDate }}

                      </td>
                      <td data-label="الخيارات" class="text-end " style="width: 5%">
                        <nuxt-link :title="'هناك' + order.unread_details.count +'ردود'" :to="'/dt/'+order.order_no" class=" d-flex gap-1 align-items-center justify-content-center btn btn-light shadow px-1 border" :class="order.unread_details.count > 0 ? 'border-danger':''">
                          <div class="have-reply position-relative">
                            <span v-if="order.unread_details.count > 0">
                              {{ order.unread_details.count }}
                            </span>
                            <img src="/img/message.svg" width="30" height="30" />
                          </div>
                          <div>
                            
                          </div>
                          <div>مشاهدة</div>
                        </nuxt-link>
                        
                      </td>
                  </tr> 
                
                </tbody>
  
            </table>

                <div class="row g-2 ">
                    <div class="col-lg-12">
                        <div class="card  p-2 hover border-0">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination mb-0 d-flex gap-2">
                              <li class="page-item"  v-for="(page , i) in lastPage" :index="i" :key="page"><span @click="getOrders(page)" class="page-link click" :class="thisPage == page ? 'active':''" >{{page}}</span></li>
                    
                            </ul>
                          </nav>
                         
                        </div>
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
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ar';

dayjs.extend(relativeTime);
dayjs.locale('ar');

export default {
  data() {
    return {
      laoadingPage: false,
      title: '',
      userAfter: '',
      myorders: '',
      lastPage: 1,
      thisPage: 1,
    };
  },
  methods: {
    async getOrders(page) {
  this.laoadingPage = true;
  const pageNumber = page;
  this.thisPage = page;

  try {
    const response = await axios.get(
      `https://dash.saleh.ps/api/v1/order?page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${this.userAfter.token}`,
        },
      }
    );

    // Format orders with formatted dates
    this.myorders = response.data.data.map(order => ({
      ...order,
      formattedDate: dayjs(order.created_at).fromNow(),
    }));

    this.lastPage = response.data.meta.last_page;
  } catch (error) {
    console.error('An error occurred:', error);
    this.$toast.error('حدث خطأ أثناء جلب الطلبات. الرجاء المحاولة لاحقًا.');
  } finally {
    this.laoadingPage = false;
  }
}

  },
  async mounted() {
    // Fetch user data from localStorage
    const userdata = localStorage.getItem('user');
    this.userAfter = userdata ? JSON.parse(userdata) : null;

    // Redirect to login if user data or token is missing
    if (!this.userAfter || !this.userAfter.token) {
      this.$router.push(`/login`);
      return;
    }

    // Fetch orders
    this.getOrders(1);
  },
};
</script>


<style scoped>
.content{
  min-height: 500px;
}
thead th{
  background-color: #e3ffe5;
  padding: .8rem .5rem;

}
tbody td{
  text-align: start; 
  vertical-align: middle;
}
</style>