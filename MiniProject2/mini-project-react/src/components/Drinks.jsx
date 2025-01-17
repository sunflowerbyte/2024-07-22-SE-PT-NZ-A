import { useState, useEffect } from "react";
import axios from "axios";
import DrinksCard from "../layouts/DrinksCard";

const Drinks = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get("https://api.sampleapis.com/coffee/hot");
        console.log("Fetched data with Axios: ", response.data); // Debugging log
        setCoffees(Array.isArray(response.data) ? response.data : []); // Ensure array
      } catch (error) {
        console.error("Error fetching coffee data with Axios: ", error);
      } finally {
        setLoading(false); // Stop loading whether successful or not
      }
    };

    fetchCoffees();
  }, []);

  console.log("Coffees state: ", coffees); // Debugging log

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Coffee Selection
      </h1>

      {loading ? (
        <p className="text-xl">Loading coffee options...</p>
      ) : coffees.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {coffees.map((coffee) => (
            <DrinksCard
              key={coffee.id || Math.random()}
              img={coffee.image || "default-image-url.jpg"}
              title={coffee.title || "Unknown Coffee"}
              price="$5.99"
            />
          ))}
        </div>
      ) : (
        <p>No coffee options available.</p>
      )}
    </div>
  );
};

export default Drinks;
