import React, { useState, useEffect } from 'react'
import SlideToggle from 'react-slide-toggle'
import TeamModal from './TeamModal'
import data from './data'
import unnati from '../images/headshots/unnati.png'
import aishwarya from '../images/headshots/aishwarya.png'
import shaurya from '../images/headshots/shaurya.png'
import shankhadip from '../images/headshots/Shan.jpg'
import madhav from '../images/headshots/madhav.png'
import bhakti from '../images/headshots/Bhakti.jpg'
import renesh from '../images/headshots/renesh.png'
import sriven from '../images/headshots/sriven.png'
import avig from '../images/headshots/Avig.jpg'
import josh from '../images/headshots/josh.png'
import thad from '../images/headshots/thad.png'
import meldon from '../images/headshots/meldon.png'
import rashi from '../images/headshots/rashi.png'
import ameer from '../images/headshots/Ameer.JPG'
import eric from '../images/headshots/eric.png'
import joseph from '../images/headshots/joseph.png'
import nandita from '../images/headshots/nandita.png'
import jonathan from '../images/headshots/jonathan.png'
import juliana from '../images/headshots/juliana.png'
import navya from '../images/headshots/navya.png'

function Team() {
    // I'm gonna bite the bullet and hardcode this. We only recruit once a year anyway :shrug:


    return (
        <div className="container-fluid box-shadow mt-5 pb-2" id="team">
            <div className="container text-center">
                <h2 className="section-header">Meet The Team</h2>
                <br />
                <h3 className='text-muted'>Click on the headshots to learn more about them!</h3>
                <SlideToggle duration={800} render={({ toggle, setCollapsibleElement }) => (
                    <>
                        <button className="btn btn-info btn-minimize mx-auto" onClick={toggle}>Toggle</button>
                        <section className="my-5 team-section" ref={setCollapsibleElement}>
                            <h3 className="d-flex justify-content-start">Leaders</h3>
                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={unnati} alt={'Unnati Agrawal'} blurb={data['unnati']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Unnati Agrawal</h5>
                                    <p className="text-uppercase blue-text"><strong>President</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={aishwarya} alt={'Aishwarya Kanagala'} blurb={data['aishwarya']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Aishwarya Kanagala</h5>
                                    <p className="text-uppercase blue-text"><strong>Vice President</strong></p>

                                </div>

                            </div>

                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={shaurya} alt={'Shaurya Pathak'} blurb={data['shaurya']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shaurya Pathak</h5>
                                    <p className="text-uppercase blue-text"><strong>Secretary</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={shankhadip} alt={'Shankhadip Chakraborty'} blurb={data['shankhadip']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shankhadip Chakraborty</h5>
                                    <p className="text-uppercase blue-text"><strong>Treasurer</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={madhav} alt={'Madhav Arora'} blurb={data['madhav']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Madhav Arora</h5>
                                    <p className="text-uppercase blue-text"><strong>Editor in Chief</strong></p>

                                </div>

                            </div>

                            <h3 className="d-flex justify-content-start">Directors</h3>
                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={bhakti} alt={'Bhakti Patel'} blurb={data['bhakti']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Bhakti Patel</h5>
                                    <p className="text-uppercase blue-text"><strong>Director of Technology</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={renesh} alt={'Renesh Bhamidipati'} blurb={data['renesh']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Renesh Bhamidipati</h5>
                                    <p className="text-uppercase blue-text"><strong>Director of Events</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={sriven} alt={'Sriven Sikhinam'} blurb={data['sriven']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Sriven Sikhinam</h5>
                                    <p className="text-uppercase blue-text"><strong>Director of Corporate Relations</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={avig} alt={'Avig Pointi'} blurb={data['avig']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Avig Pointi</h5>
                                    <p className="text-uppercase blue-text"><strong>Director of Marketing</strong></p>

                                </div>

                            </div>


                            <h3 className="d-flex justify-content-start">Technology Team</h3>
                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={josh} alt={'Joshua Schupak'} blurb={data['josh']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Joshua Schupak</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Development Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={thad} alt={'Thad Joshua Tayo'} blurb={data['thad']} />

                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Thad Joshua Tayo</h5>
                                    <p className="text-uppercase blue-text"><strong>Webmaster</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={meldon} alt={'Meldon Mendonca'} blurb={data['meldon']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Meldon Mendonca</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={'https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg'} alt={'Harsh Kumar'} blurb={data['harsh']} />

                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Harsh Kumar</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

                                </div>






                            </div>

                            <h3 className="d-flex justify-content-start">Events</h3>
                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={rashi} alt={'Rashi Shah'} blurb={data['rashi']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Rashi Shah</h5>
                                    <p className="text-uppercase blue-text"><strong>Events Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={ameer} alt={'Ameer Ali'} blurb={data['ameer']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ameer Ali</h5>
                                    <p className="text-uppercase blue-text"><strong>Professional Development Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={eric} alt={'Eric Pepic'} blurb={data['eric']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Eric Pepic</h5>
                                    <p className="text-uppercase blue-text"><strong>Member Engagement Lead</strong></p>

                                </div>




                            </div>

                            <h3 className="d-flex justify-content-start">Corporate Relations</h3>
                            <div className="row">

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={joseph} alt={'Joseph Cobo'} blurb={data['joseph']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Joseph Cobo</h5>
                                    <p className="text-uppercase blue-text"><strong>Corporate Relations Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={nandita} alt={'Nandita Shyam'} blurb={data['nandita']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Nandita Shyam</h5>
                                    <p className="text-uppercase blue-text"><strong>Professional Affairs Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={jonathan} alt={'Jonathan Miller'} blurb={data['jonathan']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Jonathan Miller</h5>
                                    <p className="text-uppercase blue-text"><strong>Corporate Relations Team Member</strong></p>

                                </div>



                            </div>

                            <h3 className="d-flex justify-content-start">Marketing</h3>
                            <div className="row">


                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={juliana} alt={'Juliana Urbis'} blurb={data['juliana']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Juliana Urbis</h5>
                                    <p className="text-uppercase blue-text"><strong>Design & Graphics Chair</strong></p>

                                </div>

                                <div className="col-lg mb-5">
                                    <div className="mx-auto">
                                        <TeamModal src={navya} alt={'Navya Nadig'} blurb={data['navya']} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Navya Nadig</h5>
                                    <p className="text-uppercase blue-text"><strong>Social Media Chair</strong></p>

                                </div>




                            </div>





                        </section>
                    </>
                )}
                />



            </div>
        </div>
    )
}

export default Team


