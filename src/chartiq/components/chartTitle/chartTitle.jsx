import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import "./chartTitle.scss";

import { ChartContext } from '../../contexts/index';

export default function ChartTitle({
	data,
}) {

	const { symbol, price, changedValue, changedValuePtc } = data;
	const { theme } = React.useContext(ChartContext);
  const [upFlag, setUpFlag] = useState(false);

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	}

	const prevAmount = usePrevious(data);
	useEffect(() => {
		setUpFlag(prevAmount && (prevAmount.price > data.price));
	}, [data])

  return (
    <div>
			<div className={`cq_title ${theme}`}>
				<div className="cq_title_symbol">
					{symbol}
				</div>
				<div className="cq_title_price">
					<div className="cq_title_current_price">
						{price.toFixed(2)}
					</div>
					<div className="cq_title_change">
						<div className={`cq_title_change_arrow ${upFlag ? 'up' : 'down'}`}></div>
						<div className="cq_title_change_value">{changedValue.toFixed(2)}</div>
						<div className="cq_title_change_percent">( {changedValuePtc} )</div>
					</div>
				</div>
			</div>
    </div>
  );
}

ChartTitle.propTypes = {
	data: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changedValue: PropTypes.number.isRequired,
    changedValuePtc: PropTypes.string.isRequired,
  }),
}
