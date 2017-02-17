<template>
	<div class="home-view">
		<navigation :program-class="programClass"></navigation>
		<banner></banner>
		<menus></menus>
		<menus1></menus1>
	</div>
</template>
<script>
	import Banner from '../components/banner.vue'
	import Navigation from '../components/navigation.vue'
	import Menus from '../components/menus.vue'
	import Menus1 from '../components/menus1.vue'
	export default {
		name:'home-view',
		components:{Banner,Navigation,Menus,Menus1},
		data(){
			return {
				
			}
		},
		preFetch (store) {
		    console.log('首屏渲染，获取状态');
		    return store.dispatch('program_class_data');
		},
		computed:{
		  programClass(){
		    return this.$store.state.common.programClass
		  }
		},
		beforeMount(){
		  	this.$store.dispatch('program_class_data');
		}
	}
</script>