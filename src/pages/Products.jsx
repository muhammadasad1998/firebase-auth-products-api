import React, { useEffect, useState } from "react";
import MediaCard from "../components/Cards/Cards";
import axios from "axios";
import { Navbar_Component } from "../components/Navbar_Component";
import { Skeleton } from "@mui/material";
const SkeletonCard = () => {
  return (
    <div >
     <Skeleton variant="rectangular" width={345} height={240} />
     <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
     <Skeleton variant="rectangular" height={100} />
     <Skeleton variant="text" width={'50%'} sx={{ fontSize: '2rem' }} />
     <Skeleton variant="text" width={'50%'} sx={{ fontSize: '2rem' }} />
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products data on component mount
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar_Component />
      <div className="flex flex-wrap gap-3 mt-10 justify-center">
        {isLoading ? (
          <>
            <SkeletonCard /> <SkeletonCard /> <SkeletonCard /><SkeletonCard />
            {/* Add more SkeletonCards based on your layout */}
          </>
        ) : (
          products.map((e, i) => (
            <MediaCard
              key={i}
              image={e.image}
              desc={e.description}
              title={e.title}
              price={e.price}
              id={e.id}
            />
          ))
        )}{" "}
      </div>{" "}
    </>
  );
};

export default Products;
