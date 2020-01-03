<template>
  <div id="app">
     <vue-particles
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#409EFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="particle"
      >
      </vue-particles>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.particle{
      position: absolute;
      width: 100%;
      height: 300%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
}
</style>
