const Booking = require('../models/booking');
const Listing=require('../models/listing');
exports.createBooking = async (req, res) => {
    try {
        const listing = await Booking.create(req.body);
        await Listing.updateOne({_id:req.body.room},{ $set:{isBooked:true}});
        return res.status(201).json({
            success: true,
            message: "Booking Created ",
            listing:listing
        }
        );
    } catch (error){
        res.status(400).json({
            success: false,
            message: "Failed to create"
        })
    }
};

exports.getBooking = async (req, res) => {
    try {
        const listing = await Booking.find(req.params.id && { userRef: req.params.id})
        .sort({ updatedAt: 1 }).populate("room").exec();;
        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found!"
            })
        }
        return res.status(200).json({
            success: true,
            listing:listing
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch"
        });
    }
};
