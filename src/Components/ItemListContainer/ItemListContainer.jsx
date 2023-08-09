import Item from '../Item/Item'

const ItemListContainer = () => {
  return (

    <section className='w-full h-auto'>
      <div className='w-full flex flex-wrap justify-center'>
        <Item />
        <Item />
        <Item />
      </div>
    </section>

  )
}

export default ItemListContainer
