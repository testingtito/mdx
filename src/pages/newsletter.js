import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my friends every few weeks</h4>
          <form
            name="testing-contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success" 
            className="contact-form">

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact"/>
            
            <input type="text" name="name" placeholder="Your name" className="form-control" />
            <input type="email" name="email" placeholder="Your email" className="form-control" />
            <button type="submit" className="btn from-control submit-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
