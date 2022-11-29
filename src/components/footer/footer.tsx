import Link from 'next/link';



export function Footer() {
  return (
    <footer className="py-4 bg-primary">
      <div className="container mr-auto text-center">
        <h3 className="mb-5 text-light">
          By Daniela Santos
        </h3>
        <div className=" mr-auto mx-auto">
          <Link
            href="https://www.linkedin.com/in/daniela-mol%C3%A9s-santos-9068a580/"
            className="btn btn-primary me-3"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Dani-ms"
            className="btn btn-default text-light"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
