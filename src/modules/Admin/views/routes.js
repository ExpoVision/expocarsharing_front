/***  Admin views  ***/
import AdminCarsharingStatus from '@admin/views/AdminCarsharingStatus.vue'
import AdminOrderInfo from '@admin/views/AdminOrderInfo.vue'
import AdminStatistics from '@admin/views/AdminStatistics.vue'
import AdminUsers from '@admin/views/AdminUsers.vue'
import AdminUserProfile from '@admin/views/AdminUserProfile.vue'
import AdminSupportRequests from '@admin/views/AdminSupportRequests.vue'
import AdminContent from '@admin/views/AdminContent.vue'
import AdminTestimonials from '@admin/views/AdminTestimonials.vue'

import isAuth from '@/router/isAuth'
import isAdmin from '@/router/isAdmin'

const adminProfileRoutes = [
    {
        path: '/admin',
        meta: {
            layout: 'AdminLayout',
            middleware: [
                isAuth,
                isAdmin
            ]
        },
        children: [
        {
            path: '',
            name: 'Admin',
            component: AdminCarsharingStatus,
        },
        {
            path: 'carsharingstatus',
            name: 'AdminCarsharingStatus',
            component: AdminCarsharingStatus
        },
        {
            path: 'orderinfo/:id',
            name: 'AdminOrderInfo',
            component: AdminOrderInfo,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'statistics',
            name: 'AdminStatistics',
            component: AdminStatistics,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'users',
            name: 'AdminUsers',
            component: AdminUsers,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'users/:id',
            name: 'AdminUserProfile',
            component: AdminUserProfile,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'supportrequests',
            name: 'AdminSupportRequests',
            component: AdminSupportRequests,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'testimonials',
            name: 'AdminTestimonials',
            component: AdminTestimonials,
            meta: {
                layout: 'AdminLayout'
            }
        },
        {
            path: 'content',
            name: 'AdminContent',
            component: AdminContent,
            meta: {
                layout: 'AdminLayout'
            }
        }
        ]
    }
]


export default adminProfileRoutes