const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadAvatar = async (imagePath, phone) => {
  const options = {
    folder: 'kosh/avatars', // Folder in Cloudinary where avatars will be stored
    public_id: `avatar_${phone}`, // Unique ID for the avatar
    use_filename: true,
    unique_filename: true,
    overwrite: true,
    transformation: [
      { width: 500, height: 500, crop: 'fill', gravity: 'face' } // Makes it square centered on face
    ],
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Avatar upload failed');
  }
};

module.exports = uploadAvatar;
