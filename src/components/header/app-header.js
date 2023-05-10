import React from 'react';


const AppHeader = ({toDo, done}) => {
  return(
      <div className="app-header d-flex">
        <h1>Название</h1>
        <h2>{toDo} в работе, {done} готово</h2>
      </div>
  );
};

export default AppHeader;