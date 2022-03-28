import { useRef } from 'react';

function Cart(){
  const modal = useRef(null);



  return (
    <dialog ref={modal} class="modal" id="modal">
    <h1>Tjenare</h1>
    </dialog>
  )
}

export default Cart;
