import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from '../router'

const state = {			//状态对象
	login:{
		show:true
	},
	pageArr:[
		{
			txt:'首页',
			src:'./home'
		},
		{
			txt:'关于我们',
			src:'./about'
		}
	]
}
const mutations = {		//触发状态的方法，同步,第一个参数默认state，第二个参数自定义
	changeLogin({login},prop){
		login[prop.key] = prop.val;
	},
	changePageArr({pageArr},prop){
		pageArr[prop.key] = prop.val;
	}
}
const getters = {		//计算state
}

const actions = {		//异步触发状态
}


export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})