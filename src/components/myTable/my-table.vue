<template>
  <div class="my-table">
    <div class="title" :class="titleClass">
      <span>{{this.options.title.text}}</span>
      <div class="titleSolt">
        <slot name="title">
        </slot>
      </div>
    </div>
     <el-table
     border
      :data="options.tableData"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in options.tableProps"
        :key="index"
        align="center"
        :label="item.label"
        :width="item.width">
          <template  slot-scope="scope">
            <div v-if="item.slot">
               <Render :row="scope.row" :column="scope.column" :index="scope.$index" :item="item"  :render="item.render"></Render>
            </div>  
            <div v-else>
              <span>{{ scope.row[item.prop] }}</span>
            </div>
          </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>
<script>
import Render from './render'
export default {
  name: 'myTable',
  props: {
    options: {
      type: Object,
      default: () => {},
    }
  },
  components: {Render},
  computed: {
    titleClass() {
      return this.options.title.class ?  `${this.options.title.class}` : ''
    }
  },
  data() {
    return {
     
    }
  },
  methods: {
    slotClass(val) {
      return `my-table-${val}`
    }
  }
}
</script>
<style lang="less" scoped>
.my-table {
  
}
.title {
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  background: #F4F5F9;
  margin-top: 15px;
  span {
    font-size: 16px;
    color: #333;
  }
  .titleSolt {
    display: inline;
    float: right;
  }
}
</style>