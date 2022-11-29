import { Footer } from './footer/footer'
import { Header } from './header/header'

export default function Layout({ children }) {
  return (
    <>
       <Header menuHtmlId="page-header-menu" className=''></Header>
      <main>{children}</main>
      <Footer />
    </>
  )
}