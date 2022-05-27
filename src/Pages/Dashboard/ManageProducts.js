import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ManageProductsRow from './ManageProductsRow';
import Loading from '../../Shared/Loading'
const ManageProducts = () => {
  // const [products, setProducts] = useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:5000/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  // },[])

  const { data:products, isLoading, refetch } = useQuery(
    'products', () => fetch('http://localhost:5000/products')
    .then(res => res.json()));
    
    if (isLoading) {
        return <Loading></Loading>
    }

  return (
    <div class="overflow-x-auto mt-4 w-2/3">
  <table class="table table-compact w-full">
    <thead className='text-center'>
      <tr>
        <th>Product Name</th> 
        <th>Price</th> 
        <th>Quantity</th> 
        <th>Minimum Quantity</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      {
        products.map(product=><ManageProductsRow key={product._id} product={product} refetch={refetch}></ManageProductsRow>)
      }
    </tbody> 
  </table>
</div>
  );
};

export default ManageProducts;