import React from 'react'

const contact = () => {
    const con=[{i:"fas fa-user",name:"Name",nam:"Ashish Leuva"},{i:"fas fa-map-marker-alt",name:"Address",nam:"Kalol, Gujarat"},{i:"fas fa-envelope",name:"Email",nam:"ashisleuva2002@gmail.com"}]
    return (
    <>
      <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>For any query or any doubts you all can contact me here or get in touch with me. My details are
                        given here.</p>
                    <div className="icons">
                        {con.map((cur)=>{
                            return(
                                <div className="row">
                                <i className={cur.i}></i>
                                <div className="info">
                                    <div className="head">{cur.name}</div>
                                <div className="sub-title">{cur.nam}</div>
                                </div>
                            </div>
                           
                            );
                        })}
                        
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form className="contact-form"  >
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" id="Name" name="Name" placeholder="Name"/>
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" id="Sender" name="Email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" id="Subject" name="Subject" placeholder="Subject"/>
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" id="Message" name="Message" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg"name="send" >Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default contact