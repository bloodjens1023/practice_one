import Menu from '../components/Menu'

import React from 'react';

function Acceuil() {
    return (
        <div>
            <Menu/>
            <div style={{ background: '#ffffff', borderRadius: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100px', height: '100px', background: '#153330', borderRadius: '100px', marginBottom: '20px', marginTop: '-60px' }}></div>
                </div>
                <h1 style={{ textAlign: 'center', color: '#f96c27', fontFamily: 'Modak, serif', fontSize: '100px' }}>Ecosort</h1>
                <div style={{ height: '300px', textAlign: 'center' }}>
                    <h3 style={{ color: '#000000', fontFamily: 'Stoke, serif', fontSize: '30px' }}>L'avenir est circulaire:</h3>
                    <h3 style={{ color: '#000000', fontFamily: 'Stoke, serif', fontSize: '30px' }}>recyclons, transformons, consommons.</h3>
                </div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '0px', marginTop: '30px', height: 'auto' }}>
                <h1 style={{ textAlign: 'left', color: '#f96c27', fontFamily: 'Montserrat, sans-serif', fontSize: '70px', margin: '8px', marginBottom: '30px' }}>Pourquoi trier?</h1>
                <div style={{ height: '700px', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#0d0d0d' }}>La gestion des déchets constitue un obstacle majeur à Madagascar, avec des impacts significatifs sur l'environnement. Pour atténuer la pollution et préserver nos écosystèmes fragiles, il est impératif de promouvoir le développement de l'industrie du recyclage</p>
                    </div>
                    <div style={{ background: '#b9fe89', height: '520px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '30px' }}>Taux de recyclage 2% à Madagascar</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="164" height="164" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize: '164px', color: 'rgb(0,0,0)' }}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                        </svg>
                    </div>
                    <div>
                        <div style={{ height: '200px', background: '#f96c27', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fa fa-recycle pulse animated infinite" style={{ fontSize: '148px' }}></i>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ height: '300px', background: '#153330', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                <p style={{ color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', background: 'var(--bs-body-bg)', fontSize: '22px', borderColor: 'var(--bs-body-bg)' }}>En 2020, Madagascar a généré 3,2 millions de tonnes de déchets solides urbains.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#ffffff' }}>
                <h1 style={{ textAlign: 'left', color: '#000000', fontFamily: 'Montserrat, sans-serif', fontSize: '70px', margin: '8px', marginBottom: '30px', fontWeight: 'bold' }}>Impactes</h1>
                <div style={{ height: '700px', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#0d0d0d' }}><span style={{ color: 'rgb(13, 13, 13)' }}>Conservation des ressources naturelles et réduction de l'empreinte carbone</span></p>
                    </div>
                    <div>
                        <div>
                            <div style={{ height: '216px', background: '#f96c27', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <div>
                                <div style={{ height: '200px', background: 'var(--bs-body-bg)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                    <p style={{ color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', fontSize: '22px' }}>En 2020, le taux de collecte des déchets solides urbains était d'environ 42%.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#ffffff', marginTop: '30px', height: 'auto' }}>
                <h1 style={{ textAlign: 'left', color: '#f96c27', fontFamily: 'Montserrat, sans-serif', fontSize: '70px', margin: '8px', marginBottom: '30px' }}>Comment trier?</h1>
                <div style={{ height: '700px', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#0d0d0d' }}><span style={{ color: 'rgb(13, 13, 13)' }}>Adoptez les 5 gestes éco-citoyens</span></p>
                    </div>
                    <div>
                        <div>
                            <div style={{ height: '216px', background: '#b9fe89', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <div>
                                <div style={{ height: '200px', background: '#153330', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                    <p style={{ color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', fontSize: '22px' }}>Sensibiliser et éduquer la population pour un changement de comportement durable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#ffffff' }}>
                <h1 style={{ textAlign: 'left', color: '#f96c27', fontFamily: 'Montserrat, sans-serif', fontSize: '70px', margin: '8px', marginBottom: '30px' }}>Recyclage</h1>
                <div style={{ height: '700px', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#0d0d0d' }}><span style={{ color: 'rgb(13, 13, 13)' }}>Promouvoir le recyclage des déchets</span></p>
                    </div>
                    <div>
                        <div>
                            <div style={{ height: '216px', background: '#b9fe89', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <div>
                                <div style={{ height: '200px', background: '#153330', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                    <p style={{ color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', fontSize: '22px' }}>Implémenter un système de collecte et de tri des déchets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#ffffff', marginTop: '30px', height: 'auto' }}>
                <h1 style={{ textAlign: 'left', color: '#f96c27', fontFamily: 'Montserrat, sans-serif', fontSize: '70px', margin: '8px', marginBottom: '30px' }}>Transformation</h1>
                <div style={{ height: '700px', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#0d0d0d' }}><span style={{ color: 'rgb(13, 13, 13)' }}>Convertir les déchets en ressources</span></p>
                    </div>
                    <div>
                        <div>
                            <div style={{ height: '216px', background: '#b9fe89', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <div>
                                <div style={{ height: '200px', background: '#153330', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                                    <p style={{ color: 'rgb(255,255,255)', fontFamily: 'Montserrat, sans-serif', fontSize: '22px' }}>Développer des technologies innovantes de recyclage et de valorisation des déchets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acceuil;
