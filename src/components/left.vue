<template>
  <div class="left">
    <div class="member">会员：18650197779</div>
    <div class="treeclass">
      <div class="tab">
        <ul>
          <li :class="[current == 1? 'active':'']" @click="tabFun(1)"><i class="iconfont">&#xe6ab;</i></li>
          <li :class="[current == 2? 'active':'']" @click="tabFun(2)"><i class="iconfont">&#xe6c8;</i></li>
          <li :class="[current == 3? 'active':'']" @click="tabFun(3)"><i class="iconfont">&#xe609;</i></li>
        </ul>
      </div>
      <div class="modular">
        <div class="modu" v-show="current==1">
          <ul>
            <li><router-link to="./home">首页</router-link></li>
            <li><router-link to="./about">关于我们</router-link></li>
          </ul>
        </div>
        <div class="modu" v-show="current==2">2</div>
        <div class="modu" v-show="current==3">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () { 
    return {
      current:1
    }
  },
  methods: {
    tabFun(type){
      this.current = type;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.left{
  height: 100%;
  float: left;
  width: 180px;
  background: #FFF;
  .member{
    height:41px; 
    background-color:#3b4354;
    line-height:41px;
    color:#ccc; 
    padding-left:10px;
    font-size:14px;
  }
  .treeclass{
    font-size: 12px;
    color: #696c74;
    .tab{
      height: 30px;
      .active{
        background-color: #fff;
        color: #262b36;
      }
      ul li{
        display: inline-block;
        width: 60px;
        float: left;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #505b72;
        color: #fff;
        i{
          cursor: pointer;
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .modular{
      li{
        text-align: center;
        line-height: 30px;
        a{
          color: #666;font-size: 16px;
        }
      }
    }
  }
}
</style>
