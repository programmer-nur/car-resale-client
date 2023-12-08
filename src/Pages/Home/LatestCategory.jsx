import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import Category from "./Category";

const LatestCategory = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/categories`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="container w-full py-5 md:py-12 mx-auto">
      <div className="text-center my-4">
        <h2 className="text-3xl font-semibold">Browse Leatest Category</h2>
        <p>Checkout products Categories</p>
      </div>

      {isLoading ? (
        // Render loading state
        <Loading />
      ) : (
        // Render categories
        <div className="grid py-6 sm:py-16 mx-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0,3).map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestCategory;
