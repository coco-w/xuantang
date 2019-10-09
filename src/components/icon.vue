<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="myicon"></use>
  </svg>
</template>
<script>
export default {
  name: 'icon',
  props: {
    icon: {
      type: String,
      required: true,
    }
  },
  computed: {
    myicon(){
      return `#icon-${this.icon}`
    }
  }
}
</script>