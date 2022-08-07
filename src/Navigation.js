import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard"
import {AccountsPage} from "./components/AccountsPage";
import {PageLayout} from "./components/PageLayout";

export const Navigation = () => {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/accounts" element={<AccountsPage/>}/>
            </Routes>
        </PageLayout>

    );
}
