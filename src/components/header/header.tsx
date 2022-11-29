import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

type Props = {
  menuHtmlId: string;
  className: string;
};

export function Header(props: Props) {
  return (
    <>
      <header className={`border-bottom ${props.className}`}>
        <Navbar className="bg-tertiary">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <span className="badge bg-primary">
                <span className="h5">Quiz App</span>
              </span>
            </Link>
            
          </div>
        </Navbar>
      </header>
    </>
  );
}
