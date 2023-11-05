let products = {
  1: {
    id: 1,
    title: "Printed jersey top",
    image:
      "https://eg.hm.com/assets/styles/HNM/17089079/cfb4a3e86e39529a84cd94096fd5027f7c280372/2/image-thumb__5165325__product_listing/6ae0eac2f839a5a98b6238011255bbbdf6b3066f.jpg",
    price: 699,
  },
  2: {
    id: 2,
    title: "Fully lined corduroy trousers",
    image:
      "https://eg.hm.com/assets/styles/HNM/16910222/9fcf27068dd50d3f5def71ca952f9e469fdc6e7e/2/image-thumb__4983174__product_listing/9373813d3722e23747518466428822cf72cda231.jpg",
    price: 570,
  },
  3: {
    id: 3,
    title: "5-pack bodysuitss",
    image:
      "https://eg.hm.com/assets/styles/HNM/16874489/e6f1bce458483af03533ad173dfeb00dcb38654d/2/image-thumb__4960796__product_zoom_medium_606x504/0952323e9436a9fbc26470a0d84218525ea347cd.jpg",
    price: 400,
  },
  4: {
    id: 4,
    title: "2-piece printed cotton set",
    image:
      "https://eg.hm.com/assets/styles/HNM/15244721/4ed6189653c2040797554d34c37a0f40fa34987f/2/image-thumb__4428594__product_listing/c9585685228a7f332a01bc7e8989fc47239a8c81.jpg",
    price: 400,
  },
};

const getProductsAPI = () => Promise.resolve(Object.values(products));

export default getProductsAPI;
