import React, {useState} from 'react'
import './Carrusel.css'

function Carrusel() {
    const [currentButton, setCurrentButton] = useState();

    const selectCurrentButton = (currentIndex) => {
        setCurrentButton(currentIndex);
    };
    const Buttons = () => {
        let arrayButtons = [];
        for (let i = 1; i < 6; i++) {
            arrayButtons.push(
                <input
                    key={i}
                    type='button'
                    position={i}
                    className={`${i === currentButton ? "navinput": "activeButton"}`}
                    
                    onClick = {function onClick() {
                        return selectCurrentButton(i);
                    }}
                />
            );
        }
        return arrayButtons;
    };

  return (
    <div>
        <div className='main-section'>
            <div className='carousel_content'>
                <div className='cards_content'>
                    <main id="carousel">
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card1'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card2'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card3'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card4'></div>
                            <div className='footer_card'></div>
                        </div>
                        <div className={"item pos" + currentButton + ""}>
                            <div className='head_card'></div>
                            <div className='body_card5'></div>
                            <div className='footer_card'></div>
                        </div>
                    </main>
                    <div className='buttons_groups'>
                       <Buttons /> 
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Carrusel;
