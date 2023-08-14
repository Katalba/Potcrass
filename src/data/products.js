const Products = [
  {
    id: '1',
    name: 'Graptosedum California',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/GraptosedumCalifornia.jpg?alt=media&token=7f4ba08d-413b-4cb1-9cec-aed3c8eee1c7',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/GraptosedumCalifornia-2.jpg?alt=media&token=525af417-94e9-4bec-944f-aa9bcbf269cf',
    category: 'suculentas',
    price: 1500,
    stock: 25
  },
  {
    id: '2',
    name: 'Cotyledon Tomentosa',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/cotyledonTomentosa-2.jpg?alt=media&token=a9a61e95-d6ed-4f1f-af77-356e4860204b',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/cotyledonTomentosa.jpg?alt=media&token=5f666651-0983-4f5a-9018-98d502c49edf',
    category: 'suculentas',
    price: 1200,
    stock: 20
  },
  {
    id: '3',
    name: 'Crassula Capitella',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/crassulaCapitella.jpg?alt=media&token=baf32e4a-2d9d-4076-b328-4dd47e79fd3d',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/crassulaCapitella-2.jpg?alt=media&token=a00a4f0f-426f-4b50-969a-d57bb82254cb',
    category: 'suculentas',
    price: 1350,
    stock: 15
  },
  {
    id: '4',
    name: 'Crassula Ovata',
    image: '',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/crassulaOvata.jpg?alt=media&token=dca6c008-d6b7-4628-aaf1-37d48c5d7fc1',
    category: 'suculentas',
    price: 8000,
    stock: 2
  },
  {
    id: '5',
    name: 'Kalanchoe Tomentosa',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/kalanchoeTomentosa.jpg?alt=media&token=fa21a89e-4f50-4efa-a933-b06c4b28541f',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/kalanchoeTomentosa-2.jpg?alt=media&token=05b86ea4-1bdf-4836-ab68-09086cf1467f',
    category: 'suculentas',
    price: 1500,
    stock: 30
  },
  {
    id: '6',
    name: 'Moonstones Pachyphytum',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/moonstonesPachyphytum.jpg?alt=media&token=193c270a-d753-4261-924d-50e4f822cde9',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/moonstonesPachyphytum-2.jpg?alt=media&token=3eda59a9-97a6-4c1c-bb43-e9205ec43d17',
    category: 'suculentas',
    price: 2000,
    stock: 5
  },
  {
    id: '7',
    name: 'Pachyveria Blue Pearl',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/pachyveriaBluePearl.jpg?alt=media&token=d5a0ac21-5ec2-48c9-af40-981833308f3c',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/pachyveriaBluePearl-2.jpg?alt=media&token=bc921c9c-ef01-4c9a-a8f6-ff0f050e8dbe',
    category: 'suculentas',
    price: 1800,
    stock: 30
  },
  {
    id: '8',
    name: 'Sedum Morganianum',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/sedumMorganianum.jpg?alt=media&token=00fae6ba-ccd5-4f6d-97aa-98f953c7a3a3',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/sedumMorganianum-2.jpg?alt=media&token=0a92f880-cd1e-4b13-9eb6-7705b769845f',
    category: 'suculentas',
    price: 2000,
    stock: 20
  },
  {
    id: '9',
    name: 'Opuntia Microdasys',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/opuntiaMicrodasys.jpg?alt=media&token=9ab24add-a4bb-4fa8-b1be-575ccbdaf7b3',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/opuntiaMicrodasys-2.jpg?alt=media&token=711183ed-43ab-44a8-9b0f-1cd2a49cbf34',
    category: 'cactus',
    price: 2500,
    stock: 10
  },
  {
    id: '10',
    name: 'Zebra Cactus',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ZebraCactus.jpg?alt=media&token=fb512145-8e9f-4901-9962-860db54444ec',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/zebraCactus-2.jpg?alt=media&token=03371895-4aa1-4ff3-988b-fdb7491e0f22',
    category: 'cactus',
    price: 1500,
    stock: 10
  },
  {
    id: '11',
    name: 'Aloe Cosmos',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/aloeComos.jpg?alt=media&token=feb66a41-c982-409c-a8ed-25bcb2180e25',
    imageTwo: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/aloeCosmos-2.jpg?alt=media&token=b526b2c9-2aa2-4bca-b4c1-d85f67442e83',
    category: 'cactus',
    price: 1300,
    stock: 25
  },
  {
    id: '12',
    name: 'Maceta de barro n°10 pintada',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/barro-pintadaCinco.jpg?alt=media&token=25c48b8f-f627-4e15-a846-b698aeb143b1',
    category: 'macetas',
    subcategory: 'barro',
    price: 1200,
    stock: 10
  },
  {
    id: '13',
    name: 'Maceta de barro n°16 pintada',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/barro-pintadaCuatr0.webp?alt=media&token=e55738b4-f65d-4a41-8fec-f19b0fc9aa11',
    category: 'macetas',
    subcategory: 'barro',
    price: 2000,
    stock: 10
  },
  {
    id: '14',
    name: 'Maceta de barro n°12 pintada',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/barro-pintadaDos.jpg?alt=media&token=54879be3-aaeb-4a48-90ad-c51d383c4c79',
    category: 'macetas',
    subcategory: 'barro',
    price: 1500,
    stock: 10
  },
  {
    id: '15',
    name: 'Maceta de barro n°14 pintada',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/barro-pintadaTres.jpeg?alt=media&token=8eea8cd9-b30b-469f-9e80-f8e17ed6552f',
    category: 'macetas',
    subcategory: 'barro',
    price: 1350,
    stock: 10
  },
  {
    id: '16',
    name: 'Maceta de barro cilíndrica n°14 pintada (diseño exclusivo)',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/barro-pintadaSeis.jpg?alt=media&token=9ac60c31-2b88-4953-b1ea-3c9239abc14e',
    category: 'macetas',
    subcategory: 'barro',
    price: 2500,
    stock: 10
  },
  {
    id: '17',
    name: 'Maceta cerámica exagonal n°10',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ceramica-1.jpg?alt=media&token=a2a2ed06-4c2f-44f5-b41b-23e148507607',
    category: 'macetas',
    subcategroy: 'ceramica',
    price: 2600,
    stock: 15
  },
  {
    id: '18',
    name: 'Maceta cerámica ballena n°12',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ceramica-ballena.jpg?alt=media&token=a611b8b3-ce1d-4d18-b913-42da0561ab13',
    category: 'macetas',
    subcategroy: 'ceramica',
    price: 5500,
    stock: 10
  },
  {
    id: '19',
    name: 'Maceta cerámica dinosaurio n°8',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ceramica-dino.jpg?alt=media&token=d8e7fd0b-bb57-4844-bddf-fba8929d9d5a',
    category: 'macetas',
    subcategroy: 'ceramica',
    price: 2800,
    stock: 15
  },
  {
    id: '20',
    name: 'Maceta cerámica oso n°10',
    image: 'https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ceramica-osoDos.jpg?alt=media&token=630f5616-f2ee-49a5-9996-f0766be20b63',
    category: 'macetas',
    subcategory: 'ceramica',
    price: 4050,
    stock: 15
  }
]
export default Products
