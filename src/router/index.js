import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/Homepage.vue'
import document from '../views/Document.vue'
import register from '../Register.vue'
import login from '../Login.vue'
import document_1 from '../views/Document_1.vue'
import document_1_1 from '../views/Document_1(1).vue'
import document_1_2 from '../views/Document_1(2).vue'
import document_1_3 from '../views/Document_1(3).vue'
import document_1_4 from '../views/Document_1(4).vue'
import document_2 from '../views/Document_2.vue'
import document_2_1 from '../views/Document_2(1).vue'
import document_2_2 from '../views/Document_2(2).vue'
import document_2_3 from '../views/Document_2(3).vue'
import document_2_4 from '../views/Document_2(4).vue'
import document_2_5 from '../views/Document_2(5).vue'
import document_2_6 from '../views/Document_2(6).vue'
import document_2_7 from '../views/Document_2(7).vue'
import document_2_8 from '../views/Document_2(8).vue'
import document_3 from '../views/Document_3.vue'
import document_3_1 from '../views/Document_3(1).vue'
import document_3_2 from '../views/Document_3(2).vue'
import document_3_3 from '../views/Document_3(3).vue'
import document_4 from '../views/Document_4.vue'
import document_4_1 from '../views/Document_4(1).vue'
import document_4_2 from '../views/Document_4(2).vue'
import document_4_3 from '../views/Document_4(3).vue'
import document_5 from '../views/Document_5.vue'
import document_5_1 from '../views/Document_5(1).vue'
import document_5_2 from '../views/Document_5(2).vue'
import document_6 from '../views/Document_6.vue'
import document_6_1 from '../views/Document_6(1).vue'
import document_6_2 from '../views/Document_6(2).vue'
import document_6_3 from '../views/Document_6(3).vue'
import document_7 from '../views/Document_7.vue'
import document_8 from '../views/Document_8.vue'
import document_8_1 from '../views/Document_8(1).vue'
import document_8_2 from '../views/Document_8(2).vue'
import document_8_3 from '../views/Document_8(3).vue'
import document_9 from '../views/Document_9.vue'
import document_9_1 from '../views/Document_9(1).vue'
import document_9_2 from '../views/Document_9(2).vue'
import document_9_3 from '../views/Document_9(3).vue'
import document_10 from '../views/Document_10.vue'
import document_11 from '../views/Document_11.vue'
import document_11_1 from '../views/Document_11(1).vue'
import document_12 from '../views/Document_12.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: homepage
  },
  {
    path: '/??????????????????',
    name: 'Document',
    component: document
  },
  {
    path: '/????????????????????????',
    name: 'Document1',
    component: document_1
  },
  {
    path: '/?????????????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document_1_1',
    component: document_1_1
  },
  {
    path: '/?????????????????????????????????????????????????????????????????????',
    name: 'Document1_2',
    component: document_1_2
  },
  {
    path: '/??????????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document1_3',
    component: document_1_3
  },
  {
    path: '/???????????????????????????????????????????????????????????????',
    name: 'Document1_4',
    component: document_1_4
  },
  {
    path: '/?????????????????????????????????',
    name: 'Document2',
    component: document_2
  },
  {
    path: '/????????????????????????????????????????????????',
    name: 'Document_2_1',
    component: document_2_1
  },
  {
    path: '/?????????????????????????????????????????????',
    name: 'Document2_2',
    component: document_2_2
  },
  {
    path: '/?????????????????????????????????????????????????????????',
    name: 'Document2_3',
    component: document_2_3
  },
  {
    path: '/????????????????????????????????????????????????????????????????????????',
    name: 'Document_2_4',
    component: document_2_4
  },
  {
    path: '/??????????????????????????????????????????????????????????????????????????????',
    name: 'Document_2_5',
    component: document_2_5
  },
  {
    path: '/???????????????????????????????????????????????????????????????',
    name: 'Document2_6',
    component: document_2_6
  },
  {
    path: '/??????????????????????????????????????? 70 ?????? ????????????????????????',
    name: 'Document2_7',
    component: document_2_7
  },
  {
    path: '/????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document2_8',
    component: document_2_8
  },
  {
    path: '/??????????????????????????????????????????',
    name: 'Document3',
    component: document_3
  },
  {
    path: '/???????????????????????????????????????20????????????????????????',
    name: 'Document3_1',
    component: document_3_1
  },
  {
    path: '/???????????????????????????????????????15-20??????',
    name: 'Document3_2',
    component: document_3_2
  },
  {
    path: '/????????????????????????????????????????????????????????????15??????',
    name: 'Document3_3',
    component: document_3_3
  },
  {
    path: '/????????????????????????',
    name: 'Document4',
    component: document_4
  },
  {
    path: '/?????????????????????????????????????????????????????????????????????',
    name: 'Document4_1',
    component: document_4_1
  },
  {
    path: '/????????????????????????????????????????????????????????????????????????',
    name: 'Document4_2',
    component: document_4_2
  },
  {
    path: '/????????????????????????????????????????????????????????????',
    name: 'Document4_3',
    component: document_4_3
  },
  {
    path: '/?????????????????????',
    name: 'Document5',
    component: document_5
  },
  {
    path: '/??????????????????????????????????????????????????????????????????',
    name: 'Document5_1',
    component: document_5_1
  },
  {
    path: '/?????????????????????????????????????????????????????????????????????',
    name: 'Document5_2',
    component: document_5_2
  },
  {
    path: '/????????????????????????',
    name: 'Document6',
    component: document_6
  },
  {
    path: '/?????????????????????????????????????????????',
    name: 'Document6_1',
    component: document_6_1
  },
  {
    path: '/??????????????????????????????????????????',
    name: 'Document6_2',
    component: document_6_2
  },
  {
    path: '/??????????????????????????????????????????????????????',
    name: 'Document6_3',
    component: document_6_3
  },
  {
    path: '/???????????????????????????????????????',
    name: 'Document7',
    component: document_7
  },
  {
    path: '/???????????????????????????????????????',
    name: 'Document8',
    component: document_8
  },
  {
    path: '/??????????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document8_1',
    component: document_8_1
  },
  {
    path: '/?????????????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document8_2',
    component: document_8_2
  },
  {
    path: '/??????????????????????????????????????????????????????????????????????????????????????????',
    name: 'Document8_3',
    component: document_8_3
  },
  {
    path: '/???????????????????????????',
    name: 'Document9',
    component: document_9
  },
  {
    path: '/???????????????????????????????????????????????????????????????',
    name: 'Document9_1',
    component: document_9_1
  },
  {
    path: '/?????????????????????????????????????????????',
    name: 'Document9_2',
    component: document_9_2
  },
  {
    path: '/????????????????????????????????????????????????????????????',
    name: 'Document9_3',
    component: document_9_3
  },
  {
    path: '/??????????????????????????????',
    name: 'Document10',
    component: document_10
  },
  {
    path: '/?????????????????????????????????',
    name: 'Document11_1',
    component: document_11
  },
  {
    path: '/?????????????????????????????????',
    name: 'Document11',
    component: document_11_1
  },
  {
    path: '/??????????????????????????????????????????????????????????????????',
    name: 'Document12',
    component: document_12
  },
  {
    path: '/?????????????????????????????????',
    name: 'register',
    component: register
  },
  {
    path: '/?????????????????????????????????',
    name: 'login',
    component: login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
