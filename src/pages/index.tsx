import Link from 'next/link';

export default function Home() {
  return (
      <div className="homepage">
        <p className="text-center intro-text">
          Hello! My name is <span className="text-red">Samuel</span> and I’m a <span className="text-red">Full Stack Web Developer</span>
        </p>
        <div className="text-center">
          <Link href='/about'>
            <button className="btn center-block button">
              <span>About me</span>
            </button>
          </Link>
        </div>
      </div>
  )
}
