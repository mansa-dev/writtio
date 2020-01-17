<template>
<div class="main_content">
<div class="eqaul_padding">
<div class="tab-content">
<div id="profilesetting" class="tab-pane active">
    <div class="profilesetting_stuc">
    <div class="profilesetting_stuc_heading text-left">
        <h1>Profile Settings</h1>
    </div>
    <div class="profilesetting_stuc_user_info">
    <ul class="profilesetting_stuc_user_info_ul">
    <li class="profilesetting_stuc_user_info_ul_list">
    <span class="profilesetting_stuc_user_info_ul_list_label">
    First Name
    </span>
     <span class="profilesetting_stuc_user_info_ul_list_info">
     Sample First
    </span>
    </li>
        <li class="profilesetting_stuc_user_info_ul_list">
    <span class="profilesetting_stuc_user_info_ul_list_label">
    Last Name
    </span>
     <span class="profilesetting_stuc_user_info_ul_list_info">
     Sample Last
    </span>
    </li>
            <li class="profilesetting_stuc_user_info_ul_list">
    <span class="profilesetting_stuc_user_info_ul_list_label">
    Conatct Number
    </span>
     <span class="profilesetting_stuc_user_info_ul_list_info">
     +1234567890
    </span>
    </li>
            <li class="profilesetting_stuc_user_info_ul_list">
    <span class="profilesetting_stuc_user_info_ul_list_label">
    Email
    </span>
     <span class="profilesetting_stuc_user_info_ul_list_info">
     Sample@email.com
    </span>
    </li>
    </ul>
            <div class="profilesetting_stuc_user_info_edit_profile_btn">
              <button type="button" class="btn">Edit Profile</button>
            </div>
    </div>
    </div>
</div>
</div>
</div>
</div>
</template>
<script lang="ts">
import './settings.scss'
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class UserSettings extends Vue {
}
</script>
