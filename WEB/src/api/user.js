/**
 * 用户管理接口
 */

import request from './request';

export default {
   addSysUser: (userInfo= {})=> request({
      url: '/user/addSysUser',
      params: userInfo
   }),
   removeSysUser: (userInfo = {})=> request({
      url: '/user/removeSysUser',
      params: userInfo
   }),
   editSysUser: (userInfo = {})=> request({
      url: '/user/editSysUser',
      params: userInfo
   }),
   querySysUsers: (userInfo = {})=> request({
      url: '/user/querySysUsers',
      method: 'GET',
      params: userInfo
   }),
   sysUserLogin: (userInfo = {})=> request({
      url: '/user/sysUserLogin',
      params: userInfo
   }),
}
