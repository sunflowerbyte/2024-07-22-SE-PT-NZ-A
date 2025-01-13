import React, { useState, useEffect } from "react";
import DrinksCard from "../layouts/DrinksCard";

const Drinks = () => {
  const [coffees, setCoffees] = useState([]); // State to hold coffee data
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch coffee data from API
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await response.json();
        setCoffees(data); // Set the fetched coffee data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching coffee data: ", error);
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Coffee Selection
      </h1>

      {/* Loading Indicator */}
      {loading ? (
        <p className="text-xl">Loading coffee options...</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Dynamically render cards based on API data */}
          {coffees.map((coffee) => (
            <DrinksCard
              key={coffee.id}
              img={coffee.image} // Use API image URL
              title={coffee.title} // Use coffee title
              price="$5.99" // Static price as API doesn't provide one
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Drinks;
