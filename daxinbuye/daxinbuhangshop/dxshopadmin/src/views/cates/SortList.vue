<template>
    <div id="sortlist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>分类列表</span>
            </div>  
                <el-button type="primary" round class="btn" @click="dialogVisible1 = true">新增</el-button>
                <el-button type="primary" round class="btn" @click="handledel">删除</el-button>
            <!-- 树形控件 --> 
            <el-tree
                :data="tableData2"
                show-checkbox
                node-key="id"
                ref="tree"
                :expand-on-click-node="false"
                :props="defaultProps"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                >
                  <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <span>
                    <el-button
                        type="text"
                        size="mini"
                        @click="() => showAddDialog(data)">
                        新增
                    </el-button>     
                    <el-button
                        type="text"
                        size="mini"
                        @click="() => showEdit(data)">
                        编辑
                    </el-button>
                    <el-button
                        type="text"
                        size="mini"
                        @click="() => remove(node, data)">
                        删除
                    </el-button>
                    </span>
                </span>  
            </el-tree>
        </el-card>
        <!-- （新增）对话框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%">
            <el-form :model="sortForm" ref="ruleForm" :rules="rules" label-width="100px">
                <el-form-item label="分类名称" prop="name">
                    <el-input type="name" v-model="sortForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('sortForm')">保 存</el-button>
            </span>
        </el-dialog>
        <!-- （编辑）对话框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible2" width="30%">
            <el-form :model="sortForm1" ref="sortForm1" :rules="rules" label-width="100px">
                <el-form-item label="分类名称" prop="name">
                    <el-input type="name" v-model="sortForm1.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="editForm('sortForm1')">保 存</el-button>
            </span>
        </el-dialog>
        <!-- (删除)对话框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible3"
            width="30%"
            :before-close="handleClose">
            <span>确定要删除此分类吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { getSortListApi,deleteSortListApi,putSortListApi,postSortListApi } from "@/api"
    let id = 1000;
    export default {       
    data() { 
      return {   
        //表单数据
        sortForm: {
            name: '',
            parentId:'',
        },
        sortForm1:{
            name:'',
            id:''
        },
        rules: {
            name: [
                { required: true, message: '请输入分类名称', trigger: 'blur' },
                { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
            ],
        },
        //树形控件
        defaultProps: {
                children: "children", 
                label: "name",  
        },
        //对话框
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3:false,
        tableData2:[],
      }
    },
     created () {
        this.initData ()
    },

    methods: {  
        //获取列表数据
        initData () {
            getSortListApi()
             .then(res => {
                if (res.code == 0) {
                    this.tableData2 = res.data
                }
             })
        },
        //编辑
        showEdit(data){
            this.dialogVisible2 = true
            this.sortForm1.name = data.name
            this.sortForm1.id = data.id
        },
        editForm (sortForm1) {
            postSortListApi(this.sortForm1)
                .then(res => {
                    console.log(res)
                    if (res.code == 0) {
                        this.$message.success(res.message)
                        this.dialogVisible2 = false
                        this.initData ()
                    } else {
                        this.$message.console.error(res.message)
                    }
            })
        },
        //增加
        submitForm (sortForm) {
            putSortListApi(this.sortForm)
                .then(res => {
                    if (res.code == 0) {
                        this.$message.success(res.message)
                        this.dialogVisible1 = false
                        this.initData ()
                    } else {
                        this.$message.console.error(res.message)
                    }
            })
        },
         showAddDialog(data){
            this.dialogVisible1 = true
            this.sortForm.parentId = data.id
        },

        //删除
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        handledel () {
        let getid = this.$refs.tree.getCheckedKeys();
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log(getid) 
                deleteSortListApi({  
                    id:getid
                }).then(res => {
                    if (res.code == 0) {
                        this.$message.success(res.message);
                         getSortListApi()
                        .then(res => {
                            if (res.code == 0) {
                                this.tableData2 = res.data
                                console.log(this.tableData2)
                            }
                        })
                    } else {
                        this.$message.error(res.message);
                    }
                })
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
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
        .el-button--text {
            margin-left: 70px;
        }
</style>