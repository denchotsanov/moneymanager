import './App.css';
import {Header} from "./components/Header";
import {SlideMenu} from "./components/SlideMenu";
import {Footer} from "./components/Footer";
import {useState} from "react";
import { Outlet } from 'react-router-dom';
import {PageLayout} from "./components/PageLayout";


function App() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <PageLayout>
            <Header handleDrawerOpen={handleDrawerOpen}/>
            <SlideMenu open={open} handleDrawerClose={handleDrawerClose}/>
            <Outlet />
            <Footer/>
        </PageLayout>
    );
}

export default App;
