import { useState } from "react"
import { Footer } from "../../components/Footer"
import NavigationBar from "../../components/NavigationBar"

function About() {
    const [isCartBarOpen, setIsCartBarOpen] = useState(false)

    const toggleCartBar = () => {
        setIsCartBarOpen(!isCartBarOpen)
    }

    return (
        <div>
            <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />
            <section className="relative container px-5 md:px-16 mx-auto py-[100px]">
                <div className="flex gap-10 items-center flex-col-reverse">
                    <div className="relative w-full flex-1">
                        <img
                            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            width={400}
                            height={400}
                            alt="video banner"
                            className="object-contain w-full rounded-xl"
                        />
                    </div>
                    <div className="flex gap-5 md:gap-10 flex-col flex-1">
                        <div className="flex flex-col gap-4">
                            <span className="service-name text-center lg:text-left">

                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
                                Our Story
                            </h2>
                        </div>
                        <p className="leading-loose">
                        At Mohphem, we bring your spaces to life. As experts in interior design and exterior decoration, we transform ordinary environments into extraordinary spaces that reflect your style, personality, and vision.</p>
                        <p className="leading-loose">At Mohphem, we are passionate about design. With years of experience in both residential and commercial projects, we have honed our skills to deliver stunning and functional spaces. Our team is composed of creative professionals who bring a blend of artistic vision and practical expertise to every project.</p>
                        <p className="leading-loose">Choosing Mohphem means choosing a partner who is committed to making your space truly yours. We take the time to understand your needs and provide solutions that are both elegant and practical. From concept to completion, we are with you every step of the way, ensuring that the final result exceeds your expectations.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About