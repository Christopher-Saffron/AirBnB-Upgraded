// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  

//   import dbConnect from '../../../lib/dbConnect'
import dbConnect from '@/lib/dbConnect'
import Travel from '@/models/Travel'
import Account from '@/models/Account'

export default async function handler(req, res) {
  const { method } = req
  const dataParsed = JSON.parse(req.body)

  try {
    await dbConnect()

    const user = await Account.findOne({email: dataParsed.email})
    const travel = await new Travel({...dataParsed})

    await travel.save()
    user.travels.push(travel._id)
    await user.save();

    // travel.save()
    res.status(201).json({ success: true, })
  } catch (error) {
    res.status(400).json({ success: false })
  }

}