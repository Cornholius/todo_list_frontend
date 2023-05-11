import React from 'react';


const AppHeader = ({toDo, done}) => {
  return(
      <div className="app-header">
        <div className="app-header__title">
          <h1>Название</h1>
        </div>
        <div className="app-header__counter">
          <h2>{toDo} активно</h2>
          <h2>{done} готовы</h2>
        </div>
      </div>
  );
};

export default AppHeader;