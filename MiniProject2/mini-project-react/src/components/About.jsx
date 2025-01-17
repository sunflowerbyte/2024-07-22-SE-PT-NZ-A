import img from '../assets/smolmomo.JPG';
import { Button } from 'react-scroll';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:px-20 px-5">
      <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start">
        <figure>
          <img
            src={img}
            alt="Cat at the cafe"
            className="w-64 h-auto rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-sm text-gray-600 text-center lg:text-left">
            Our adorable resident cat, Momo, enjoying a sunny spot.
          </figcaption>
        </figure>
      </div>

      {/* Content Section */}
      <div className="lg:w-2/3 w-full space-y-4 lg:pt-0 lg:pl-6">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Welcome to our cat café, where warmth, joy, and furry friends await!
          Discover a cozy space to sip on delicious coffee while bonding with
          adorable, adoptable cats. We partner with shelters to provide loving
          homes for cats in need, making your visit both relaxing and meaningful.
        </p>
        <p>
          At our café, every cup of coffee supports the well-being of our feline
          residents. Whether you are looking to unwind, study, or adopt a furry
          companion, we have something special for everyone.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
