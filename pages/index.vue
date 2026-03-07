<template>
    
    <div class="home d-flex h-100" id="home">
        <Head>
        <Title>صالح باي -   لوحة التحكم</Title>

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
            <div class="row ">
           
                <div class="col-lg-12 col-xl-12 ">
                  
                    <div class="row g-3 mb-4">
                        <div class="col-lg-3 col-md-4">
                            <div class="card p-4">
                                <div class="box-status ">
                                    <div class="icon-box red">
                                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><clipPath id="a"><path d="M0 0h24v24H0z" fill="#000000" opacity="1" data-original="#000000" class=""></path></clipPath><g fill="#000" clip-path="url(#a)"><path d="M7.308 15.916a.75.75 0 1 0-.616 1.368l2 .9a.75.75 0 1 0 .616-1.368z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path fill-rule="evenodd" d="M13.792 1.656a4.25 4.25 0 0 0-3.584 0l-6.5 3.023A4.25 4.25 0 0 0 1.25 8.532v7.015a4.25 4.25 0 0 0 2.49 3.868l6.5 2.958a4.25 4.25 0 0 0 3.52 0l6.5-2.958a4.25 4.25 0 0 0 2.49-3.868V8.532a4.25 4.25 0 0 0-2.458-3.853zm-2.951 1.36a2.75 2.75 0 0 1 2.319 0l6.5 3.023c.467.217.854.556 1.128.968l-2.98 1.412-9.066-4.427zm-3.85 1.79L4.34 6.04a2.747 2.747 0 0 0-1.13.968L12 11.17l4.074-1.93zM2.75 8.45l8.5 4.026v8.676a2.765 2.765 0 0 1-.39-.143l-6.5-2.958a2.75 2.75 0 0 1-1.611-2.503V8.532l.001-.083zm10 12.701a2.75 2.75 0 0 0 .388-.142l6.5-2.958a2.75 2.75 0 0 0 1.611-2.503V8.532l-.001-.083-8.499 4.025z" clip-rule="evenodd" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></g></svg>
                                    </div>
                                    <div class="number">123456</div>
                                    <p>المنتجات المضافة</p>
                                    <div class="progress mt-1">
                                        <div class="progress-bar bg-red" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="card p-4">
                                <div class="box-status ">
                                    <div class="icon-box pink">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zM362 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>
                                    </div>
                                    <div class="number">123456</div>
                                    <p>المبيعات</p>
                                    <div class="progress mt-1">
                                        <div class="progress-bar bg-pink" role="progressbar" style="width: 30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="card p-4">
                                <div class="box-status ">
                                    <div class="icon-box blue">
                                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M3 62h8a1 1 0 0 0 1-1v-1.1l7.158-.72a8.883 8.883 0 0 1 3.348.3l3.8 1.092a10.915 10.915 0 0 0 3.01.424h5.409a10.829 10.829 0 0 0 4.532-.987l9.822-4.49a11 11 0 0 0 3.995-3.114l8.269-10.316a3.008 3.008 0 0 0-.352-4.136l-.234-.207a2.984 2.984 0 0 0-3.964.008l-9.331 8.323a8.907 8.907 0 0 1-2.613 1.624l-7.124 2.866a.983.983 0 0 1-1.065-.22l-1.013-1.02L42 46.643a1.18 1.18 0 0 0 .123-.062 6.651 6.651 0 0 0 2.316-2.33 3 3 0 0 0-3.083-4.5l-10.714 1.9a10.871 10.871 0 0 0-3.9 1.508l-3.9 2.453a8.9 8.9 0 0 1-4.742 1.372H12V46a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1zm9-13.016h6.1a10.9 10.9 0 0 0 5.807-1.675l3.9-2.453a8.881 8.881 0 0 1 3.188-1.232l10.714-1.9a.972.972 0 0 1 .981.412 1 1 0 0 1 .032 1.1 4.645 4.645 0 0 1-1.564 1.6L33.5 48.065a1 1 0 0 0-.319 1.626l2.057 2.069a2.977 2.977 0 0 0 3.23.667l7.124-2.867a10.912 10.912 0 0 0 3.2-1.987l9.33-8.323a.987.987 0 0 1 1.308 0l.233.206a1.009 1.009 0 0 1 .118 1.387L51.51 51.158a9.005 9.005 0 0 1-3.266 2.542l-9.822 4.49a8.845 8.845 0 0 1-3.7.806h-5.41a8.924 8.924 0 0 1-2.457-.346l-3.8-1.092a10.883 10.883 0 0 0-4.1-.369l-6.958.7zM4 47h6v13H4z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M6 56h2v2H6zM27 14h2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v-2h-2v2a4 4 0 0 0 0 8h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4v2h2v-2a4 4 0 0 0 0-8h-2a2 2 0 0 1 0-4z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M44 23.331a1 1 0 0 0-.414-.811l-4.878-3.529 4.877-3.52a1 1 0 0 0 0-1.622l-4.876-3.519 1.746-1.259a1 1 0 0 0 .156-1.483 17 17 0 1 0 0 22.824 1 1 0 0 0-.154-1.481l-1.75-1.269 4.878-3.521a1 1 0 0 0 .415-.81zm-7.585 3.518a1 1 0 0 0 0 1.621l1.932 1.4a15 15 0 1 1 0-21.742l-1.932 1.391a1 1 0 0 0 0 1.622l4.876 3.519-4.876 3.519a1 1 0 0 0 0 1.621l4.878 3.529zM46 11h2v2h-2zM50 15h2v2h-2zM43 7h2v2h-2zM45 18h2v2h-2zM51 20h2v2h-2zM47 24h2v2h-2zM44 28h2v2h-2z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>
                                    </div>
                                    <div class="number">123456</div>
                                    <p>المصروفات</p>
                                    <div class="progress mt-1">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 43%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="card p-4">
                                <div class="box-status ">
                                    <div class="icon-box success">
                                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" x="0" y="0" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M315.986 100.009c-5.514 0-10-4.486-10-10s4.486-10 10-10c3.542 0 7.283 1.807 10.815 5.227 3.969 3.841 10.299 3.737 14.139-.233 3.84-3.969 3.736-10.299-.233-14.139-5.075-4.911-10.153-7.688-14.723-9.205V50.011c0-5.523-4.477-9.999-10-9.999s-10 4.477-10 9.999V61.73c-11.638 4.128-19.999 15.242-19.999 28.279 0 16.541 13.457 29.998 29.998 29.998 5.514 0 10 4.486 10 10s-4.486 10-10 10c-4.272 0-8.884-2.687-12.985-7.565a9.997 9.997 0 0 0-14.088-1.219c-4.228 3.554-4.773 9.862-1.219 14.088 5.346 6.359 11.631 10.789 18.293 13.023v11.67c0 5.523 4.477 9.999 10 9.999s9.999-4.477 9.999-9.999v-11.719c11.638-4.128 19.999-15.242 19.999-28.279.002-16.54-13.455-29.997-29.996-29.997z" fill="#000000" opacity="1" data-original="#000000"></path><path d="M315.986.014c-60.651 0-109.994 49.344-109.994 109.994s49.344 109.994 109.994 109.994c60.651 0 109.994-49.344 109.994-109.994S376.637.014 315.986.014zm0 199.989c-49.623 0-89.995-40.372-89.995-89.995s40.372-89.995 89.995-89.995 89.995 40.372 89.995 89.995-40.372 89.995-89.995 89.995zM474.173 222.73c-15.312-.594-29.624 7.885-36.477 21.588-12.476 24.945-24.293 37.776-47.036 49.542-6.683-13.042-20.312-21.86-35.627-21.86H254.838c-6.388 0-11.549-2.72-18.694-6.484-11.429-6.022-25.653-13.515-51.302-13.515-45.82 0-90.335 44.962-108.818 76.46l-2.385-2.385c-3.904-3.903-10.237-3.904-14.142 0L2.929 382.643a10.003 10.003 0 0 0 .008 14.15l112.524 112.274c3.897 3.889 10.211 3.898 14.117.008l56.567-56.317c3.918-3.901 3.926-10.246.016-14.157l-9.158-9.158c6.849-9.687 24.303-17.45 36.666-17.45h.016l134.979.04h.061c17.452 0 34.192-4.837 48.413-13.988 36.476-23.456 87.779-61.629 112.065-122.069 10.109-25.163-8.464-52.206-35.03-53.246zM122.534 487.871l-98.383-98.164 42.418-42.418c23.644 23.644 48.61 48.615 98.368 98.368l-42.403 42.214zm368.114-219.349c-22.156 55.135-70.15 90.726-104.328 112.703-10.988 7.072-23.987 10.808-37.596 10.808h-.048l-134.98-.04h-.028c-17.466 0-39.099 9.066-50.883 23.229L90.75 343.188C98.683 326.88 140.148 272 184.842 272c20.704 0 31.52 5.699 41.981 11.209 8.202 4.321 16.682 8.79 28.016 8.79h100.195c9.922 0 18.431 7.385 19.804 17.245 1.715 11.716-7.485 22.753-19.804 22.753H254.838c-5.523 0-10 4.477-10 9.999 0 5.523 4.477 10 10 10h100.195c21.365 0 38.871-16.838 39.946-37.941 29.643-14.362 45.393-30.38 60.604-60.792a19.131 19.131 0 0 1 17.813-10.549c13.159.515 22.063 13.83 17.252 25.808z" fill="#000000" opacity="1" data-original="#000000"></path><path d="m123.135 432.128-14.149-14.139c-3.906-3.903-10.237-3.9-14.142.005-3.904 3.907-3.901 10.237.005 14.142l14.149 14.139c3.905 3.903 10.235 3.902 14.142-.005 3.904-3.907 3.901-10.238-.005-14.142z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
                                    </div>
                                    <div class="number">123456</div>
                                    <p>صافي الربح</p>
                                    <div class="progress mt-1">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                </div>
                            </div>
                        </div>
                      
                     
                    </div>
                    <div class="row g-3">
                        
                        <div class="col-lg-8 ">
                            <div class="card p-4  h-100">
                                <div class=" d-flex align-items-center justify-content-between  border-bottom pb-3  mb-2">
   <div class="title-card text-bold text-primary fs-16">
                                   الإحصائيات حسب 
                                </div>
                                <div>
                                  <select name="" id="" class=" form-select">
                                    <option value="">اخر 24 ساعة </option>
                                    <option value="">اخر 7 أيام </option>
                                    <option value="">اخر 3 أيام </option>
                                    <option value="">اخر 30 يوم </option>
                                  </select>
                                </div>
                                </div>
    <ClientOnly>
  <CategoryChart
    :labels="chartLabels"
    :values="chartValues"
  />
</ClientOnly>
                            </div>
                        </div>
                        <div class="col-lg-4 ">
                            <div class="card  shadow px-4 py-4 mb-3">
                                <div class="title-card text-bold text-primary border-bottom pb-3 fs-16 mb-2">
                                   طلبات الشراء
                                </div>
                                <div class="body-card-custom  mt-2 d-flex align-items-center justify-content-between">
                                    <!-- رائع لا يوجد مهام حاليا -->
                                    عدد طلبات الشراء عبر الموقع <a href="#" class=" mx-2 btn btn-success">15  طلب</a>
                                </div>
                            </div>
                            <div class="card p-4 ">
                                <div class="title-card text-bold text-primary border-bottom pb-3 fs-16 mb-2">
                                  اخر طلبات البيع
                                </div>
                                <div class="body-card-custom">
                                    <ul class="noty-ul p-0 m-0 list-unstyled w-100">
                                        <li class="mb-2">
                                            <a class="dropdown-item noty-item  bg-light" href="#">
                                            <div class="d-flex align-items-center">
                                                <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                                <div>
                                                    <div class="dt-noty">
                                                        Mercedes - Benz, GLE 350
                                                    </div>
                                                    <div class="time-noty"> Mercedes 2022</div>
                                                </div>
                                            </div>
                                          </a>
                                          </li>
                                          <li class="mb-2">
                                            <a class="dropdown-item noty-item  bg-light" href="#">
                                            <div class="d-flex align-items-center">
                                                <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                                <div>
                                                    <div class="dt-noty">
                                                        Mercedes - Benz, GLE 350
                                                    </div>
                                                    <div class="time-noty"> Mercedes 2022</div>
                                                </div>
                                            </div>
                                          </a>
                                          </li>
                                          <li class="mb-2">
                                            <a class="dropdown-item noty-item  bg-light" href="#">
                                            <div class="d-flex align-items-center">
                                                <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                                <div>
                                                    <div class="dt-noty">
                                                        Mercedes - Benz, GLE 350
                                                    </div>
                                                    <div class="time-noty"> Mercedes 2022</div>
                                                </div>
                                            </div>
                                          </a>
                                          </li>
                                          <li class="mb-2">
                                            <a class="dropdown-item noty-item  bg-light" href="#">
                                            <div class="d-flex align-items-center">
                                                <div class="img-noty"><img src="img/Avatar.png" width="30" alt=""></div>
                                                <div>
                                                    <div class="dt-noty">
                                                        Mercedes - Benz, GLE 350
                                                    </div>
                                                    <div class="time-noty"> Mercedes 2022</div>
                                                </div>
                                            </div>
                                          </a>
                                          </li>

                                    </ul>
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
import axios from 'axios'

export default {

  data() {
    return {
      form: {
        name: '',
        description: ''
      },
      category: [
         { name: 'يناير', productsCount: 20 },
      { name: 'فبراير', productsCount: 15 },
      { name: 'مارس', productsCount: 26 },
      { name: 'أبريل', productsCount: 29 },
      { name: 'مايو', productsCount: 40 },
      { name: 'يونيو', productsCount: 54 }
      ],
      token: process.client ? localStorage.getItem('accessToken') : '',
      tokenType: process.client ? localStorage.getItem('tokenType') : ''
    }
  },

  mounted() {
    
  },

  computed: {
    chartLabels() {
      return this.category.map(cat => cat.name)
    },
    chartValues() {
      return this.category.map(cat => cat.productsCount || 1)
    }
  },

  methods: {
  
  }
}
</script>