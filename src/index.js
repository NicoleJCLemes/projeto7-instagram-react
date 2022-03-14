import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from './Corpo';
import Fundo from './Fundo';

function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
            <Fundo />
	    </div>
    )
}

const page = document.querySelector(".root");
ReactDOM.render(App(), page);