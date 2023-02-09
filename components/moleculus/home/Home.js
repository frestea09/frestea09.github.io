import logoProfile from './profile.png'
import Image from 'next/image';
export const HeroHome = ()=> {
    return (
        <div class="flex bg-gray-900  pl-44 lg:flex justify-center py-10  px-40 relative dizme_tm_header">
            <div className="container flex justify-center ">
                <div className="grid lg:grid-cols-2 items-center gap-[25px]">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-custom text-[21px] text-center lg:text-left lg:text-[25px] xl:text-[45px] leading-[1.3] font-medium font-secondary">Hello, I'm</h3>
                        <h1 className="text-[42px] lg:text-[60px] xl:text-[85px] text-center lg:text-left mb-[11px] lg:mb-[18px] leading-[1.3] font-medium font-secondary">Ilman Teguh</h1>
                        <p className="lg:mb-9 mb-[15px] text-lg lg:text-[19px] xl:text-[28px] text-center lg:text-left font-medium">
                            A <span className="text-[#00ADB5]">Front-end Developer</span> From <span className="text-[#00ADB5] dark:text-[#00ADB5]">Indonesia</span>
                        </p>
                        <p className="lg:mb-[42px] text-muted dark:text-white mb-[30px] text-base text-center lg:text-left xl:text-[23px] leading-[1.5] max-w-[640px] mx-auto lg:ml-0">
                            I'm Front-end Developer based in Indonesia, and I'm very passionate and dedicated to my work.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-[25px]">
                            <a href="#about" className="btn-custom relative bg-[#00ADB5] p-4 rounded-lg hover:bg-[#00ADB3]">About Me</a>
                            <ul className="flex items-center gap-2">
                                <li>
                                    <a href="#"><i className="icon-facebook-1"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="icon-twitter-1"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="icon-linkedin-1"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="icon-behance"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <Image src={logoProfile} className="object-cover mx-auto max-w-[250px] lg:max-w-[400px] xl:max-w-[650px]" alt=""/>
                            {/* <span className="left-24 shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-5 hidden lg:flex items-center rounded-lg bg-[#390000] w-[75px] h-[75px] absolute anim_moveBottom">
                                <img className="w-10 h-10 mx-auto" src="assets/img/svg/skills/illustrator.svg" alt=""/>
                            </span>
                            <span className="right-[110px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-20 hidden lg:flex items-center rounded-lg bg-[#001631] w-[75px] h-[75px] absolute anim_moveBottom">
                                <img className="w-10 h-10 mx-auto" src="assets/img/svg/skills/photoshop.svg" alt=""/>
                            </span>
                            <span className="left-[100px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                                <img className="w-10 mx-auto h-10" src="assets/img/svg/skills/figma.svg" alt=""/>
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    );
  }