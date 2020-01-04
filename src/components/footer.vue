<template>
    <div class="footer">
        Copyright © 乔路非 All Rights Reserved.
    </div>
</template>
<script>
export default {
  methods: {
    getH () {
      let height = document.documentElement.scrollHeight > window.screen.height ? document.documentElement.scrollHeight : window.screen.height + 'px'
      if (height === document.documentElement.scrollHeight + 'px') {
        $('.footer').css('margin-top', '10px')
      } else {
        $('.footer').css('margin-top', '10%')
      }
    }
  },
  mounted () {
    this.getH()
  }
}
</script>
<style lang="less">
.footer{
    width: 100%;
    font-family: '微软雅黑';
    padding: 2% 0 2% 0;
    text-align: center;
    font-size: 18px;
    background-color: #2C3E51;
    color: aliceblue;
}
</style>
