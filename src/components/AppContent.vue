<template>
  <div>
    <div class="container">
      <div class="box-first">
        <approval-his/>
      </div>
      <div class="box-second">
        <mail-his/>
      </div>
      <div class="box-third">
        <approval-his/>
      </div>
    </div>
    <div class="container">
      <div class="box-first">
        <job-his/>
      </div>
      <div class="box-second">
        <approval-after-his/>
      </div>
      <div class="box-third">
        <message-his/>
      </div>
    </div>
  </div>
</template>

<script>
import ApprovalHis from './contents/ApprovalHis'
import MailHis from './contents/MailHis'
import ApprovalAfterHis from './contents/ApprovalAfterHis'
import MessageHis from './contents/MessageHis'
import JobHis from './contents/JobHis'

export default {
  components: { ApprovalHis, MailHis, ApprovalAfterHis, MessageHis, JobHis }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.box-first {
  flex: 1;
  padding: 5px;
}
.box-second {
  flex: 1;
  padding: 5px;
}
.box-third {
  flex: 1;
  padding: 5px;
}
</style>
