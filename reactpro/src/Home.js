import './Home.css';
import Data from './data.json'
const Home = () => {
  function Purchase(){
    alert("Give your address in ContactPage")
  }
  return (   
    <div id="mu">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {Data.map((item,index)=>(
        <div id="blow">
          <img src={item.image} alt="" id='jo'></img>
          <h3>{item.Product}</h3>
          <h3>{item.Rate}</h3>
          <button id="add" onClick={Purchase}>Buy Now</button>         
           </div>
      ))}
 <Images />;</div>
)}

function Images() {
  const imageUrls = [
    'https://m.media-amazon.com/images/I/71XjW8+j9ML._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/512JQ+6XadL._AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/31QKYTH4pTL._AC_SY200_.jpg'
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedImage = imageUrls[randomIndex];
return (
  <div>
    <h3 id='ku'>25% Discount Today Only</h3>
    <img src={selectedImage} alt="" id='move'/>
  </div>
  );
}

export default Home;


