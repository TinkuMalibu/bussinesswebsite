import { logo } from '../assets';
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';


const Footer = () =>
 (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo}
          alt='hoobank'
          className='w-[266px] h-[72px]'/>
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='text-white font-poppins text-[18px] font-medium leading-[27px]'>{footerLink.title}</h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index)=> (
                  <li key={link.name}
                  className={`font-poppins text-[16px] font-normal leadinf-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length ? "mb-1" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
               </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col
      border-t-[1px] border-t-[#3F3E45] pt-6'>
        <p className='text-white font-normal text-[18px] text-center
        font-Poppins leading-[27px]'>Copyright 2021 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.lenght - 1 ? "mr-6" : "mr-0" }`}/>
          ))}
        </div>
      </div>
    </section>
  )

export default Footer
