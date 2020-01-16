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
          <router-link to="/user/settings">
            <a class="nav-link" data-toggle="tab">
              <i class="fa fa-user" aria-hidden="true"></i> Profile Settings
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/plan">
            <a class="nav-link" data-toggle="tab" href="/user/plan">
              <i class="fa fa-tags" aria-hidden="true"></i> My Plan
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/billing">
            <a class="nav-link" data-toggle="tab" href="#billinghistory">
              <i class="fa fa-credit-card" aria-hidden="true"></i> Billng History
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
  </div>
</template>

<script>
import './sidenav.scss'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WrittioSideNav extends Vue {

}
</script>
