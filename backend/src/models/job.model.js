const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,
    },
     position: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Applied', 'Interview', 'Rejected', 'Selected'],
        default: 'Applied'
    },
   user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   },
    appliedDate: {
        type: Date,
        default: Date.now
    },
},{
    timestamps:true
})

const jobModel = mongoose.model('job',jobSchema)

module.exports = jobModel