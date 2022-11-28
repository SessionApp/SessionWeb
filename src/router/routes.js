
const routes = [
  {
    path: '/reset-password',
    component: () => import('pages/auth/ResetPassword.vue')
  },
  {
    path: '/unsubscribe-newsletter',
    component: () => import('src/pages/user/NewsletterUnsubscribe.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ],

  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
