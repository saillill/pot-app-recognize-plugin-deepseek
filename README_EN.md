# Pot-App Recognize Plugin - DeepSeek OCR

An OpenAI-compatible API plugin for Pot-App, using DeepSeek-OCR model by default. Supports OCR for 100+ languages.

## Installation

1. Download the latest `plugin.com.pot-app.deepseek_recognize.potext` from [Releases](https://github.com/saillill/pot-app-recognize-plugin-deepseek/releases)
2. Open Pot-App → Preferences → Text Recognition → Add External Plugin
3. Import the downloaded `.potext` file

## Get an API Key

**SiliconFlow (Recommended)**:
1. Register at [cloud.siliconflow.cn](https://cloud.siliconflow.cn)
2. Go to API Keys page and create a new key
3. Copy the key (starts with `sk-`) and paste into the plugin's API Key field
4. New users typically get free credits; top up when exhausted

**Other Platforms**:
Switch the endpoint to "Custom" and enter your provider's API address and model ID.

## Configuration

| Field | Type | Description |
|-------|------|-------------|
| Model | Select | Default `DeepSeek-OCR`, or "Custom" for other models |
| Custom Model | Input | Enter model ID when "Custom" is selected |
| Endpoint | Select | Default `SiliconFlow`, or "Custom" |
| Custom Endpoint | Input | Enter OpenAI-compatible API URL when "Custom" is selected |
| API Key | Input | Your API key |
| Custom Prompt | Input | Default `Free OCR.`, change as needed |

## FAQ

**Q: "account balance is insufficient" error?**
A: Your SiliconFlow account balance is low. Top up at [cloud.siliconflow.cn](https://cloud.siliconflow.cn).

**Q: "Model does not exist" error?**
A: Check the model name. For SiliconFlow, use `deepseek-ai/DeepSeek-OCR`.

**Q: Supported languages?**
A: DeepSeek-OCR supports 100+ languages including Chinese, Japanese, Korean, English, French, German, Russian, etc.

## Auto Build

This repo uses GitHub Actions for automatic packaging. Every push builds the plugin, every tag creates a Release.
