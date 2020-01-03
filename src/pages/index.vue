<template>
    <div>
        <headpage></headpage>
        <div class="index">
        <div class="index-list"></div>
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
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
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
      time: new Date()
    }
  },
  components: {
    headpage
  },
  methods: {
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
    height: 500px;
    border: 1px solid #909399
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
