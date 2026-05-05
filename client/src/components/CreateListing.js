import { useState,useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { TextInput } from 'flowbite-react';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {RxCrossCircled} from "react-icons/rx";
export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: '',
    description: '',
    regularPrice: 0,
    facilities:[],
    checkIn:"",
    checkOut:"",
    isBooked:false
  });
  
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [facility, setFacility] = useState("");
    const [facilities, setFacilities] = useState([]);

  const location=useLocation();
  const params=new URLSearchParams(location.search);
   const idUrl=params.get('id');
   useEffect(() => {
   if(idUrl)
   {
    console.log(idUrl);
    
      const handleShowListings = async () => {
          try {
              const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing/${idUrl}`);
              const data = await res.json();
              if (data.success === true) {
                  setFormData(data.listing[0]);
                  setFiles(data.listing[0].imageUrls);
                  setFacilities(data.listing[0].facilities);
              }
          } catch (error) {
              //setShowListingsError(true);
              console.log(error);
          }
      };
      handleShowListings();
      
    } 
  }, []);
  
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError('Image upload failed (2 mb max per image)');
          setUploading(false);
        });
    } else {
      setImageUploadError('You can only upload 6 images per listing');
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage,"hotel/"+fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (
      e.target.type === 'number' ||
      e.target.type === 'text' ||
      e.target.type === 'textarea'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    if (
      e.target.type === 'checkbox' 
    ) 
    {
      setFormData({...formData,
        isBooked: e.target.checked
        })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError('You must upload at least one image');
      
      setLoading(true);
      setError(false);
      if(idUrl)
      {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing/update/${idUrl}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            userRef: currentUser._id,
          }),
        });
        const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(data.message);
      }
      navigate(`/room/${data.listing._id}`);
      return;
      }
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/listing/create`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(data.message);
      }
      navigate(`/room/${data.listing._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(()=>{
    setFormData({...formData,facilities:facilities})
  },[facilities]);
  const addFacility = () => {
    if(facility=='')return;
    let updatedFacilities = [...facilities];
    updatedFacilities.push(facility);
    setFacility("");
    setFacilities(updatedFacilities);
  }
  const deleteFacility = (i) => {
    let updatedFacilities = [...facilities]
    updatedFacilities.splice(i,1);
    setFacilities(updatedFacilities);
  }

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        {!idUrl?('Create a Listing'):('Update Listing')}
      </h1>
      <form onSubmit={handleSubmit} className='flex  flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='p-3 rounded-lg bg-slate-700'
            id='name'
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg bg-slate-700'
            id='description'
            required
            onChange={handleChange}
            value={formData.description}
          />
          
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
              <TextInput value={facility} onChange={(e) => setFacility(e.target.value)} className='flex-1' placeholder='Enter Facilities' type="text" />
              <p onClick={()=>{addFacility()}} className='bg-slate-700 text-white px-4 py-2 rounded font-semibold cursor-pointer'>Add</p>
            </div>

            {/* categories */}
            <div className='flex flex-wrap px-4 mt-3'>
              {facilities?.map((c, i) =>(
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-800 px-2 py-1 rounded-md'>
                  <p>{c}</p>
                  <p onClick={() => deleteFacility(i)} className='text-whitecursor-pointer p-1 text-sm'><RxCrossCircled /></p>
                </div>
              ))}

            </div>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isBooked'
                className='w-5'
                onChange={handleChange}
                checked={formData.isBooked}
              />
              <span>IsBooked</span>
            </div>
          </div>
          <div className='flex flex-col flex-wrap gap-2'>
            <div className='flex items-center justify-between gap-2'>
            <p className='text-white'>Check In</p>
              <input
                type='text'
                id='checkIn'
                required
                className='p-3 border bg-slate-700 rounded-lg'
                onChange={handleChange}
                value={formData.checkIn}
              />
              
            </div>
            <div className='flex items-center justify-between gap-2'>
            <p className='text-white'>Check Out</p>
              <input
                type='text'
                id='checkOut'
                required
                className='p-3 border bg-slate-700 rounded-lg'
                onChange={handleChange}
                value={formData.checkOut}
              />
              
            </div>
            <div className='flex items-center justify-between gap-2'>
            <p className='text-white'>Regular price</p>
              <input
                type='number'
                id='regularPrice'
                required
                className='p-3 border bg-slate-700 rounded-lg'
                onChange={handleChange}
                value={formData.regularPrice}
              />
              
            </div>
           
            
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-4 text-white' >
          <p className='font-semibold'>
            Images:
            <span className='font-normal  ml-2'>
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className='flex gap-4'>
            <input
              onChange={(e) => setFiles(e.target.files)}
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button
              type='button'
              disabled={uploading}
              onClick={handleImageSubmit}
              className='p-3 text-green-400 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
          <p className='text-red-700 text-sm'>
            {imageUploadError && imageUploadError}
          </p>
          {formData && formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className='flex justify-between p-3 border items-center'
              >
                <img
                  src={url}
                  alt='listing image'
                  className='w-20 h-20 object-contain rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
              </div>
            ))}
          <button
            disabled={loading || uploading}
            className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Creating...' :!idUrl? 'Create Listing':'Update Listing'}
          </button>
          {error && <p className='text-red-700 text-sm'>{error}</p>}
        </div>
      </form>
    </main>
  );
}
