import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./pages/Home.vue'),
            props: {
                badge: 'SmartOdds.app • Browser extension for value bettors',
                headline: 'Spot profitable odds instantly—right while you browse',
                subHeadline: 'The SmartOdds Chrome Extension overlays better bookmaker odds directly on the site you’re using—so you never miss a higher payout again.',
                cta: 'Add SmartOdds to Chrome',
                ctaFooter: 'No signup. Setup in under 2 minutes.',
                productName: 'SmartOdds'
            }
        }
    ]
})
