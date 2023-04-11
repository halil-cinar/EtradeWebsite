import { useParams } from "react-router-dom";

function Deneme() {
    const { productId } = useParams();
    return (
      <div>
        <h1>Kullanıcı Profili</h1>
        <p>Kullanıcı ID: {productId}</p>
      </div>
    );
  }

  export default Deneme