import React, { useEffect, useState } from "react";
import DrinksCard from "../layouts/DrinksCard";
const Cats = () => {
  const [cats, setCats] = useState([]); // State to store cat data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch Cat API data
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const data = await response.json();
        setCats(data); // Set the cat data in state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching cat data:", error);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Meet Our Cafe Cats
      </h1>

      {/* Loading State */}
      {loading ? (
        <p>Loading cats...</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Map through cats and display each cat */}
          {cats.map((cat) => (
            <DrinksCard
              key={cat.id}
              img={
                cat.image?.url || "https://via.placeholder.com/150" // Fallback if no image exists
              }
              title={cat.name}
              price={cat.origin} // Replace price with origin
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cats;
