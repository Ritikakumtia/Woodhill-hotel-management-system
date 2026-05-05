const mongoose=require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
      totalCost: {
        type: Number,
        required: true,
      },
      userRef: {
          type:mongoose.Schema.Types.ObjectId,
          ref:"User"
      },
      room: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },
    checkIn: {
        type:String,
        required:true
    },
    checkOut: {
        type:String,
        required:true
    },
    adults:{
        type:Number,
        required:true
    },
    children:{
        type:Number,
    }

    },

    { timestamps: true }
  );
  
  module.exports = mongoose.model('Booking', bookingSchema);
  
  