<template>
    <div id="catelist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品列表</span>
            </div>
            <!-- 搜索 -->
            <el-input placeholder="请输入产品名" v-model="searchBean.name" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="initData()"></el-button>
            </el-input>
             <el-button type="primary" round class="btn" @click="jump('/cates/detail')">新增</el-button>
            <!-- 表格 -->
              <el-table
                :data="tableData2"
                style="width: 100%"
                >
                <el-table-column
                fixed
                prop="id"
                label="ID"
                width="180">
                </el-table-column>
                <el-table-column
                prop="category1Name>category2Name>category3Name"
                label="产品分类"
                width="180">
                </el-table-column>
                <el-table-column
                prop="sn"
                label="货号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="产品名"
                width="200">
                </el-table-column>
                  <el-table-column
                prop="createTime"
                label="创建时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="published"
                label="上架状态"
                width="180">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.published"
                        @change="handleSwitch(scope.row.published,scope.row.id)"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                prop="zip"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="jump('/cates/detail')">详情</el-button>
                    <el-button type="text" size="small" @click="jump('/cates/detail')">编辑</el-button>
                    <el-button type="text" size="small" @click="handledel(scope.row.id)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[pageSize, 200, 300, 400]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData2Total">
          </el-pagination>
        </el-card>
    </div>
</template>

<script>
import { postCateListApi,postCateStateApi,deleteCateListApi } from "@/api"
  export default {
    data() {
      return {
        value: true,
        // 分页
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        //2 表格列表数据
        pageIndex: 1,  //当前页为第一页
        pageSize: 6,    //页面显示信息数为6条
        searchBean: {name:''},
        tableData2: [],
        tableData2Total:0                                                                                                                       
      }
    },
    created () {
        this.initData()
    },
     methods: {
         //切换按钮
          handleSwitch (published, spuId) {
            postCateStateApi({
                "spuId": spuId,
                "published": published
            }).then(res => {
                // console.log(res)
                if (res.code == 0) {
                    this.$message.success(res.message);
                } else {
                    this.$message.error(res.message);
                }
            })
        },
         //删除
         handledel (id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteCateListApi({
                    id
                }).then(res => {
                    if (res.code == 0) {
                        this.$message.success(res.message);
                        this.initData()
                    } else {
                        this.$message.error(res.message);
                    }
                })
            })
        },
         //1
         initData () {
            postCateListApi({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                searchBean : this.searchBean,
            })
                .then(res => {
                    this.tableData2 = res.data.records
                    this.tableData2Total = parseInt(res.data.total)
                })
        },
       //分页
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
         this.pageIndex = val;
            this.initData()
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