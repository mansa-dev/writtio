<template>
  <div>
     <user-header/>
     <router-view />
  </div>
</template>

<script>
import WrittioHeader from '../../components/header/header.vue'

export default {
  name: 'writtio-user',
  components: {
    'user-header': WrittioHeader
  }
}
</script>
