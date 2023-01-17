import "./Card.css"

const Card = (props) => {
  
  const { name, tagline, description, image_url } = props.Data
  

  return (
    <div className="card">
      <h1 className="name">{name}</h1>
      <div className="imgBox">
      <img src={image_url} alt="beer image" className="img" />
      </div>
      <h2 className="tagline"> {tagline} </h2>
      <p className="description">{description}</p>
      
    </div>
  )
}

export default Card;