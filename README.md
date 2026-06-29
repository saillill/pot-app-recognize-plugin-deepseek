<div align=“中心”>
<h3>[<a href='./README_EN.md'>English</a>][中文]</h3>
</div>

# Pot-App 文字识别插件 - DeepSeek OCR

基于硅基流动 DeepSeek-OCR 模型的 Pot-App 文字识别插件，支持近百种语言的 OCR 识别。

## 下载安装

1. 在 [Releases](https://github.com/saillill/pot-app-recognize-plugin-deepseek/releases) 页面下载最新 `.potext` 文件
2. 打开 Pot-App → 偏好设置 → 文字识别 → 添加外部插件
3. 选择下载的 `.potext` 文件导入

## 获取 API Key

1. 打开 [cloud.siliconflow.cn](https://cloud.siliconflow.cn) 注册账号
2. 进入`API 密钥`页面，创建新密钥
3. 复制 `sk-` 开头的密钥，填入插件配置

## 配置说明

| 配置项 | 说明 |
|--------|------|
| API Key | 硅基流动 API 密钥（`sk-` 开头） |
| 自定义 Prompt | 可填 `<image>\nFree OCR.`|
