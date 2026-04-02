/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu satır GitHub Pages için şarttır
  images: { unoptimized: true } // Resimlerin hata vermemesi için
}
module.exports = nextConfig
