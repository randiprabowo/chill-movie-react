import "../global.css";
import "../styleguide.css";
import React from "react";
import { ElementMasuk } from "./screens/ElementMasuk";
import { ElementDaftar } from "./screens/ElementDaftar";
import { ElementBerandaHover } from "./screens/ElementBerandaHover";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ElementDaftar />);
root.render(<ElementMasuk />);
root.render(<ElementBerandaHover />);


