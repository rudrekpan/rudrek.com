import fs from 'fs'
import path from 'path'

const API_KEY = 'AIzaSyAf0Ml9_MJwZx6gmx5M3I4_U2FusbbHI5Y'
const OUTPUT_DIR = './public/images/projects'

// Try multiple models in order of preference
const MODELS = [
  {
    name: 'imagen-4.0-fast-generate-001',
    url: `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${API_KEY}`,
    type: 'imagen',
  },
  {
    name: 'gemini-2.0-flash-exp-image-generation',
    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`,
    type: 'gemini',
  },
  {
    name: 'gemini-2.0-flash',
    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    type: 'gemini',
  },
]

const images = [
  {
    filename: 'rtm-1.jpg',
    prompt: 'Create a professional, modern abstract illustration representing a sales route-to-market transformation in the cement and building materials industry. Show an abstract network of distribution channels, flowing lines connecting factories to markets, with upward trending growth arrows. Use a cool blue and teal color palette with subtle gradients. Clean, minimalist corporate style suitable as a project hero image. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'rtm-2.jpg',
    prompt: 'Create a professional abstract data visualization illustration showing revenue growth analytics. Display stylized bar charts and line graphs trending upward with a 12% growth indicator feel. Use cool blue, teal, and white color palette. Clean, modern corporate consulting aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'strategy-1.jpg',
    prompt: 'Create a professional abstract illustration representing a 5-year corporate growth strategy and M&A roadmap. Show an abstract rising staircase or ascending pathway with milestone markers, branching paths representing acquisitions, and a horizon line suggesting future growth. Use deep navy blue and gold accent color palette. Clean, executive boardroom presentation aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'automotive-1.jpg',
    prompt: 'Create a professional abstract illustration representing automotive service transformation and operations excellence. Show stylized automotive parts, gears, and workflow arrows depicting speed and efficiency improvement. Include abstract elements suggesting time compression (85% reduction). Use dark charcoal, orange, and silver color palette. Modern industrial design aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'automotive-2.jpg',
    prompt: 'Create a professional abstract illustration of a Python-powered analytics dashboard for automotive service operations. Show stylized dashboard panels, data streams, and abstract chart elements floating in a clean digital space. Use dark background with bright orange and cyan data visualization accents. Modern tech aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'supply-chain-1.jpg',
    prompt: 'Create a professional abstract illustration representing supply chain network optimization and capacity planning. Show an abstract map with interconnected nodes representing factories, warehouses, and distribution centers connected by flowing logistic lines. Use emerald green and navy blue color palette with subtle grid patterns. Clean corporate consulting aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'banking-1.jpg',
    prompt: 'Create a professional abstract illustration representing IT cost optimization for a banking institution. Show abstract layers of technology infrastructure being streamlined, with elements suggesting cost reduction and efficiency. Use deep blue, silver, and subtle gold color palette evoking trust and finance. Modern fintech aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'crm-1.jpg',
    prompt: 'Create a professional abstract illustration representing digital transformation with CRM and dealer management systems. Show abstract floating UI panels, connected data flows, and user adoption waves rippling outward. Use vibrant purple and blue gradient color palette with white accents. Modern SaaS/digital product aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'crm-2.jpg',
    prompt: 'Create a professional abstract illustration of Salesforce CRM adoption and user onboarding at scale. Show abstract human silhouettes connecting to a central digital platform with radiating adoption waves reaching 90%+ coverage. Use purple, blue, and green color palette. Clean digital transformation aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'tpm-1.jpg',
    prompt: 'Create a professional abstract illustration representing trade promotion management and dealer reward programs in the steel industry. Show abstract elements of a loyalty/reward system with flowing incentive structures, abstract dealer network nodes, and growth indicators. Use warm copper, steel grey, and deep red color palette evoking the steel industry. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'market-1.jpg',
    prompt: 'Create a professional abstract illustration representing market mapping and geographic expansion in East India. Show an abstract stylized map with density heat zones, expansion arrows pointing outward, and new market territory being unlocked. Use warm amber, terracotta, and teal color palette. Clean cartographic data visualization aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'dashboard-1.jpg',
    prompt: 'Create a professional abstract illustration of interactive sales and logistics dashboards. Show multiple abstract floating dashboard panels with stylized charts, KPI indicators, and real-time data streams. Use dark background with vibrant blue, green, and white data visualization accents. Modern business intelligence aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
  {
    filename: 'forecasting-1.jpg',
    prompt: 'Create a professional abstract illustration representing SKU-level demand forecasting using Python and SARIMA models. Show abstract time series curves, prediction intervals fanning outward, and data points being analyzed by algorithmic patterns. Use deep indigo, electric blue, and soft purple color palette. Modern data science aesthetic. No text or words in the image. Wide 16:9 aspect ratio.',
  },
]

function buildBody(modelType, prompt) {
  if (modelType === 'imagen') {
    return {
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '16:9' },
    }
  }
  return {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
  }
}

function extractImage(modelType, data) {
  if (modelType === 'imagen') {
    const prediction = data.predictions?.[0]
    if (!prediction) return null
    return { data: prediction.bytesBase64Encoded, mimeType: prediction.mimeType || 'image/png' }
  }
  const candidate = data.candidates?.[0]
  if (!candidate) return null
  const imagePart = candidate.content?.parts?.find((p) => p.inlineData)
  if (!imagePart) return null
  return { data: imagePart.inlineData.data, mimeType: imagePart.inlineData.mimeType }
}

async function generateWithModel(model, prompt) {
  const body = buildBody(model.type, prompt)
  const response = await fetch(model.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`${response.status}: ${errorText.slice(0, 200)}`)
  }

  const data = await response.json()
  const image = extractImage(model.type, data)
  if (!image) throw new Error('No image data in response')
  return image
}

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.filename}...`)

  for (const model of MODELS) {
    try {
      const image = await generateWithModel(model, imageConfig.prompt)
      const ext = image.mimeType === 'image/png' ? '.png' : '.jpg'
      const finalPath = path.join(OUTPUT_DIR, imageConfig.filename.replace(/\.\w+$/, ext))
      fs.writeFileSync(finalPath, Buffer.from(image.data, 'base64'))
      console.log(`  Saved: ${finalPath} (${image.mimeType}) via ${model.name}`)
      return { filename: imageConfig.filename, actualExt: ext, model: model.name }
    } catch (err) {
      console.log(`  ${model.name} failed: ${err.message.slice(0, 100)}`)
    }
  }

  console.error(`  All models failed for ${imageConfig.filename}`)
  return false
}

async function main() {
  console.log(`Generating ${images.length} project images...\n`)

  // Test first model
  console.log('Testing models...')
  let workingModel = null
  for (const model of MODELS) {
    try {
      console.log(`  Trying ${model.name}...`)
      const image = await generateWithModel(model, 'A simple blue abstract gradient background')
      console.log(`  ${model.name} works!\n`)
      workingModel = model
      break
    } catch (err) {
      console.log(`  ${model.name}: ${err.message.slice(0, 120)}`)
    }
  }

  if (!workingModel) {
    console.error('\nNo working model found. All models returned errors.')
    process.exit(1)
  }

  const results = []
  for (const img of images) {
    const result = await generateImage(img)
    results.push({ ...img, result })
    await new Promise((r) => setTimeout(r, 2000))
  }

  console.log('\n--- Summary ---')
  const succeeded = results.filter((r) => r.result)
  const failed = results.filter((r) => !r.result)
  console.log(`Success: ${succeeded.length}/${results.length}`)
  if (failed.length > 0) {
    console.log('Failed:', failed.map((f) => f.filename).join(', '))
  }

  const pngFiles = succeeded.filter((r) => r.result.actualExt === '.png')
  if (pngFiles.length > 0) {
    console.log('\nFiles saved as PNG (need reference updates in code):')
    pngFiles.forEach((f) => console.log(`  ${f.filename} -> ${f.filename.replace(/\.\w+$/, '.png')}`))
  }
}

main()
