export const Advantage = () =>{
    return(
        <>
            <section className="bg-white text-black  md:pt-[190px] pt-[135px] pb-[70px]" id="process">
            <div className="container flex justify-center items-center align-middle px-24 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                    <div className="text-center wow fadeInUp" data-wow-duration="1s">
                        <div>
                            <span className="relative inline-block dark:hidden">
                                <img src="assets/img/brushes/process/1.png" className="md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                <img src="assets/img/svg/process/target.svg" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/>
                            </span>
                            <span className="relative hidden dark:block">
                                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="object-cover rounded-3xl  md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                {/* <img src="assets/img/svg/process/target-2.svg" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/> */}
                            </span>
                        </div>
                        <div className="mt-[30px]">
                            <h3 className="text-2xl">Designer</h3>
                            <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        </div>
                    </div>
                    <div className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" >
                        <div>
                            <span className="relative inline-block dark:hidden">
                                <img src="assets/img/brushes/process/2.png" className="md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                <img src="assets/img/svg/process/brush.svg" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/>
                            </span>
                            <span className="relative hidden dark:block">
                                <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="object-cover rounded-3xl md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                {/* <img src="assets/img/svg/process/brush-2.svg" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/> */}
                            </span>
                        </div>
                        <div className="mt-[30px]">
                            <h3 className="text-2xl">Frontend Developer</h3>
                            <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        </div>
                    </div>
                    <div className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" >
                        <div>
                            <span className="relative inline-block dark:hidden">
                                <img src="assets/img/brushes/process/3.png" className="md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                <img src="assets/img/svg/process/energy.svg" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/>
                            </span>
                            <span className="relative hidden dark:block">
                                <img src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="object-cover rounded-3xl  md:max-w-[125px] max-w-[90px] mx-auto" alt=""/>
                                {/* <img src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="top-1/2 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto" alt=""/> */}
                            </span>
                        </div>
                        <div className="mt-[30px]">
                            <h3 className="text-2xl text-gray-900">Mentor</h3>
                            <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">I genuinely care about people, and love helping fellow designers work on their craft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}