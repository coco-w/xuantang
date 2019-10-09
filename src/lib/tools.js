import moment from 'moment'
moment.locale('zh-cn');
export const countDown = (date,callback) => {
  const now = new Date().getTime()
  let count = date - now
  if (count < 0) {
    return `00天 00小时 0分 0秒`
  }else {
    let days = parseInt(count/1000/60/60/24)
    let leave1 = count%(24*3600*1000)
    var hours=Math.floor(leave1/(3600*1000))
    var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)
    callback(days, hours, minutes, seconds)
    // return `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`
  }
}

export const timeDifference = (date1, date2) => {
  let a = moment(date1).format("l").split('/')
  let b = moment(date2).format('l').split('/')
  let z = b[0] - a[0]
  let x = b[1] - a[1]
  let c = b[2] - a[2]
  if (z > 0) {
    return moment(date1).format("ll") + '-' + moment(date2).format("ll")
  }else if (x > 0) {
    return moment(date1).format("ll") + '-' + moment(date2).format("ll").split('年')[1]
  }else if (c > 0) {
    return moment(date1).format("ll") + '-' + moment(date2).format("ll").split('月')[1]
  }
}