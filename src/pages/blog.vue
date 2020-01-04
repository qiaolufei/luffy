<template>
    <div>
        <headpage></headpage>
        <div class="blog">
          <div class="blog__list">
            <div v-for="(item1, index1) in blogs" :key="index1" class="blog__list-one">
              <el-link class="blog__list-one__title" @click="to(index1)">{{item1.title}}</el-link>
              <i class="el-icon-date" style="margin-left:5%"></i><span>{{item1.time}}</span>
              <el-divider content-position="right">乔路非</el-divider>
              <span v-for="tag in item1.tags" :key="tag" class="blog__list-one__tag">{{tag}}</span>
              <span class="blog__list-one__msg">{{item1.msg}}</span>
              <i class="el-icon-view" style="color:#409EFF;margin-left:80%"></i><span class="blog__list-one__look">{{item1.look}}</span>
              <i class="el-icon-s-opportunity" style="color:#FFDC52;margin-left:3%"></i><span class="blog__list-one__up">{{item1.up}}</span>
            </div>
            <el-pagination
              style="margin:2% 0 0 20%"
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
          <div class="blog__other">
            <div class="blog__other-search">
              <el-input class="blog__other-search__in" v-model="msg" placeholder="搜索"></el-input>
              <el-button type="primary" icon="el-icon-search"></el-button>
            </div>
            <div class="blog__other-tags">
              <h4>标签云</h4>
              <el-divider><i class="el-icon-collection-tag"></i></el-divider>
              <span v-for="(item2, index2) of tags" :key="index2">{{item2}}</span>
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
      tags: ['Vue.js', 'html', 'js', 'jquery', 'springboot', 'MySQL', '数据结构与算法', 'git', 'React', '书评', 'ps'],
      blogs: [
        {title: 'vue函数之间的调用', time: '2019-12-20 08:33', msg: 'Vue：methods函数集中不能像原生JS中直接调用函数，踩坑半天差点爬不起', look: 300, up: 12, tags: ['Vue.js', 'js']},
        {title: '各种排序算法总结和比较', time: '2019-12-21 09:43', msg: '常见的排序算法都是比较排序，非比较排序包括计数排序、桶排序和基数排序，非比较排序对数据有要求，因为数据本身包含了定位特征，所有才能不通过比较来确定元素的位置。', look: 212, up: 10, tags: ['数据结构与算法']},
        {title: 'git基本使用', time: '2019-12-22 09:20', msg: '给文件夹添加git: git init把文件添加提交至仓库：git add .(a.txt)  (放到暂存区)git commit -m "first" （提交到版本库）', look: 312, up: 28, tags: ['git']},
        {title: 'vue生命周期', time: '2019-12-23 14:30', msg: 'beforeCreate在实例初始化前被触发。created会在实例初始化之后、被添加到DOM之前触发。', look: 1212, up: 100, tags: ['Vue.js', 'js']}
      ]
    }
  },
  components: {
    headpage,
    footpage
  },
  methods: {
    to (index1) {
      this.$router.push({path: '/blogInfo?id=' + index1})
    }
  }
}
</script>
<style lang="less" scoped>
.blog{
  position: relative;
  display: flex;
  flex-direction: row;
  &__list{
    width: 70%;
    margin: 2% 0 0 2%;
    padding: 0 2% 0 2%;
    &-one{
      background-color: rgba(216,226,235,0.8);
      padding: 2% 2% 2% 2%;
      border-radius: 10px;
      margin-top: 2%;
      .el-divider{
        background-color: aliceblue;
      }
      &__title{
        font-family: "Microsoft YaHei";
        font-size: 25px;
      }
      &__tag{
        background-color: rgba(3,101,100,0.7);
        color:aliceblue;
        display: inline-block;
        border-radius: 5px;
        padding: 0.5% 1% 0.5% 1%;
        margin: 0 0 0 1%;
      }
      &__msg{
        display: block;
        font-family: '宋体';
        padding: 2% 1% 2% 2%;
      }
    }
  }
  &__other{
    width: 25%;
    margin: 2% 2% 0 2%;
    &-search{
      margin-top: 8%;
      text-align: center;
      &__in{
        width: 50%
      }
    }
    &-tags{
      background-color: rgba(22,183,150,0.8);
      border-radius: 10px;
      padding: 0.5% 2% 4% 2%;
      margin-top: 10%;
      font-family: "Microsoft YaHei";
      color: aliceblue;
      h4{
        border-left: 5px solid #ff5151;
        padding-left:10px;
      }
      span{
        background-color: rgba(254,67,101,0.9);
        padding: 1% 1% 1% 1%;
        margin: 3% 0 0 4%;
        display: inline-block;
        border-radius: 4px;
      }
    }
  }
}
</style>
