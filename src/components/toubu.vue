<template>
  <div class="header">
  	<div class="logo" v-show="login.show">
  		<h2><router-link to="./home">管理系统</router-link></h2>
  	</div>
  	<div class="hinge">
  		<a class="hingebtn" @click='showleftFun()' href="javascript:"><i class="iconfont">&#xe61a;</i></a>
  	</div>
  	<div class="search">
  		<a class="adminbtn" href="javascript:">订单管理</a>
  		<label><input type="text" placeholder="会员切换..." name=""><span class="iconfont">&#xe616;</span></label>
  	</div>
  	<div class="member">
  		当前会员:<span>18650197779</span>
  		<a href="javascript:">退出系统</a>
  	</div>
  	<div class="btnbox" style="width:calc(100% - 180px)">
		<span v-for="(item,index) in pageArr"><router-link :to="item.src">{{ item.txt }}</router-link><i class="iconfont" @click.stop="close(index)" v-show="item.txt != '首页'">&#xe622;</i></span>
	</div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
	name: 'header',
	data () {
		return {
	  		msg: 'header'
		}
	},
	computed:{
	    ...mapState([
	    	'login',
	    	'pageArr'
	    ])
	},
    methods:{
        ...mapMutations([
			'changeLogin',
			'changePageArr'
        ]),
        ...mapActions([ 
            
        ]),
        close(index){
			console.log('11');
        },
        showleftFun(){
        	console.log(this.login.show);
        	if(this.login.show==true){
        		this.changeLogin({
	                key:'show',
	                val:false
	            })
        	}else{
        		this.changeLogin({
	                key:'show',
	                val:true
	            })
        	}        	
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
	height: 64px;
    background-color: #262b36;
    position: relative;
    width: 100%;
	a{
		color: #bbb;
	}
	.logo{
		text-align: center;
		width: 180px;
	    height: 64px;
	    line-height: 64px;
	    background-color: #20242d;
	    float: left;
		h2{
			font-size: 24px;
		}		
	    a{
    	    color: #1395BB;
	    }
	}
	.hinge{
		height: 64px;
    	float: left;
    	a.hingebtn{
		    width: 64px;
		    height: 64px;
		    display: inline-block;
		    text-align: center;
		    line-height: 64px;
		    top: 0;
		    left: 0;
		    cursor: pointer;
		    color: #778395;
		    -webkit-transition: all 0.2s ease-out 0s;
		    -o-transition: all 0.2s ease-out 0s;
		    transition: all 0.2s ease-out 0s;
		    i{
		    	font-size: 21px;
		    }
    	}
	}
	.search{
		display: inline-block;
	    float: left;
	    height: 64px;
		a.adminbtn{
    		display: inline-block;
		    text-align: center;
		    background-color: #3b4354;
		    border: 1px solid #262b36;
		    color: #bbb;
		    letter-spacing: 3px;
		    margin-left: 5px;
		    text-decoration: none;
		    border-radius: 3px;
	        font-size: 12px;
	        padding: 7px 12px 8px;
	        margin:15px 0 0;
    	}
    	a.adminbtn:hover{
    		border:1px solid #efefef;
    	}
    	label{
    		display: inline-block;
    		position: absolute;
		    top: 15px;
		    right: 250px;
		    input{
			    border: 0;
			    color: #ffffff;
			    background-color: #3b4354;
			    font-size: 12px;
			    line-height: 1.42857143;
			    width: 230px;
			    padding: 9px 12px;			    
	    	}
	    	span{
	    		display: inline-block;
	    		position: absolute;
	    		right: 7px;
	    		color: #FFF;
	    		font-size: 18px;
	    		line-height: 35px;
	    	}
    	}
	}
	.member{
		display:inline-block;
		float: right;
		height: 64px;
		color: #ccc;
		line-height: 64px;
		margin-right: 20px;
		font-size: 12px;
		a{
			color: #ccc;
			padding-left: 10px;
		}
	}
	.btnbox{
		position: absolute;
		top: 64px;
		margin:0 0 0 180px;
		background-color: #667393;
    	span{
	      	display: inline-block;
	      	text-align: center;
	      	min-width: 80px;
	      	height: 38px;
	      	line-height: 38px;
	      	margin-top: 3px;
	      	color: #FFF;
	      	font-weight: bold;
	      	cursor: pointer;
	      	letter-spacing: 1px;
	      	font-family: 微软雅黑;
	      	font-size: 12px;
	      	position: relative;
	      	padding: 0 10px 0 0;
			i{
				position: absolute;
				right: 5px;
				font-size: 12px;
				line-height: 10px;
				top: 14px;
			}
    	}
    	span.current{
      		background-color: #d8dce3;
      		color: #555;
    	}
    }
}
</style>