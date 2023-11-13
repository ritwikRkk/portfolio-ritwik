
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import { useRef } from "react";
import Footer from "../components/Footer/Footer";

const Layout = () => {

    // SCROLL TO VIDEO COMPONENT
    const skillScrollRef = useRef(null);
    const projectScrollRef = useRef(null);
    const contactScrollRef = useRef(null);
    const serviceScrollRef = useRef(null);
    
    // const handleClick = () => skillScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    const handleClick = () => skillScrollRef.current?.scrollIntoView();
    const handleClickProject = () => projectScrollRef.current?.scrollIntoView();
    const handleClickContact = () => contactScrollRef.current?.scrollIntoView();
    const handleClickServices = () => serviceScrollRef.current?.scrollIntoView();

    return (
        <>
            <Navbar click={handleClick} handleClickProject={handleClickProject} handleClickContact={handleClickContact} handleClickServices={handleClickServices} />
            {/* <Notification /> */}
            <Outlet context={{skillScrollRef, projectScrollRef, contactScrollRef, serviceScrollRef}} />
            <Footer />
        </>
    )
}


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "/product/:id",
            //     element: <Product />
            // },
            // {
            //     path: "/store",
            //     element: <Store />
            // },
            // {
            //     path: "/cart",
            //     element: <Cart />
            // },
            // {
            //     path: "/wishlist",
            //     element: <WishList />
            // },
            // {
            //     path: "/user",
            //     element: <User />
            // },
        ]
    },
]

export default routes;