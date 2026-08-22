import fs from 'fs';
import path from 'path';
import { Jimp } from 'jimp';

const logoDir = 'public/logos';

async function processLogos() {
  const files = fs.readdirSync(logoDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      try {
        const filePath = path.join(logoDir, file);
        const image = await Jimp.read(filePath);
        
        // Make white pixels transparent (tolerance 15 for compression artifacts)
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
          const r = this.bitmap.data[idx + 0];
          const g = this.bitmap.data[idx + 1];
          const b = this.bitmap.data[idx + 2];
          
          if (r > 240 && g > 240 && b > 240) {
            this.bitmap.data[idx + 3] = 0; // Alpha 0
          }
        });
        
        const newPath = filePath.replace(/\.(jpg|jpeg)$/, '.png');
        await image.write(newPath);
        
        if (newPath !== filePath) {
          fs.unlinkSync(filePath);
        }
        console.log(`Processed ${file}`);
      } catch (err) {
        console.error(`Failed ${file}:`, err);
      }
    }
  }
}

processLogos();
