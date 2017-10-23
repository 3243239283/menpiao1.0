<template>
  <div class="hello">
    <div class="contentbox" style="height: calc(100vh - 105px);">
      <div class="tent">
        <el-row :gutter="20">
          <el-col v-for="i in homeMessage" :span="4"><div class="grid-content bg-purple">{{ i.name }}<br>{{ i.num }}</div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      homeMessage:[
        {name:'人数',num:'30'},
        {name:'关注度',num:'30%'},
        {name:'总投资额',num:'30000000'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'},
        {name:'人数',num:'30'}
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  height: 100%;
  background-color: #d8dce3;
  .contentbox{
    overflow: auto;    
    .tent{
      margin:0 15px;
    }
  }
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin: 10px 0px 0px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 100px;
  background:#efefef;
  line-height: 50px;
  text-align: center;
  color: #696c74;
  font-size:16px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
