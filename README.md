# Pot-App 文字识别插件 - DeepSeek OCR

基于 [DeepSeek-OCR](https://platform.deepseek.com/) 模型的 Pot-App 文字识别插件，通过 OpenAI 兼容 API 调用。

## 配置说明

| 配置项 | 说明 |
|--------|------|
| 请求地址 | API 端点地址，默认为 `https://api.siliconflow.cn` |
| API Key | 你的 API 密钥 |
| 自定义 Prompt | 默认 `Free OCR.`（推荐），也可改为 `<\|grounding\|>Convert the document to markdown.` |

## 安装

1. 打开 Pot-App
2. 偏好设置 → 文字识别 → 添加外部插件
3. 选择 `.potext` 文件导入

## 自动编译

本仓库配置了 GitHub Actions，推送后自动打包插件，可在 Actions 页面下载 Artifact。
