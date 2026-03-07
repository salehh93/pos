<template>
    
    <div class=" d-flex h-100" id="orders">
        <Head>
        <Title>صالح باي -   الطبات</Title>

     </Head>

     <SideBar/>
        <div class="content">
      
      
<TheHeader/>
   
       <section class="  mt-5">
        <div class="container">
     

            <div class="row align-items-center justify-content-between pb-3 mt-4 py-5 mt-lg-0">
                <div class="col-auto">
                    <h1 class="title-page">الطلبات</h1>
                </div>
                <div class="col-auto">
                    <div class="d-flex ">

                                    <div class="btn-group me-2">
                                        <button class="btn setting-dropdonw bg-light-white dropdown-toggle  px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg id="settings_1_" data-name="settings (1)" xmlns="http://www.w3.org/2000/svg" width="14.201" height="14.201" viewBox="0 0 16.201 16.201">
                                                <path id="Path_14069" data-name="Path 14069" d="M8.609,16.2H7.592A1.493,1.493,0,0,1,6.1,14.71v-.344a6.54,6.54,0,0,1-1.016-.422l-.244.244a1.491,1.491,0,0,1-2.109,0l-.719-.719a1.491,1.491,0,0,1,0-2.109l.244-.244A6.541,6.541,0,0,1,1.835,10.1H1.491A1.493,1.493,0,0,1,0,8.609V7.592A1.493,1.493,0,0,1,1.491,6.1h.344a6.542,6.542,0,0,1,.422-1.016l-.244-.244a1.491,1.491,0,0,1,0-2.109l.719-.719a1.491,1.491,0,0,1,2.109,0l.244.244A6.547,6.547,0,0,1,6.1,1.835V1.491A1.493,1.493,0,0,1,7.592,0H8.609A1.493,1.493,0,0,1,10.1,1.491v.344a6.54,6.54,0,0,1,1.016.422l.244-.244a1.491,1.491,0,0,1,2.109,0l.719.719a1.491,1.491,0,0,1,0,2.109l-.244.244A6.541,6.541,0,0,1,14.366,6.1h.344A1.493,1.493,0,0,1,16.2,7.592V8.609A1.493,1.493,0,0,1,14.71,10.1h-.344a6.542,6.542,0,0,1-.422,1.016l.244.244a1.491,1.491,0,0,1,0,2.109l-.719.719a1.491,1.491,0,0,1-2.109,0l-.244-.244a6.547,6.547,0,0,1-1.016.422v.344A1.493,1.493,0,0,1,8.609,16.2ZM5.244,12.947a5.6,5.6,0,0,0,1.45.6.475.475,0,0,1,.356.46v.7a.543.543,0,0,0,.542.542H8.609a.543.543,0,0,0,.542-.542v-.7a.475.475,0,0,1,.356-.46,5.6,5.6,0,0,0,1.45-.6.475.475,0,0,1,.577.073l.5.5a.542.542,0,0,0,.767,0l.719-.719a.542.542,0,0,0,0-.767l-.5-.5a.475.475,0,0,1-.073-.577,5.594,5.594,0,0,0,.6-1.45.475.475,0,0,1,.46-.356h.7a.543.543,0,0,0,.542-.542V7.592a.543.543,0,0,0-.542-.542h-.7a.475.475,0,0,1-.46-.356,5.6,5.6,0,0,0-.6-1.45.475.475,0,0,1,.073-.577l.5-.5a.542.542,0,0,0,0-.767L12.8,2.685a.542.542,0,0,0-.767,0l-.5.5a.475.475,0,0,1-.577.073,5.6,5.6,0,0,0-1.45-.6.475.475,0,0,1-.356-.46v-.7A.543.543,0,0,0,8.609.949H7.592a.543.543,0,0,0-.542.542v.7a.475.475,0,0,1-.356.46,5.6,5.6,0,0,0-1.45.6.475.475,0,0,1-.577-.073l-.5-.5a.542.542,0,0,0-.767,0L2.684,3.4a.542.542,0,0,0,0,.767l.5.5a.475.475,0,0,1,.073.577,5.594,5.594,0,0,0-.6,1.45.475.475,0,0,1-.46.356h-.7a.543.543,0,0,0-.542.542V8.609a.543.543,0,0,0,.542.542h.7a.475.475,0,0,1,.46.356,5.6,5.6,0,0,0,.6,1.45.475.475,0,0,1-.073.577l-.5.5a.542.542,0,0,0,0,.767l.719.719a.542.542,0,0,0,.767,0l.5-.5A.477.477,0,0,1,5.244,12.947Z" transform="translate(0 0)" fill="#929292"></path>
                                                <path id="Path_14070" data-name="Path 14070" d="M148.125,151.65a3.525,3.525,0,1,1,3.525-3.525A3.529,3.529,0,0,1,148.125,151.65Zm0-6.1a2.576,2.576,0,1,0,2.576,2.576A2.579,2.579,0,0,0,148.125,145.549Z" transform="translate(-140.024 -140.024)" fill="#929292"></path>
                                            </svg>
                                            <span class="px-2">نوع الطلب</span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end dropdown-custom-sa" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">
                                        <div class="col">طلبات مدفوعة</div>

                                            </a></li>
 <li><a class="dropdown-item" href="#">
                                        <div class="col">طلبات مفتوحة</div>

                                            </a></li>
                                        </ul>
                                    </div>
                                <input type="text" class="form-control" placeholder="بحث" />
                                </div>


                

                  
                </div>
            </div>
            <div class="card  my-2 p-3">
             
                  <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                               <h6 class="py-2 text-success text-bold">الاثنين 12-12-2025</h6>
                            </div>
                    </div>
                         <table id="" class="table  position-relative mt-2 mb-0" style="width:100%">
               
                    <tbody>
                       
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                  
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                    </tbody>
      
                </table>

               
            </div>
            <div class="card  my-2 p-3">
             
                  <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                               <h6 class="py-2 text-success text-bold">الاثنين 12-12-2025</h6>
                            </div>
                    </div>
                         <table id="" class="table  position-relative mt-2 mb-0" style="width:100%">
               
                    <tbody>
                       
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                  
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                    </tbody>
      
                </table>

               
            </div>
            <div class="card  my-2 p-3">
             
                  <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                               <h6 class="py-2 text-success text-bold">الاثنين 12-12-2025</h6>
                            </div>
                    </div>
                         <table id="" class="table  position-relative mt-2 mb-0" style="width:100%">
               
                    <tbody>
                       
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                  
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
                          </td>
                      </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#pay_step1_Modal">
                            
                              <td data-label="طريقة الدفع" class="text-center" style="width: 5%">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                <g id="Group_127" data-name="Group 127" transform="translate(-373 -195)">
                                    <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(373 195)" fill="#fff" stroke="rgba(160,160,160,0.46)" stroke-width="1">
                                    <rect width="34" height="34" rx="3" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" fill="none"/>
                                    </g>
                                    <g id="Group_122" data-name="Group 122" transform="translate(378.863 124.344)">
                                    <path id="Path_64" data-name="Path 64" d="M19.837,80H2.436A2.439,2.439,0,0,0,0,82.436V92.877a2.439,2.439,0,0,0,2.436,2.436h17.4a2.439,2.439,0,0,0,2.436-2.436V82.436A2.439,2.439,0,0,0,19.837,80Zm-17.4,1.392h17.4a1.045,1.045,0,0,1,1.044,1.044v1.392H1.392V82.436A1.045,1.045,0,0,1,2.436,81.392Zm17.4,12.529H2.436a1.045,1.045,0,0,1-1.044-1.044V85.22H20.881v7.656A1.045,1.045,0,0,1,19.837,93.921Z" fill="#4d4d4d"/>
                                    <path id="Path_65" data-name="Path 65" d="M81.392,306.088h-.7a.7.7,0,0,1-.7-.7v-.7a.7.7,0,0,1,.7-.7h.7a.7.7,0,0,1,.7.7v.7A.7.7,0,0,1,81.392,306.088Z" transform="translate(-76.52 -214.256)" fill="#4d4d4d"/>
                                    </g>
                                </g>
                                </svg>

                              </td>
                      <td data-label="رقم الطلبية" class="fs-14-i "  style="width: 20% ;">#1-0027</td>
                          <td data-label="المبلغ" style="width: 20%">
                              <div class="fs-14-i mb-1">25.00 $</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">9:15 م</div>
                          </td>
                          <td data-label="معلومات الزبون" style="width: 20%">
                              <div class="fs-14-i mb-1">صالح حبوش</div>
                              <div class="fs-12-i text-light m-1 mt-0 m-lg-0">0598258269</div>
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