import React, { useState} from 'react'
import { connect } from "react-redux";
import { adjustItemQty, deleteCart } from '../redux/action';
const CartItem = ({item, adjustItemQty, deleteCart}) => { 
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustItemQty(item.id, e.target.value);
    }
  return (
    <div>
    <img src={item.image} />
    <div> 
    <p> {item.title}</p>
    <p> {item.description} </p>
    <p> {item.price} </p>
    </div>
    <div> 
    <label htmlFor='qty'>Qty</label>
    <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
    </div>
    <button
          onClick={() => deleteCart(item.id)}
        ></button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(deleteCart(id)),
    };
  };

export default connect(null, mapDispatchToProps)(CartItem);