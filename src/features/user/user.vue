<template>
  <div>
     <user-header/>
     <div class="body_part">
     <user-side-nav/>
     <router-view />
     </div>
  </div>
</template>

<script>
import WrittioHeader from '../../components/header/header.vue'
import WrittioSideNav from '../../components/sidenav/sidenav.vue'

export default {
  name: 'writtio-user',
  components: {
    'user-header': WrittioHeader,
    'user-side-nav': WrittioSideNav
  }
}
</script>
