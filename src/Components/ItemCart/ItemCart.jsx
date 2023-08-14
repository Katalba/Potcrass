export const ItemCart = ({ item }) => {
  return (
    <>
      <tbody>
        <tr>
          <td><img className='cartImg' src={item.image} alt={item.name} /></td>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>{item.stock}</td>
          <td>$ </td>
          <td className='deleteItem'><i className='fa-regular fa-trash-can' /></td>
        </tr>
      </tbody>
    </>
  )
}

export default ItemCart
