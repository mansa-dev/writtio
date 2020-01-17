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
        <li class="nav-item" title="Profile Settings">
              <router-link to="/user/settings" class="nav-link">
              <i class="fa fa-user" aria-hidden="true"></i>
              <span>Profile Settings</span>
          </router-link>
        </li>
        <li class="nav-item" title="My Plan">
          <router-link to="/user/plan" class="nav-link">
              <i class="fa fa-tags" aria-hidden="true"></i>
              <span>My Plan</span>
          </router-link>
        </li>
        <li class="nav-item" title="Billng History">
          <router-link to="/user/billing" class="nav-link">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
              <span>Billng History</span>
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
