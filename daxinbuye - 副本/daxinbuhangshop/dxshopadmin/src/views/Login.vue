<template>
   <div id="login">
       <div class="content">
          <vue-particles style="position:absolute;left:0;top:0;width:100%;height:100%" color="#fff"
                :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#fff"
                :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="2"
                :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
          </vue-particles>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm animated wobble">
                <el-form-item>
                    <h1>大新电商管理系统</h1>
                </el-form-item>
                <!-- <el-form-item prop="question">
                    <el-select v-model="ruleForm.question" clearable filterable placeholder="请选择密保问题" style="width:284px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="answer">
                    <el-input prefix-icon="el-icon-lock" type="text" clearable placeholder="请输入密码答案"
                        v-model="ruleForm.answer" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item prop="uname">
                    <el-input prefix-icon="el-icon-user" type="text" clearable placeholder="请输入用户名"
                        v-model="ruleForm.uname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input prefix-icon="el-icon-lock" v-model.number="ruleForm.pwd" clearable placeholder="请输入密码"
                        show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      
      var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
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
            ruleForm: {
                uname: '',
                pwd: '',
                // question: '',
                // answer: ''
            },
            rules: {
                // question: [
                //     { required: true, message: "请选择密保问题", trigger: "blur" },
                // ],
                // answer: [
                //     { required: true, message: "请输入密保答案", trigger: "blur" },
                //     { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
                // ],
                uname: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }

                    //自定义规则
                    // { validator: checkUname, trigger: "blur" },
                ],
                pwd: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 2,
                        max: 12,
                        message: "长度在 2 到 12 个字符",
                        trigger: "blur",
                    },
                ],
            },



            // options: [{
            //     value: '您其中一位老师的名字',
            //     label: '您其中一位老师的名字'
            // }, {
            //     value: '选项2',
            //     label: '你爸爸的名字叫什么'
            // }, {
            //     value: '选项3',
            //     label: '你奶奶的名字叫什么'
            // }, {
            //     value: '选项4',
            //     label: '你是谁的儿子'
            // }, {
            //     value: '选项5',
            //     label: '北京烤鸭'

            // }],
            value: '',
            // answer: [
            //     { value: '你的爸爸叫什么', label: '你爸爸叫什么' },
            //     { value: '你是谁的儿子', label: '你是谁的儿子' },
            //     { value: '你是谁的孙子', label: '你是谁的孙子' },
            //     { value: '您其中一位老师的名字', label: '您其中一位老师的名字' },
            // ],
        };
    },
    methods: {
      submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    // console.log(this.ruleForm)
                    postLoginApi(this.ruleForm)
                        .then(res => {
                            console.log(res)
                            if (res.meta.state === 200) {
                                // this.$message.success('登录成功')
                                this.$message.success(res.meta.msg)
                                this.$router.push({ path: '/welcome' })
                            } else {
                                this.$message.error(res.meta.msg)

                            }
                        })


                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        }
    }
  }
</script>

<style scoped lang="scss">
#login{
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    h1{
      color: #fff;
      margin: 56px 77px;
    }
    .content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;  
      .el-form{
        margin-top: 110px;
        width:480px;
        min-height:100px;
        .el-button{
          width: 380px;
        }
      }
    }
}
</style>