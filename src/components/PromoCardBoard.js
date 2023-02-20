import React from 'react';
import PromoCode from './PromoCard';
import './PromoCodeBoard.css';

function PromoCardBoard({ promoCodes }) {
    const content = promoCodes.map((promoCode) =>
                                <PromoCode
                                    key={promoCode.id}
                                    promoName={promoCode.name}
                                    companyName={promoCode.companyName}
                                    link={promoCode.link} />
                                );

    return (
        <div className="promo-card-board">
            { content }
        </div>
    )
}

export default PromoCardBoard;