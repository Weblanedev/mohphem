import { ButtonDark } from "../../components/Elements"
import saleBanner from '../../assets/products/product-4.png'
import { Link } from "react-router-dom"

export const SaleBanner = () => {
  return (
    <div className='min-h-[532px] flex flex-col sm:flex-row bg-gray-200'>
      <div className="w-full sm:w-1/2 ">
        <img src={saleBanner} alt="sales" className='h-[367px] sm:h-[532px] ' />

      </div>

      {/* content */}
      <div className="w-full sm:w-1/2 flex items-center  px-8 sm:px-0 sm:pl-16 py-14 sm:py-0">
        <div className="w-[452px] flex flex-col items-start gap-4">
          <p className="text-hairline1 font-bold uppercase text-blue">Export discounts up to 30% off</p>
          <h4 className="text-h4 font-poppins"><br />
            New lower prices!
          </h4>
          <p className="text-body1Reg">Unlock new markets, multiply your revenue! Export your products and watch your business soar to new heights</p>
          <Link to="/contact">
            <ButtonDark text='Export now' />
          </Link>
        </div>
      </div>
    </div>
  )
}
