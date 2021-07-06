<template>
    <div id="index">
        <div class="top">
            <h1 class="logo">大新布业</h1>
            <div class="menu">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#263445"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" @click="jump('/cates/catelist')">商品管理</el-menu-item>
                <el-menu-item index="2" @click="jump('/markes/index')">营销管理</el-menu-item>
                <el-menu-item index="3">数据管理</el-menu-item>
                <el-menu-item index="4" @click="jump('/company/index')">企业管理</el-menu-item>
                <el-menu-item index="5" @click="jump('/system/index')">系统管理</el-menu-item>
                </el-menu>
            </div>
            <div class="admin">
                <el-button type="danger" round @click="handleExit">退出登录</el-button>
            </div>
        </div>
        <div class="content">
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
    //退出
    handleExit(){
        window.localStorage.clear()
        this.$router.push('/login')
    },
    //搜索
      handleSelect(key, keyPath) {
      }
    }
  }
</script>

<style lang="scss" scoped>
    #index{
        width:100%;
        height:100%;
        position: relative;
        h1{
            color: #fff;
            width: 200px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
        }
        .top{
        overflow: hidden;
            min-height: 10px;
            width: 100%;
            background:#263445;
            margin: 0 auto;
            .menu{
                width: 65%;
                float: left;
                .el-menu{
                    padding-left: 200px;
                    .el-menu--horizontal>.el-menu-item{
                        padding: 0 38px;
                    }
                }
                .el-menu.el-menu--horizontal {
                    border: none;
    
                }
            }
            .admin{
                float: right;
                text-align: right;
                line-height: 60px;
                width: 35%;
                color: #fff;
            }
        }
        .el-button{
            margin-right:30px;
        }
        .content{
            flex:1;
            width: 100%;
            min-height: 100px;
        }
    }
</style>