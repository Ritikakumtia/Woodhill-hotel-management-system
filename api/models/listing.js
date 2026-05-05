const mongoose=require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    checkIn: {
      type:String,
      required:true
  },
  checkOut: {
      type:String,
      required:true
  },
    facilities: {
        type: Array,
        required: true,
      },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    isBooked:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Listing', listingSchema);

