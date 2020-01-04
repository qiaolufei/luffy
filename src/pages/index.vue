<template>
    <div>
        <headpage></headpage>
        <div class="index">
        <div class="index-list">
          <el-carousel height="200px" class="index-list__car">
            <el-carousel-item v-for="item in imgs" :key="item">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
          <h2>最新博客</h2>
          <div class="index-list__blog">
            <el-link class="index-list__blog-title" @click="to()">{{this.blog.title}}</el-link>
              <i class="el-icon-date" style="margin-left:5%"></i><span>{{this.blog.time}}</span>
              <el-divider content-position="right">乔路非</el-divider>
              <span v-for="tag in this.blog.tags" :key="tag" class="index-list__blog-tag">{{tag}}</span>
              <span class="index-list__blog-msg">{{this.blog.msg}}</span>
              <i class="el-icon-view" style="color:#409EFF;margin-left:80%"></i><span class="index-list__blog-look">{{this.blog.look}}</span>
              <i class="el-icon-s-opportunity" style="color:#FFDC52;margin-left:3%"></i><span class="index-list__blog-up">{{this.blog.up}}</span>
          </div>
          <h2>最近待办</h2>
          <div class="index-list__schedule">
            <span class="index-list__schedule-msg">{{this.schedule.msg}}</span>
            <span class="index-list__schedule-time">{{this.schedule.time}}</span>
          </div>
          <h2>最新留言</h2>
          <div class="index-list__message">
            <span class="index-list__message__name">{{this.message.name}}</span>
              <span class="index-list__message__time">{{this.message.time}}</span>
              <el-rate
                class="index-list__message__rate"
                v-model="this.message.grade"
                disabled
                text-color="#ff9900">
              </el-rate>
              <span class="index-list__message__msg">{{this.message.msg}}</span>
          </div>
        </div>
        <div class="index-other">
           <div class="index-other__me">
             <img class="index-other__me-head" src="../img/me1.jpg" alt="">
             <span class="index-other__me-name">乔路非</span>
             <span class="index-other__me-msg">一只努力进取的前端小白</span>
             <el-divider content-position="center">社交账号</el-divider>
             <el-popover
                    v-for="(item,index) in info" :key="index"
                    placement="bottom-start"
                    :title="item.title"
                    width="200"
                    trigger="hover"
                    :content="item.msg">
                <img slot="reference"  :src=item.logo class="index-other__me-logo" />
              </el-popover>
           </div>
           <div class="index-other__calendar">
            <el-calendar v-model="time" style="font-size:10px">
            </el-calendar>
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
      imgs: [require('../img/p1.jpg'), require('../img/p2.jpg'), require('../img/p3.jpg'), require('../img/p4.jpg')],
      info: [
        {
          logo: require('../img/qq.jpg'),
          title: 'QQ',
          msg: '1243312228'
        },
        {
          logo: require('../img/wechat.jpg'),
          title: '微信',
          msg: 'qlc0607'
        },
        {
          logo: require('../img/git.jpg'),
          title: 'GitHub',
          msg: 'https://github.com/qiaolufei'
        },
        {
          logo: require('../img/csdn.jpg'),
          title: 'CSDN',
          msg: 'https://me.csdn.net/qq_40731976'
        },
        {
          logo: require('../img/email.jpg'),
          title: 'email',
          msg: 'luffy0101@163.com'
        }
      ],
      blog: {title: 'vue生命周期', time: '2019-12-23 14:30', msg: 'beforeCreate在实例初始化前被触发。created会在实例初始化之后、被添加到DOM之前触发。', look: 1212, up: 100, tags: ['Vue.js', 'js']},
      schedule: {msg: '更新vue笔记', time: '2019-01-03 10:17'},
      message: {name: '店小二', msg: '很不错的博客', grade: 5, time: '2020-01-03 10:17'},
      time: new Date()
    }
  },
  components: {
    headpage,
    footpage
  },
  methods: {
    to () {
      this.$router.push({path: '/blogInfo?id=3'})
    }
  }
}
</script>
<style lang="less" scoped>
.index{
  position: relative;
  display: flex;
  flex-direction: row;
  &-list{
    margin: 3% 0 0 2%;
    width: 68%;
    &__car{
      text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
    }
    &__blog{
      background-color: rgba(216,226,235,0.8);
      padding: 2% 2% 2% 2%;
      border-radius: 10px;
      margin-top: 2% 0 0 2%;
      .el-divider{
        background-color: aliceblue;
      }
      &-title{
        font-family: "Microsoft YaHei";
        font-size: 25px;
      }
      &-tag{
        background-color: rgba(3,101,100,0.7);
        color:aliceblue;
        display: inline-block;
        border-radius: 5px;
        padding: 0.5% 1% 0.5% 1%;
        margin: 0 0 0 1%;
      }
      &-msg{
        display: block;
        font-family: '宋体';
        padding: 2% 1% 2% 2%;
      }
    }
    &__schedule{
      display: inline-block;
      padding: 1% 2% 1% 2%;
      background-color: #2C3E51;
      color: aliceblue;
      border-radius: 5px;
      margin: 0 0 0 2%;
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
    &__message{
      background-color: rgba(64,158,255,0.8);
      padding: 1% 2% 1% 2%;
      margin: 1% 2% 10% 2%;
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
  &-other{
    margin: 3% 0 0 3%;
    width: 26%;
    height: 500px;
    &__me{
      width: 94%;
      padding: 3% 3% 3% 3%;
      text-align: center;
      background-color: rgba(22,183,150,0.8);
      border-radius: 10px;
      &-head{
        width: 40%;
        border-radius: 50%;
      }
      &-name{
        display: block;
        font-size: 18px;
        margin-top: 2%;
        color: #fff;
      }
      &-msg{
        display: block;
        font-size: 15px;
        margin-top: 2%;
      }
      &-logo{
        width: 10%;
        border-radius: 50%;
        margin: 3% 0 0 3%
      }
    }
    &__calendar{
      width: 98%;
      border: 1px solid rgba(22,183,150,0.8);
      border-radius: 10px;
      margin-top: 3%
    }
  }
}
</style>
