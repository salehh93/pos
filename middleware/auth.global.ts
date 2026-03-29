export default defineNuxtRouteMiddleware((to) => {
  // مهم عشان SSR
  if (process.server) return

  const publicPages = ['/login', '/register']

  const auth = localStorage.getItem('auth')
  const token = auth ? JSON.parse(auth)?.accessToken : null

  if (!token && !publicPages.includes(to.path)) {
    return navigateTo('/login')
  }
})