<template>
    <div id="catelist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>员工管理</span>
            </div>
            <!-- 搜索 -->
            <el-input placeholder="请输入手机号" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary" round class="btn" @click="dialogVisible1 = true">新增</el-button>
            <!-- 表格 -->
             <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="date"
                label="ID"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="性别">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="手机号">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="用户名">
                </el-table-column>
                <el-table-column
                prop="address"
                label="密码">
                </el-table-column>
                <el-table-column
                prop="address"
                label="状态">
                  
                        <el-switch
                        v-model="value"           
                            active-value="true"
                            inactive-value="false"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                
                </el-table-column>
                <el-table-column
                prop="address"
                label="操作">
                    <template>
                        <el-button type="text" size="small" @click="dialogVisible = true">编辑</el-button>
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
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
       >
        <!-- 提示信息 -->
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item
            label="姓名"
            >
            <el-input v-model="dynamicValidateForm.name"></el-input>  
            </el-form-item>
            <el-form-item
            label="手机号"
            >
            <el-input v-model="dynamicValidateForm.number"></el-input>  
            </el-form-item>
             <el-form-item
            label="账号"
            >
            <el-input v-model="dynamicValidateForm.uname"></el-input>  
            </el-form-item>
            <el-form-item>
                <template>
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio>
                </template>
            </el-form-item>
        </el-form>
        <!-- 提示信息end -->
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <!-- 对话框end -->
        <!-- 对话框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible1"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 对话框end -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible1: false,
        input3:'',
        //提示信息
          dynamicValidateForm: {
          domains: [{
            name: '',
            number: '',
            uname:''
          }],
        },
          radio: '1',
        //对话框
           dialogVisible: false,
        //切换按钮
          value: true,
        //分页
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        //表格
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
     methods: {
        handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        //对话框
         handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
            }
        },
       //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
</script>

<style lang="scss" scoped>
    #catelist{
        width: 100%;
        .el-card{
            width: 100%;
            .el-input{
                width: 500px;
                float: left;
                margin-bottom:30px;
            }
            .btn{
                float: right;
                margin-left: 40px;
            }
            .el-table{
                margin-top:20px;
            }
            .el-switch{
              margin-left: 10px;
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
</style>