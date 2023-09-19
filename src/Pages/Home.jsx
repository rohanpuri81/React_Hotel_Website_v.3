import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import './Home.css'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`,backgroundAttachment:'fixed'}}>
          <div className="headerContainer">
            <h1>Rohan's restra</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
            <button>
              ORDER NOW
            </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home