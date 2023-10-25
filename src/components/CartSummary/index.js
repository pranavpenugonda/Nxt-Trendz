// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      let totalPrice = 0
      console.log(cartList)
      cartList.forEach(eachCartItem => {
        totalPrice += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div className="cart-summary-bg-cont">
          <div>
            <h1 className="order-total-txt">
              Order Total:{' '}
              <span className="amount-txt">{`Rs ${totalPrice}/-`}</span>
            </h1>
            <p className="items-in-cart-txt">{`items in cart ${cartLength}`}</p>
            <button type="button" className="check-out-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
