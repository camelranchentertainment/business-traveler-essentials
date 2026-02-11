// API route to proxy Amazon images and bypass CORS
export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || !url.includes('amazon.com')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch image: ${url} - Status: ${response.status}`);
      return res.status(404).json({ error: 'Image not found' });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await response.arrayBuffer();

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    return res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error('Image proxy error:', error.message);
    return res.status(500).json({ error: 'Failed to fetch image' });
  }
}

export const config = {
  api: {
    responseLimit: '10mb',
    bodyParser: false,
  },
};
