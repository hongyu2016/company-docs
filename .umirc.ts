/*
 * @author: liuhy
 * @Date: 2021-10-21 10:42:27
 * @LastEditTime: 2021-11-15 14:36:06
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'yugeCMS',
  mode: 'site',
  // locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
  description: 'yugeCMS使用介绍及后端api文档',
  logo: '/logo.png',
  favicon: '/favicon.ico',
  navs: [
    {
      title: '后台管理系统',
      path: '',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: '主页', path: '/backend-use' },
        { title: '内容发布管理', path: '/backend-use-content' },
        { title: '内容相关设置', path: '/backend-use-content-config' },
        { title: '用户管理', path: '/backend-use-backenduser' },
        { title: '权限管理', path: '/backend-use-permission' },
        { title: '系统设置', path: '/backend-use-siteconfig' },
      ],
    },
    {
      title: 'api',
      path: '/backend-use-api',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      // children: [
      //   { title: '主页', path: '/backend-use-api' },
        
      // ],
    },
  ]
});
