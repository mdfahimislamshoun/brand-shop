import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyCard = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const myCards = useLoaderData([]);
  const usersCard = myCards.filter((myCards) => myCards.email === email);
  const [existCard, setExistCard] = useState(usersCard);

  return (
    <div className="mt-10">
      <div className="container w-[95%] justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {existCard.map((myCard) => (
          <Cards
            key={myCard._id}
            myCard={myCard}
            existCard={existCard}
            setExistCard={setExistCard}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
