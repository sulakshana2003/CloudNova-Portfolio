import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";



export default function App() {

    return(
        <BrowserRouter>
                <Routes>

                    <Route path="/*" element={< />} />
                    <Route path="/login" element={< />} />
                    <Route path="/payment" element={< />} />
                    <Route path="/signup" element={< />} />
                    <Route path="/forget" element={< />} />
                    <Route path="/admin/*" element={< />} />

                </Routes>

        </BrowserRouter>
    )

}
