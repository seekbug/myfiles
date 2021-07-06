<template>
    <div id="catelist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品列表</span>
            </div>
            <!-- 搜索 -->
            <el-input placeholder="请输入产品名" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary" round class="btn" @click="dialogVisible=true">新增</el-button>
            <!-- 表格 -->
            <el-table
                :data="tableData"
                style="width: 100%"
                height="500">
                <el-table-column
                fixed
                prop="date"
                label="ID"
                width="150">
                </el-table-column>
                <el-table-column
                prop="name"
                label="产品分类"
                width="120">
                </el-table-column>
                <el-table-column
                prop="province"
                label="货号"
                width="120">
                </el-table-column>
                <el-table-column
                prop="city"
                label="产品名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="幅宽"
                width="300">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="克重"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="每公斤/米"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="棉C%"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="涤T%"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="氨纶SP%"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="现货颜色"
                width="120">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="操作"
                fixed="right"
                width="120">
                <template>
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
        <!-- 对话框(新增) -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="35%"
        >
            <!-- 提示信息 -->
            <el-input placeholder="请输入产品名" v-model="input3" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="500">
                    <el-table-column
                    prop="date"
                    label="ID"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="产品分类"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="province"
                    label="货号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="产品名"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="zip"
                    label="操作"
                    width="120">
                    <template>
                        <el-button type="text" size="small">綁定</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            <!-- 提示信息end -->
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        //对话框
         dialogVisible: false,
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
        //刪除 彈框
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
       
       //分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
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