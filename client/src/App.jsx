import { Navbar,Footer,Services,Transactions,Welcome } from "./components/index"

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}