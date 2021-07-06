<template>
    <div id="sortlist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>分类列表</span>
            </div>
            <el-button type="primary" round class="btn">新增</el-button>
            <el-button type="primary" round class="btn">新增</el-button>
            <el-button type="primary" round class="btn">新增</el-button>
            <!-- 树形控件 -->
            <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
            </el-tree>
        </el-card>
    </div>
</template>

<script>
     export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
    #sortlist{
        width: 100%;
        .el-card{
            width: 100%;
            .btn{
                float: left;
                margin-left:80px;
            }
            .el-tree{
                margin-top: 80px;
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