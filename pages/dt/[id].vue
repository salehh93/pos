<template>
    <div class="dt" id="dt">
      <Head>
        <Title v-if="order.service">صالح باي - {{order.service.name}}</Title>

     </Head>
        <TheHeader />
        <div class=" sub-header text-center shadow-sm position-relative">
            <h2 class="head-section text-center py-0">
                <span v-if="order.service">
                  
                  {{
                    order.service.name
                  }}

                </span>
            </h2>
        </div>


       <section class=" py-5">
        <!-- loading page -->
         <div class="laoding-page" v-if="laoadingPage" >
          <div   class="spinner-border text-success fs-12 " style="  width: 50px; height: 50px; " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
         </div>
        

         <!-- end -->
        <div class=" container py-lg-2 content-size">
            <div class="row  g-3">
             
                  <div class="col-lg-3">
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="card br-10">
                          <div class="d-flex justify-content-between align-items-center  p-3 border-bottom">
                            <div class="order-dt">
                              <div class="title-order fs-16">رقم الطلب</div>
                              <div class="number-order fs-15 text-bold">
                                {{ order.order_no }}
                              </div>
                            </div>
                            <div class="buttom-copy">
                              <button class=" btn btn-primary">نسخ </button>
                            </div>
                          </div>
                          <div class="p-3">
                            <div class="title-dt fs-20 text-bold mb-3">بنود الإتفاق </div>
                            <ul class="list-check">
                              <li v-if="order.service">
                                {{
                                  order.service.name
                                }}
                              </li>
                              <li>
                                قيمة المبلغ {{ order.amount + ' ' + order.currency}}
                              </li>
                              <li>مدة التنفيذ خلال {{ order.period }}</li>
                              <!-- <li></li> -->
                            </ul>
                          </div>

                          <div class="card-user bg-dark user-awnaer br-5">
                            <div class="d-flex justify-content-between align-items-center  p-3 border-bottom">
                              <div class="user-dt">
                                <div class="d-flex align-items-center gap-3">
                                  <div class="img-user">
                                    <img src="/img/saleh-110.png" width="110" height="110" alt="">
                                  </div>
                                  <div class="dt-user">
                                    <div class="user-type fs-16 text-white">الدعم الفني</div>
                                <div class="user-name fs-14  text-bold text-light">صالح حبوش</div>
                                  </div>
                                </div>
                              </div>
                              <div class="buttom-whatsapp">
                                
                                <a href="#">
                                  <img src="/img/whatsapp.svg" width="30" height="30" alt="">
                                  
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div class="col-12">
                       <div class="row g-3 list-users d-none d-lg-block">
                       
                          <div class="col-12 item-user" v-for="(user , i) in order.participants" :key="user.id" :index="i">
                            <div class="card-user bg-light border user-awnaer br-10">
                              <div class="d-flex justify-content-between align-items-center  p-3 border-bottom">
                                <div class="user-dt">
                                  <div class="d-flex align-items-center gap-3">
                                    <div class="img-user ">
                                      <img :src="user.user.image" class="border shadow" width="110" height="110" alt="">
                                    </div>
                                    <div class="dt-user">
                                      <div class="user-type fs-16 ">طرف مدعو</div>
                                  <div class="user-name fs-14  text-bold "> {{ user.user.name }}</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="buttom-whatsapp">
                                  
                                  <a :href="'https://wa.me/'+user.user.mobile">
                                    <img src="/img/whatsapp.svg" width="30" height="30" alt="">
                                    
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                       </div>
                      </div>
                      <div class="col-12 invitation  d-none d-lg-block">
                        <div class="card bg-light border p-3 border-dark  br-10">
                          <div class="text-bold fs-16 mb-3 p-2 alert alert-success text-center text-dark border-0">دعوة شخص اخر</div>
                            <div class="row g-3">
                              <div class="col-lg-12"> 
                                <div class="form-input">
                                    <label class="pb-2 fs-14" for="">الإسم كاملاً <span class="text-danger fs-18">*</span></label>
                                    <div class="input-group" >
                                      <input type="text" v-model="nameInivtation" class="form-control text-start  fs-14" id="" placeholder="ادخل إسم المدعو كاملاً">
                                     
                                    </div>
                                   
                                  </div>
                            </div>
                             
                            <div class="col-lg-12"> 
                                <div class="form-input">
                                    <label class="pb-2 fs-14" for="">رقم الواتس اب <span class="text-danger fs-18">*</span></label>
                                    <div class="input-group" >
                                        <input 
                                        type="text"  
                                        class="form-control text-start fs-14" dir="ltr" 
                                        :class="isActive == true ? 'border-success active':'border-warning'"
                                        v-model="mobileInivtation" 
                                        @input="checkWhatsAppNumber" 
                                        placeholder="مثال: 00970599999999">
                                      


                                      <label class="input-group-text bg-light " :class="isActive == true ? 'border-success':''" for="inputGroupSelect01">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class=""><g><path d="m0 512 35.31-128C12.359 344.276 0 300.138 0 254.234 0 114.759 114.759 0 255.117 0S512 114.759 512 254.234 395.476 512 255.117 512c-44.138 0-86.51-14.124-124.469-35.31L0 512z" style="" fill="#ededed" data-original="#ededed"></path><path d="m137.71 430.786 7.945 4.414c32.662 20.303 70.621 32.662 110.345 32.662 115.641 0 211.862-96.221 211.862-213.628S371.641 44.138 255.117 44.138 44.138 137.71 44.138 254.234c0 40.607 11.476 80.331 32.662 113.876l5.297 7.945-20.303 74.152 75.916-19.421z" style="" fill="#55cd6c" data-original="#55cd6c"></path><path d="m187.145 135.945-16.772-.883c-5.297 0-10.593 1.766-14.124 5.297-7.945 7.062-21.186 20.303-24.717 37.959-6.179 26.483 3.531 58.262 26.483 90.041s67.09 82.979 144.772 105.048c24.717 7.062 44.138 2.648 60.028-7.062 12.359-7.945 20.303-20.303 22.952-33.545l2.648-12.359c.883-3.531-.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-.883-10.593 2.648l-22.069 28.248c-1.766 1.766-4.414 2.648-7.062 1.766-15.007-5.297-65.324-26.483-92.69-79.448-.883-2.648-.883-5.297.883-7.062l21.186-23.834c1.766-2.648 2.648-6.179 1.766-8.828l-25.6-57.379c-.884-2.649-3.532-5.297-7.063-5.297" style="" fill="#fefefe" data-original="#fefefe" class=""></path></g></svg>
                                      </label>
                                    </div>
                                    <small class="fs-12 d-none">أدخل رقمك مع مفتاح الدولة</small>
                                  </div>
                            </div>
                            <div class="col-12">
                              <button class=" btn btn-success d-block w-100" @click="invitation()" >دعوة </button>
                              <div class=" alert alert-success p-1 mt-2 fs-14 text-center" v-if="alertMessage !=''">{{ alertMessage }}</div>
                              <div class=" alert alert-danger p-1 mt-2 fs-14 text-center" v-if="alertError !=''">{{ alertError }}</div>
                            </div>
                            </div>
                        </div>
                      </div>


                      
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <div class="fixed-on-scroll p-3 mb-3 bg-white shadow">
                      <ul class="row g-1 justify-content-around list-catorgores">
                        <li class="col-lg col-auto"><a @click="showTab = 'tab-agreement'" :class="showTab=='tab-agreement' ? 'active' :''" class="d-lg-block d-inline " href="#tab-agreement">التفاصيل</a></li>
                        <li class="col-lg col-auto"><a @click="showTab = 'tab-list-commintes'" :class="showTab=='tab-list-commintes' ? 'active' :''" class="d-lg-block d-inline" href="#add-commint">المناقشة</a></li>
                        <li class="col-lg col-auto"><a @click="showTab = 'tab-users'" :class="showTab=='tab-users' ? 'active' :''" class="d-lg-block d-inline" href="#tab-users">الأطراف</a></li>
                        <li class="col-lg col-auto"><a @click="showTab = 'tab-files'" :class="showTab=='tab-files' ? 'active' :''" class="d-lg-block d-inline" href="#tab-files">الملفات</a></li>
                      </ul>
                    </div>
                    <div v-if="showTab == 'tab-agreement'" id="tab-agreement" class="dt-body card br-10 p-3 mb-3">{{order.details}}</div>

                    <div v-if="showTab == 'tab-list-commintes'" class="tab-list-commintes" id="tab-list-commintes">
                      <div  class="dt-body card br-10 p-3 mb-3 d-none d-lg-block">{{order.details}}</div>

                      <div class="row g-4 list-commintes p-3 mb-3" id="list-commintes">
                        <div class="col-12 comminte border br-10" 
                        :class="com.user.user_type == 'client' ? '' : 'support'" 
                        v-for="(com, index) in commitns" 
                        :key="com.id">
               
                     <div class="header-comminte">
                       <div class="col-12 item-user">
                         <div class="card-user bg-light user-awnaer">
                           <div class="d-flex justify-content-between align-items-center p-1 border-bottom">
                             <div class="user-dt">
                               <div class="d-flex align-items-center gap-3">
                                 <div class="img-user">
                                   <img :src="com.user.image" class="border shadow" width="110" height="110" alt="">
                                 </div>
                                 <div class="dt-user">
                                   <div class="user-type fs-14">{{ com.user.user_type == 'client' ? 'زبون' : 'الدعم الفني' }}</div>
                                   <div class="user-name fs-14 text-bold">{{ com.user.name }}</div>
                                 </div>
                               </div>
                             </div>
                             <div class="buttom-whatsapp">
                               <a :href="'https://wa.me/' + com.user.mobile">
                                 <img src="/img/whatsapp.svg" width="30" height="30" alt="">
                               </a>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
               
                     <div class="body-comminte px-3 py-1 fs-14 bg-white position-relative">
                       <div class="row justify-content-between align-items-end">
                         <div class="col">
                           <p class="body-text py-2 m-0 px-lg-0 pe-4"  v-html="com.body"></p>
                         </div>
                       </div>
                     </div>
               
                     <div class="footer-comminte">
                       <ul class="list-attached row px-3 py-2 g-2" v-if="com.files.length > 0">
                         <li class="col-auto" v-for="(file, i) in com.files" :key="file.id">
                           <!-- Thumbnail Preview -->
                           <div class="img-preview" @click="showLightbox(index, i)">
                             <img :src="file.thumbnail_path" width="150" alt="Thumbnail">
                           </div>
               
                           <!-- Download Link -->
                           <a target="_blank" :href="file.original_path" download class="link-img px-2 py-1 br-5 bg-dark d-flex align-items-center justify-content-between">
                             <div class="fs-12 text-link">تنزيل</div>
                             <div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 9.498 9.498">
                                 <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-4 -4)">
                                   <path id="Path_174" d="M13,22.5v1.888a.944.944,0,0,1-.944.944H5.444a.944.944,0,0,1-.944-.944V22.5" transform="translate(0 -12.335)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                   <path id="Path_175" d="M10.5,15l2.361,2.361L15.221,15" transform="translate(-4.112 -7.195)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                   <path id="Path_176" d="M18,10.165V4.5" transform="translate(-9.251)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                 </g>
                               </svg>
                             </div>
                           </a>
                         </li>
                       </ul>
               
                       <!-- Lightbox Component -->
                       <vue-easy-lightbox
                         :visible="lightboxVisible[index]"
                         :imgs="com.files.map(file => file.thumbnail_path)"
                         :index="currentImageIndex[index]"
                         @hide="hideLightbox(index)"
                       />
                     </div>
                   </div>
                       
                      </div>
                      <!-- add commint -->
                      <div class="row g-3" id="add-commint">
                        <div class="col-12 comminte support border  br-10 border">
                          <div class="header-comminte">
                            <div class="col-12 item-user ">
                              <div class="card-user bg-light  user-awnaer">
                                <div class="d-flex justify-content-between align-items-center  p-2 border-bottom">
                                  <div class="text-bold">
                                    
                                    إضافة رد
                                   </div>
  
                                  <div class="user-dt">
                                    <div class="d-flex align-items-center gap-3 bg-white px-2 py-1 br-5">
                                      <div class="dt-user">
                                        <div class="user-name fs-14  text-bold ">{{userAfter.name}}</div>
                                          </div>
                                      <div class="img-user ">
                                        <img :src="userAfter.image" class="border shadow" width="110" height="110" alt="">
                                      </div>
                                      
                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="body-comminte border-dark p-0 fs-14">
                              <div class="row justify-content-between align-items-end">
                                  <div class="col">
                                    <!-- <textarea v-model="body" class="w-100 form-control bg-light border border-success" style="height: 90px;" placeholder="اترك تعليقك هنا"></textarea> -->
                                 
                                  </div>
                                  <div class="col-12">
                                    <client-only>
                                      <div>
                                        <div ref="editor" class="quill-editor"></div>

                                      </div>
                                    </client-only>

                                  </div>
                              </div>
                          </div>
                          <div class="footer-comminte p-3">
                            <div class="row g-3">
                              <div class="col-auto">
                                <!-- زر لإضافة ملفات جديدة -->
                                <div 
                                class="dropzone"
                                @dragover.prevent 
                                @drop.prevent="handleFileDrop"
                            >
                              <!-- Button to click and open file selection dialog -->
                              <button @click="selectFiles"  :class="textCommint == 'جاري الرد' ? 'disabled' :''"  class="add-new-file">
                                <div>
                                  <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                      <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(-6 -6)">
                                        <path id="Path_179" data-name="Path 179" d="M18,7.5v21" fill="none" stroke="#3cb94d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                        <path id="Path_180" data-name="Path 180" d="M7.5,18h21" fill="none" stroke="#3cb94d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                      </g>
                                    </svg>
                                  </div>
                                  <div class="mt-2 fs-14">ارفاق ملفات</div>
                                </div>
                              </button>
                              
                              <!-- Hidden file input -->
                              <input type="file" ref="fileInput" multiple @change="handleFileChange" style="display: none" />
                            
                              <!-- Preview selected files (optional) -->
                          
                            </div>
                            
                              </div>
                              
                              <div class="col">
                                <ul class="list-attached row g-2" >
                                  <li v-for="(file, index) in selectedFiles" :key="index" class="col-auto">
                                    <div class="img-preview">
                                      <img :src="file.preview" width="150" alt="">
                                    </div>
                                    <a href="#" class="link-img px-2 py-1 br-5 bg-dark d-flex align-items-center justify-content-between">
                                      <div class="fs-12 text-link">{{ file.name }}</div>
                                      <button :class="textCommint == 'جاري الرد' ? 'disabled' :''"  @click.prevent="removeFile(index)" class="delete-file-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M19.5 23.75a1 1 0 0 0 1-1v-10a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1zM12.5 23.75a1 1 0 0 0 1-1v-10a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1zM20 4.25a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M5 5.25a1 1 0 0 0 0 2h1v18.4c0 2.26 1.84 4.1 4.1 4.1h11.8c2.26 0 4.1-1.84 4.1-4.1V7.25h1a1 1 0 0 0 0-2H7zm19 2v18.4a2.1 2.1 0 0 1-2.1 2.1H10.1a2.1 2.1 0 0 1-2.1-2.1V7.25z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>
  
                                      </button>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                             
                          </div>
                      </div>
                      <div>
                       <button class=" btn btn-primary" :class="textCommint == 'جاري الرد' ? 'disabled' :''" @click="addComment()">
                        <div  v-if="textCommint == 'جاري الرد'"  class="spinner-border text-light fs-12 " style="  width: 15px; height: 15px; " role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        {{ textCommint }}
                       </button>
                      </div>
                      </div>
                      <!-- add commint -->
                    </div>
                    <!-- end tab -->
                     <div id="tab-users" v-if="showTab == 'tab-users'"> 
                        <div class="row g-3">
                          <div class="col-12">
                            <div class="row g-3 list-users">
                              <div class="col-lg-6 col-12 item-user">
                                <div class="card-user bg-light border user-awnaer br-10 border-success">
                                  <div class="d-flex justify-content-between align-items-center  p-3 border-bottom">
                                    <div class="user-dt">
                                      <div class="d-flex align-items-center gap-3">
                                        <div class="img-user ">
                                          <img :src="userAfter.image" class="border shadow" width="110" height="110" alt="">
                                        </div>
                                        <div class="dt-user">
                                          <div class="user-type fs-16 ">صاحب الطلب</div>
                                      <div class="user-name fs-14  text-bold "> {{ userAfter.name }}</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="buttom-whatsapp">
                                      
                                      <a :href="'https://wa.me/'+userAfter.mobile">
                                        <img src="/img/whatsapp.svg" width="30" height="30" alt="">
                                        
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                               <div class="col-lg-6 col-12 item-user" v-for="(user , i) in order.participants" :key="user.id" :index="i">
                                 <div class="card-user bg-light border user-awnaer br-10">
                                   <div class="d-flex justify-content-between align-items-center  p-3 border-bottom">
                                     <div class="user-dt">
                                       <div class="d-flex align-items-center gap-3">
                                         <div class="img-user ">
                                           <img :src="user.user.image" class="border shadow" width="110" height="110" alt="">
                                         </div>
                                         <div class="dt-user">
                                           <div class="user-type fs-16 ">طرف مدعو</div>
                                       <div class="user-name fs-14  text-bold "> {{ user.user.name }}</div>
                                         </div>
                                       </div>
                                     </div>
                                     <div class="buttom-whatsapp">
                                       
                                       <a :href="'https://wa.me/'+user.user.mobile">
                                         <img src="/img/whatsapp.svg" width="30" height="30" alt="">
                                         
                                       </a>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               
                            </div>
                           </div>
                           <div class="col-lg-6 col-12 invitation">
                             <div class="card bg-light border p-3 border-dark  br-10">
                               <div class="text-bold fs-16 mb-3 p-2 alert alert-success text-center text-dark border-0">دعوة شخص اخر</div>
                                 <div class="row g-3">
                                   <div class="col-lg-12"> 
                                     <div class="form-input">
                                         <label class="pb-2 fs-14" for="">الإسم كاملاً <span class="text-danger fs-18">*</span></label>
                                         <div class="input-group" >
                                           <input type="text" v-model="nameInivtation" class="form-control text-start  fs-14" id="" placeholder="ادخل إسم المدعو كاملاً">
                                          
                                         </div>
                                        
                                       </div>
                                 </div>
                                  
                                 <div class="col-lg-12"> 
                                     <div class="form-input">
                                         <label class="pb-2 fs-14" for="">رقم الواتس اب <span class="text-danger fs-18">*</span></label>
                                         <div class="input-group" >
                                             <input 
                                             type="text"  
                                             class="form-control text-start fs-14" dir="ltr" 
                                             :class="isActive == true ? 'border-success active':'border-warning'"
                                             v-model="mobileInivtation" 
                                             @input="checkWhatsAppNumber" 
                                             placeholder="مثال: 00970599999999">
                                           
     
     
                                           <label class="input-group-text bg-light " :class="isActive == true ? 'border-success':''" for="inputGroupSelect01">
                                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class=""><g><path d="m0 512 35.31-128C12.359 344.276 0 300.138 0 254.234 0 114.759 114.759 0 255.117 0S512 114.759 512 254.234 395.476 512 255.117 512c-44.138 0-86.51-14.124-124.469-35.31L0 512z" style="" fill="#ededed" data-original="#ededed"></path><path d="m137.71 430.786 7.945 4.414c32.662 20.303 70.621 32.662 110.345 32.662 115.641 0 211.862-96.221 211.862-213.628S371.641 44.138 255.117 44.138 44.138 137.71 44.138 254.234c0 40.607 11.476 80.331 32.662 113.876l5.297 7.945-20.303 74.152 75.916-19.421z" style="" fill="#55cd6c" data-original="#55cd6c"></path><path d="m187.145 135.945-16.772-.883c-5.297 0-10.593 1.766-14.124 5.297-7.945 7.062-21.186 20.303-24.717 37.959-6.179 26.483 3.531 58.262 26.483 90.041s67.09 82.979 144.772 105.048c24.717 7.062 44.138 2.648 60.028-7.062 12.359-7.945 20.303-20.303 22.952-33.545l2.648-12.359c.883-3.531-.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-.883-10.593 2.648l-22.069 28.248c-1.766 1.766-4.414 2.648-7.062 1.766-15.007-5.297-65.324-26.483-92.69-79.448-.883-2.648-.883-5.297.883-7.062l21.186-23.834c1.766-2.648 2.648-6.179 1.766-8.828l-25.6-57.379c-.884-2.649-3.532-5.297-7.063-5.297" style="" fill="#fefefe" data-original="#fefefe" class=""></path></g></svg>
                                           </label>
                                         </div>
                                         <small class="fs-12 d-none">أدخل رقمك مع مفتاح الدولة</small>
                                       </div>
                                 </div>
                                 <div class="col-12">
                                   <button class=" btn btn-success d-block w-100" @click="invitation()" >دعوة </button>
                                   <div class=" alert alert-success p-1 mt-2 fs-14 text-center" v-if="alertMessage !=''">{{ alertMessage }}</div>
                                   <div class=" alert alert-danger p-1 mt-2 fs-14 text-center" v-if="alertError !=''">{{ alertError }}</div>
                                 </div>
                                 </div>
                             </div>
                           </div>
                           
                        </div>
                     </div>
                     <!-- end tab -->
                     <div id="tab-files" v-if="showTab == 'tab-files'"> 
<!-- here files -->
<ul class="list-attached row px-3 py-2 g-2" v-if="files.length > 0">
  <li class="col-auto" v-for="(file , i) in files" :key="file.id" :index="i">
    <div class="img-preview">
      <img :src="file.thumbnail_path" width="150" alt="">
    </div>
    <a target="_blank" :href="file.original_path" download class="link-img px-2 py-1 br-5 bg-dark d-flex align-items-center justify-content-between">
      <div class="fs-12 text-link">تنزيل</div>
      
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 9.498 9.498">
          <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-4 -4)">
            <path id="Path_174" data-name="Path 174" d="M13,22.5v1.888a.944.944,0,0,1-.944.944H5.444a.944.944,0,0,1-.944-.944V22.5" transform="translate(0 -12.335)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            <path id="Path_175" data-name="Path 175" d="M10.5,15l2.361,2.361L15.221,15" transform="translate(-4.112 -7.195)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
            <path id="Path_176" data-name="Path 176" d="M18,10.165V4.5" transform="translate(-9.251)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
          </g>
        </svg>
        
      </div>
    </a>
  </li>

  
</ul>
<div v-else class=" p-4 bg-white text-center border text-bold">
  لا يوجد ملفات تم مشاركتها في هذا الطلب
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
import 'quill/dist/quill.snow.css';


import VueEasyLightbox from 'vue-easy-lightbox';
import axios from 'axios';
export default { 
  props: {
    commitns: {
      type: Array,
      required: true
    }
  },


  data() {
    return {
      body:'',
      quill: null, // Quill instance
      quillInstance: null, // Quill instance
        commintsLenght:0 ,
      laoadingPage:false ,
      textCommint : 'إضافة رد',
      showTab : 'tab-list-commintes',
      id: this.$route.params.id ,
      selectedFiles: [],
      getOrder:'',
      userAfter:'',
      order:'',
      
 
      nameInivtation: '',
      mobileInivtation: '',
      alertMessage:'',
      alertError:'',

      loadingPage: false,
      commitns: [],   // Array to hold comments
      files: [],      // Array to hold files from comments
      error: null,    // For error handling
      pollingInterval: 2000,   // Set polling interval to 1 minute (60000 ms)
      isPollingActive: false  ,  // Track if polling is active to avoid overlapping calls
      lightboxVisible: {},           // Visibility control for each com's lightbox
      currentImageIndex: {}     
    }
  },
  
  components: {
    VueEasyLightbox
  },

    methods: {
      showLightbox(comIndex, imgIndex) {
      this.lightboxVisible[comIndex] = true;           // Set lightbox visible for specific com
      this.currentImageIndex[comIndex] = imgIndex;     // Set current image index for specific com
    },
    hideLightbox(comIndex) {
      this.lightboxVisible[comIndex] = false;          // Hide lightbox for specific com
    },
      checkWhatsAppNumber() {
        // Ensure the input is a string
        let whatsnumber = String(this.mobileInivtation || '');

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
        this.mobileInivtation = whatsnumber;

        // Set isActive to true if exactly 10 characters (+ followed by 9 digits)
        this.isActive = whatsnumber.length === 13;
    },
  
   // Trigger file selection dialog
   selectFiles() {
    this.$refs.fileInput.click();
  },

  // Handle files selected through file input
  handleFileChange(event) {
    this.processFiles(event.target.files);
    event.target.value = null; // Reset input to allow re-selecting
  },

  // Handle files dropped into the drop zone
  handleFileDrop(event) {
    this.processFiles(event.dataTransfer.files);
  },

  // Process files (both selected and dropped)
  processFiles(files) {
    const fileArray = Array.from(files);
    fileArray.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.selectedFiles.push({ file, preview: e.target.result, name: file.name });
      };
      reader.readAsDataURL(file);
    });
  },

  // Remove a file from the list
  removeFile(index) {
    this.selectedFiles.splice(index, 1);
  },

  async addComment() {
  this.textCommint = 'جاري الرد'; // Display "Processing..." message

  try {
    const formData = new FormData();
    formData.append('body', this.body);
    formData.append('order_no', this.order.order_no);

    // Append files to FormData if selected
    if (this.selectedFiles.length > 0) {
      this.selectedFiles.forEach(fileObj => {
        formData.append('files[]', fileObj.file); // Assuming each file is inside `fileObj.file`
      });
    }

    // Send request to add the comment
    const response = await axios.post('https://dash.saleh.ps/api/v1/order-comment', formData, {
      headers: {
        Authorization: `Bearer ${this.userAfter.token}`,
      },
    });

    if (response.data.status === true) {
      // Success response
      this.textCommint = 'إضافة رد'; // Reset button text to default
      this.getComments(); // Refresh comments

      // Reset form fields
      this.body = ''; // Clear Vue data property

      if (this.quillInstance) {
        this.quillInstance.setContents([]); // Clear Quill editor content
      }

      this.selectedFiles = []; // Clear file selection

      console.log('Comment added successfully');

      // Smooth scroll to the comment section
      setTimeout(() => {
        const addCommentDiv = this.$refs.addComment; // Use Vue's ref system instead of document.querySelector
        if (addCommentDiv) {
          addCommentDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } 
  } catch (error) {
    // Handle errors in the request
    this.error = 'حدث خطأ أثناء إضافة الرد. يرجى المحاولة لاحقًا.';
    console.error('Error adding comment:', error);
    // alert('حدث خطأ أثناء إرسال ردك. يرجى المحاولة لاحقًا.');
  } finally {
    // Ensure the "Processing..." text is reset even if an error occurs
    this.textCommint = 'إضافة رد';
  }
}



,
async invitation() {
  try {

    const response = await axios.post('https://dash.saleh.ps/api/v1/order-invitation/add',{
      mobile: this.mobileInivtation ,
      name : this.nameInivtation,
      order_no: this.order.order_no
    },
      
      {
        headers: {
          Authorization: `Bearer ${this.userAfter.token}`,
        }
      }
    );

    if (response.data.status === true) {
     this.alertMessage = response.data.message ;
     this.alertError = ''
    }
  } catch (error) {
    // Handle any errors
    this.error = error;
    console.error('An error occurred while adding the comment:', error);
    this.alertMessage = '';
    this.alertError = 'أدخل الاسم ورقم الواتساب بشكل صحيح';
    ;
  }
}
,
async getComments() {
  const orderId = this.id;

  try {
    // Fetch only new comments (optimize the API to support this if possible)
    const response = await axios.get(`https://dash.saleh.ps/api/v1/order/${orderId}/comments`, {
      headers: {
        Authorization: `Bearer ${this.userAfter.token}`,
      },
    });

    if (response.status === 200 && response.data.status === true) {
      console.log('Comments fetched successfully');
      const newComments = response.data.data;

      // If there are no new comments, return early
      if (newComments.length === 0) return;

      // Get the ID of the last existing comment for comparison
      const lastExistingCommentId = this.commitns.length > 0 ? this.commitns[this.commitns.length - 1].id : null;

      // Filter out only new comments (those not already in commitns)
      const newItems = lastExistingCommentId
        ? newComments.filter((comment) => comment.id > lastExistingCommentId)
        : newComments;

      if (newItems.length > 0) {
        // Append only the new comments to the list
        this.commitns.push(...newItems);

        // Extract files from the new comments
        newItems.forEach((comment) => {
          if (comment.files && comment.files.length > 0) {
            this.files.push(...comment.files);
          }
        });

        // Check the last new comment's user ID and play sound if it matches
        const lastNewComment = newItems[newItems.length - 1];
        if (lastNewComment.user.id != this.userAfter.id) {
          const audio = new Audio('/img/sound.mp3');
          audio.play().catch((error) => {
            console.error('Error playing sound:', error);
          });
        }
      }
    }
  } catch (error) {
    this.error = error;
    console.error('An error occurred:', error);
  } finally {
    this.isPollingActive = false; // Mark polling as inactive after completing
  }
},



    
    async startPolling() {
      // Only start a new polling cycle if not already active
      if (!this.isPollingActive) {
        this.isPollingActive = true;
        await this.getComments();  // Fetch comments once immediately

        // Use setTimeout for the next polling cycle
        setTimeout(this.startPolling, this.pollingInterval);
      }
    },
    
    checkForNewComments() {
      // Avoid showing the loading spinner on each check
      this.getComments();
    }
,


  },
  async mounted() {
   // Ensure this runs only on the client-side
   if (typeof window !== 'undefined') {
      // Dynamically import Quill
      const Quill = (await import('quill')).default;

      // Initialize Quill editor using Vue's ref system
      this.quillInstance = new Quill(this.$refs.editor, {
        theme: 'snow',
        placeholder: 'اترك تعليقك هنا',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
          ],
        },
      });

      // Sync editor content with body
      this.quillInstance.on('text-change', () => {
        this.body = this.quillInstance.root.innerHTML;
      });
    }


    this.laoadingPage = true ;
 
   
    const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userAfter = JSON.parse(userdata);
    }
    if(this.userAfter == ''){
        this.$router.push(`/login`);
      }
    const orderId = this.id ; 
    // get commints
    this.laoadingPage = true ;
      try {
          const response = await axios.get(`https://dash.saleh.ps/api/v1/order/${orderId}/comments` , {
          headers: {
                  Authorization: `Bearer ` + this.userAfter.token
                }
        }
        );

          if (response.data.status === true) {
            this.laoadingPage = false ;
            console.log('get services its good');
            this.commitns = response.data.data;
            this.files = [];

// Extract files from each comment and push to this.files
            this.commitns.forEach(comment => {
              if (comment.files && comment.files.length > 0) {
                // Spread the files array to add each file individually to this.files
                this.files.push(...comment.files);
              }
            });

               // Scroll to the #add-commint div after loading comments
               setTimeout(() => {
        const addCommentDiv = document.querySelector('#add-commint');
        if (addCommentDiv) {
          addCommentDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
          }
        } catch (error) {
          // Handle any errors
          this.error = error;
          console.error('An error occurred:', error);
        }

    // end get commints
    this.getComments();
        

    this.startPolling(); 
    try {
  const response = await axios.get(`https://dash.saleh.ps/api/v1/order/${orderId}`,
  {
    headers: {
            Authorization: `Bearer ` + this.userAfter.token
          }
  }

  );
  console.log('get services its bad');
  if (response.data.status === true) {
    this.laoadingPage = false ;
    console.log('get services its good');
    this.order = response.data.data;
  }
} catch (error) {
  // Handle any errors
  this.error = error;
  console.error('An error occurred:', error);
}

  },
  beforeDestroy() {
    this.isPollingActive = false;  // Stop polling when the component is destroyed
  },

}

  
</script>

<style  scoped>
.active.border-success{
  background-color: #e8fcea;
}

</style>