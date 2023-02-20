import React from 'react';
import './PromoCard.css';

function PromoCard({ promoName, companyName, link }) {

    return (
        <div className="promo-card">
            <h2>{ promoName }</h2>
            <h4>{ companyName }</h4>
            <a
            className="promo-card__button"
            href={{link}}
            target="_blank"
            rel="noopener noreferrer"
            >
            Get Link
            </a>
        </div>
    )
}

export default PromoCard;