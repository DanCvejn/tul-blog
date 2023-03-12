import { useNavigate } from "react-router-dom";
import "../posts/Posts.scss";

const JoinUs = () => {
  const navigate = useNavigate();
  const imgUrl = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80";

  return (
    <div className={"post-big"} onClick={() => navigate("/register")}>
      <img src={imgUrl} alt="" />
      <div className="post__content">
        <h3 className="text-2xl mb-4">Přidej se a získej různé výhody</h3>
        <p>Jednou z výhod je například fórum na, kterém se kohokoliv na něco můžeš zeptat.</p>
      </div>
    </div>
  )
}

export default JoinUs