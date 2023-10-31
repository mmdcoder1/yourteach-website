import React from 'react';

//styles
import './App.css';

//components
import Header from './components/header/Header';
import Main from './components/main/root/Main';
import Features from './components/features/Features';
import Teachers from './components/teachers/Teachers';
import Comments from './components/comments/Comments';
import Hire from './components/hire/Hire';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <Main />
        <Features />
        <Teachers />
        <Comments />
        <Hire />
        <Footer />
    </div>
  );
};

export default App;