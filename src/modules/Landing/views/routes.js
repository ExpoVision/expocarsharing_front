/***  Landing views  ***/
import HomeView from '@landing/views/HomeView.vue'
import ProfileView from '@landing/views/ProfileView.vue'
import ProfileSettingsView from '@landing/views/ProfileSettingsView.vue'
import CatalogView from '@landing/views/CatalogView.vue'
import TermsView from '@landing/views/TermsView.vue'
import CarsharingView from '@landing/views/CarsharingView.vue'

const landingModuleRoutes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            layout: 'LandingLayout',
            title: 'Главная'
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
        meta: {
            layout: 'ProfileLayout',
            title: 'Профиль'
        }
    },
    {
        path: '/profilesettings',
        name: 'ProfileSettings',
        component: ProfileSettingsView,
        meta: {
            layout: 'ProfileLayout',
            title: 'Профиль'
        }
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: CatalogView,
        meta: {
            layout: 'LandingLayout',
            title: 'Каталог'
        }
    },
    {
        path: '/terms',
        name: 'Terms',
        component: TermsView,
        meta: {
            layout: 'LandingLayout',
            title: 'Условия'
        }
    },
    {
        path: '/carsharing',
        name: 'Carsharing',
        component: CarsharingView,
        meta: {
            layout: 'LandingLayout',
            title: 'Каршеринг'
        }
    }
]

export default landingModuleRoutes