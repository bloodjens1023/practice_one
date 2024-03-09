import Menu from '../components/Menu'

import React from 'react';

function Acceuil() {
    return (
        <div>
            <Menu/>
            <div style={{ background: '#ffffff', borderRadius: '30px', margin:"20px"}}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100px', height: '100px', background: '#153330', borderRadius: '100px', marginBottom: '20px', marginTop: '-60px' }}></div>
                </div>
                <h1 style={{ textAlign: 'center', color: '#f96c27', fontFamily: 'Modak, serif', fontSize: '100px' }}>Ecosort</h1>
                <div style={{ height: '300px', textAlign: 'center' }}>
                    <h3 style={{ color: '#000000', fontFamily: 'Stoke, serif', fontSize: '30px' }}>L'avenir est circulaire:</h3>
                    <h3 style={{ color: '#000000', fontFamily: 'Stoke, serif', fontSize: '30px' }}>recyclons, transformons, consommons.</h3>
                </div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '30px', margin:"20px"}}>
            <div className="row" style={{ height: "auto" }}>
            <div className="col-md-12" style={{ background: "#ffffff" }}>
                <h1 style={{ textAlign: "left", color: "#f96c27", fontFamily: "Montserrat, sans-serif", fontSize: "70px", margin: "8px", marginBottom: "30px" }}>Pourquoi trier?</h1>
            </div>
            <div className="col-md-12" style={{ height: "700px", background: "#ffffff" }}>
                <div className="row">
                    <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px" }}><span style={{ color: "rgb(13, 13, 13)" }}>La gestion des déchets constitue un obstacle majeur à Madagascar, avec des impacts significatifs sur l'environnement. Pour atténuer la pollution et préserver nos écosystèmes fragiles, il est impératif de promouvoir le développement de l'industrie du recyclage</span></p>
                    </div>
                    <div className="col" style={{ background: "#b9fe89", height: "520px", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                        <div>
                            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "30px" }}>Taux de recyclage 2% à Madagascar</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-trash" style={{ fontSize: "164px", color: "rgb(0,0,0)" }}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                        </svg>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "200px", background: "#f96c27", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa fa-recycle pulse animated infinite" style={{ fontSize: "148px" }}></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "300px", background: "#153330", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}>
                                            <p style={{ color: "rgb(255,255,255)", fontFamily: "Montserrat, sans-serif", background: "var(--bs-body-bg)", fontSize: "22px", borderColor: "var(--bs-body-bg)" }}>En 2020, Madagascar a généré 3,2 millions de tonnes de déchets solides urbains.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12" style={{ background: "#ffffff" }}>
                <h1 style={{ textAlign: "left", color: "#000000", fontFamily: "Montserrat, sans-serif", fontSize: "70px", margin: "8px", marginBottom: "30px", fontWeight: "bold" }}>Impactes</h1>
            </div>
            <div className="col-md-12" style={{ height: "700px", background: "#ffffff" }}>
                <div className="row">
                    <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px" }}><span style={{ color: "rgb(13, 13, 13)" }}>Conservation des ressources naturelles et réduction de l'empreinte carbone</span></p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "216px", background: "#f96c27", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "200px", background: "var(--bs-body-bg)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "200px", background: "#ffffff", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div style={{ height: "216px", background: "#B9FE89", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12" style={{ background: "#ffffff" }}>
                <h1 style={{ textAlign: "left", color: "#000000", fontFamily: "Montserrat, sans-serif", fontSize: "70px", margin: "8px", marginBottom: "30px", fontWeight: "bold" }}>Processus</h1>
            </div>
            <div className="col-md-12" style={{ height: "700px", background: "#ffffff" }}>
                <div className="row">
                    <div className="col-lg-4" style={{ display: "flex" }}>
                        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "22px", fontWeight: "bold", marginLeft: "20px" }}><span style={{ color: "rgb(13, 13, 13)" }}>Les déchets sont collectés auprès des ménages, des entreprises et des institutions.</span></p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col" style={{ height: "500px" }}>
                                        <div style={{ height: "216px", background: "#153330", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "216px", marginTop: "200px", marginLeft: "100px" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" style={{ background: "#ffffff", marginTop: "50px" }}>
                        <h1 style={{ textAlign: "center", color: "#f96c27", fontFamily: "Montserrat, sans-serif", fontSize: "70px", margin: "8px", marginBottom: "30px", fontWeight: "bold" }}>Nos produits</h1>
                    </div>
                    <div className="col" style={{ background: "#ffffff" }}>
                        <div className="simple-slider">
                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                <div className="swiper-wrapper" id="swiper-wrapper-d112723784f651b9" aria-live="polite" style={{ transitionDuration: "0ms", transform: "translate3d(-1116px, 0px, 0px)" }}>
                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" style={{ background: "url(\"https://cdn.bootstrapstudio.io/placeholders/1400x800.png\") center center / cover no-repeat", width: "1116px" }} data-swiper-slide-index="2" role="group" aria-label="1 / 5"></div>
                                    <div className="swiper-slide swiper-slide-active" style={{ background: "url(\"https://cdn.bootstrapstudio.io/placeholders/1400x800.png\") center center / cover no-repeat", width: "1116px" }} data-swiper-slide-index="0" role="group" aria-label="2 / 5"></div>
                                    <div className="swiper-slide swiper-slide-next" style={{ background: "url(\"https://cdn.bootstrapstudio.io/placeholders/1400x800.png\") center center / cover no-repeat", width: "1116px" }} data-swiper-slide-index="1" role="group" aria-label="3 / 5"></div>
                                    <div className="swiper-slide swiper-slide-duplicate-prev" style={{ background: "url(\"https://cdn.bootstrapstudio.io/placeholders/1400x800.png\") center center / cover no-repeat", width: "1116px" }} data-swiper-slide-index="2" role="group" aria-label="4 / 5"></div>
                                </div>
                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
                                    <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                                    <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                                </div>
                                <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-d112723784f651b9"></div>
                                <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d112723784f651b9"></div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="text-white" style={{ background: "rgb(21,51,48)" }}>
                    <div className="container py-4 py-lg-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                                <h3 className="fs-6 text-white">Services</h3>
                                <ul className="list-unstyled">
                                    <li><a className="link-light" href="#">Web design</a></li>
                                    <li><a className="link-light" href="#">Development</a></li>
                                    <li><a className="link-light" href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                                <h3 className="fs-6 text-white">About</h3>
                                <ul className="list-unstyled">
                                    <li><a className="link-light" href="#">Company</a></li>
                                    <li><a className="link-light" href="#">Team</a></li>
                                    <li><a className="link-light" href="#">Legacy</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                                <h3 className="fs-6 text-white">Careers</h3>
                                <ul className="list-unstyled">
                                    <li><a className="link-light" href="#">Job openings</a></li>
                                    <li><a className="link-light" href="#">Employee success</a></li>
                                    <li><a className="link-light" href="#">Benefits</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                                <div className="fw-bold d-flex align-items-center mb-2">
                                    <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-trash fs-5">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                        </svg>
                                    </span>
                                    <span>Ecosort</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between align-items-center pt-3">
                            <p className="mb-0">Copyright © 2024 Ecosort</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.383A3.262 3.262 0 0 1 .64 5.63v.042a3.29 3.29 0 0 0 2.635 3.22 3.276 3.276 0 0 1-1.487.056 3.29 3.29 0 0 0 3.065 2.28 6.586 6.586 0 0 1-4.08 1.411A6.72 6.72 0 0 1 0 13.416a9.287 9.287 0 0 0 5.026 1.468"></path>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                        <path d="M8 0C6.8 0 6.7.004 5.65.023c-1.05.02-1.413.076-1.813.153-.438.09-.772.207-1.104.34a3.908 3.908 0 0 0-1.617 1.06A3.908 3.908 0 0 0 .355 3.432c-.133.332-.25.666-.34 1.104C.097 4.236.041 4.599.022 5.65.004 6.7 0 6.8 0 8.001c0 1.2.004 1.3.023 2.35.02 1.05.076 1.413.153 1.813.09.438.207.772.34 1.104.224.56.527.978.94 1.39.413.413.83.716 1.39.94.332.134.666.25 1.104.34.4.077.763.132 1.813.152 1.05.02 1.15.023 2.35.023 1.2 0 1.3-.004 2.35-.023 1.05-.02 1.413-.076 1.813-.153.438-.09.772-.207 1.104-.34.56-.224.977-.527 1.39-.94.412-.412.715-.83.94-1.39.133-.332.25-.666.34-1.104.077-.4.132-.763.152-1.813.02-1.05.023-1.15.023-2.35 0-1.2-.004-1.3-.023-2.35-.02-1.05-.076-1.413-.153-1.813a6.2 6.2 0 0 0-.34-1.104c-.224-.56-.527-.977-.94-1.39-.412-.413-.83-.716-1.39-.94-.332-.133-.666-.25-1.104-.34a3.908 3.908 0 0 0-1.104-.153c-1.05-.02-1.3-.023-2.35-.023zm4.534 1.526a.25.25 0 0 1 .25-.25h1.447a.25.25 0 0 1 .25.25v1.447a.25.25 0 0 1-.25.25h-1.447a.25.25 0 0 1-.25-.25V1.526zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM12.5 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Acceuil;
