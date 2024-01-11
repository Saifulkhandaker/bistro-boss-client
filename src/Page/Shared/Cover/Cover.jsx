import { Parallax } from 'react-parallax';

const Cover = ({img, title, details}) => {
    return (
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero h-[450px]">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold uppercase font-serif">{title}</h1>
            <p className="mb-5 uppercase">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;