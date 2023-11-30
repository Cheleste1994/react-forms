export default function convertPhotoBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}
