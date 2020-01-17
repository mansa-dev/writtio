<template>
    <div class="main_content">
      <div class="eqaul_padding">
        <div class="tab-content">
          <div id="billinghistory" class="tab-pane active">
            <div class="billing_info_stuc">
              <div class="billing_head text-left">
                <h1>Billing Information</h1>
                <div class="method_pay">
                  <div class="last_pay_his">
                   <p class="mt_p bold"> Last payment: </p>
                   <p class="mt_p"> {{userdata.last_payment | formatDate}}</p>
                 </div>
                 <div class="card_select">
                  <div class="icon">
                    <img src="/images/card-icon.png">
                  </div>
                  <div class="text">
                    <p class="mt_p">{{userdata.card_details.ending}}</p>
                    <span>Expires: {{userdata.card_details.expiry}}</span>
                  </div>
                </div>
                <div class="update_btn">
                  <button type="button" class="btn">Update</button>
                </div>
              </div>
            </div>
            <div class="billing_history">
             <div class="billing_history_head">
              <span class="title_tag">Billing History</span>
              <span class="date_next">Next payment on <b> 10/25/2019</b> </span>
            </div>
            <ul>
            <li>
                <span class="date_text">DATE</span>
                <span class="amount_text">AMOUNT</span>
              </li>
              <li v-for="date of userdata.payment_history" v-bind:key="date.id">
                <span class="date">{{ date.date | formatDate}}</span>
                <span class="amount">${{date.amount}}</span>
              </li>
            </ul>
            <div class="button_load_more">
              <button type="button" class="btn">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script lang="ts">
import './billing.scss'
import { Component, Vue } from 'vue-property-decorator'
import dates from '../../../store/dates.store'
import moment from 'moment'
Vue.filter('formatDate', (value:any) => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

@Component
export default class UserBilling extends Vue {
  data () {
    return {
      title: 'Billing part',
      userdata: dates.state.userdate
    }
  }
}
</script>
