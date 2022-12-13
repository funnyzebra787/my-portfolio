import "./App.css";
import React, {useRef, useState} from "react";

function App() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const topRef = useRef(null);

    const executeScroll1 = () => ref1.current.scrollIntoView()
    const executeScroll2 = () => ref2.current.scrollIntoView()
    const executeScroll3 = () => ref3.current.scrollIntoView()
    const executeScroll4 = () => ref4.current.scrollIntoView()
    const executeScroll5 = () => topRef.current.scrollIntoView()

    return (
    <div>
        <div id="overall-header" ref={topRef}>
            <h1 style={{fontFamily:'Helvetica', fontSize:80}}>My Portfolio</h1>
            <div style={{marginBottom:50}}>
                <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll1}> Click for Project 1 </button>
                <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll2}> Click for Project 2 </button>
                <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll3}> Click for Project 3 </button>
                <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll4}> Click for Project 4 </button>
            </div>
        </div>

        <div ref={ref1} className="project-header">
            <b className="project-header-text">Project 1: Personas and Storyboarding</b>
            <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll5}> Scroll to Top </button>
        </div>
        <hr></hr>
            <div className="section-body">
                <ul className="non-bulleted-list">
                    Have you ever walked into a fast food restaurant, saw a long line, and then saw an ordering kiosk
                    nearby? Did you walk to the kiosk, thinking it would be faster to order here?
                    Then you play around with the interface and eventually get to placing your order? Then you realize
                    that I would have been faster just to order at the counter?
                    Then when you try to pick up your order, you don't know where to pick it up? In this project, I took
                    a deep dive
                    into the tablet ordering interface at Ten One Tea House in Providence, RI. I wanted to learn about
                    why people use
                    the interface, who typically uses the interface, why the interface is good/bad, and more relating to
                    the user journey
                    for this specific interface. I learned many interesting things along the way, so keep reading on!
                    <li className="spaced-bullets">
                        <b>1)</b> Research and observe users' experience with the tablet ordering interface for Ten One
                        Tea.
                    </li>
                    <li className="spaced-bullets">
                        <b>2)</b> Construct two personas using info gathered from talking with users of the interface.
                        What the user thinks, feels, says, and does.
                    </li>
                    <li className="spaced-bullets">
                        <b>3)</b> Construct storyboard for a persona's user journey from start to end. Before using the
                        interface, while using the interface, and after using the interface.
                    </li>
                </ul>
            </div>

            <div className="section-header">
                <b className="section-header-text">Interface Sketch</b>
            </div>

                <div className="section-body">
                    <div className="image-div">
                        <img src={require("./assets/UIUX-2.jpg")} alt="sketch of the interface" className="sketch-images"/>
                            <img src={require("./assets/UIUX-3.jpg")} alt="sketch of the interface" className="sketch-images"/>
                                <img src={require("./assets/UIUX-4.jpg")} alt="sketch of the interface" className="sketch-images"/>
                                    <img src={require("./assets/UIUX-5.jpg")} alt="sketch of the interface"
                                         className="sketch-images"/>
                                        <img src={require("./assets/UIUX-6.jpg")} alt="sketch of the interface"
                                             className="sketch-images"/>
                                            <img src={require("./assets/UIUX-7.jpg")} alt="sketch of the interface"
                                                 className="sketch-images"/>
                                                <img src={require("./assets/UIUX-8.jpg")} alt="sketch of the interface"
                                                     className="sketch-images"/>
                    </div>
                    <div>
                        <ul className="non-bulleted-list">
                            <b>Caption:</b>
                            This interface is trying to solve the problem of long lines ordering at the counter in the
                            store. If a
                            customer wants to avoid a line or just avoid talking their order to the cashier and
                            potentially
                            miscommunicating. The key components are the menu, in which the user selects what item they
                            want to add
                            to cart. Then the user can customize the item. Then the user can checkout their cart, review
                            the order/add tip,
                            and pay using the card reader below the screen.
                        </ul>
                    </div>
                </div>


                <div className="section-header">
                    <b className="section-header-text">Observations</b>
                </div>

                    <div className="section-body">
                        <div className="image-div">
                        </div>
                        <div>
                            <ul id="list-for-observations-questions">
                                <b style={{fontSize:22}}>USER 1:</b>
                                <li className="non-spaced-bullets">
                                    No line at counter, and she walked directly to the ordering screen. Walked in with a
                                    friend who ordered
                                    after her.
                                </li>
                                <li className="non-spaced-bullets">
                                    Very decisive when ordering, she seemed like she knew exactly what she wanted and
                                    had ordered here before.
                                </li>
                                <li className="non-spaced-bullets">
                                    Found item pretty quickly, and didn't hesitate much on item customization screen.
                                    Only made 2 customizations.
                                </li>
                                <li className="non-spaced-bullets">
                                    Added to cart and went to checkout screen. Quickly selected No tip. Then typed in
                                    phone number smoothly,
                                    although it seemed like for a second she wanted to skip the phone number part.
                                </li>
                                <li className="non-spaced-bullets">
                                    Paid using Apple Pay, but phone wasn't recognizing for a few
                                    seconds so user had to retry again.
                                </li>

                                <b style={{fontSize:22}}>USER 2:</b>
                                <li className="non-spaced-bullets">
                                    Also no line at the counter, and user came in alone. Looked at the menu hanging on
                                    the wall to the left for
                                    a few seconds, and then proceeded to the ordering screen.
                                </li>
                                <li className="non-spaced-bullets">
                                    Scrolled down to the "milk tea" section, manually scrolled and didn't click on the
                                    tab at the top. User added
                                    it to cart, but then removed it after looking at the customization screen.
                                </li>

                                <li className="non-spaced-bullets">
                                    Then scrolled manually to the "fresh fruit tea" section and added a different item
                                    to cart. Hesitated
                                    a bit on the customization screen.
                                </li>

                                <li className="non-spaced-bullets">
                                    Seemed unsure about customization part, unlike user1 who was very decisive.
                                </li>

                                <li className="non-spaced-bullets">
                                    Added to cart and went to checkout screen. Thought about tip for a second and then
                                    selected No tip.
                                    Tried to skip phone number page but realized you couldn't, so then typed in phone
                                    number. Paid with Apple Pay.
                                </li>

                                <b style={{fontSize:22}}>USER 3:</b>
                                <li className="non-spaced-bullets">
                                    One person was ordering at the counter, and user came in with two other friends.
                                    Talked with friends for a bit
                                    then went to ordering screen.
                                </li>
                                <li className="non-spaced-bullets">
                                    Slowly and manually scrolled down to the "summer special" section, clicked on an
                                    item and added it to cart.
                                    Looked at a few other items while scrolling.
                                </li>

                                <li className="non-spaced-bullets">
                                    Hesitated a bit on the customization screen and clicked multiple selections before
                                    settling on one. Was also
                                    talking to friend at the same time.
                                </li>

                                <li className="non-spaced-bullets">
                                    A bit unsure about customization part similar to user2, and not as decisive as
                                    user1.
                                </li>

                                <li className="non-spaced-bullets">
                                    Added to cart and went to checkout screen. Thought about tip for a second and then
                                    selected $2.
                                    Typed in phone number. Paid with Apple Pay, but again the card reader was a bit
                                    slow.
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="section-header">
                        <b className="section-header-text">Questions</b>
                    </div>

                        <div className="section-body">
                            <ul className="non-bulleted-list">
                                <li>
                                    <b>1)</b>
                                    Can you describe any challenges you had, if any, while using this interface?
                                </li>
                                <ul>
                                    <li>
                                        Card reader with apple pay was a bit iffy.
                                    </li>
                                    <li>
                                        Felt like there were some unnecessary pages such as phone number, tip, claim
                                        points.
                                    </li>
                                    <li>
                                        Slightly too many "optional" customizations that they didn't want and cluttered
                                        the customization screen a bit.
                                    </li>
                                </ul>
                                <li>
                                    <b>2)</b>
                                    What was your thought process when you walked into the store and wanted to order
                                    something?
                                </li>
                                <ul>
                                    <li>
                                        Probably faster to order on screen and get the order exactly right
                                    </li>
                                    <li>
                                        Didn't feel like talking to the person at the counter who seemed busy making a
                                        drink.
                                    </li>
                                </ul>
                                <li>
                                    <b>3)</b>
                                    How did prior experience using this interface, or the lack thereof, affect your
                                    experience using the interface?
                                </li>
                                <ul>
                                    <li>
                                        Used it before, definitely made it faster to use because knew what screens and
                                        buttons to expect.
                                    </li>
                                    <li>
                                        For the one didn't use before, probably would be faster experience if familiar
                                        with beforehand.
                                    </li>
                                </ul>
                                <li>
                                    <b>4)</b>
                                    Can you describe how the people around you affected or didn't affect how you used
                                    the interface?
                                </li>
                                <ul>
                                    <li>
                                        Tried not to take too long since my friend needed to order after me.
                                    </li>
                                    <li>
                                        Didn't really care since I was alone.
                                    </li>
                                </ul>
                            </ul>
                        </div>


                        <div className="section-header">
                            <b className="section-header-text">Personas</b>
                        </div>

                            <div className="section-body">
                                <div className="image-div">
                                    <img src={require("./assets/persona1.png")} alt="first persona" className="persona-images"/>
                                        <img src={require("./assets/persona2.png")} alt="second persona" className="persona-images"/>
                                </div>
                                <div className="side-by-side-bullets">
                                    <ul className="personas-description">
                                        <li className="non-spaced-bullets">
                                            Interface has too many unnecessary screens that the user doesn't want to
                                            think about and spend time on.
                                        </li>
                                        <li className="non-spaced-bullets">
                                            Points screen, phone number screen, etc. Customization screen has too many
                                            optional customizations that
                                            make the user think longer and spend more time on that screen.
                                        </li>
                                        <li className="non-spaced-bullets">
                                            This persona represents the users of this interface who use it because they
                                            think it is faster. The persona
                                            is someone who likes to be very on schedule and not waste time on
                                            unnecessary things like waiting in line.
                                            This interface is supposed to make ordering quick and easy and predictable,
                                            and one main user group is those
                                            who want to order very quickly.
                                        </li>
                                    </ul>

                                    <ul className="personas-description">
                                        <li className="non-spaced-bullets">
                                            Interface has a lot of screens, so user may worry he/she is taking too long
                                            and upset the person behind them.
                                        </li>
                                        <li className="non-spaced-bullets">
                                            This persona represents the users of this interface who want to avoid social
                                            interaction with the cashier,
                                            and just get the order done without saying anything. It also prevents
                                            miscommunication with the cashier
                                            when ordering verbally. This persona is precisely that, someone who just
                                            wants to get something without
                                            unnecessary talking/chaos.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                <div className="section-header">
                                    <b className="section-header-text">Storyboard</b>
                                </div>

                                    <div className="section-body">
                                        <h3>
                                            This storyboard is for the first persona, the busy college student who has a
                                            lot of meetings and things to get done
                                        </h3>
                                        <div className="image-div">
                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-10.jpg")} alt="first frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 1: User walks into the store, and sees a person ordering at
                                                        the front counter.
                                                        Thinks for a second.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-11.jpg")} alt="second frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 2: Wanting to save time, the user starts the order at the
                                                        kiosk ordering screen.
                                                        Looks at the initial menu page and quickly scrolls down to the
                                                        item user wants.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-12.jpg")} alt="third frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 3: Clicks on the item, and sees the customization screen.
                                                        Quickly chooses an
                                                        option for all the required customizations. Skips all the
                                                        optional parts.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-14.jpg")} alt="fourth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 4: User checks watch, and realizes he/she has a meeting in
                                                        10 minutes!</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-13.jpg")} alt="fifth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 5: User quickly clicks add to cart, then checkout. On the
                                                        checkout page, user's eyes
                                                        immediately go to the bottom right where the blue continue
                                                        button is.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-15.jpg")} alt="sixth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 6: Tries to skip the enter phone number page but can't.
                                                        Reluctantly types in phone number.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-16.jpg")} alt="seventh frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 7: Keeps the default of No Tip and quickly clicks Place
                                                        Order</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-17.jpg")} alt="eighth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 8: Pulls out iPhone to quickly use Apple Pay. Has to try
                                                        twice before it recognizes
                                                        the phone.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-18.jpg")} alt="ninth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 9: User skips the claim points page and takes a seat in the
                                                        store. User checks his phone
                                                        while waiting for the order.</p>
                                            </div>

                                            <div className="storyboard-div">
                                                <img src={require("./assets/UIUX-19.jpg")} alt="tenth frame in storyboard"
                                                     className="storyboard-images"/>
                                                    <p>Frame 10: Order is ready! User quickly get the drink, grabs a
                                                        straw, and walks out the door,
                                                        taking a sip while walking out.</p>
                                            </div>
                                        </div>
                                    </div>


















        <div ref={ref2} className="project-header">
            <b className="project-header-text">Project 2: Yale Art Website Redesign</b>
            <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll5}> Scroll to Top </button>
        </div>
        <hr></hr>
        <div className="section-header">
            <b className="section-header-text">Original Site and Overview</b>
        </div>
            <div className="section-body">
                <ul className="non-bulleted-list">
                    This project was about choosing an existing website and redesigning it to improve it in multiple
                    different aspects. These aspects include accessibility, usability, and visual design. I went through the
                    entire design process for this as well, starting with lofi and hifi prototypes. I then redesigned the
                    actual website using React and HTML/CSS. Website designs are important, as the internet basically
                    revolves around websites, and large websites have a huge number of users with many needs.
                </ul>
                <ul className="non-bulleted-list">
                    I chose the Yale School of Art website because it is very clunky and obviously could be improved,
                    and its styling is all over the place and there is no clear hierarchy at all.
                </ul>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <a href="https://www.art.yale.edu/" style={{fontSize:35, marginLeft:50}}>Link to original site</a>
                    <a href="https://funnyzebra787.github.io/new_yale_art/" style={{fontSize:35, marginLeft:50}}>Link to my
                        redesigned site!!</a>
                </div>

            </div>
            <div className="section-header">
                <b className="section-header-text">Usability Problems</b>
            </div>
                <div className="section-body">
                    <div>
                        <ul className="non-bulleted-list">
                            According to lecture, usability is the capability of the software product to be understood,
                            learned, used and attractive to the user, when used under specified conditions. This site
                            has low usability because everything is jumbled together on the page, there is no clear
                            hierarchy, the colors are all over the place, and some headings are large when they
                            shouldn't be, or too small when they shouldn't be.
                        </ul>
                        <ul className="non-bulleted-list">
                            Learnability is how easy it is for a user to learn how to use the interface. This website
                            has low learnability because for a user to find events, there are some events in the
                            calendar window, but also events scattered around other places. They are not centralized
                            anywhere.
                        </ul>
                        <ul className="non-bulleted-list">
                            Memorability is how easy it is for a user to remember how to use the site after leaving and
                            coming back. This website has low memorability because the headings are not clear and there
                            is no matching between similar functionality, for example, some links are blue and some are
                            black.
                        </ul>
                        <ul className="non-bulleted-list">
                            The conceptual model is how the interface reveals to the user how it works. For example, a
                            car transmission stick that has different grooves to help user know where to slide it down.
                        </ul>
                        <ul className="non-bulleted-list">
                            In this website, there is really no conceptual model at all, everything is jumbled together
                            and it is difficult to tell what is a clickable link and what isn’t without explicitly
                            hovering over it.
                        </ul>
                    </div>
                </div>
                <div className="section-header">
                    <b className="section-header-text">Accessibility</b>
                </div>
                    <div className="section-body">
                        <div>
                            <ul className="non-bulleted-list">
                                No errors were detected, just a few warnings related to questionable structuring of the
                                page. I agree with this because the structure of the page is questionable, and it makes
                                sense that there are no outright errors because this is a site that needs to follow the
                                Americans with Disabilities Act or else they’ll get sued.
                            </ul>
                        </div>
                    </div>
                    <div className="section-header">
                        <b className="section-header-text">Visual Style Guide</b>
                    </div>
                        <div className="section-body">
                            <div className="image-div">
                                <img src={require("./assets/visual-guide.png")} alt="visual design style guide" className="sketch-images"/>
                            </div>
                        </div>
                        <div className="section-header">
                            <b className="section-header-text">LO-FI Designs</b>
                        </div>
                            <div className="section-body">
                                <img src={require("./assets/mobile-lofi.jpg")} alt="mobile lofi" className="sketch-images"/>
                                    <img src={require("./assets/tablet-lofi.jpg")} alt="tablet lofi" className="sketch-images"/>
                                        <img src={require("./assets/desktop-lofi.jpg")} alt="desktop lofi" className="sketch-images"/>
                            </div>
                            <div className="section-header">
                                <b className="section-header-text">Hi-Fi Prototpyes</b>
                            </div>
                                <div className="section-body">
                                    <img src={require("./assets/mobile-hifi.png")} alt="mobile hifi" className="sketch-images"/>
                                        <img src={require("./assets/tablet-hifi.png")} alt="tablet hifi" className="sketch-images"/>
                                            <img src={require("./assets/desktop-hifi1.png")} alt="desktop hifi" className="sketch-images"/>
                                                <img src={require("./assets/desktop-hifi2.png")} alt="desktop hifi"
                                                     className="sketch-images"/>
                                                    <img src={require("./assets/desktop-hifi3.png")} alt="desktop hifi"
                                                         className="sketch-images"/>
                                </div>
                            <div className="section-header">
                                <b className="section-header-text">Conclusions and Takeaways</b>
                            </div>
                            <div className="section-body">
                                <div>
                                    <ul className="non-bulleted-list">
                                        Overall, I learned a great deal doing this project. In addition to designing and
                                        coding the website, I also learned about making the webpage responsive to different
                                        screen sizes. This experience also showed me how many little things there are to
                                        think about when it comes to design, from the hierarchy of the page to the colors
                                        and opacity of buttons and panels when hovering or not hovering above them.
                                    </ul>
                                </div>
                            </div>






















        <div ref={ref3} className="project-header">
            <b className="project-header-text">Project 3: Iterative Design for LoveCast Mobile App</b>
            <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll5}> Scroll to Top </button>
        </div>
        <hr></hr>
        <div className="content">
            <div className="section">
                <h3><span>
                    OVERVIEW
                </span></h3>
                <div className="section-body">
                    <p>
                        The purpose of this project was to design an interactive
                        interface for an emerging startup and gain insight into
                        the full process of mocking up and designing a solution
                        to the startup's concept. I worked with a team and we decided to create a mobile
                        prototype for <a href="https://www.ycombinator.com/companies/lovecast">
                        Lovecast</a>,
                        an app for celebrating events digitally. Users have the
                        opportunity to interact and form memories with their
                        guests, regardless of where they are in the world; from
                        birthday parties to weddings, the options are truly
                        endless.
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    SKETCHES
                </span></h3>
                <div className="section-body">
                    <p>
                        Together, we brainstormed a few different design options
                        for the Lovecast app. We focused on three key pages of
                        this app: the <span>home</span> page, <span>livestream</span>
                        page, and <span>invitations</span> page. We came up
                        with the following four designs:

                        <div className="sketches">
                            <img src={require('./sketches.jpg')}/>
                        </div>
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    LO-FI WIREFRAMES
                </span></h3>
                <div className="section-body">
                    <p>
                        To acheive Lovecast's goal of <span>hosting various events</span>,
                        we decided that having <span>event templates</span> on the home
                        page would make creating events a seamless process for
                        the user. Furthermore, since "guests can <span>join</span> [these events]
                        from <span>anywhere in the world</span>," we made use of a clearly laid
                        out <span>invitations page</span> and also featured <span>upcoming events</span>
                        on the home page so they would be easily accessible for
                        guests. To make the event <span>interactive</span> for all participants,
                        we included a <span>livestream</span> with a <span>chat box</span>
                        and <span>emoticon reactions</span>.

                        <div className="sketches">
                            <img src={require('./lofi.png')}/>
                        </div>
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    HI-FI CRITIQUES
                </span></h3>
                <div className="section-body">
                    <p>
                        Before finalizing our hi-fi prototype, we received the
                        following critiques from our peers to consider:
                        <ul>
                            <li>
                                Increasing the small text, which could've
                                caused readibility issues for some users
                            </li>
                            <li>
                                Increasing the color contrast between the
                                originally light pink button on top of the
                                purple background
                            </li>
                            <li>
                                Having the chat box in the livestream be
                                collapsable
                            </li>
                            <li>
                                Making the "Create Your Own Event" template
                                stand out more
                            </li>
                            <li>
                                Making the Pre-Stream Checklist icons more
                                apparent that they should be clicked on
                            </li>
                            <li>
                                Putting the "Upload your own image" option
                                before the built-in photos, since it makes more
                                sense for users to add their own photos for
                                personal events
                            </li>
                            <li>
                                Including both a "Join" and "Details" button
                                for events that are about to start, as opposed
                                to just "Join"
                            </li>
                            <li>
                                Adding clarity to the fact that more guests
                                can be invited to an event
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    HI-FI PROTOTYPES
                </span></h3>
                <div className="section-body">
                    <p>
                        Taking our peers' critiques into consideration, we
                        updated our hi-fi prototype. A video demo of our
                        prototype is as follows:
                        <div className="hifi">
                            <video controls>
                                <source src={require("./hifi.mov")}/>
                            </video>
                        </div>
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    USER TESTING
                </span></h3>
                <div className="section-body">
                    <p>
                        <p className="sub-p">
                            We then went through a second round of feedback by
                            submitting our updated prototype to UserTesting, where
                            three testers would complete a task and provide
                            feedback on how the process went for them.
                        </p>

                        <p className="sub-p">
                            The first task was to <span>start the Tea Party</span> event. None
                            of the three testers had trouble finding the "Start"
                            button and clicking the "Go Live" button. They all
                            rated the task as 5 (very easy). This was in line with
                            our expectations since we intentionally made the "Start"
                            button for the upcoming events green and right below the
                            event name so that it was easy for users to recognize
                            and find.
                        </p>


                        <p className="sub-p">
                            The next task was to <span>check that the camera, audio,
                            and connection settings work</span>. Users were able to successfully
                            open the popup for each setting and also all rated the
                            task as 5 (very easy). This matched our expectations
                            since we had icons as buttons that represented each
                            setting option, along with text labeling the setting
                            so users would have a smooth experience understanding
                            and adjusting the appropriate settings.
                        </p>

                        <p className="sub-p">
                            The last task was to <span>end the stream</span>. All users were able
                            to quickly find the "Exit Stream" button and leave the
                            page. All testers rated the task as 5 (very easy). This
                            aligned with our expectations because we made the
                            "Exit Stream" button red and at the top left of the screen,
                            where people generally expect quit buttons, so they can
                            easily exit the stream.
                        </p>

                        <p>
                            Based on just our UserTesting results and
                            feedback, we wouldn't change much about our interface,
                            as all users gave positive feedback and didn't have any
                            struggles. There was no unexpected behavior. The
                            unnecessary clicks that users made (if any) were only
                            due to the fact that they were given a Figma mockup,
                            which users on this site aren't used to experiencing.
                            This resulted in users trying to click on buttons that
                            we never added functionality to, so the next step
                            would likely be adding more screens and
                            interactive windows to the mockup.
                        </p>

                        <div className="tests">
                            <video controls>
                                <source src={require("./test1.mov")}/>
                            </video>
                        </div>

                        <div className="tests">
                            <video controls>
                                <source src={require("./test2.mov")}/>
                            </video>
                        </div>

                        <div className="tests">
                            <video controls>
                                <source src={require("./test3.mov")}/>
                            </video>
                        </div>
                    </p>
                </div>
            </div>

            <div className="section">
                <h3><span>
                    CONCLUSION
                </span></h3>
                <div className="section-body">
                    <p>
                        Designing the Lovecast app gave us the opportunity to
                        not only explore various design choices, but also
                        improve upon our first iteration of our prototype based
                        on the feedback we received. There are many nuances that
                        come with creating an intuitive interface for users,
                        making it imperative to thoroughly test a design
                        and continue improving upon it.
                    </p>
                </div>
            </div>
        </div>






















        <div ref={ref4} className="project-header">
            <b className="project-header-text">Project 4: Catalog for Tesla Cars</b>
            <button style={{height: 50, width: 300, fontSize:25}} onClick={executeScroll5}> Scroll to Top </button>
        </div>
        <hr></hr>
        <div className="section-header">
            <b className="section-header-text">Problem and Overview:</b>
        </div>
        <div className="section-body">
            <ul className="non-bulleted-list">
                The goal of this project was to build a functional catalog for Tesla cars. When buying a Tesla car,
                the user can choose from a variety of different models, and each model has a variety of different
                options. The goal of this project was to build a catalog that allows the user to choose a model. To
                facilitate this, I built an interactive catalog that allows the user to sort by price and length, and
                also filter based on what type of car they want, such as a sedan or an SUV. The user can also add multiple
                cars to their cart to see the total price of all the cars they want to buy. This project solves the problem
                of having to go to a Tesla dealership to see all the different models and options, and instead allows the
                user to do it from the comfort of their own home. Electric cars are the future!
            </ul>
        </div>
        <div className="section-header">
            <b className="section-header-text">Research/Feedback:</b>
        </div>
        <div className="section-body">
            <ul className="non-bulleted-list">
                The audience for this project is anyone who is interested in buying a Tesla car. These people are
                probably tech-savvy and are interested in the future of electric cars. They want an interactive
                website to see available cars, and they want to be able to filter and sort the cars since Tesla now
                has so many different models.
            </ul>
        </div>
        <div className="section-header">
            <b className="section-header-text">Design Iterations:</b>
        </div>
        <div className="section-body">
            <ul className="non-bulleted-list">
                The first version of the catalog was very simple, and only allowed the user to sort by price and
                length. The user could also add cars to their cart, but there was no way to remove cars from the cart.
            </ul>

            <ul className="non-bulleted-list">
                The final version allows the user to filter by car type and fuel type, and also allows the user to remove cars from
                their cart. The user can also see the total price of all the cars in their cart.
                In addition, I kept the functionality of sorting by price and length. Length is important because most
                people who buy Teslas are die-hard car fans and pay attention to small details like the length and panel
                gaps of the car.
            </ul>
        </div>

        <div className="section-header">
            <b className="section-header-text">Final UI Interface:</b>
        </div>
        <div className="section-body">
            <div className="lofi">
                <img src={require("./tesla.png")} style={{height:850, width:1000}}/>
            </div>
        </div>

        <div className="section-header">
            <b className="section-header-text">Link to the Site!</b>
        </div>
        <div className="section-body">
            <a href="https://funnyzebra787.github.io/uiux-development/" style={{fontSize:35, marginLeft:50}}>Tesla Catalog!</a>
        </div>

        <div className="section-header">
            <b className="section-header-text">Conclusions and Takeaways:</b>
        </div>
        <div className="section-body">
            <ul className="non-bulleted-list">
                One of the lessons I learned from this project is that code reusability is very important. To develop a
                simple project like this one, it is certainly possible to make the code very repetitive with many
                if statements, but this is not good practice and refactoring the code to make it not repetitive is
                worth it if I wish to expand the project and add more features in the future.
            </ul>

            <ul className="non-bulleted-list">
                Furthermore, I learned that even simple looking applications can take a while to build, and to never
                underestimate development time. Furthermore, although this project was less focused on visual design and
                more focused on functionaly, there still is a lot of planning involved in figuring out the functionality,
                similar to how planning for visual design needs to be done with lofi, hifi, and prototyping, etc.
            </ul>
        </div>


















                                    <div style={{marginBottom:900}}>
                                    </div>
    </div>
  );
}

export default App;
