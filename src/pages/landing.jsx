import { Navbar } from "../layout/navbar"
import { Footer } from "../layout/Footer"
import {Home} from "../components/Home"

export const Landing = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}