import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import "./Style.css";
import Venda from "./Pages/Venda";
function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <section className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </section>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
