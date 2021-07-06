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
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user" type="text" clearable placeholder="请输入用户名"
                        v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" clearable placeholder="请输入密码"
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
import { postLoginApi } from "@/api"
  export default {
    data() {
       let checkUname = (rule, value, callback) => {
          if (value == '') return callback(new Error('用户名不能为空'));
          if (value.length < 2 || value.length > 12) return callback(new Error('长度在 2 到 12 个字符'));
          return callback();
      };
    
        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 2,
                        max: 12,
                        message: "长度在 2 到 12 个字符",
                        trigger: "blur",
                    },
                ],
            },
            value: '',
        };
    },
    methods: {
      submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    postLoginApi(this.ruleForm)
                        .then(res => {
                            console.log(res.data.access_token)
                            if (res.code == 0) {
                                localStorage.setItem('token', res.data.access_token)                             
                                // 更新vuex数据
                                this.$store.commit('users/setUserinfo', {
                                    token: res.data.token,
                                })
                                this.$message.success('登录成功')
                                this.$router.push({ path: '/cates/catelist'})
                            } else {
                                this.$message.error(res.message)
                            }
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
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