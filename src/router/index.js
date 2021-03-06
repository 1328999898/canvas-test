import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      title: '首页',
      component: () => import("@/components/index")
    },
    {
      path: '/canvas-font',
      name: 'canvas-font',
      title: '字体',
      component: () => import('@/components/canvas-font')
    },
    {
      path: '/lineChart',
      name: 'lineChart',
      title: '折线图(多条线)',
      component: () => import('@/components/lineChart')
    },
    {
      path: '/canvas1',
      name: 'canvas1',
      title: '矩形',
      component: () => import('@/components/canvas1')
    },
    {
      path: '/canvas2',
      name: 'canvas2',
      title: '重叠矩形1',
      component: () => import('@/components/canvas2')
    },
    {
      path: '/canvas3',
      name: 'canvas3',
      title: '重叠矩形2',
      component: () => import('@/components/canvas3')
    },
    {
      path: '/canvas4',
      name: 'canvas4',
      title: '三角1',
      component: () => import('@/components/canvas4')
    },
    {
      path: '/canvas6',
      name: 'canvas6',
      title: '三角2',
      component: () => import('@/components/canvas6')
    },
    {
      path: '/canvas5',
      name: 'canvas5',
      title: '笑脸',
      component: () => import('@/components/canvas5')
    },
    // {
    //   path: '/canvas7',
    //   name: 'canvas7',
    //   title: 'canvas7',
    //   component: () => import('@/components/canvas7')
    // },
    // {
    //   path: '/canvas8',
    //   name: 'canvas8',
    //   title: 'canvas8',
    //   component: () => import('@/components/canvas8')
    // },
    {
      path: '/canvas-img1',
      name: 'canvas-img1',
      title: 'canvas-img1',
      component: () => import('@/components/canvas-img1')
    },
    {
      path: '/canvas-img2',
      name: 'canvas-img2',
      title: '折线图(图片刻度)',
      component: () => import('@/components/canvas-img2')
    },
    {
      path: '/canvas-img3',
      name: 'canvas-img3',
      title: '平铺图像',
      component: () => import('@/components/canvas-img3')
    },
    {
      path: '/canvas-img4',
      name: 'canvas-img4',
      title: '切片',
      component: () => import('@/components/canvas-img4')
    },
    {
      path: '/canvas-img5',
      name: 'canvas-img5',
      title: '美术馆',
      component: () => import('@/components/canvas-img5')
    },
    {
      path: '/canvas-img6',
      name: 'canvas-img6',
      title: '下载',
      component: () => import('@/components/canvas-img6')
    },
    {
      path: '/canvas9',
      name: 'canvas9',
      title: '跟随鼠标移动',
      component: () => import('@/components/canvas9')
    },
    {
      path: '/canvas10',
      name: 'canvas10',
      title: '旋转',
      component: () => import('@/components/canvas10')
    },
    {
      path: '/canvas11',
      name: 'canvas11',
      title: '状态',
      component: () => import('@/components/canvas11')
    },
    {
      path: '/canvas12',
      name: 'canvas12',
      title: '移动',
      component: () => import('@/components/canvas12')
    },
    {
      path: '/canvas13',
      name: 'canvas13',
      title: '旋转',
      component: () => import('@/components/canvas13')
    },
    {
      path: '/canvas14',
      name: 'canvas14',
      title: '缩放',
      component: () => import('@/components/canvas14')
    },
    {
      path: '/canvas15',
      name: 'canvas15',
      title: '变形',
      component: () => import('@/components/canvas15')
    },
    {
      path: '/canvas16',
      name: 'canvas16',
      title: '贝塞尔曲线',
      component: () => import('@/components/canvas16')
    },
    {
      path: '/canvas17',
      name: 'canvas17',
      title: 'Path2D',
      component: () => import('@/components/canvas17')
    },
    {
      path: '/canvas18',
      name: 'canvas18',
      title: 'fillStyle',
      component: () => import('@/components/canvas18')
    },
  ]
})
