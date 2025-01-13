import AddCatForm from "./AddCatForm";
import { useState } from "react";
import SingleCat from "./SingleCat";

function BigCats() {
  const cats = [
    { id:1,
        name: "Cheetah", latinName: "Acinonyx jubatus", image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Cheetah_%28Acinonyx_jubatus%29_cub.jpg',
    },
    {id:2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:'https://upload.wikimedia.org/wikipedia/commons/8/82/Puma_%28Puma_concolor%29_-_20191228.jpg'
    },
    {id:3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Jaguar_head_shot-edit2.jpg',
    },
    {id:4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:'https://upload.wikimedia.org/wikipedia/commons/5/56/Leopard_%28Panthera_pardus_pardus%29_Kruger.jpg',
    },
    {id:5,
      name: "Lion",
      latinName: "Panthera leo",
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    },
    {id:6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Snow_leopard_puppy_%28Uncia_uncia%29.jpg',
    },
    {id:7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:'https://upload.wikimedia.org/wikipedia/commons/4/41/Siberischer_tiger_de_edit02.jpg',
    },
  ];

  const[currentCats,setCurrentBigcats] = useState(cats)

  const catItems = currentCats.map(cat => <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image}></SingleCat>)

  function handleReverseBigcats()
  {
    let clonedCats = [...currentCats]
    clonedCats.reverse()
      setCurrentBigcats(clonedCats)
  }

  function
  handleSortBigcats()
  {
    let clonedCats = [...currentCats]
    clonedCats.sort((a, b) => a.name.localeCompare(b.name))
    setCurrentBigcats(clonedCats)
  }

  function handleFilterPanthera() {
    const pantheraCats = cats.filter(cat => cat.latinName.startsWith("Panthera"));
    setCurrentBigcats(pantheraCats);
  }

  // Function to reset the list to show all cats
  function handleResetCats() {
    setCurrentBigcats(cats);
  }

  function handleAddCat(newCat)
  {
    newCat.id=currentCats.length + 1
    let clonedCats = [...currentCats,newCat]
    setCurrentBigcats(clonedCats)
  }

  return (
    <>
    <div>
      <ul> {catItems}</ul>
      <button onClick={handleReverseBigcats}>Reverse Big Cats List</button>
      <button onClick={handleSortBigcats}>Sort Alphabetically</button>
      <button onClick={handleFilterPanthera}>Show Panthera Family</button>
      <button onClick={handleResetCats}>Reset List</button>
    </div>
    <div>
      <AddCatForm onAddCat={handleAddCat}></AddCatForm>
    </div>
  </>
  );
}

export default BigCats;
