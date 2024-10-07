import cloudinary from '../app/config/cloud';
import { TImageFiles } from '../app/interface/image.interface';



export const deleteImageFromCloudinary = (files: TImageFiles) => {
  const publicIds: string[] = [];

  for (const file of Object.values(files)) {
    for (const image of file) {
      publicIds.push(image.filename);
    }
  }

  return new Promise((resolve, reject) => {
    cloudinary.api.delete_resources(
      publicIds,
      { resource_type: 'image' },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};
