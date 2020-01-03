<template>
    <div>
        <headpage></headpage>
        <div class="message">
          <div class="message__title">
            <el-input v-model="name" class="message__title-in1" placeholder="请输入昵称"></el-input>
            <el-input
                class="message__title-in2"
                type="textarea"
                :rows="4"
                maxlength="100"
                resize = "none"
                show-word-limit
                placeholder="说点什么吧"
                v-model="msg">
            </el-input>
            <span class="message__title-sign">点评一下：</span>
            <el-rate
              class="message__title-grade"
              v-model="grade"
              show-text>
            </el-rate>
            <el-button class="message__title-btn" type="primary" plain @click="push()">留下足迹</el-button>
          </div>
          <div class="message__list">
            <div v-for="(item, index) in list" :key="index" class="message__list-one">
              <span class="message__list-one__name">{{item.name}}</span>
              <span class="message__list-one__time">{{item.time}}</span>
              <el-rate
                class="message__list-one__rate"
                v-model="item.grade"
                disabled
                text-color="#ff9900">
              </el-rate>
              <span class="message__list-one__msg">{{item.msg}}</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      name: '',
      msg: '',
      grade: 0,
      list: [
        {name: '乔路非', msg: '很不错的博客', grade: 3, time: '2019-01-03 10:17'},
        {name: '乔路非', msg: '很不错的博客', grade: 3, time: '2019-01-03 10:17'},
        {name: '乔路非', msg: '很不错的博客', grade: 3, time: '2019-01-03 10:17'}
      ]
    }
  },
  components: {
    headpage
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
    push () {
      let map = {}
      if (this.name === '' || this.name === null) {
        this.$message({
          message: '留个昵称呗',
          type: 'warning'
        })
      } else if (this.msg === '' || this.msg === null) {
        this.$message({
          message: '说点什么吧',
          type: 'warning'
        })
      } else {
        map['name'] = this.name
        map['msg'] = this.msg
        map['grade'] = this.grade
        map['time'] = this.getTime()
        this.list.push(map)
        this.$message({
          message: '留言成功',
          type: 'success'
        })
        this.name = ''
        this.msg = ''
        this.grade = 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
.message{
  position: relative;
  &__title{
    padding: 2% 2% 2% 2%;
    background-color: rgba(22,183,150,0.8);
    border-radius: 10px;
    &-in1{
      width: 15%;
      margin: 0 0 0 5%;
    }
    &-in2{
      width: 50%;
      display: block;
      margin: 2% 0 0 5%;
    }
    &-sign{
      display: inline-block;
      color: aliceblue;
      margin: 2% 0 0 5%;
    }
    &-grade{
      display: inline-block;
    }
    &-btn{
      display: block;
      margin: 1% 0 0 5%;
    }
  }
  &__list{
    &-one{
      background-color: rgba(64,158,255,0.8);
      padding: 1% 2% 1% 2%;
      margin: 1% 2% 1% 2%;
      border-radius: 5px;
      &__name{
        font-size: 18px;
        color: aliceblue;
      }
      &__time{
        font-size: 12px;
        color: #303133;
        margin-left: 2%;
      }
      &__rate{
        display: inline-block;
        margin-left: 2%;
      }
      &__msg{
        font-size: 18px;
        color: #fff;
        font-family: '微软雅黑';
        display: block;
        margin:1% 0 0 5%
      }
    }
  }
}
</style>
