// src/components/HistologyImage.js
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './HistologyImage.css'

const HistologyImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://gtexportal.org/api/v2/histology/image');
        setImages(response.data.images); // Assuming the response data structure has an `images` field
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="histology-images">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.url} alt={`Histology Image ${index + 1}`} />
            <p>{image.description || `Image ${index + 1}`}</p>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default HistologyImage;
