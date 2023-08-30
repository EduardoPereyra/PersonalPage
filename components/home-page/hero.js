import classes from "./hero.module.css";
import Image from "next/image";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me.png'
          alt='An image of Eduardo'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Eduardo</h1>
      <p>
        I'm a web developer - specialized in frameworks like Angular and React
      </p>
    </section>
  );
}

export default Hero;
