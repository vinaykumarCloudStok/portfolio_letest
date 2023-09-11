import one from './assets/vcb.JPG'
import two from './assets/bcb.JPG'
import three from './assets/hyc.JPG'

export const DATA = [
  {
    id: 1,
    productName: "Vitamin C serum",
    para:"Vitamin C serums have the potential to improve skin's appearance by preventing wrinkling and reducing the appearance of hyperpigmented areas.",
    price: 1199.0,
    productImage: one,
    route:"/product/listone"
  },
  {
    id: 2,
    productName: "Vanilla body lotion",
    para:"This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind",
  
    price: 1099.0,
    productImage:two,
    route:"/product/listtwo",
  },
  {
    id: 3,
    productName: "Hyaluronic Gel cream",
    para:"A Hydrating hyaluronic gel face cream infuse with watermelon extract help with retaining moisture.its anti- aging properties,leaves the face plumps and radiant for hours.",
    price: 999.0,
    productImage: three,
    route:"/product/listthree"
  },
 
];
