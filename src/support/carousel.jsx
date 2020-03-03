import React, { Component } from "react";
import Slider from "react-slick";
import { APIIMAGE } from "../API/index";
import Axios from "axios";

class Carousell extends Component {
  state = {
    gambarProduct: []
  };

  componentDidMount() {
    Axios.get(`${APIIMAGE}/home_product/get-dataCard/`)
      .then(res => {
        this.setState({ gambarProduct: res.data });
        console.log(this.state.gambarProduct);
      })
      .catch(err => {
        console.log("masuk error");
        console.log(err);
      });
  }

  renderCarousel = () => {
    var gambarProduct = this.state.gambarProduct;
    console.log("ini state produk", gambarProduct);
    console.log(gambarProduct.length);
    if (gambarProduct.length) {
      return gambarProduct.map(val => {
        console.log(val);

        return (
          <div>
            <img src={`${APIIMAGE + val.colomImage}`} alt="Ikan" />
          </div>
        );
      });
    } else {
      return <h1>loading ...</h1>;
    }
  };

  renderData = () => {
    return this.state.gambarProduct.map((val, index) => {
      console.log("renderData", val);
      if (val.kategoriId === 1 || val.kategoriId === 2) {
        return (
          <div>
            <img
              src={`${APIIMAGE + val.colomImage}`}
              alt="Ikan"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

    if (this.state.gambarProduct < 1) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="container">
        <div style={{ margin: "50px 0" }}>
          <Slider {...settings}>{this.renderData()}</Slider>
        </div>
      </div>
    );
  };
}

export default Carousell;

// import React, { Component } from "react";
// import { Carousel, Container } from "react-bootstrap";

// class Carousell extends Component {
//   render() {
//     return (
//       <div className="kotakbesar">
//         <Container
//           className="carousel mx-auto my-auto"
//           style={{ height: "70vh" }}
//         >
//           <Carousel
//             interval={2500}
//             nextIcon={false}
//             prevIcon={false}
//             style={{ margin: "15vh auto" }}
//           >
//             <Carousel.Item>
//               <img
//                 className="gambar"
//                 src="https://1.bp.blogspot.com/-msVyZ76oNfE/XRzWrcOxiyI/AAAAAAAAAAM/43btRlQ57qscPWmmkyRTlR6cL9mpiSxagCLcBGAs/s640/Ikan%2BHias%2BAir%2BTawar%2B-%2BIkan%2BArwana.png"
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="gambar"
//                 src="https://4.bp.blogspot.com/-hebjdoeNKPM/XBe-6iGBE4I/AAAAAAAAB2s/e10BVyrum4gjO_32Xck6OL7d7QwfW1AWQCLcBGAs/s1600/Doitsu-sanke-koi.png"
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="gambar"
//                 src="https://www.bacsense.com/wp-content/uploads/2018/05/Etika-Dalam-Usaha-Budidaya-Ikan-Hias.jpg"
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>
//                   Praesent commodo cursus magna, vel scelerisque nisl
//                   consectetur.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Carousell;
