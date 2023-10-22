import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Shoes</a> 
    <a className="link link-hover">Sunglass</a> 
    <a className="link link-hover">Cloth</a> 
    <a className="link link-hover">Panjabi</a>
  </nav> 
  <nav>
    <header className="footer-title">Pages</header> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Shop</a> 
    <a className="link link-hover">Blog</a> 
    <a className="link link-hover">Contactus</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Subscribe us</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;