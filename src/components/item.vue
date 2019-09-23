<template>
   <component v-bind:is="'el-'+item.type"  v-model="dataModel" >
              <template v-if="item.options">
                <component v-bind:is="'el-'+v.tag" v-for="(v,i) in item.options" :label="v.value" :key="i">
                  </component>
              </template>
            </component> 
</template>

<script>
export default {
  name: 'item',
  props: ['item', 'models'],
  data() {
    return {
       dataModel: this.models[this.item.model]
    }
  },
  watch: {
    dataModel:{
      deep:true,
      handler(val) {
        this.$emit('update:models', {
          ...this.models,
          [this.item.model]: val
        })
        this.$emit('on-update', val,this.item.model)
      }
    }
  }
}
</script>