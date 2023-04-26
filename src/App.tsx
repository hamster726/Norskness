import React from "react";
import "./App.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import CompanyPage from "./Components/Pages/CompanyPage/CompanyPage";
import MVPPage from "./Components/Pages/MVPPage/MVPPage";
import ProcessPage from "./Components/Pages/ProcessPage/ProcessPage";
import ServicesPage from "./Components/Pages/ServicesPage/ServicesPage";
import Page404 from "./Components/Pages/Page404/Page404";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageEN from "./Assets/Languages/en.json";
import Header from "./Components/Organisms/Header/Header";
import Footer from "./Components/Organisms/Footer/Footer";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: LanguageEN
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/contacts" element={<ContactPage/>}/>
          <Route path="/company" element={<CompanyPage/>}/>
          <Route path="/mvp" element={<MVPPage/>}/>
          <Route path="/process" element={<ProcessPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
        <Footer/>
        {/*<ul className={'temporaryLinks'}>*/}
        {/*    <li><Link to={'/contact'}>Contact</Link></li>*/}
        {/*    <li><Link to={'/company'}>Company</Link></li>*/}
        {/*    <li><Link to={'/services'}>Services</Link></li>*/}
        {/*    <li><Link to={'/process'}>Process</Link></li>*/}
        {/*    <li><Link to={'/mvp'}>MVP</Link></li>*/}
        {/*</ul>*/}
      </BrowserRouter>
    </>

  );
}

export default App;
