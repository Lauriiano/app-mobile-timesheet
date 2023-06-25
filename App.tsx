import { Header } from "./src/components/header";
import { Home } from "./src/pages/Home";

import { ContextProvider } from "./src/contexts/Contexts";

export default function App() {
    return (
        <ContextProvider>
            <Header />
            <Home />
        </ContextProvider>
    );
}
