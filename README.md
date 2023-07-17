# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
# edu-vue3

## 用户接口
### 用户登录
### 获取用户信息
- url: /front/user/getInfo
- method: GET
- headers Authorization access_token
- request 
- response
### 用户退出
### 刷新token
### 分页查询用户信息
### 启用用户
### 封禁用户
## 菜单接口
### 获取所有菜单信息
### 保存或新增菜单
### 删除菜单
### 获取编辑菜单页面信息
### 获取所有菜单并按层级展示
## 资源类别管理
### 查询资源分类列表
### 保存或更新资源分类
### 删除资源分类
## 资源管理
### 按条件分页查看资源
### 保存或更新资源
### 获取指定 ID 的资源
### 删除某个资源
