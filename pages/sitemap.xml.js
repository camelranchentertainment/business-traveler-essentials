// pages/sitemap.xml.js
// Generates dynamic sitemap for all pages and categories

export default function Sitemap() {
  // This component doesn't render anything
  return null;
}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://yourdomain.com'; // REPLACE WITH YOUR DOMAIN
  
  // Define all your categories
  const categories = [
    'luggage',
    'backpacks',
    'tech-organizers',
    'charging-cables',
    'power-adapters',
    'portable-power',
    'neck-pillows',
    'packing-cubes',
    'laptop-sleeves',
    'headphones',
    'computer-mouse',
    'portable-monitors'
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Category Pages -->
  ${categories
    .map((category) => {
      return `
  <url>
    <loc>${baseUrl}/category/${category}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('')}
  
  <!-- Static Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/travel-tips</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
