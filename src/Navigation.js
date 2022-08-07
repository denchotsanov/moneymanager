import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard"
import {AccountsPage} from "./components/AccountsPage";

export const Navigation = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/accounts" element={<AccountsPage/>}/>
        </Routes>
    );
}
