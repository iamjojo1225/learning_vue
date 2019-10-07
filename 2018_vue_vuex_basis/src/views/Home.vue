<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hr>
		<p>count: {{count}}</p>
		<p>getters: {{count_3_bloon}}<br>(被3整除時會true)</p>
		<button @click="addCount">+1</button>
		<hr>
		<div class="row">
			<div class="col-md-12">
				<div class="col-md-12">				
					<h3>課程列表表</h3>
				</div>
				<div class="lessonBox" v-for="(lesson,key) in lessons" :key="key">
					<img :src="lesson.img" alt="">
					<a :href="lesson.url">
						<p>{{lesson.title}}</p>
					</a>
					<p>{{lesson.teacher}}</p>	
				</div>
			</div>			
		</div>		
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  //使用計算屬性，動態偵測count的數值

  // //基礎寫法
  // computed:{
  // 	count(){
  // 		console.log("this是VUE嗎?",this)
  // 		return this.$store.state.count;
  // 	}
  // },
  // //基礎寫法
  // methods:{
  // 	addCount(){
  //		使用commit 呼叫$store 內的資料
  // 		this.$store.commit('addCount');
  // 	}
  // }

  //mapState mapMutations 寫法二 *字串
  computed: {
    ...mapState(["count"]), //將mapState灑到computed
    ...mapGetters(["count_3_bloon"]), //讀取
    lessons() {
      // console.log("課程: ", this.$store.state.lessons)
      return this.$store.state.lessons;
    }
  },
  methods: {
    ...mapMutations(["addCount"]),
    //1.呼actions 的方式 (組1)
    ...mapActions(["fetchLessons"])
  },
  mounted() {
    //2.呼actions 的方式 (組1)
    this.fetchLessons();
  }
};
</script>

<style lang="sass" scoped>
.lessonBox
	display: inline-block
	margin: 10px
	padding: 10px
	background-color: rgba(#ffd0e8,0.5)
	border-radius: 10px
	box-shadow: 3px 3px 3px 5px rgba(#a0ebe6,0.5)
	img
		width: 300px 
		max-height: 160px
</style>
