<template>
    <div>
        <headpage></headpage>
        <div class="me" id="pdfDom">
          <div style="display:flex;flex-direction:row">
            <div class="me__info">
              <h2 class="me__info-name">乔磊才</h2>
              <span class="me__info-sex">性别：男</span>
              <span class="me__info-age">年龄：24</span>
              <span class="me__info-phone">手机：15524229839</span>
              <span class="me__info-email">邮箱：luffy0101@163.com</span>
            </div>
            <div class="me__head">
              <img src="../img/qiao.jpg">
            </div>
          </div>
          <div class="me__msg">
            <h2>技术栈</h2>
            <span>·编程语言：JavaScript、Java</span>
            <span>·前端：HTML、CSS、jQuery、bootstrap、Vue.js、webpack</span>
            <span>·后端：spring boot</span>
            <span>·数据库：MySQL</span>
            <span>·版本管理：Git</span>
            <span>·前端开发工具：HBuilder、Code、微信web开发工具</span>
            <span>·其他：Photoshop、会声会影、Markdown</span>
            <h2>实习经历</h2>
            <h3>北京贝叶科技有限公司&emsp;&emsp;2019.07­-2019.09&emsp;&emsp;前端实习生</h3>
            <h4>·皮肤病理AI分析系统</h4>
            <span>○搭建了一款在PC端和移动端实现自适应布局的响应式网站，前端采用
                    Vue+bootstrap+webpack+axios等技术实现，使用nginx代理部署在云服务器，前端贡献度
                    100%；后端采用spring boot+MySQL，除了核心AI分析算法外，后端贡献度90%</span>
            <h4>·皮肤病理在线学习系统</h4>
            <span>○搭建了一款移动端网站，前后端技术同“皮肤病理AI分析系统”，项目贡献度100%</span>
            <h3>沈阳日光信息科技有限公司&emsp;&emsp;2018.09-­2019.02&emsp;&emsp;前端实习生</h3>
            <h4>·“Offer侦探”小程序</h4>
            <span>○搭建了一款向应届毕业生推送求职信息的微信小程序,前端使用Vue框架,负责“我的”、“我的收藏”、“意见反馈”、“关于我们”、“常见问题”等页面的开发，前端贡献度30%+，使用Git进行版本管理</span>
            <h4>·“Offer侦探”管理后台</h4>
            <span>○搭建了一款针对“Offer侦探”后台数据管理系统，负责整个项目的前端开发，采用HTML+ajax+jQuery+bootstrap等技术实现</span>
            <h2>课外项目</h2>
            <h4>·北极星项目</h4>
            <span>○校级创新创业项目大赛，主要是开发一款网络平台向全校师生出售新鲜蔬果，负责整个项目的前端开发，采用HTML+ajax+jQuery+bootstrap等技术实现</span>
            <h2>教育经历</h2>
            <span>·沈阳工业大学 计算机科学与技术</span>
            <span>·就读时间：2014.09-­2015.09&emsp;2017.09­至今</span>
            <span>·服兵役：2015.09-­2017.09</span>
            <span>·主修课程：Web程序设计、Java、Linux、数据结构、数据库原理等</span>
            <span>·英语水平：CET4</span>
            <h2>自我评价</h2>
            <span>·有自己的职业规划及个人追求，曾在部队服役，具有过硬的身体素质和个人作风，热爱本专业</span>
            <span>·具有良好的沟通协调能力，执行力和自控力，在实习及课外开发期间与同事、同学保持高度默契</span>
            <span>·有很强的学习能力和独立思考能力，课外自学框架，积极参与实际的项目开发</span>
            <h3>感谢您的耐心阅读，希望有机会和您共事</h3>
          </div>
        </div>
        <el-button class="btn"  @click="getPdf()">导出为PDF</el-button>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      htmlTitle: '乔磊才'
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
.me{
  width: 60%;
  position: relative;
  font-family: '微软雅黑';
  color: #2C3E51;
  padding: 3% 5% 3% 5%;
  margin-left: 5%;
  &__info{
    width: 40%;
    &-sex, &-age, &-phone, &-email{
      display: block;
      margin: 1% 0 0 6%;
    }
  }
  &__head{
    width: 11%;
    margin: 3% 0 0 20%;
    img{
      width: 90%;
    }
  }
  &__msg{
    span{
      display: block;
      margin: 1% 0 0 2%;
    }
  }
}
  .btn{
    margin: 1% 0 2% 40%
  }
</style>
