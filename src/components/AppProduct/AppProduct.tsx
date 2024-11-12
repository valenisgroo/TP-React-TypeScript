import { useState } from 'react'
import { Header } from './Header/Header'
import { ProductForm } from './ProductForm/ProductForm'
import { ProductsList } from './ProductsList/ProductsList'
interface ItemProduct {
  nombre: string
  imagen: string
  precio: number
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([])

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem])
  }

  return (
    <div>
      <Header />
      <h2 className='text-center mt-3'>Formulario</h2>
      <ProductForm handleAddProduct={handleAddProduct} />
      <h2 className='text-center'>Productos</h2>
      {products.length > 0 ? (
        <ProductsList arrayItems={products} />
      ) : (
        <h4 className='m-4 text-center'>No hay productos cargados</h4>
      )}
    </div>
  )
}