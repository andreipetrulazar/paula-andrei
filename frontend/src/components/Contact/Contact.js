import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_g2la43k', 'template_t1fjg8e', form.current, 'me7Nfw8Rj2SV2VHiZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <section className="contact app__wrapper section__padding app__bg flex__center section__padding">
      <div className="content">
          <h2>Contactează-mă</h2>
          <p>Ai nevoie de ore de canto sau de un solist de muzică populară la un eveniment? <br/>Vrei sa faci cadou o pictură sau vrei să îți compun câteva versuri ?</p>
          <p>Completează formularul de mai jos și vom stabili împreună toate detaliile</p>
      </div>
      <div className="container">
          <div className="contactInfo">
              <div className="box">
                  <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                  <div className="text">
                      <h3>Adresă</h3>
                      <p>Piatra Neamț, județul Neamț, România</p> 
                  </div> 
              </div>
              <div className="box">
                  <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                      <h3>Phone</h3>
                      <p>123 123 12345</p> 
                  </div>
              </div>
              <div className="box">
                  <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                  <div className="text">
                      <h3>Email</h3>
                      <p>andreipaula99@gmail.com</p> 
                  </div>
              </div>
              <div className='social-media'>
              <div className="box social_media_facebook">
              <a href="https://www.facebook.com/Paula.Andrei.folclor" target='_blank'>  <div className="icon"><i class="fa-brands fa-facebook "></i> </div></a>
                  <div className="text">
                
                     
                  </div>
              </div>
              
              <div className="box social_media_instagram">
                <a href="https://www.instagram.com/andrei_paula/" target="_blank"> <div className="icon"><i class="fa-brands fa-instagram " aria-hidden="true"></i></div> </a>
                  <div className="text">
                 
                     
                  </div>
              </div>
              <div className="box social_media_youtube">
                 <a href="https://www.youtube.com/channel/UC-7DnzMhiNvA73BrDGTXzBw" target='_blank'> <div className="icon"><i className="fa-brands fa-youtube " aria-hidden="true"></i></div> </a>
                  <div className="text">
                   
                     
                  </div>
              </div>
              </div>
          </div>
          <div className="contactForm">
              <form ref={form} onSubmit = {sendEmail} >
                  <h2>Formular de Contact</h2>
                 
                  <div className="inputBox">
                      <input type="text" name="user_name" required='required' />
                      <span>Nume și Prenume</span>
                  </div>
                  <div className="inputBox">
                      <input type="text" name="user_email" required='required' />
                      <span>Email</span>
                  </div>

                  <div className="inputBox">
                    
                    <select name="categorie"  >
                        <option value='' disabled selected >Alege Categoria</option>
                        <option value="Eveniment Artistic">Eveniment Artistic</option>
                        <option value="Ore de canto">Ore Canto</option>
                        <option value="Pictură">Pictură</option> 
                        <option value="Poezie">Poezie</option>                                    
                     </select>
                     
                  </div>
                 
                  <div className="inputBox">
                      <textarea required="required" name='message'></textarea>
                      <span>Scrie mesajul tău... </span>
                  </div>
                  <div className="btn">
                      <input type="submit" value="Send" />
                  </div>
              </form>
          </div>
      </div>
  </section> 
    )

};

export default Contact;