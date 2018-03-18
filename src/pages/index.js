import React from 'react'
import Link from 'gatsby-link'
import { injectGlobal } from 'emotion'
import styled, { css } from 'react-emotion'

import Card from '../components/Card'
import bg from '../images/bg.jpg'
// import Slider from '../components/Slider'
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Wrapper = styled.section`
  align-items: center;
  /* display: block;
  flex-direction: column; */
  width: 100%;
  height: 100%;
  position: relative;
`

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  word-wrap: break-word;
  color: #000;
  margin-bottom: 0.5em;
  padding: 0.5em 1em;
  & a {
    color: #8be9fd;
  }
  @media (min-width: 768px) {
    font-size: 4em;
  }
`

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: auto-fit; */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.25em;
  }
`

const IndexPage = () => (
  <Wrapper>
    {/* <Slider /> */}
    <Title>Lundgren Design</Title>
    <CardWrapper>
      <Card text="Test" img="https://source.unsplash.com/random/800x600" />
      <Card text="Test" img="https://source.unsplash.com/random/800x601" />
      <Card text="Test" img="https://source.unsplash.com/random/800x602" />
      {/* <Card text="Test" img="https://source.unsplash.com/random/800x603" />
      <Card text="Test" img="https://source.unsplash.com/random/800x604" />
      <Card text="Test" img="https://source.unsplash.com/random/800x605" /> */}
    </CardWrapper>

    <div
      css={`
        position: relative;
        margin: 1.5em auto;
        max-width: 740px;
        padding: 1em;
        p:first-of-type:first-letter {
          color: rgb(48, 4, 125);
          float: left;
          text-transform: uppercase;
          font-family: 'Playfair Display', serif;
          font-size: 75px;
          line-height: 60px;
          padding-top: 4px;
          padding-right: 8px;
          padding-left: 3px;
        }
      `}
    >
      <h2>Test chapter</h2>
      <p>
        dreamcatcher tousled PBR&B yr farm-to-table bitters plaid shabby chic
        bespoke VHS DIY normcore synth Schlitz Intelligentsia actually kitsch
        roof party mlkshk YOLO put a bird on it Tonx Truffaut small batch seitan
        locavore slow-carb literally craft beer blog gentrify iPhone fixie
        biodiesel direct trade try-hard American Apparel ennui art party +1
        Tumblr fanny pack stumptown chillwave whatever distillery wolf salvia
        90's sriracha messenger bag occupy ugh meh cliche bicycle rights
        single-origin coffee selfies sustainable keffiyeh lo-fi before they sold
        out chia narwhal Portland brunch fashion axe authentic mixtape
        fingerstache pour-over quinoa beard retro deep v Echo Park hashtag Wes
        Anderson swag pork belly gastropub cray flexitarian XOXO photo booth
        crucifix vinyl selvage Williamsburg Odd Future Helvetica organic keytar
        readymade post-ironic tattooed mumblecore 8-bit raw denim tofu sartorial
        hoodie ethical four loko leggings gluten-free you probably haven't heard
        of them vegan Banksy Etsy aesthetic High Life mustache Carles squid
        chambray forage butcher twee cardigan artisan Kickstarter 3 wolf moon
        jean shorts skateboard letterpress trust fund master cleanse flannel
        asymmetrical pickled scenester Thundercats pop-up pug McSweeney's Godard
        cornhole Austin heirloom kogi polaroid meggings Marfa paleo Pitchfork
        next level disrupt Brooklyn semiotics church-key hella lomo fap Blue
        Bottle food truck Cosby sweater Vice Shoreditch irony Bushwick
        typewriter banjo cred freegan PBR Neutra wayfarers Pinterest drinking
        vinegar street art viral banh mi tote bag umami kale chips.
      </p>
    </div>
    <img src={bg} alt="large-img" />
    <div
      css={`
        position: relative;
        margin: 1.5em auto;
        max-width: 740px;
        padding: 1em;
        p:first-of-type:first-letter {
          color: rgb(48, 4, 125);
          float: left;
          font-family: 'Playfair Display', serif;
          text-transform: uppercase;
          font-size: 75px;
          line-height: 60px;
          padding-top: 4px;
          padding-right: 8px;
          padding-left: 3px;
        }
      `}
    >
      <h2>Next chapter</h2>
      <p>
        keytar raw denim iPhone sartorial Neutra freegan vinyl leggings fap
        plaid wolf artisan 3 wolf moon literally trust fund kale chips lo-fi
        slow-carb Pitchfork blog fanny pack umami mustache Intelligentsia
        Bushwick gentrify photo booth retro Tumblr narwhal yr flexitarian Marfa
        roof party disrupt ennui twee keffiyeh master cleanse sriracha cornhole
        post-ironic Williamsburg jean shorts butcher chambray mumblecore occupy
        PBR stumptown Shoreditch Godard typewriter Echo Park lomo skateboard
        pour-over readymade four loko Pinterest chillwave actually locavore
        Brooklyn letterpress church-key messenger bag Portland kogi pop-up DIY
        Wes Anderson Kickstarter forage aesthetic pickled VHS Helvetica pork
        belly dreamcatcher irony fashion axe viral Odd Future mlkshk meggings
        direct trade Cosby sweater ugh +1 fixie banjo gluten-free American
        Apparel mixtape farm-to-table tattooed shabby chic PBR&B heirloom swag
        try-hard ethical 8-bit hella bicycle rights 90's small batch organic
        McSweeney's tote bag authentic distillery sustainable semiotics normcore
        crucifix fingerstache meh YOLO craft beer hashtag you probably haven't
        heard of them bespoke next level food truck drinking vinegar street art
        quinoa whatever single-origin coffee tousled biodiesel deep v selvage
        asymmetrical Carles cardigan chia put a bird on it gastropub seitan tofu
        hoodie beard scenester Vice art party Tonx cliche paleo brunch polaroid
        before they sold out pug cray kitsch Truffaut wayfarers selfies cred
        synth Blue Bottle banh mi Banksy Schlitz XOXO flannel salvia Etsy
        bitters vegan squid Thundercats High Life Austin.
      </p>
    </div>
  </Wrapper>
)

export default IndexPage
