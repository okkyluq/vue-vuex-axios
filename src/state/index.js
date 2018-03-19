import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store  = new Vuex.Store({
	state: {
		post:[]
	},

	getters: {
        ambilData:function(state){
            return state.post;
        }
	},
	mutations: {
		setData(state, post) {
            state.post = post;
        },
	},

	actions: {
        getData:function({commit}){
        	axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => commit('setData', response.data))
                .catch(error => console.log(error));
        }
	},
})
export default store



