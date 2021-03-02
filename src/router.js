import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Messages from './components/Messages.vue'
import Comments from './components/Comments.vue'
import Profile from './components/Profile.vue'
import Administrator from './components/Administrator.vue'


Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/Profile', component: Profile },
        { path: '/messages', component: Messages },
        { path: '/comments/:id', component: Comments },
        { path: '/administrator', component: Administrator }
    ]
})