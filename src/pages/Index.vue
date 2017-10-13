<template>
<div class="container_self">
  <top-header></top-header>   
  <div class="down_app block">
      <div class="inner_container">
        <div class="left">
          <img src="./../../static/img/renwu@2x.png" alt="">
        </div>
        <div class="right">
          <div class="right_top">
            <img src="./../../static/img/app-logo@2x.png" alt="">
            <div class="down_app_intro intro_word">
              <h2>下载有才APP</h2>
              <p>找人办事 找活赚钱</p>
              <p>有才见证你的一点一滴</p>
            </div>
          </div>
          <div class="right_bottom">
            <div class="down_btn">
              <ul>
                <li><a href=""><img src="./../../static/img/iPhone_down@2x.png" alt=""></a></li>
                <li><a href=""><img src="./../../static/img/android_down@2x.png" alt=""></a></li>
              </ul>
            </div>
            <div class="down_scan">
              <img src="./../../static/img/er.png" alt="二维码">
              <p>扫一扫下载APP</p>
            </div>
          </div>
          <div class="super">
            <img src="./../../static/img/super@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="adver_intro block">
      <div class="inner_container">
        <div class="left_two">
          <img src="./../../static/img/fu@2x.png" alt="">
        </div>
        <div class="common_right ">
          <div class="common_right_top intro_word">
            <h2>找人办事儿</h2>
            <p>找人跑腿办事 悬赏招聘人才 工作事务外包</p>
            <p>随时随地免费发布任务 数万人才为您服务</p>
          </div>
          <div class="common_right_bottom">
            <img src="./../../static/img/map@2x.png" alt="插画地图">
          </div>
        </div>
      </div>
    </div>
    <div class="you_best block">
      <div class="inner_container">
        <div class="left_three">
          <img src="./../../static/img/quanzi@2x.png" alt="">
        </div>
        <div class="common_right ">
          <div class="common_right_top intro_word">
            <h2>你最有才</h2>
            <p>是梧桐 凤凰才回来栖</p>
            <p>是大海 百川才回来聚</p>
            <p>有才见证你的一点一滴</p>
          </div>
          <div class="common_right_bottom">
            <img src="./../../static/img/quan@2x.png" alt="圈子插画">
          </div>
        </div>
      </div>
    </div>
    <div class="part_time block">
      <div class="inner_container">
        <div class="left_four">
          <img src="./../../static/img/jianzhi@2x.png" alt="">
        </div>
        <div class="common_right ">
          <div class="common_right_top intro_word">
            <h2>找活儿赚钱</h2>
            <p>接任务 做兼职 当威客 找工作 做猎头</p>
            <p>个人资料更多展示 个人身份多重认证</p>
          </div>
          <div class="common_right_bottom">
            <img src="./../../static/img/profile@2x.png" alt="个人插画">
          </div>
        </div>
      </div>
    </div>
    <div class="certificates block">
      <div class="cert_title">
        <p class="">多重认证选择雇主</p>
      </div>
      <div class="cert_container">
        <div class="four_cert">
          <ul>
            <li>
              <img src="./../../static/img/shi@2x.png" alt="">
              <p>实名认证 ,安全</p>
            </li>
            <li>
              <img src="./../../static/img/qi@2x.png" alt="">
              <p>认证企业，保障</p>
            </li>
            <li>
              <img src="./../../static/img/guan@2x.png" alt="">
              <p>官方认证，可靠</p>
            </li>
            <li>
              <img src="./../../static/img/dan@2x.png" alt="">
              <p>担保认证，赔付</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="social block">
      <div class="inner_container">
        <div class="left_five">
          <img src="./../../static/img/preson@2x.png" alt="">
        </div>
        <div class="right">
          <div class="right_top">
            <div class="down_app_intro intro_word">
              <h2>个人价值</h2>
              <p>发现更多精彩 结交更多朋友</p>
              <p>创造更多价值 做更好的自己</p>
            </div>
          </div>
          <div class="right_bottom">
            <div class="down_btn">
              <ul>
                <li><img src="./../../static/img/iPhone_down@2x.png" alt=""></li>
                <li><img src="./../../static/img/android_down@2x.png" alt=""></li>
              </ul>
            </div>
            <div class="down_scan">
              <img src="./../../static/img/er.png" alt="二维码">
              <p>扫一扫下载APP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerbar></footerbar>    
</div>
  
  
</template>  

<script>
import TopHeader from '@/components/Header'
import footerbar from '@/components/Footer'
  export default{
    data(){
      return {
        msg:''
      }
    },
    components:{
    TopHeader,
    footerbar
    }
  }
</script>


