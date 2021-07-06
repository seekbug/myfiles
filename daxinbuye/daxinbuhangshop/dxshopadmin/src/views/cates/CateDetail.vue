<template>
    <div>
        <div id="sortlist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>商品相册</span>
                </div> 
                <el-upload
                action="http://192.168.2.104/api/spu/file/upload"
                :headers="headersObj"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                 <el-radio-group v-model="radio">
                    <el-radio :label="3">是否显示为主图</el-radio>
                </el-radio-group>
            </el-card>
        </div>
        <div id="sortlist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基本信息</span>
                </div> 
                <div class="left">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="所属分类" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择基本单位">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        </el-form-item>
                        <el-form-item label="商品名称" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="货号" prop="age">
                            <el-input v-model="ruleForm.age"></el-input>
                        </el-form-item>
                        <el-form-item label="幅宽" prop="age">
                            <el-input v-model="ruleForm.age"></el-input>
                        </el-form-item>
                    </el-form>
                </div>   
                <div class="right">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="克重" prop="age">
                            <el-input v-model="ruleForm.age"></el-input>
                        </el-form-item>
                        <el-form-item label="每公斤/米" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="基本单位" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择基本单位">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                </div>
            </el-card>
        </div>
        <div id="sortlist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>产品属性</span>
                </div> 
                 <div class="left">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="棉C%" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="涤T%" prop="age">
                            <el-input v-model.number="ruleForm.age"></el-input>
                        </el-form-item>
                        <el-form-item label="氨纶SP%" prop="age">
                            <el-input v-model.number="ruleForm.age"></el-input>
                        </el-form-item>
                    </el-form>
                </div>   
            </el-card>
        </div>
        <div id="sortlist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>商品属性</span>
                </div> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="属性名:">
                        <el-select v-model="formInline.region" placeholder="请输入属性名">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-form>
                    <el-form-item label="属性值:">
                       <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                        </el-tag>
                        <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                        >
                        </el-input>
                    <el-button @click="centerDialogVisible = true">+ 选择属性值</el-button>
                    </el-form-item>
                </el-form>
                <el-button type="primary" round @click="dialogFormVisible = true">批量设置价格</el-button>
                <el-button type="primary" round @click="dialogFormVisible1 = true">批量设置库存</el-button>

                <!-- 表格 -->
                  <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="是否选中"
                    ref="table"
                    width="140">
                        <el-checkbox v-model="checked2"></el-checkbox>
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="序号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                     width="180"
                    label="图片">
                        <el-upload
                        class="min-p"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-table-column>
                     <el-table-column
                    prop="name"
                    label="价格/元"
                    width="240">                      
                        <el-input placeholder="请输入价格" v-model="input3" class="input-with-select">
                            <el-button slot="append">元</el-button>
                        </el-input> 
                    </el-table-column>
                     <el-table-column
                    prop="name"
                    label="库存"
                    width="240">
                    <el-input placeholder="请输入库存数量" v-model="input3" class="input-with-select">
                            <el-button slot="append">个</el-button>
                    </el-input> 
                    </el-table-column>
                     <el-table-column
                  
                    label="操作"
                    width="200">
                    <template slot-scope="scope">
                        <el-button @click="handledelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <!-- 分页 -->
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </el-card>
            <!-- 对话框 -->
           <el-dialog title="批量设置价格" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="设置价格" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 对话框end -->
            <!-- 对话框 -->
           <el-dialog title="批量设置库存" :visible.sync="dialogFormVisible1">
                <el-form :model="form">
                    <el-form-item label="设置库存/个" :label-width="formLabelWidth">
                    <el-input v-model="form.name1" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 对话框end -->
            <!-- 对话框 -->
            <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>      
            <div>
                <el-checkbox v-model="checked1">全选</el-checkbox>
            </div>
            <el-checkbox v-model="checked">红色</el-checkbox>
            <el-checkbox v-model="checked">红色</el-checkbox>
            <el-checkbox v-model="checked">白色</el-checkbox>
            <el-checkbox v-model="checked">黄色</el-checkbox>
            <el-checkbox v-model="checked">绿色</el-checkbox>
            <el-checkbox v-model="checked">紫色</el-checkbox>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 对话框end -->
        </div>
        <div id="sortlist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>商品详情</span>
                </div> 
                <!-- 富文本 -->
                 <quill-editor 
                    v-model="content" 
                    ref="myQuillEditor" 
                    :options="editorOption" 
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
                <!-- 富文本内容 -->
                <div class="text"></div>
                <button v-on:click="saveHtml" class="btn">保存</button>
            </el-card>
           
        </div>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import $ from 'jquery'//先安装jquery
  export default {
    data() {
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(function(){
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        //图片上传的headers请求头对象
        headersObj:{
            token:localStorage.getItem('token') || '$2a$10$Q9y2WrGidaxOE3C8ddwXH.gjXJqNs3sy0L3mtYfMTIIOW2m1A0D.a'
        },
         dialogImageUrl: '',
        dialogVisible: false,
    
        //富文本
        content:null,
        editorOption:{},
        //
        checked:true,
        checked1: true,
        checked2: true,
        //对话框
        centerDialogVisible: false,
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          name: '',
          name1: '',
        },
        formLabelWidth: '120px',
        //分页
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        //表格里面的
        dialogImageUrl: '',
        dialogVisible: false,
         formInline: {
          region: ''
        },
        input3:'',
        //商品属性
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        //标签
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        //商品详情
        // content:null,
        // editorOption:{},
        //商品相册
        imageUrl: '',
        radio: 3,
        //基本信息
         ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          region: '',
        },
        rules: {
            pass: [
            { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
            { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
            { validator: checkAge, trigger: 'blur' }
            ],
            region: [
            { required: true, message: '请选择基本单位', trigger: 'change' }
          ],
        }
      };
    },

    computed: {
        //富文本
	       editor() {
	            return this.$refs.myQuillEditor.quill;
	        },
	    },

    methods: {
    //弹框
    handledelete() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //对话框
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    //商品属性
     handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    //表格里面的
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    //富文本
        onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            	//console.log(this.content)
        		//$('.text').html(this.content)
            },
            saveHtml(event){//点击保存按钮保存
	          alert(this.content);
	        },
    //商品相册
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
    #sortlist{
        width: 100%;
        margin-bottom: 30px;
        .el-card{
            width: 100%;
            display: block;
            .left{
                float: left;
                width: 40%;
            }
            .right{
                float: right;
                width: 40%;
                margin-right: 30px;
            }
            .el-select{
                width: 100%;
            }
        }
    }
        .text {
            font-size: 14px;
        }
        .item {
            margin-bottom: 18px;
        }
        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }
        .box-card {
            width: 480px;
        }
        //图片上传
        .avatar-uploader-icon[data-v-0fb7db25]{
            border: 1px dashed #d9d9d9;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
        //商品详情
        //商品属性
        .el-table{
            margin-top: 20px;
        }
        ::v-deep .min-p .el-upload--picture-card{
            width: 50px;
            height: 50px;
            line-height: 50px;
        }
          //标签
         .el-tag + .el-tag {
            margin-left: 10px;
        }
        .button-new-tag {
            margin-left: 10px;
            height: 32px;
            line-height: 30px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .input-new-tag {
            width: 90px;
            margin-left: 10px;
            vertical-align: bottom;
        }
        //分页
            .el-pagination{
              margin-top: 20px;
              background: #CCCCCC;
              height: 50px;
              text-align: right;
              padding: 10px 10px 0px;
              box-sizing: border-box;
            }
        ::v-deep .ql-editor{
            height: 500px;
        }
        .btn{
            margin-top: 30px;
            margin-left: 50%;
        }
</style>