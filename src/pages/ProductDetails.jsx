import { Button, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SkeletonCard = () => {
    return (
      <div >
     <div className="container-fluid flex justify-center items-center mt-10">
      <div className=" container gap-10 row flex justify-center ">
        <div className="basis-1/2 flex justify-center w-1/2">
          <Skeleton variant="rectangular" width={768} height={768} />
          
          
        </div>
        <div className="basis-1/2 h-full">
          <div className="pr-content flex flex-col items-start gap-10">
           
          <Skeleton variant="rectangular" width="100%" height={35} />
           
            
          <Skeleton variant="rectangular" width="100%" height={72} />

            
          <Skeleton variant="rectangular" width="62px" height={32} />
          <Skeleton variant="rectangular" width="132px" height={40} />
          <Skeleton variant="rectangular" width="165px" height={40} />
          <Skeleton variant="rectangular" width="60px" height={24} />


           
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  };
const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState("");
    // console.log(params.id)
    const [loading, setLoading] = useState(true);

   

    useEffect(()=>{
        getData()
        window.scrollTo(0, 0); // Scroll to top when component mounts
    },[])
    const getData = ()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
            setProduct(res.data)
            console.log(res.data)
            setLoading(false)
            
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
        <div className="container-fluid bg-orange-500 h-[500px] gap-5 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <p>
          <Link to={"/products"}>Products</Link> /{" "}
          <span className="font-bold">{product.title}</span>
        </p>
      </div>
      {loading && <SkeletonCard />}
      {!loading && (
        <div className="container-fluid flex justify-center items-center mt-10">
          <div className=" container gap-10 row flex justify-center ">
            <div className="basis-1/2 flex justify-center w-1/2">
              {/* <SwiperSlider images={product.image} /> */}

              <div className="main-img">
                <img src={product.image} className="" width={500} />
              </div>
            </div>
            <div className="basis-1/2 h-full">
              <div className="pr-content flex flex-col items-start gap-10">
                <h1 className="text-4xl">{product.title}</h1>
                <p>{product.description}</p>
                <h6 className="text-2xl">Rs. {product.price}</h6>
                <Button />
                <p>
                  Category:{" "}
                  <span className="bg-orange-500 px-5 py-2 rounded-full">
                    {product.category}
                  </span>
                </p>
                <p>SKU: {product.id}</p>
              </div>
            </div>
          </div>
        </div>
    )}
    </div>
  )
}

export default ProductDetails