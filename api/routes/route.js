const exp=require("express");
const router=exp.Router();
const {auth} =require("../middleware/auth");
const {login,signup,googleAuth, signOut}=require("../controllers/auth");
const {updateUser, deleteUser}=require("../controllers/updateUser");
const { createListing, updateListing, deleteListing, getListing } = require("../controllers/listing");
const { createBooking, getBooking } = require("../controllers/booking");
router.post("/signup",signup);
router.post("/login",login);
router.post("/signOut",signOut);
router.post("/googleAuth",googleAuth);
router.put("/user/update/:userId",auth,updateUser);
router.delete("/user/delete/:userId",auth,deleteUser);
router.post("/listing/create",auth,createListing);
router.put("/listing/update/:id",auth,updateListing);
router.delete("/listing/delete/:id",auth,deleteListing);
router.get("/listing/:id",auth,getListing);
router.get("/listing/",getListing);

router.post("/booking/create",auth,createBooking);
router.get("/booking/:id",auth,getBooking);
router.get("/booking/",auth,getBooking);
module.exports=router;

