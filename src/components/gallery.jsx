import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

// array made w/ utility python script, not by hand
import angel_descending_upright from "../images/art/angel_descending_upright.jpg"
import thumb_angel_descending_upright from "../images/art/thumb/thumb-angel_descending_upright.jpg"
import blood_sea from "../images/art/blood_sea.jpg"
import thumb_blood_sea from "../images/art/thumb/thumb-blood_sea.jpg"
import cover from "../images/art/cover.jpeg"
import thumb_cover from "../images/art/thumb/thumb-cover.jpeg"
import dimensions from "../images/art/dimensions.jpg"
import thumb_dimensions from "../images/art/thumb/thumb-dimensions.jpg"
import dracula from "../images/art/dracula.jpg"
import thumb_dracula from "../images/art/thumb/thumb-dracula.jpg"
import encounter from "../images/art/encounter.jpg"
import thumb_encounter from "../images/art/thumb/thumb-encounter.jpg"
import fire_walk_with_me from "../images/art/fire_walk_with_me.jpg"
import thumb_fire_walk_with_me from "../images/art/thumb/thumb-fire_walk_with_me.jpg"
import horse from "../images/art/horse.jpg"
import thumb_horse from "../images/art/thumb/thumb-horse.jpg"
import i_touched_your_breath from "../images/art/i_touched_your_breath.jpg"
import thumb_i_touched_your_breath from "../images/art/thumb/thumb-i_touched_your_breath.jpg"
import lighthouse from "../images/art/lighthouse.jpg"
import thumb_lighthouse from "../images/art/thumb/thumb-lighthouse.jpg"
import mr_strawberry from "../images/art/mr_strawberry.jpg"
import thumb_mr_strawberry from "../images/art/thumb/thumb-mr_strawberry.jpg"
import ocean from "../images/art/ocean.jpg"
import thumb_ocean from "../images/art/thumb/thumb-ocean.jpg"
import self_portrait from "../images/art/self-portrait.jpg"
import thumb_self_portrait from "../images/art/thumb/thumb-self-portrait.jpg"
import sycamore_trees from "../images/art/sycamore_trees.jpg"
import thumb_sycamore_trees from "../images/art/thumb/thumb-sycamore_trees.jpg"
import Still_life from "../images/art/Still-life.jpg"
import thumb_Still_life from "../images/art/thumb/thumb-Still-life.jpg"
import algae from "../images/art/algae.jpg"
import thumb_algae from "../images/art/thumb/thumb-algae.jpg"
import ambient from "../images/art/ambient.jpg"
import thumb_ambient from "../images/art/thumb/thumb-ambient.jpg"
import bacon from "../images/art/bacon.jpg"
import thumb_bacon from "../images/art/thumb/thumb-bacon.jpg"
import corona from "../images/art/corona.png"
import thumb_corona from "../images/art/thumb/thumb-corona.png"
import cooper from "../images/art/cooper.jpg"
import thumb_cooper from "../images/art/thumb/thumb-cooper.jpg"
import creamy_boy from "../images/art/creamy-boy.jpg"
import thumb_creamy_boy from "../images/art/thumb/thumb-creamy-boy.jpg"
import froggie from "../images/art/froggie.jpg"
import thumb_froggie from "../images/art/thumb/thumb-froggie.jpg"
import game_glitch from "../images/art/game-glitch.gif"
import thumb_game_glitch from "../images/art/thumb/thumb-game-glitch.gif"
import game from "../images/art/game.gif"
import thumb_game from "../images/art/thumb/thumb-game.gif"
import no_man from "../images/art/no-man.jpg"
import thumb_no_man from "../images/art/thumb/thumb-no-man.jpg"
import edgy from "../images/art/edgy.jpg"
import thumb_edgy from "../images/art/thumb/thumb-edgy.jpg"

let images = [
    {
        original: angel_descending_upright,
        thumbnail: thumb_angel_descending_upright
    },
    {
        original: blood_sea,
        thumbnail: thumb_blood_sea
    },
    {
        original: cover,
        thumbnail: thumb_cover
    },
    {
        original: dimensions,
        thumbnail: thumb_dimensions
    },
    {
        original: dracula,
        thumbnail: thumb_dracula
    },
    {
        original: encounter,
        thumbnail: thumb_encounter
    },
    {
        original: fire_walk_with_me,
        thumbnail: thumb_fire_walk_with_me
    },
    {
        original: horse,
        thumbnail: thumb_horse
    },
    {
        original: i_touched_your_breath,
        thumbnail: thumb_i_touched_your_breath
    },
    {
        original: lighthouse,
        thumbnail: thumb_lighthouse
    },
    {
        original: mr_strawberry,
        thumbnail: thumb_mr_strawberry
    },
    {
        original: ocean,
        thumbnail: thumb_ocean
    },
    {
        original: self_portrait,
        thumbnail: thumb_self_portrait
    },
    {
        original: sycamore_trees,
        thumbnail: thumb_sycamore_trees
    },
    {
        original: Still_life,
        thumbnail: thumb_Still_life
    },
    {
        original: algae,
        thumbnail: thumb_algae
    },
    {
        original: ambient,
        thumbnail: thumb_ambient
    },
    {
        original: bacon,
        thumbnail: thumb_bacon
    },
    {
        original: corona,
        thumbnail: thumb_corona
    },
    {
        original: cooper,
        thumbnail: thumb_cooper
    },
    {
        original: creamy_boy,
        thumbnail: thumb_creamy_boy
    },
    {
        original: froggie,
        thumbnail: thumb_froggie
    },
    {
        original: game_glitch,
        thumbnail: thumb_game_glitch
    },
    {
        original: game,
        thumbnail: thumb_game
    },
    {
        original: no_man,
        thumbnail: thumb_no_man
    },
    {
        original: edgy,
        thumbnail: thumb_edgy
    },
]




export default class Gallery extends Component {
    render() {
        return (
            <ImageGallery items={images} showPlayButton={false} />
        );
    }
}
