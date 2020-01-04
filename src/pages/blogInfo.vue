<template>
    <div>
        <headpage></headpage>
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>博客文章</el-breadcrumb-item>
                <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="blogInfo">
            <div class="blogInfo__info">
              <span class="blogInfo__info-title">{{blogs[this.id].title}}</span>
              <div class="n">
              <i class="el-icon-user"></i><span class="blogInfo__info-name">乔路非</span>
              <i class="el-icon-date"></i><span class="blogInfo__info-time">{{blogs[this.id].time}}</span>
              </div>
              <div class="m">
              <span>标签：</span><span class="blogInfo__info-tag" v-for="item in blogs[this.id].tags" :key="item">{{item}}</span>
              </div>
              <el-divider content-position="left">正文</el-divider>
              <span class="blogInfo__info-msg">&emsp;&emsp;{{blogs[this.id].msg}}</span>
              <div class="k">
                <span id="upTitle">点亮赞一下吧</span><i id="up" class="el-icon-s-opportunity" @click="up()"></i>
              </div>
            </div>
            <div class="blogInfo__other"></div>
        </div>
        <footpage></footpage>
    </div>
</template>
<script>
import headpage from '@/components/header'
import footpage from '@/components/footer'
export default {
  components: {
    headpage,
    footpage
  },
  data () {
    return {
      id: this.$route.query.id,
      flag: false,
      blogs: [
        {title: 'vue函数之间的调用0', time: '2019-12-20 08:33', msg: 'Vue：methods函数集中不能像原生JS中直接调用函数，踩坑半天差点爬不起。CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...CSS border是控制对象的边框边线宽度、颜色、虚线、实线等样式CSS属性。在表格中border=1表示表格边框宽度为1px,css颜色为黑色,默认为实线样式边 1、border边框语法: (1)border-left 设置左边框,一般单独设置左边框样式使用 (2)...', tags: ['Vue.js', 'js']},
        {title: '各种排序算法总结和比较', time: '2019-12-21 09:43', msg: '常见的排序算法都是比较排序，非比较排序包括计数排序、桶排序和基数排序，非比较排序对数据有要求，因为数据本身包含了定位特征，所有才能不通过比较来确定元素的位置。比较排序的时间复杂度通常为O(n2)或者O(nlogn)，比较排序的时间复杂度下界就是O(nlogn)，而非比较排序的时间复杂度可以达到O(n)，但是都需要额外的空间开销。比较排序时间复杂度为O(nlogn)的证明：a1,a2,a3……an序列的所有排序有n!种，所以满足要求的排序a1,a2,a3……an（其中a1<=a2<=a3……<=an）的概率为1/n!。基于输入元素的比较排序，每一次比较的返回不是0就是1，这恰好可以作为决策树的一个决策将一个事件分成两个分支。比如冒泡排序时通过比较a1和a2两个数的大小可以把序列分成a1,a2……an与a2,a1……an（气泡a2上升一个身位）两种不同的结果，因此比较排序也可以构造决策树。根节点代表原始序列a1,a2,a3……an，所有叶子节点都是这个序列的重排（共有n!个，其中有一个就是我们排序的结果a1,a2,a3……an）。如果每次比较的结果都是等概率的话（恰好划分为概率空间相等的两个事件），那么二叉树就是高度平衡的，深度至少是log(n!)。又因为 1. n! < nn ,两边取对数就得到log(n!)<nlog(n)，所以log(n!) = O(nlogn).2. n!=n(n-1)(n-2)(n-3)…1 > (n/2)^(n/2) 两边取对数得到 log(n!) > (n/2)log(n/2) = Ω(nlogn)，所以 log(n!) = Ω(nlogn)。因此log(n!)的增长速度与 nlogn 相同,即 log(n!)=Θ(nlogn)，这就是通用排序算法的最低时间复杂度O(nlogn)的依据。', tags: ['数据结构与算法']},
        {title: 'git基本使用', time: '2019-12-22 09:20', msg: '给文件夹添加git: git init把文件添加提交至仓库：git add .(a.txt)  (放到暂存区)git commit -m "first" （提交到版本库）修改a.txt后，使用 git status来查看当前仓库状态用git diff可以查看修改内容git log命令显示从最近到最远的提交日志git reflog查看命令历史git reset --hard 版本号 恢复到历史版本工作区：在电脑上能看到的目录版本库：工作区有一个隐藏目录 .git，这个不算工作区，而是Git的版本库暂存区：stage或index', tags: ['git']},
        {title: 'vue生命周期', time: '2019-12-23 14:30', msg: ' beforeCreate在实例初始化前被触发。created会在实例初始化之后、被添加到DOM之前触发。beforeMount会在元素已经准备好被添加到DOM，但还没有添加的时候触发。mounted会在元素创建后触发（但并不一定已经添加到了DOM，可以用nextTick来保证这一点）。beforeUpdate会在由于数据更新将要对DOM做一些更改时触发。updated会在DOM的更改已经完成后触发。beforeDestroy会在组件即将被销毁并且从DOM上移除时触发。destroyed会在组件被销毁后触发beforeCreate在实例初始化前被触发。created会在实例初始化之后、被添加到DOM之前触发。beforeMount会在元素已经准备好被添加到DOM，但还没有添加的时候触发。mounted会在元素创建后触发（但并不一定已经添加到了DOM，可以用nextTick来保证这一点）。beforeUpdate会在由于数据更新将要对DOM做一些更改时触发。updated会在DOM的更改已经完成后触发。beforeDestroy会在组件即将被销毁并且从DOM上移除时触发。destroyed会在组件被销毁后触发beforeCreate在实例初始化前被触发。created会在实例初始化之后、被添加到DOM之前触发。beforeMount会在元素已经准备好被添加到DOM，但还没有添加的时候触发。mounted会在元素创建后触发（但并不一定已经添加到了DOM，可以用nextTick来保证这一点）。beforeUpdate会在由于数据更新将要对DOM做一些更改时触发。updated会在DOM的更改已经完成后触发。beforeDestroy会在组件即将被销毁并且从DOM上移除时触发。destroyed会在组件被销毁后触发', tags: ['Vue.js', 'js']}
      ]
    }
  },
  methods: {
    up () {
      this.flag = !this.flag
      if (this.flag === true) {
        $('#up').css('color', '#E6A23C')
        $('#upTitle').text('感谢您的鼓励').css('color', '#E6A23C')
      } else {
        $('#up').css('color', '#303133')
        $('#upTitle').text('点亮赞一下吧').css('color', '#67C23A')
      }
    }
  }
}
</script>
<style lang="less">
.bread{
    font-size: 18px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #303133;
    margin: 2% 0 0 2%
  }
.blogInfo{
  position: relative;
  width: 70%;
  margin-left: 13%;
  &__info{
    background-color: rgba(216,226,235,0.8);
    padding: 2% 2% 2% 2%;
    border-radius: 10px;
    margin-top: 2%;
    &-title{
        font-family: "Microsoft YaHei";
        font-size: 22px;
        font-weight: 800;
        display: block;
        color: #303133;
        text-align: center;
    }
    .n{
        border: 1px dashed #E6A23C;
        padding: 0.5% 0 0.5% 0;
        margin-top: 2%;
        text-align: center;
    }
    &-name{}
    &-time{}
    .m{
        margin-top: 2%;
    }
    &-tag{
        background-color: rgba(3,101,100,0.7);
        color:aliceblue;
        display: inline-block;
        border-radius: 5px;
        padding: 0.5% 1% 0.5% 1%;
        margin: 0 0 0 1%;
    }
    .el-divider{
        background-color: aliceblue;
      }
    &-msg{
        font-size: 18px;
    }
    .k{
        font-size: 20px;
        text-align: center;
        margin-top: 2%;
        color: #67C23A;
        i{
            font-size: 25px;
            color: #303133;
        }
    }
  }
}
</style>
