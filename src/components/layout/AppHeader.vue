<script setup lang="ts">
import { isCollapse } from './isCollapse';
import { getInfo } from '../../api/users';

const userInfo = ref({ portrait: "", userName: "" })
getInfo().then((res) => {
    console.log(res);
    userInfo.value = res.data.content

})
</script>

<template>
    <el-header>
        <!-- 图标 -->
        <el-icon @click="isCollapse = !isCollapse">
            <IEpExpand v-show="isCollapse" />
            <IEpFold v-show="!isCollapse" />
        </el-icon>

        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 下拉菜单 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="36" :src="userInfo.portrait" />
                <el-icon class="el-icon--right">
                    <IEparrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
                    <el-dropdown-item divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
    background-color: #dedfe0;

    .el-icon {
        margin-right: 18px;
    }
}

.el-dropdown {
    margin-left: auto;

    .el-dropdown-link {
        display: flex;
        justify-items: center;
        align-items: center;
    }
}
</style>
