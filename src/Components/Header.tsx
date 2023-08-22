import React from "react";
import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { data } = useData();
  console.log(data);
  const [title, setTitle] = React.useState("Resumo");

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
    }
  }, [location]);

  
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
