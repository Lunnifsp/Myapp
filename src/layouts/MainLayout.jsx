import { Outlet } from "react-router"
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

function MainLayout() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout