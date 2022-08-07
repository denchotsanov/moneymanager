import './App.css';
import {Header} from "./components/Header";
import {SlideMenu} from "./components/SlideMenu";
import {Footer} from "./components/Footer";
import {useState} from "react";
import {Navigation} from "./Navigation";


function App() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header handleDrawerOpen={handleDrawerOpen}/>
            <SlideMenu open={open} handleDrawerClose={handleDrawerClose}/>
            <Navigation/>
            <Footer/>
        </>
    );
}

export default App;
