import './Home.css'

const Home = () => {
  return (  
    <div>
      <header>
        <h1>Welcome to the Men's Volleyball League</h1>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed rutrum nulla, id tristique dui.
            Vestibulum tincidunt, lorem eu ultrices tincidunt, ipsum enim varius felis, in posuere urna ligula a sem.
          </p>
        </section>

        <section>
          <h2>Upcoming Events</h2>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </section>

        <section>
          <h2>Latest News</h2>
          <article>
            <h3>News Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed rutrum nulla, id tristique dui.</p>
          </article>
          <article>
            <h3>News Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed rutrum nulla, id tristique dui.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
 
export default Home;