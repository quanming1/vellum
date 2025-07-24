@echo off
echo 启动开发环境...

rem 只启动test-app开发服务器（直接从源码导入包），不打开新窗口
pnpm --filter test-app dev

echo 开发服务器已启动！
echo 现在直接从源码导入各个包，无需实时构建
pause 