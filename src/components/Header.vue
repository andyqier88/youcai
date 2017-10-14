<template>
<div>
  <header>
      <div class="header_wraper">
        <h1 class="logo">
          <a href="javascript:;"><img src="/static/img/logo@2x.png" alt=""></a>
        </h1>
        <nav>
          <span class="nav_icon">
            <i class="icon-align-justify icon-large" @click='showNav'></i>
          </span>
          <ul class="navbar">
            <li><a href="/index.html">首页</a></li>
            <li><a href="/html/news.html">新闻</a></li>
            <!-- <li><a href="/html/talent_platfor.html" v-link="">人才平台</a></li> -->
            <li><router-link to="/talent_platfor">人才平台</router-link></li>
            <li><a href="/html/talent_bank.html">人才银行</a></li>
            <li><a href="/html/education_supermarket.html">教育超市</a></li>
            <li><a href="/html/about.html">关于我们</a></li>
          </ul>
        </nav>
        <ul class="phone_nav" v-show='navbarFlag'>
          <li><a href="/index.html">首页</a></li>
          <li><a href="/html/news.html">新闻</a></li>
          <li><a href="/html/talent_platfor.html">人才平台</a></li>
          <li><a href="/html/talent_bank.html">人才银行</a></li>
          <li><a href="/html/education_supermarket.html">教育超市</a></li>
          <li><a href="/html/about.html">关于我们</a></li>
        </ul>
      </div>
    </header>
</div>
  
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      navbarFlag:false
    }

  },
  methods:{
      showNav(){
        this.navbarFlag = !this.navbarFlag
      }
    }
}

</script>
