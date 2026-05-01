# Pot-App 文字识别插件 - DeepSeek OCR

基于 OpenAI 兼容 API 的文字识别插件，默认使用 DeepSeek-OCR 模型，支持替换任意视觉模型。

## 配置说明

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| 请求地址 | OpenAI 兼容 API 端点 | `https://api.siliconflow.cn` |
| API Key | 你的 API 密钥 | - |
| 模型 | 模型 ID，可自由替换 | `deepseek-ai/DeepSeek-OCR` |
| 自定义 Prompt | OCR 提示词 | `<image>\nFree OCR.` |

## 兼容平台

任何 OpenAI 兼容接口均可用，例如：
- **硅基流动**：模型填 `deepseek-ai/DeepSeek-OCR`
- **OpenAI**：模型填 `gpt-4o`
- **其他**：填入对应的模型 ID 即可

## 安装

1. 打开 Pot-App → 偏好设置 → 文字识别 → 添加外部插件
2. 选择 `.potext` 文件导入

## 自动编译

本仓库配置了 GitHub Actions，推送后自动打包插件。
