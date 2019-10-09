<template>
  <div>
    <span>{{days}}</span>
    <span>{{dayText}}</span>
    <span>{{hours}}</span>
    <span>{{hourText}}</span>
    <span>{{minutes}}</span>
    <span>{{minText}}</span>
    <span>{{seconds}}</span>
    <span>{{secondText}}</span>
  </div>
</template>
<script>
import { countDown } from '@/lib/tools'
export default {
  name: 'countDown',
  props: {
    date: {
      required: true,
    },
    dayText: {
      type:String,
      default: '天'
    },
    hourText: {
      type:String,
      default: '时'
    },
    minText: {
      type:String,
      default: '分'
    },
    secondText: {
      type:String,
      default: '秒'
    },
  }, 
  data(){
    return {
      days: 0,
      hours: 0, 
      minutes: 0, 
      seconds: 0,
      mydate: 0,
    }
  },
  mounted() {
    this.mydate = new Date(this.date).getTime()
    setInterval(() => {
      countDown(this.mydate, (d,h,m,s) => {
        this.days= d,
        this.hours= h, 
        this.minutes= m, 
        this.seconds= s
      })
    }, 1000)
    if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
      this.$emit('overdue')
    }
  }
}
</script>