const Listing = require('../models/listing');
exports.createListing = async (req, res) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Created Listing",
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

exports.deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById({_id: req.params.id});
        if (!listing) {
            return res.status(404).json({
                success: false,
                message: "Listing not found!"
            })
        }

        // if (req.user.id !== listing.userRef) {
        //     return res.status(401).json({
        //         success: false,
        //         message: "your are not the admin"
        //     })
        // }

        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:'Listing has been deleted!'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete"
        })
    }
};

exports.updateListing = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return res.status(404).json({
            success: false,
            message: "Listing not found!"
        })
    }
    //console.log(req.user.id,listing.userRef);
    // if (req.user.id !== listing.userRef) {
    //     return res.status(401).json({
    //         success: false,
    //         message: "your are not the admin"
    //     })
    // }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "updated Listing",
            listing:updatedListing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch"
        });
    }
};

exports.getListing = async (req, res) => {
    try {
        const listing = await Listing.find(req.params.id && { _id: req.params.id});
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

exports.getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        let offer = req.query.offer;
       

        let furnished = req.query.furnished;
        if (furnished === undefined || furnished === 'false') {
            furnished = { $in: [false, true] };
        }

        let parking = req.query.parking;

        if (parking === undefined || parking === 'false') {
            parking = { $in: [false, true] };
        }

        let type = req.query.type;

        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] };
        }

        const searchTerm = req.query.searchTerm || '';

        const sort = req.query.sort || 'createdAt';

        const order = req.query.order || 'desc';

        const listings = await Listing.find({
            name: { $regex: searchTerm, $options: 'i' },
            offer,
            furnished,
            parking,
            type,
        })
            .sort({ [sort]: order })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
};
