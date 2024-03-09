import Menu from '../components/Menu'
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
function Acceuil() {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
      const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];
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
                    <div className="slide-container">
                        <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                            </div>
                        ))} 
                        </Slide>
                    </div>
                </div>
                
            </div>
        </div>
            </div>
        </div>
    );
}

export default Acceuil;
