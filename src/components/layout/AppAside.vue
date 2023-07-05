<script setup lang="ts">
import { isCollapse } from './isCollapse';
</script>

<template>
    <el-aside>
        <el-scrollbar height="380px">
            <el-menu router unique-opened :collapse="isCollapse">
                <a href="/" class="logo">
                    <img src="../../assets/vue.svg" alt="" />
                    <h1>小乔哈哈</h1>
                </a>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 权限管理</span>
                    </template>
                    <el-menu-item index="/menus">
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 菜单列表</span>
                    </el-menu-item>
                    <el-menu-item index="/resources">
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 资源列表</span>
                    </el-menu-item>
                    <el-menu-item index="/roles">
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 角色列表</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item index="/users">
                    <el-icon>
                        <IEpSetting />
                    </el-icon> <span> 用户管理</span>
                </el-menu-item>

                <el-menu-item index="/course">
                    <el-icon>
                        <IEpSetting />
                    </el-icon> <span> 课程管理</span>
                </el-menu-item>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 广告管理</span>
                    </template>
                    <el-menu-item index="/advertisement">
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 广告列表</span>
                    </el-menu-item>
                    <el-menu-item index="/advertising-space">
                        <el-icon>
                            <IEpSetting />
                        </el-icon> <span> 广告位管理</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    background-color: #eee;
    height: 100vh;
    width: auto;
}

.el-menu {
    background-color: #eee;
    border-right: none;
    width: 200px;

    &.el-menu--collapse {
        width: 60px;

        & h1 {
            display: none;
        }
    }
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 60px;
    color: black;

    img {
        width: 32px;
        height: 32px;
    }
}
</style>
