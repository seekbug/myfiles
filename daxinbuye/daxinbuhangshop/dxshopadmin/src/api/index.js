import axios from 'axios'
import qs from 'qs'

// 后期所有请求地址都会加这个前缀
axios.defaults.baseURL = 'http://192.168.2.104/api/'

// 通过请求拦截器统一设置token
axios.interceptors.request.use(function (config) {
    config.headers['token'] = localStorage.getItem('token') || '$2a$10$Q9y2WrGidaxOE3C8ddwXH.gjXJqNs3sy0L3mtYfMTIIOW2m1A0D.a'
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});



//登录
export const postLoginApi = postData => {
    return axios.post('/login', qs.stringify(postData)).then(res => res.data)
}

//商品列表
export const postCateListApi = postData => {
    return axios.post('/spu/findPage?pageIndex=' + postData.pageIndex + '&pageSize=' + postData.pageSize, postData.searchBean).then(res => res.data)
}
//商品列表（改变状态）
export const postCateStateApi = params => {
    return axios.post('/spu/putOnOrPullDown', params).then(res => res.data)
}
//商品列表（删除）
export const deleteCateListApi = params => {
    return axios.delete('/spu/delete', { params }).then(res => res.data)
}

//分类列表
export const getSortListApi = params => {
    return axios.get('/category/listTree').then(res => res.data)
}
//分类列表（增加）
export const putSortListApi = params => {
    return axios.put('/category/add', params).then(res => res.data)
}
//分类列表（编辑）
export const postSortListApi = params => {
    return axios.post('/category/update', params).then(res => res.data)
}
//分类列表（删除）
export const deleteSortListApi = params => {
    return axios.delete('/category/delete', { data: params.id }).then(res => res.data)
}












