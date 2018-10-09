<template>
  <div>
    <a-row>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h1>加群任务</h1>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <a-button type="primary" @click="visible=true"><a-icon type="plus-circle-o" /> 添加加粉账号</a-button>
        <a-modal
          title="Basic Modal"
          :visible="visible"
          @ok="visible=false"
          @cancel="visible=false"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-modal>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }" class="title">
        <h3>批量添加微信号</h3>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }">
        <h3>上传群二维码</h3>
        <span>可预览状态为图片加载完成,可进行上传</span>
      </a-col>
      <a-col :xs="{ span: 22, offset: 1 }" class="clearfix">
        <a-upload
          listType="picture-card"
          :fileList="fileList"
          @preview="handlePreview"
          @change="handleChange"
          :beforeUpload="beforeUpload"
        >
          <div v-if="fileList.length < 10">
            <a-icon type="plus" />
            <div class="ant-upload-text">选择二维码</div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
        <a-button
          class="upload-demo-start"
          type="primary"
          @click="handleUpload"
          :disabled="fileList.length === 0"
          :loading="uploading"
        >
          {{uploading ? '上传中' : '确认上传' }}
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        visible: false,
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        uploading: false,
      }
    },
    methods: {
      beforeUpload(file) {
        this.fileList = [...this.fileList, file]
        return false;
      },
      handleCancel () {
        this.previewVisible = false
      },
      handlePreview (file) {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisible = true
      },
      handleChange ({ fileList }) {
        this.fileList = fileList
      },
      handleUpload() {
        const { fileList } = this;
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append('files[]', file);
        });
        this.uploading = true
        // You can use any AJAX library you like
        // reqwest({
        //   url: '//jsonplaceholder.typicode.com/posts/',
        //   method: 'post',
        //   processData: false,
        //   data: formData,
        //   success: () => {
        //     this.fileList = []
        //     this.uploading = false
        //     this.$message.success('upload successfully.');
        //   },
        //   error: () => {
        //     this.uploading = false
        //     this.$message.error('upload failed.');
        //   },
        // });
      }
    },
    mounted () {
    }
  }
</script>

<style scoped> 
  .ant-row {
    font-size: 16px
  }
  .title {
    background: #bbdefb ;
    padding: 8px
  }
  .ant-row>div {
    margin-bottom: 20px
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
