<template>
  <div class="sidebar_area">
    <aside id="sidebar_wrapper">
      <div class="user_basic_info">
        <div class="pfimage">
         <img class="defaultImg" src="/images/default.png">
       </div>
       <div class="user_info">
         <h1 class="name">
          Sample User
        </h1>
      </div>
    </div>
    <div class="tabs_struc">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#profilesetting">
            <i class="fa fa-user" aria-hidden="true"></i> Profile Settings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#myplan">
            <i class="fa fa-tags" aria-hidden="true"></i> My Plan
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#billinghistory">
            <i class="fa fa-credit-card" aria-hidden="true"></i> Billng History
          </a>
        </li>
      </ul>
    </div>
  </aside>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WrittioSideNav extends Vue {

}
</script>
