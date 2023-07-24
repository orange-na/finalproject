import Link from "next/link"
import css from "./contents.module.scss"
import { useEffect, useState } from "react"


export function Contents() {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      window.scrollY > 700 
        ? setIsVisible(true)
        : setIsVisible(false)
      }
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])


    return (
        <main className={css.main} >
            <div className={css.section1}>
                <div className={css.circle}>
                    <div>
                        <h1>It can be more efficient!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure perspiciatis rem laboriosam nulla dicta iste. Quae quia dolor aspernatur rerum?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure perspiciatis rem laboriosam nulla dicta iste. Quae quia dolor aspernatur rerum?</p>
                        <Link href='/'>Let's start for free!!</Link>
                    </div>
                </div>
            </div>            
            
            <section className={isVisible ? css.section4 : css.test}>
                <div className={css.items4}>
                    <div className={css.box4}>
                        <div className={css.img4}>
                            <img src="img/rankup.png" alt="Item Image 1" />
                        </div>
                        <div className={css.desc4}>
                            <h3>
                                itle title title title title title title title title title title title 
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit sequi, rerum harum ipsa dolores aspernatur. Saepe cum reiciendis explicabo.
                            </p>
                        </div>
                    </div>
                    <div className={css.box4}>
                        <div className={css.img4}>
                            <img src="img/discuss.png" alt="Item Image 2" />
                        </div>
                        <div className={css.desc4}>
                            <h3>
                                itle title title title title title title title title title title title 
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit sequi, rerum harum ipsa dolores aspernatur. Saepe cum reiciendis explicabo.
                            </p>
                        </div>
                    </div>
                    <div className={css.box4}>
                        <div className={css.img4}>
                            <img src="img/safety.png" alt="Item Image 3" />
                        </div>
                        <div className={css.desc4}>
                            <h3>
                                itle title title title title title title title title title title title 
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit sequi, rerum harum ipsa dolores aspernatur. Saepe cum reiciendis explicabo.
                            </p>
                        </div>
                    </div>
                    <div className={css.box4}>
                        <div className={css.img4}>
                            <img src="img/saleup.png" alt="Item Image 4" />
                        </div>
                        <div className={css.desc4}>
                            <h3>
                                itle title title title title title title title title title title title 
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit sequi, rerum harum ipsa dolores aspernatur. Saepe cum reiciendis explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <section className={css.section2}>
                <div className={css.items}>
                    <div className={css.box}>
                        <img src="img/classroom.jpg" alt="Box Image 1" />
                        <h2>title title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In repellendus nemo obcaecati alias ipsam consequatur pariatur sequi at! Hic, voluptates blanditiis soluta minus autem laudantium quis. Tempora unde iste a.
                        </p>
                        <Link href=''>Read More</Link>
                    </div>
                    <div className={css.box}>
                        <img src="img/classroom.jpg" alt="Box Image 2" />
                        <h2>title title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores labore ad praesentium enim voluptatibus quos illo et laboriosam vel quo repudiandae voluptates, voluptatem harum dicta dolorem aperiam mollitia eligendi!
                        </p>
                        <Link href=''>Read More</Link>
                    </div>
                    <div className={css.box}>
                        <img src="img/classroom.jpg" alt="Box Image 3" />
                        <h2>title title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores labore ad praesentium enim voluptatibus quos illo et laboriosam vel quo repudiandae voluptates, voluptatem harum dicta dolorem aperiam mollitia eligendi!
                        </p>
                        <Link href=''>Read More</Link>
                    </div>
                    <div className={css.box}>
                        <img src="img/classroom.jpg" alt="Box Image 4" />
                        <h2>title title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolores labore ad praesentium enim voluptatibus quos illo et laboriosam vel quo repudiandae voluptates, voluptatem harum dicta dolorem aperiam mollitia eligendi!
                        </p>
                        <Link href=''>Read More</Link>
                    </div>
                </div>
            </section>


            

            <section className={css.section3}>
                <h2>Comment from user</h2>
                <div className={css.items3}>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                    <div className={css.box3}>
                        <div className={css.profile}>
                            <img src="img/avatar.jpg" alt="Avator" />
                            <div className={css.account}>
                                <h3>John Micele</h3>
                                <p>Product Manager</p>
                            </div>
                        </div>
                        <h3>title title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa, eligendi id autem laudantium at beatae odit obcaecati porro assumenda.</p>
                    </div>
                </div>
            </section>


        </main>
    )
  }
  