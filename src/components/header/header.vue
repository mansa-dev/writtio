<template>
<header class="main_header">
  <div  class="container">
    <div class="main_nav">
      <div class="backbtn">
        <a class="bold" href="#"> <img src="/images/back_arrow.png" alt="back_arrow"> Back to Dashboard</a>
      </div>
      <div class="navbar_brand logo">
        <a href="#">
          <img src="/images/logo.png" slt="logo">
        </a>
        <div class="toggle_btn">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="support_area">
            <div class="mobile logo">
             <a href="#">
               <img src="/images/logo.png" slt="logo">
             </a>
             <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
           </div>
        <ul>
          <li class="notification">
            <a href="#"><i class="fa fa-bell" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-question-circle" aria-hidden="true"></i>Help</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-cog" aria-hidden="true"></i>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import './header.scss'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WrittioHeader extends Vue {

}
</script>
