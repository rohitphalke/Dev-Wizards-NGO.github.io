import React from 'react'
import "../css_files/mahesh.css"
// import img0 from "../images_videos/trial.jpg"
// import img1 from "../images_videos/trial.jpg"
// import img2 from "../images_videos/trial.jpg"
// import img3 from "../images_videos/trial.jpg"
// import img4 from "../images_videos/trial.jpg"
// import img5 from "../images_videos/trial.jpg"
// import img6 from "../images_videos/trial.jpg"
// import img7 from "../images_videos/trial.jpg"
// import img8 from "../images_videos/trial.jpg"
// import img9 from "../images_videos/trial.jpg"
// import img10 from "../images_videos/trial.jpg"
// import img11 from "../images_videos/trial.jpg"


import LazyLoad from 'react-lazy-load';
const GalleryComponent = () => {
    return (
        <div className="maheshcontainer2">
            <div className="maheshimage-gallery">
                <div className="column">
                    {/* <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://files.globalgiving.org/pfil/18502/pict_original.jpg?m=1413265205000' alt="" width={"100%"}
                                height={"100%"} />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Mr. D.P. Singh, Chief Business Officer, SBI Mutual Fund</span></div>
                    </div> */}

                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://en-media.thebetterindia.com/uploads/2019/04/Saju-Clothes-Bank-WP.jpg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Bountiful Blessings: Food Aid and Grain Distribution in the Remote Villages of Odisha, India - May 2023</span></div>
                    </div>

                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/10/16/Pictures/_9849da26-b259-11e7-ab59-1b1e25230a21.jpeg' alt="" width={"100%"}
                                height={"100%"} />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Reviving Spirits: Monsoon Food Relief in Flood-Affected Assam, India - July 2022</span></div>
                    </div>


                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCQExV1cyOXjH7WYaRXwfNRGv01gTExpeag&usqp=CAU' alt='' />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Filling Plates, Fulfilling Dreams: Food Drive in the Villages of Uttar Pradesh, India - September 2022"</span></div>
                    </div>
                </div>

                <div className="column">
                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://thelogicalindian.com/h-upload/2020/05/24/173697-twitterweb.jpg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Sowing Seeds of Support: Rural Food Drive in the Fields of Jharkhand, India - July 2022</span></div>
                    </div>
                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS88XngKxe6v1CGx-yFrPAl1wEG5W5EXnc_g&usqp=CAU' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Harvesting Humanity: A Food Donation Drive in Rural Rajasthan, India - July 2023</span></div>
                    </div>
                    {/* <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://www.y-east.org/diary/wp-content/uploads/2021/01/PXL_20201229_072401988-1054x465.jpg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Mutual Fund Awareness Program at Thane</span></div>
                    </div> */}
                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://images.gofundme.com/hBg_mQ4TfcyCL7BNX-E2bJXC9zg=/720x480/https://d2g8igdw686xgo.cloudfront.net/69277271_1668202918978072_r.jpeg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Unity Through Giving: Food Drive in the Vibrant Markets of Jaipur, India - May 2022</span></div>
                    </div>

                </div>

                <div className="column">
                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://aarnafoundationindia.org/wp-content/uploads/2018/12/WhatsApp-Image-2018-11-29-at-12.43.02-PM-3.jpg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Threads of Compassion: Clothing Distribution in the Slums of Mumbai, India - October 2022</span></div>
                    </div>
                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://4.bp.blogspot.com/-IUnVHd9wz3g/Wqj69y-cu4I/AAAAAAAAaBA/tQC0AEQL4ocCV32s1ypQEX6g0p2OxSfEwCLcBGAs/s1600/130528_indian_children_eating%2B%25281%2529.jpg' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Serving Smiles: Food Donation Event in the Bustling Streets of Mumbai, India - October 2022</span></div>
                    </div>

                    <div className="maheshimage-item">
                        <LazyLoad height='100%' width='100%' threshold={0.95}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3p1p05j2hKitaJlQKvmpsh8pnOpGEJQjCdEl99-kqQ4065JO8rbEtuz7uY11K3fmOF4&usqp=CAU' alt="" />
                        </LazyLoad>
                        <div className="maheshoverlay"><span>Nourishing Hearts: Food Donation Initiative Amidst the Serene Landscapes of Kerala, India - December 2023</span></div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default GalleryComponent
