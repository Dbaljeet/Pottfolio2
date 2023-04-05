import React, { useState, useEffect } from 'react'

import styles from './Portfolio.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import { ModalPortalPortfolio } from '../Modals/PortfolioModal'
import ContentPortfolio from './Content'

const Portfolio = () => {
  const [size, setSize] = useState(950)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [showModal, setShowModal] = useState(false)

  const InfoRep = {
    names: ['PYTYM', 'GiphyAll', 'Cupcake'],
    github: [
      'https://github.com/SouLKy/ProyectoSoftwareBasadoEnPlataforma',
      'https://github.com/Dbaljeet/GiphyAllWeb',
      'https://github.com/Dbaljeet/cupcake',
    ],
    images: ['/PYTYM.webp', '/GiphyAll.jpg', '/cupcakesu.png'],
    images2: ['/PYTYM2.jpg', '/GiphyAll.jpg', '/cupcakesu.png'],
    deploy: ['', 'https://giphy-all-web.vercel.app', ''],
    info: [
      'Proyecto donde se pueden cargar datos de una cuenta bancaria, más información en github',
      'Es un proyecto donde se pueden visualizar gifs',
      'Ecommerce donde se registran las ventas, se tienen roles de usuario, etc.',
    ],
  }

  const windowSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    setSize(window.innerWidth)
    window.addEventListener('resize', windowSize)
    return () => window.removeEventListener('resize', windowSize)
  }, [])

  const handleClose = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <section className={styles.Section} id="Portfolio">
        <h2 className={styles.SecondaryTitle}>Portfolio</h2>

        <div className={styles.wfull}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            keyboard={true}
            modules={[Pagination, Navigation, Keyboard, Autoplay]}
            className="mySwiper"
          >
            {InfoRep.names.map((name) => {
              const index = InfoRep.names.indexOf(name)
              return (
                <SwiperSlide
                  key={name}
                  onClick={() => {
                    setShowModal(true)
                    document.body.style.overflow = 'hidden'
                    setSelectedIndex(index)
                  }}
                >
                  <div className={styles.res}>
                    <Image
                      width={'1080'}
                      height={'1080'}
                      alt={InfoRep.info[index]}
                      className={styles.IMG}
                      src={
                        size < 950
                          ? InfoRep.images2[index]
                          : InfoRep.images[index]
                      }
                    />
                    <section className={styles.FigureCenter}></section>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>

      {showModal && (
        <ModalPortalPortfolio onClose={handleClose}>
          <ContentPortfolio
            selectedIMG={InfoRep.images[selectedIndex]}
            Name={InfoRep.names[selectedIndex]}
            Github={InfoRep.github[selectedIndex]}
            deploy={InfoRep.deploy[selectedIndex]}
            Info={InfoRep.info[selectedIndex]}
          ></ContentPortfolio>
        </ModalPortalPortfolio>
      )}
    </>
  )
}
export default Portfolio
