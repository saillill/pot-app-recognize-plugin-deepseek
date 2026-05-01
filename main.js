async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    let { apiKey, requestPath, model, customPrompt } = config;

    if (!model) {
        model = "deepseek-ai/DeepSeek-OCR";
    }
    if (!requestPath) {
        requestPath = "https://api.siliconflow.cn";
    }
    if (!/https?:\/\/.+/.test(requestPath)) {
        requestPath = `https://${requestPath}`;
    }
    if (requestPath.endsWith('/')) {
        requestPath = requestPath.slice(0, -1);
    }
    if (!requestPath.endsWith('/chat/completions')) {
        if (!requestPath.endsWith('/v1')) {
            requestPath += '/v1';
        }
        requestPath += '/chat/completions';
    }
    if (!customPrompt) {
        customPrompt = "<image>\nFree OCR.";
    } else {
        customPrompt = customPrompt.replaceAll("$lang", lang);
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const body = {
        model,
        messages: [
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": `data:image/png;base64,${base64}`,
                            "detail": "high"
                        }
                    },
                    {
                        "type": "text",
                        "text": customPrompt
                    }
                ]
            }
        ]
    };

    let res = await fetch(requestPath, {
        method: 'POST',
        url: requestPath,
        headers: headers,
        body: {
            type: "Json",
            payload: body
        }
    });

    if (res.ok) {
        let result = res.data;
        return result.choices[0].message.content;
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}
