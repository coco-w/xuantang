<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <div class="btn">
          <el-button @click="handleColse">取消</el-button>
          <el-button @click="handleChange">确认</el-button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
      name: 'editor',
      props: {
        content: {
          type: String,
          default: '',
        }
      },
      data () {
        return {
          editorContent: '',
          editor: null,
        }
      },
      methods: {
        getContent: function () {
            alert(this.editor.txt.text())
        },
        handleChange() {
          this.$emit('change', this.editorContent)
          this.editorContent = ''
        },
        handleColse() {
          this.$emit('close')
        }
      },
      mounted() {
        this.editor = new E(this.$refs.editor)
        this.editorContent = this.content
        this.editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        this.editor.customConfig.colors = [
          '#000000',
          '#eeece0',
          '#1c487f',
          '#4d80bf',
          '#c24f4a',
          '#8baa4a',
          '#7b5ba1',
          '#46acc8',
          '#f9963b',
          '#ffffff',
          '#232332',
          '#111111'
        ]
        this.editor.create()
        this.editor.txt.html(this.content)
      },
      

    }
</script>

<style lang='less' scoped>
  .btn {
    margin-top: 12px;
    float: right;
  }
</style>