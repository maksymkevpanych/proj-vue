import { createRouter,createWebHashHistory } from "vue-router";
import HomePage from "../components/HomePage.vue"
import TestingPage from "../components/TestingPage.vue"

const routes=[
    {
        path:"/",
        name:'HomePage',
        component:HomePage
    },
    {
        path:"/testing",
        name:'TestingPage',
        component:TestingPage
    }
]
const router = createRouter({
    
    history: createWebHashHistory(),
    routes, 
  })
  export default router