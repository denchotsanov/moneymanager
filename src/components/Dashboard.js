import {Container} from "@mui/material";
import {useAuthContext} from "../contexts/AuthContext";
import Box from "@mui/material/Box";


export const Dashboard = () => {
    const { user } = useAuthContext();

    return (
        <Container>
            <Box>
                <h2>Wellcome {user.email && <span>{user.email}</span>},</h2>
                <p>click left button to open menu to navigate.</p>
            </Box>
        </Container>
    );
}
