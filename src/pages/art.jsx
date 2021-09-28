import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

// oh boy
import Cooper from "../images/art/cooper.jpg";
import Bacon from "../images/art/bacon.jpg";
import Froggie from "../images/art/froggie.jpg";
import Dimensions from "../images/art/dimensions.jpg";
import Dracula from "../images/art/dracula.jpg";
import Edgy from "../images/art/edgy.jpg";
import Horse from "../images/art/horse.jpg";
import SelfPortrait from "../images/art/self-portrait.jpg";
import NoMan from "../images/art/no-man.jpg";
import CreamyBoy from "../images/art/creamy-boy.jpg";
import Cover from "../images/art/cover.jpeg";
import Corona from "../images/art/corona.png";
import Ambient from "../images/art/ambient.jpg";
import Algae from "../images/art/algae.jpg";
import StillLife from "../images/art/Still-life.jpg";
import Game from "../images/art/game.gif";
import GameGlitch from "../images/art/game-glitch.gif";
import Descent from "../images/art/angel_descending_upright.jpg";
import  BloodSea from "../images/art/blood_sea.jpg";
import Encounter from "../images/art/encounter.jpg";
import Fire from "../images/art/fire_walk_with_me.jpg";
import Lighthouse from "../images/art/lighthouse.jpg";
import Strawberry from "../images/art/mr_strawberry.jpg";
import Ocean from "../images/art/ocean.jpg";
import Sycamore from "../images/art/sycamore_trees.jpg";


function art() {
    return (
        <Layout>
            <section id="gallery">
                <Link to={Cooper}><img src={Cooper} alt="" /></Link>
                <Link to={Bacon}><img src={Bacon} alt="" /></Link>
                <Link to={Froggie}><img src={Froggie} alt="" /></Link>
                <Link to={Dimensions}><img src={Dimensions} alt="" /></Link>
                <Link to={Dracula}><img src={Dracula} alt="" /></Link>
                <Link to={Edgy}><img src={Edgy} alt="" /></Link>
                <Link to={Horse}><img src={Horse} alt="" /></Link>
                <Link to={SelfPortrait}><img src={SelfPortrait} alt="" /></Link>
                <Link to={NoMan}><img src={NoMan} alt="" /></Link>
                <Link to={CreamyBoy}><img src={CreamyBoy} alt="" /></Link>
                <Link to={Cover}><img src={Cover} alt="" /></Link>
                <Link to={Corona}><img src={Corona} alt="" /></Link>
                <Link to={Ambient}><img src={Ambient} alt="" /></Link>
                <Link to={Algae}><img src={Algae} alt="" /></Link>
                <Link to={StillLife}><img src={StillLife} alt="" /></Link>
                <Link to={Game}><img src={Game} alt="" /></Link>
                <Link to={GameGlitch}><img src={GameGlitch} alt="" /></Link>
                <Link to={Descent}><img src={Descent} alt="" /></Link>
                <Link to={BloodSea}><img src={BloodSea} alt="" /></Link>
                <Link to={Encounter}><img src={Encounter} alt="" /></Link>
                <Link to={Fire}><img src={Fire} alt="" /></Link>
                <Link to={Lighthouse}><img src={Lighthouse} alt="" /></Link>
                <Link to={Strawberry}><img src={Strawberry} alt="" /></Link>
                <Link to={Ocean}><img src={Ocean} alt="" /></Link>
                <Link to={Sycamore}><img src={Sycamore} alt="" /></Link>
            </section>
        </Layout>
    )
}

export default art
