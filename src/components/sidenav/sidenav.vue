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
<svg class="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path id="Layer" class="shp0" d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18L4 20L20 20L20 18C20 15.34 14.67 14 12 14Z" />
<path id="Layer" class="shp1" d="M0 0L24 0L24 24L0 24L0 0Z" />
</svg>
              <span>Profile Settings</span>
          </router-link>
        </li>
        <li class="nav-item" title="My Plan">
          <router-link to="/user/plan" class="nav-link">
<svg class="myplan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path id="Layer" fill-rule="evenodd" class="shp0" d="M-74 29L-26 29L-26 77L-74 77L-74 29Z" />
<path id="Layer" fill-rule="evenodd" class="shp1" d="M23 6L23 19C23 20.1 22.1 21 21 21L3 21C1.9 21 1 20.1 1 19L1 6C1 4.9 1.9 4 3 4L21 4C22.1 4 23 4.9 23 6ZM21 6L12 6L12 19L21 19L21 6ZM13 14.5L20 14.5L20 16L13 16L13 14.5ZM13 12L20 12L20 13.5L13 13.5L13 12ZM13 9.5L20 9.5L20 11L13 11L13 9.5Z" />
</svg>
              <span>My Plan</span>
          </router-link>
        </li>
        <li class="nav-item" title="Billng History">
          <router-link to="/user/billing" class="nav-link">
<svg class="billing_history" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path id="Layer" class="shp0" d="M0 0L24 0L24 24L0 24L0 0Z" />
<path id="Layer" fill-rule="evenodd" class="shp1" d="M22 6L22 18C22 19.11 21.11 20 20 20L4 20C2.89 20 2 19.11 2 18L2.01 6C2.01 4.89 2.89 4 4 4L20 4C21.11 4 22 4.89 22 6ZM20 12L4 12L4 18L20 18L20 12ZM20 6L4 6L4 8L20 8L20 6Z" />
</svg>
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
