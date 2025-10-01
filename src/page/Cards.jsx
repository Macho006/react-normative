import mockData from "../data/mockData";
import Card from "../components/Card";

const Cards = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {mockData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
