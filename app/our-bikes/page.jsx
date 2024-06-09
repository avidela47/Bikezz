import { client } from "@/app/lib/sanity";
import BikesCategories from "@/components/BikesCategories";

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
    images,
    price,
    price_id,
    name,        
    description,
    "slug": slug.current,
    "categories": categories[]->{name}
}`;
  const data = await client.fetch(query);
  return data;
};

const OurBikes = async () => {
  const bikes = await getData();

  return (
    <div>
      <BikesCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
