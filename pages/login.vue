<template>
  <div class="login">
    <Head>
      <Title>صالح باي - الدخول</Title>
    </Head>

    <div class="login-page py-lg-0">
      <div class="partaner2sectoins row mx-0 g-0 align-items-center justify-content-between">

        <!-- 🔹 الفورم -->
        <div class="col-lg-6 h-100 position-relative bg-light shadow">
          <div class="h-100 py-5 overflow-auto">
            <div dir="rtl" class="h-100">
              <div class="row mx-0 g-0 align-items-center justify-content-center h-100">
                <div class="col-lg-8">

                  <div class="p-lg-0 p-4">

                    <div class="d-flex align-items-lg-center justify-content-between mb-3 mt-5">
                      <div class="h3 text-primary">أهلا بعودتك</div>
                    </div>

                    <div class="py-2"><hr></div>

                    <div class="mb-3 fs-18">
                      الرجاء ادخال البريد الإلكتروني و كلمة المرور
                    </div>

                    <!-- 📧 EMAIL -->
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email }"
                        placeholder="البريد الإلكتروني*"
                        v-model="form.email"
                      />
                      <small v-if="errors.email" class="text-danger">
                        {{ errors.email }}
                      </small>
                    </div>

                    <!-- 🔒 PASSWORD -->
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        :class="{ 'is-invalid': errors.password }"
                        placeholder="كلمة المرور *"
                        v-model="form.password"
                      />
                      <small v-if="errors.password" class="text-danger">
                        {{ errors.password }}
                      </small>
                    </div>

                    <div class="mb-4 fs-14">
                      لا تمتلك حساب؟
                      <nuxt-link class="fs-14 dark-light" to="/register">
                        انشاء حساب جديد
                      </nuxt-link>
                    </div>

                    <div class="mb-4">
                      <button
                        class="btn btn-primary px-5 br-30-i"
                        @click="login"
                      >
                        تسجيل دخول
                      </button>
                    </div>

                    <!-- 🔴 خطأ عام -->
                    <div v-if="error" class="text-danger">
                      {{ error }}
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 🔹 الصورة -->
        <div class="col-lg-6 h-100">
          <div class="left-background-login h-100">
            <div class="row mx-0 g-1 align-items-end justify-content-center h-100">
              <div class="col-lg-10">
                <div class="pt-4 p-lg-0 p-4">
                  <img src="img/login.svg" width="100%" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userAfter: '',
      error: '',
      errors: {}, // 🔥 للأخطاء لكل حقل
      form: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async login() {
      // تنظيف الأخطاء
      this.errors = {}
      this.error = ''

      try {
        const response = await axios.post(
          'https://pos-sa.cloud/api/auth/sign-in',
          {
            email: this.form.email,
            password: this.form.password,
          }
        )

        const { accessToken, tokenType, userId, expiresAt } = response.data

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('tokenType', tokenType)
        localStorage.setItem('userId', userId)
        localStorage.setItem('expiresAt', expiresAt)

        localStorage.setItem('auth', JSON.stringify({
          accessToken,
          tokenType,
          userId,
          expiresAt
        }))

        this.$router.push('/')

      } catch (err) {
        const apiErrors = err.response?.data?.errors || []

        const messages = {
          'auth.invalidEmail': 'البريد الإلكتروني غير صحيح',
          'auth.invalidCredentials': 'بيانات الدخول غير صحيحة',
          'too_small': 'كلمة المرور قصيرة جداً'
        }

        if (apiErrors.length) {
          apiErrors.forEach(e => {
            const field = e.path[0]
            this.errors[field] = messages[e.message] || e.message
          })
        } else {
          // خطأ عام (مثل user not found)
          this.error = err.response?.data?.message || 'فشل تسجيل الدخول'
        }
      }
    }
  },

  mounted() {
    const userdata = localStorage.getItem('user')
    if (userdata) {
      this.userAfter = JSON.parse(userdata)
    }
  }
}
</script>

<style scoped>
.is-invalid {
  border: 1px solid red !important;
}

.text-danger {
  color: red;
  font-size: 13px;
}
</style>