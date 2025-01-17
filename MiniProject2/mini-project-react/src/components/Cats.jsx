import { useEffect, useState } from "react";
import DrinksCard from "../layouts/DrinksCard";
const Cats = () => {
  const [cats, setCats] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const data = await response.json();
        setCats(data); 
        setLoading(false); 
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


      {loading ? (
        <p>Loading cats...</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">

          {cats.map((cat) => (
            <DrinksCard
              key={cat.id}
              img={
                cat.image?.url || "https://via.placeholder.com/150"
              }
              title={cat.name}
              price={cat.origin}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cats;
