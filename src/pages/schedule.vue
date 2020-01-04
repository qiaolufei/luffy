<template>
    <div>
        <headpage></headpage>
        <div class="schedule">
            <div class="schedule__title">
              <span class="schedule__title-name">待办事项</span>
              <br>
              <el-input
                class="schedule__title-in"
                placeholder="要做点什么呢？"
                v-model="msg"
                clearable>
              </el-input>
              <el-button type="primary" @click="add()" icon="el-icon-circle-plus-outline">添加</el-button>
            </div>
            <div class="schedule__list">
              <div v-for="(item, index) in list" :key="index" class="schedule__list-one">
                <i class="el-icon-circle-close" @click="close(index)"></i>
                <span class="schedule__list-one-msg">{{item.msg}}</span>
                <span class="schedule__list-one-time">{{item.time}}</span>
              </div>
            </div>
        </div>
        <footpage></footpage>
    </div>
</template>
<script>
import headpage from '@/components/header'
import footpage from '@/components/footer'
export default {
  data () {
    return {
      msg: '',
      list: [
        {msg: '更新vue笔记', time: '2019-01-03 10:17'},
        {msg: '记录一下今天的bug', time: '2019-01-03 10:17'},
        {msg: '更新vue笔记', time: '2019-01-03 10:17'},
        {msg: '更新vue笔记', time: '2019-01-03 10:17'}
      ]
    }
  },
  components: {
    headpage,
    footpage
  },
  methods: {
    getTime () {
      let d = new Date()
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let day = d.getDate()
      let hour = d.getHours()
      let minute = d.getMinutes()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (day >= 1 && day <= 9) {
        day = '0' + day
      }
      if (hour >= 1 && hour <= 9) {
        hour = '0' + hour
      }
      if (minute >= 0 && minute <= 9) {
        minute = '0' + minute
      }
      let dt = year.toString() + '-' + month.toString() + '-' + day.toString() + ' ' + hour.toString() + ':' + minute.toString()
      return dt
    },
    add () {
      let map = {}
      if (this.msg === '' || this.msg === null) {
        this.$message({
          message: '请输入待办事项',
          type: 'warning'
        })
      } else {
        map['msg'] = this.msg
        map['time'] = this.getTime()
        this.list.push(map)
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.msg = ''
      }
    },
    close (index) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.list.pop(index)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.schedule{
  position: relative;
  &__title{
    text-align: center;
    padding: 2% 2% 2% 2%;
    background-color: rgba(22,183,150,0.8);
    border-radius: 10px;
    &-name{
      font-family: '微软雅黑';
      color: #2C3E51;
      font-size: 25px;
      font-weight: 800;
    }
    &-in{
      display: inline-block;
      margin-top: 2%;
      width: 30%;
    }
  }
  &__list{
    &-one{
      display: inline-block;
      padding: 1% 2% 1% 2%;
      background-color: #2C3E51;
      color: aliceblue;
      border-radius: 5px;
      margin: 2% 0 0 2%;
      i{
        margin-left: 90%;
        font-size: 20px;
      }
      i:hover{
        color: #409EFF;
      }
      &-msg{
        margin-top: 1%;
        font-size: 22px;
        display: block;
      }
      &-time{
        display: block;
        color: #909399;
        margin-top: 1%;
        margin-left: 3%;
      }
    }
  }
}
</style>
