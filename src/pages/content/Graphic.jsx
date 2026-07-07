import React from 'react'

import ImageCard from '../../components/ImageCard'

import bee from '../../img/graphic/bee.png'
import tournee from '../../img/graphic/tournee.jpg'
import aimer from '../../img/graphic/aimer.png'
import aimerAlt from '../../img/graphic/aimerAlt.jpg'

// Reid Miles
import belaLugosi from '../../img/graphic/reid/bela.jpg'
import station from '../../img/graphic/reid/station.jpg'
import bigScience from '../../img/graphic/reid/big_science.jpg'
import hounds from '../../img/graphic/reid/hounds.jpg'
import zappa from '../../img/graphic/reid/zappa.jpg'

import paper from '../../files/Reid Miles.pdf'

export default function Graphic() {
  return (
    <>
    <div className="columns is-multiline is-centered is-vcentered is-variable is-5">
        <ImageCard
        image={aimerAlt}
        content="Aimer Travel Logo, colored version"
        footer="Illustrator"
        />

        <ImageCard
        image={aimer}
        content="Aimer Travel Logo, transparent version"
        footer="Illustrator"
        />

        <ImageCard 
        image={bee}
        content="The letter B"
        footer="Illustrator"
        size={3}
        />

        <ImageCard
        image={tournee}
        content={<>Tournée du Grenoille Verte. A take on the famous art noveau poster <em>Tournée du Chat Noir</em>. Collaboration w/ Abby Hakewill</>}
        footer="Illustrator, Hand Drawing"
        size={3}
        />
    </div>

    <section className="hero">
        <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Series: Reid Miles
                    </h1>
                    <h2 className="subtitle is-5">
                        Redesigning album covers in the classic style of
                        legendary Blue Note graphic designer, <a
                        href='http://www.hardformat.org/designers/reid-miles2/'>Reid
                        Miles</a>. All works made with Photoshop and/or
                        Illustrator. The curious can find my accompanying
                        paper on his style <a href={paper}>here.</a>
                    </h2>
                </div>
        </div>
    </section>
    <div className="columns is-multiline is-centered is-vcentered">
        <ImageCard
        image={belaLugosi}
        content="Bela Lugosi's Dead - Bauhaus"
        footer={
        <div>
            References:
            <ul><li>
                Hub-Tones - Freddie Hubbard
            </li></ul>
        </div> 
        }
        />

        <ImageCard
        image={station}
        content="Station to Station - David Bowie"
        footer={
        <div>
            References:
            <ul>
                <li>Detroit-New York - Thad Jones</li>
                <li>Our Man in Paris - Dexter Gordon</li>
            </ul>
        </div>
        }
        />

        <ImageCard
        image={bigScience}
        content="Big Science - Laurie Anderson"
        footer={
        <div>
            References:
            <ul>
                <li>A.T.'s Delight - Art Taylor</li>
                <li>Genius of Modern Music: Volume 1 - Thelonious Monk</li>
                <li>Blue Train - John Coltrane</li>
            </ul>
        </div>
        }
        />

        <ImageCard
        image={hounds}
        content="Hounds of Love - Kate Bush"
        footer={
            <div>
                References:
                <ul>
                    <li>Cornbread - Lee Morgan</li>
                </ul>
            </div>
        }
        />

        <ImageCard
        image={zappa}
        content="Apostrophe (') - Frank Zappa"
        footer={
            <div>
                References:
                <ul>
                    <li>It's Time! - Jackie McLean</li>
                </ul>
            </div>
        }
        />
    </div>
    </>
  )
}
