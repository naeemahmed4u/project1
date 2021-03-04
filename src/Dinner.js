import React from 'react';
// import ReactDom from 'react-dom';

function Dinner(props) {
    return ( 
        <div>
            <h2>Today we are serving {props.DishName}</h2>
            <h2>Today also we are serving {props.Sweet}</h2>
        </div>
    );
}

// ReactDom.render(<dinner />, Document.querySelector('#root'));
export default Dinner;
// export default App;