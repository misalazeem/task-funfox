import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Footer from './components/Navigation/Footer';
import Week1 from './Pages/Week1';
import Week2 from './Pages/Week2';

function App() {
  const [currentWeek, setCurrentWeek] = useState('Week 1');

  const handleNavigation = (week) => {
    setCurrentWeek(week);
  };

  const availableWeeks = ['Week 1', 'Week 2'];

  const renderWeekComponent = () => {
    switch (currentWeek) {
      case 'Week 1':
        return <Week1 />;
      case 'Week 2':
        return <Week2 />;
      default:
        return null;
    }
  };

  const getBackgroundNumber = () => {
    switch (currentWeek) {
      case 'Week 1':
        return 1;
      case 'Week 2':
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className='min-h-[100vh] bg-pink-200'>
      <Background number={getBackgroundNumber()} />
      {renderWeekComponent()}      
      <Footer handleNavigation={handleNavigation} availableWeeks={availableWeeks} currentWeek={currentWeek}/>
    </div>
  );
}

export default App;
