<template>
    <div id="catelist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>活动管理</span>
            </div>
            <!-- 搜索 -->
            <el-input placeholder="请输入名称" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary" round class="btn" @click="dialogVisible = true">新增</el-button>
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
                label="名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="类型">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="有效时间">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="创建时间">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="数量">
                </el-table-column>
                 <el-table-column
                prop="address"
                label="操作">
                    <template>
                        <el-button type="text" size="small" @click="jump('/markes/boundcate')">绑定商品</el-button>
                        <el-button type="text" size="small" @click="dialogVisible1 = true">编辑</el-button>
                        <el-button type="text" size="small" @click="handledelete">删除</el-button>
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
        <!-- 对话框（新增） -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <!-- 提示信息 -->
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="活动名称"
                    prop="age"
                    :rules="[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                    ]"
                >
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动类型">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="有效时间">
                  <el-date-picker
                    v-model="value2"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                </el-date-picker>
                </el-form-item>  
            </el-form>
            <!-- 提示信息end -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </span>
        </el-dialog>
         <!-- 对话框(编辑) -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible1"
            width="30%"
            >
            <!-- 提示信息 -->
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="活动名称"
                    prop="age"
                    :rules="[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                    ]"
                >
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动类型">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="有效时间">
                  <el-date-picker
                    v-model="value2"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                </el-date-picker>
                </el-form-item>  
            </el-form>
            <!-- 提示信息end -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {   
          input3:'',
        //提示信息
          numberValidateForm: {
          age: ''
        },
         ruleForm: {
          region: '',
        },
        rules: {
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        },
        //日期
            pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
        //对话框
            dialogVisible: false,
            dialogVisible1: false,
        //分页
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        // 表格
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
        //刪除彈框
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
        .el-select{
            width: 100%;
        }
        .el-date-picker{
            width: 100%;
        }
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