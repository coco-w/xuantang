<template>
  <div>
    <div class="title">
      <span>请填写选项</span>
      <span class="remark"></span>
    </div>
    <draggable v-model="data" @end="end">
      <div  class="option-item" v-for="(item, index) in data" :key="index">
      <el-input v-model="item.value" placeholder="">
        <span slot="prefix" style="line-hieght: 40px;">{{index+1}}.</span>
        <template slot="append">
          <el-tooltip class="item" effect="dark" content="点击禁用该项" placement="bottom">
            <i class="el-icon-remove-outline" style="  cursor: pointer;" :style="{marginRight: data.length > 2 ? '20px' : '0px',color: item.disabled===true ? '#ff0000' : '#909399'}" @click="handleProhibit(item)"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="点击删除该项" placement="bottom">
            <i class="el-icon-delete" style="  cursor: pointer;" v-show="data.length > 2" @click="handleDelete(index)"></i>  
          </el-tooltip>
         
        </template>
         <template slot="prepend">
            <i class="el-icon-rank" style="cursor: move"></i>
          </template>
      </el-input>
      </div>
    </draggable>
    <el-button style="width: 100%;" @click="handleAdd">添加选项</el-button>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: "options",
  props: {
    value: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      data: []
    }
  },
  components: {
    draggable
  },
  methods: {
    handleProhibit(item) {
      item.disabled = !item.disabled
      this.$emit('change',this.data)
    },
    handleDelete(index) {
      this.data.splice(Number(index),1)
      this.$emit('change',this.data)
    },
    handleAdd() {
      this.data.push({value: '',disabled: false})
      this.$emit('change',this.data)
    },
    end(ev) {
      this.$emit('change',this.data)
    }
  },
  created() {
    this.data = []
    this.value.forEach((ele,index) => {
      this.data[index] = ele
    });
  }
}
</script>
<style lang="less" scoped>
.option-item {
  margin-bottom: 15px;
}
/deep/.el-input__prefix {
      line-height: 40px;
    width: 20px;
}
</style>