import * as dotenv from 'dotenv'
import { Router } from 'express'
import OpenAI from 'openai'

dotenv.config()

const router = Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

router
  .route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'This is the Dalle shit' })
  })
  .post(async (req, res) => {
    try {
      const { prompt } = req.body
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json'
      })

      const image = response.data.data[0].b64_json
      res.status(200).json({ photo: image })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Something went wrong here bruv' })
    }
  })

export default router
