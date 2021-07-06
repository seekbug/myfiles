<template>
    <div id="sortlist">
        <div class="menu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>活动管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="jump('/markes/list')"><i class="el-icon-s-tools"></i>活动列表</el-menu-item>
                    </el-menu-item-group>   
                </el-submenu>  
            </el-menu>
        </div>
        <div class="content">
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
    #sortlist{
        width: 100%;
        height: 100%;
        display: flex;
        .menu{
            width:201px;
            height:877px;
            background: #545c64;
            .el-menu{
                height: 37px; 
               .el-menu-item-group >>>.el-menu-item-group__title{
                    padding:0;
                }
            }
        }
        .content{
            flex: 1;
            min-height: 100px;
            width: 100%;
            .main{
                width: 96%;
                margin: 30px auto;
            }
        }
    }
</style>