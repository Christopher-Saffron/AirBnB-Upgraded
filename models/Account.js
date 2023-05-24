import mongoose from 'mongoose'

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  
  travels: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Travel'
  }]
})

export default mongoose.models?.Account || mongoose.model('Account', AccountSchema);
