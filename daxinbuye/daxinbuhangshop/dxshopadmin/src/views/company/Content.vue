<template>
    <div id="sortlist">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>企业内容</span>
            </div>
            <!-- 富文本 -->
            <quill-editor 
                v-model="content"                 
                ref="myQuillEditor"                                              
                :options="editorOption" 
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"   
                @change="onEditorChange($event)">
            </quill-editor>
            <div class="text">
            </div>
            <button v-on:click="saveHtml" class="btn">保存</button>    
        </el-card>
    </div>
</template>

<script>
//富文本
    import { quillEditor } from 'vue-quill-editor'
    import $ from 'jquery'//先安装jquery
    export default{
        data(){
            return {
                content:null,
                editorOption:{}
            }
        },
        computed: {
	       editor() {
	            return this.$refs.myQuillEditor.quill;
	        },
	    },
        methods:{
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
	        }
        }
    }    
</script>   
   
<style lang="scss" scoped>
    #sortlist{
        width: 100%;
        .el-card{
            width: 100%;   
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
            clear: both;
        }
        .box-card {
            width: 480px;
        }
        ::v-deep .ql-container{
            height: 600px;
        }
        .btn{
            margin-left: 50%;
            margin-top: 20px;
        }
</style>