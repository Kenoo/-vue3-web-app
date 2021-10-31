/**
 * 路由设置，具体可参考
 * @link https://v3.vuejs.org/guide/routing.html#simple-routing-from-scratch
 *
 * 例子：
 * @link hhttps://github.com/youzan/vant-demo/blob/master/vant/vue3/src/router.js
 */


 const routes = [
     {
         name: 'notFound',
         path: '/:path(.*)+',
         redirect: {
             name: 'not_found',
         },
     },
     {
         name: 'not_found',
         component: () => import('@/views/errors/index.vue'),
     },
     {
         name: 'dashboard',
         path: '/dashboard',
         component: () => import('@/views/dashboard/index.vue'),
         meta: {
             title: '控制台',
         },
     }
 ];

 
 export default routes;