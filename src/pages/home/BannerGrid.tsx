import pt1 from "../../assets/products/product-1.png";
import pt2 from "../../assets/products/product-6.png";
import pt3 from "../../assets/products/product-5.png";
import { FC } from "react";
import { ButtonDark } from "../../components/Elements";
import { useNavigate   } from "react-router-dom";

export const BannerGrid = () => {
  return (
    <section className="min-h-[600px] flex flex-col sm:flex-row gap-10  px-8 sm:px-40 ">
      <div className=" w-full sm:w-1/2 relative">
        <img src={pt1} alt="icon" className="h-[390px] w-full sm:h-[586px] sm:w-[600px]  " />
        <Tag tag="Arm Rest Couch" price="523" posB="top-6" country="" />

      </div>

      {/*  */}
      <div className="w-full sm:w-1/2 flex flex-col gap-6 ">
        <GridItem img={'https://m.media-amazon.com/images/I/61g1xBHBQLL.__AC_SY445_SX342_QL70_FMwebp_.jpg'} tag="Inflatable Sofa" country="" price="250"/>
        <GridItem img={'https://m.media-amazon.com/images/I/614mZtmCV0L.__AC_SX300_SY300_QL70_FMwebp_.jpg'} tag="Modern 6-Drawer Dresser" country="" price="300"/>
      </div>
    </section>
  );
};

// ===============================
interface Props {
  img: string;
  tag: string
  price: string
  country: string
}

interface TagProps {
  posT?: string;
  posB?: string;
  tag: string;
  price: string;
  country: string;
}

const Tag: FC<TagProps> = ({ posT, tag, posB, price, country }): JSX.Element => {
  // const position = pos
  const router = useNavigate()
  const purchase = (title: any, price: any) => {
    const product = {
      name: title,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router("/billing") 
  }
  return (
    <div className={`h-[75px] absolute ${posT ? posT : ""} ${posB ? posB : ""} left-4 sm:left-6  flex flex-col items-start gap-1 `}>
      <div className=" text-h6 sm:text-h5 capitalize">{tag} </div>
      <p>${price}</p>
      <p onClick={() => purchase(tag, price)}><ButtonDark text={`order ${country}`} /></p>
    </div>
  );
};

const GridItem: FC<Props> = ({ img, tag, price, country }): JSX.Element => {
  return (
    <div className="h-[180px] sm:h-[280px]  relative">
      <img src={img} alt="icon" className="h-[180px] sm:h-[280px] " />
      <Tag tag={tag} posB="bottom-6" price={price} country={country}/>
    </div>
  );
};
