import React, { Component } from "react";
import Slider from "react-slick";

class Carousell extends Component {
  render() {
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
    return (
      <div className="container">
        <div style={{ margin: "50px 0" }}>
          <Slider {...settings}>
            <div>
              <img
                src="https://cdn.idntimes.com/content-images/community/2019/06/05-6ee79007e26f4314f38d58a8c117eb09.jpg"
                alt="IKAN1"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
            <div>
              <img
                src="https://www.mongabay.co.id/wp-content/uploads/2019/07/IKAN-KOI-Cyprinus-carpio-3.jpg"
                alt="IKAN2"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
            <div>
              <img
                src="https://wanipira.com/wp-content/uploads/2018/10/ikan-discus-backgound.jpg"
                alt="IKAN3"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
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
