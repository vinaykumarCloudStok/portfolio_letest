import React from 'react'
import '../OurServices/ourservices.css'
import { Link } from 'react-router-dom'
import port from '../../assets/web.jpg'
import port1 from '../../assets/app.avif'
import port2 from '../../assets/resp.avif'
import port3 from '../../assets/seo.avif'
import port4 from '../../assets/content.jpg'
import port5 from '../../assets/devops.avif'
import { BiLinkExternal } from 'react-icons/bi'
const OurServices = () => {
    const data = [{ name: "Website Design", img: port }, { name: "App Developement", img: port1 }, { name: "Responsive Web Design", img: port2 },
    { name: "SEO",img:port3 }, { name: "Content Type",img:port4 }, { name: "DevOps" ,img:port5}

    ]
    return (
        <section className='portfolio'>
            <h2>Latest <span>Project</span></h2>
            <div className="portfolio-container">
                {
                    data.map((el, i) => (
                        <div className="portfolio-box" key={i}>
                            <img src={el.img} alt="" />
                            <div className="portfolio-layer">
                                <h4>{el.name}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur tempore dignissimos obcaecati, dolores veritatis, </p>
                                <Link className='link-external'> <BiLinkExternal className='icon' /> </Link>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default OurServices