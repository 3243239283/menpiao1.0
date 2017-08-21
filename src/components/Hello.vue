<template>
  <div class="hello">
    <div class="contentbox" style="height: calc(100vh - 105px);">
      <div class="tent">
        门票进存销
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
</style>
