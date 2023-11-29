export default function convertPhotoBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result as string);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}
