import Header from "./Header/Header";
import Categories from "./Categories.jsx/Categories";
import Title from "../Title/Title";

const Home = () => {
  return (
    <>
      <Header />
      <Title title={'Explora nuestras categorías'} />
      <Categories />
    </>
  );
}

export default Home;
