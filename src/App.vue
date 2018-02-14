<template>
  <div id="app">
    <m-header></m-header>123
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header'
  import Tab from './components/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
