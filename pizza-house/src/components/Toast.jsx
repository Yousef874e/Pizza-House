
import { useCart } from "../context/CartContext";

function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast">
      <span className="toast-icon">✓</span>

      <div>
        <h4>Added Successfully!</h4>
        <p>{toastMessage}</p>
      </div>
    </div>
  );
}

export default Toast;
