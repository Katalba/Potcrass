
import { Link } from "react-router-dom";

const Item = () => {

  
  return (
  <Link to={'itemDetail'}>
    <section className="shopCard w-[25%] h-[400px] bg-[#f5f5f5] shadow-sm border-md relative">
      <div className="absolute z-[5] mb-[5px]">
        <h3 className="font-[900] text-[20px]">Cactus Aloe Cosmos</h3>
      </div>
      <div className="absolute top-[50px]">
        <img className="w-[80%] h-[50%] object-cover" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/aloeComos.jpg?alt=media&token=feb66a41-c982-409c-a8ed-25bcb2180e25" alt="imagen" />
      </div>
    </section>
  </Link>

  );
}

export default Item;
