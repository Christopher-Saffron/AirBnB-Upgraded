// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  

//   import dbConnect from '../../../lib/dbConnect'
import dbConnect from '@/lib/dbConnect'
import Travel from '@/models/Travel'

export default async function handler(req, res) {
  const { method } = req
  const dataParsed = JSON.parse(req.body)
  await dbConnect()
    console.log('ding', dataParsed)
  try {
    const travel = await new Travel({...dataParsed})
    // console.log(travel, 'a')
    // travel.save()
    // await travel.save()
    res.status(201).json({ success: true, data: travel })
  } catch (error) {
    res.status(400).json({ success: false })
  }

}