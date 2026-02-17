<template>
    
    <div class="About d-flex h-100" id="about">
        <Head>
        <Title>صالح باي -  اضافة منتج</Title>

     </Head>

     <SideBar/>
  
       <div class="content">
        <header class="header-top bg-white py-1">
            <div class=" container">
                <div class="row align-items-center">
           
                    <div class="col">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-4 col-6">
                                <form action="">
                                    <div class="input-group my-0 search-header">
                                        <input type="text" class="form-control" placeholder="البحث">
                                        <div class="input-group-append">
                                            <button class="text-white btn-search ">
                                                <svg id="search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15.341" height="15.341" viewBox="0 0 15.341 15.341">
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <path id="Mask" d="M14.5,15.341a.838.838,0,0,1-.6-.247l-3.018-3.018a6.684,6.684,0,0,1-4.137,1.417,6.746,6.746,0,1,1,6.746-6.746,6.684,6.684,0,0,1-1.417,4.137L15.094,13.9a.843.843,0,0,1-.6,1.439ZM6.746,1.686a5.06,5.06,0,1,0,5.06,5.06A5.066,5.066,0,0,0,6.746,1.686Z" transform="translate(0)" fill="#fff"/>
                                                        </clipPath>
                                                        <clipPath id="clip-path-2">
                                                            <rect width="20.239" height="20.239" fill="none"/>
                                                        </clipPath>
                                                    </defs>
                                                    <path id="Mask-2" data-name="Mask" d="M14.5,15.341a.838.838,0,0,1-.6-.247l-3.018-3.018a6.684,6.684,0,0,1-4.137,1.417,6.746,6.746,0,1,1,6.746-6.746,6.684,6.684,0,0,1-1.417,4.137L15.094,13.9a.843.843,0,0,1-.6,1.439ZM6.746,1.686a5.06,5.06,0,1,0,5.06,5.06A5.066,5.066,0,0,0,6.746,1.686Z" transform="translate(0 0)" fill="#fff"/>
                                                    <g id="Group_5" data-name="Group 5" transform="translate(0 0)" clip-path="url(#clip-path)">
                                                        <g id="color_black" data-name="color/black" transform="translate(-2.53 -2.53)" clip-path="url(#clip-path-2)">
                                                            <rect id="Change_Fill_Color" data-name="Change Fill Color" width="20.239" height="20.239" fill="#fff"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-6 d-flex justify-content-end align-items-center">
                                <div class="dropdown">
                                    <button class=" btn dropdown-toggle bell " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item text-success" href="#">العربية</a></li>
                                        <li><a class="dropdown-item" href="#">الانجليزية</a></li>
                                    </ul>
                                  </div>
                                <div class="dropdown">
                                    <button class=" btn dropdown-toggle bell active" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"/></svg>
                                    </button>
                                    <ul class="dropdown-menu noty-ul dropdown-menu-lg-end py-0" aria-labelledby="dropdownMenuButton1">
                                      
                                    <li>
                                        <a class="dropdown-item noty-item" href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                            <div>
                                                <div class="dt-noty">
                                                    تم تسجيل شركة جديدة
                                                </div>
                                                <div class="time-noty">منذ 5 دقائق</div>
                                            </div>
                                        </div>
                                      </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item noty-item" href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                            <div>
                                                <div class="dt-noty">
                                                    تم تسجيل شركة جديدة
                                                </div>
                                                <div class="time-noty">منذ 5 دقائق</div>
                                            </div>
                                        </div>
                                      </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item noty-item" href="#">
                                        <div class="d-flex align-items-center">
                                            <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                            <div>
                                                <div class="dt-noty">
                                                    تم تسجيل شركة جديدة
                                                </div>
                                                <div class="time-noty">منذ 5 دقائق</div>
                                            </div>
                                        </div>
                                      </a>
                                      </li>
                                      <li>
                                              
                                        <div class="d-flex align-content-center justify-content-between p-2 border-top">
                                            <div>
                                                <a class="fs-12 text-primary" href="#">عرض جميع الاشعارات</a>
                                            </div>
                                            <div>
                                                <a class="fs-12 text-dark" href="#">تحديد الكل كمقروء </a>
                                            </div>
                                        </div>
                                      
                                      </li>
                                    </ul>
                                  </div>
                                <div class="dropdown">
                                    <button class="link-user-header dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      <span class="img-user-header"><span class="user-name-header mx-2 d-md-inline d-none">Saleh Haboush</span> <img src="img/profile.png" alt=""></span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">إعدادات الحساب</a></li>
                                        <li><a class="dropdown-item" href="#">Antion</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        <section class=" py-lg-5 mt-5">
        <div class="container">
            <div class="row align-items-center justify-content-between pb-3 mt-4 mt-lg-0">
                <div class="col-auto">
                    <h1 class="title-page">المنتجات</h1>
                </div>
                <div class="col-auto">
                    <button class=" btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployees"><svg xmlns="http://www.w3.org/2000/svg" width="10.938" height="10.95" viewBox="0 0 10.938 10.95">
                        <path id="Path_14105" data-name="Path 14105" d="M5.48-5.447H1.157v4.324H-1.112V-5.447H-5.458v-2.28h4.346v-4.346H1.157v4.346H5.48Z" transform="translate(5.458 12.073)" fill="#fff"/>
                      </svg>
                       إضافة منتج</button>
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
        <tr v-for="(product, index) in products" :key="product.id">
            <td class="text-center" style="width: 5%">{{ index + 1 }}</td>
            <td style="width: 5%">
                <img :src="product.image || 'img/profile.png'" class="img-table" alt="">
            </td>
            <td style="width: 20%">
                <div class="fs-14-i mb-1">{{ product.name }}</div>
                <div class="fs-12-i text-light">{{ product.categoryId || 'بدون قسم' }}</div>
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
      products: [], // Array to store API data
      token: localStorage.getItem('accessToken'),
    tokenType: localStorage.getItem('tokenType'),
    }
  },
  mounted() {
    this.getProducts(); // Fetch data when page loads
  },
  methods: {
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
    // ... your addProduct() method
  }
}
</script>