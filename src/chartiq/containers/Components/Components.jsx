import React from "react";
import "./Components.scss";
import { ChartTitle } from "../../components/index";
import { ChartContextComponent } from '../../contexts/index';

export default class ComponentsDemo extends React.Component {
	constructor(props) {
		super(props);
		this.container = React.createRef();
	}

	render() {
		return (
			<div style={{ margin: "20px" }}>
				<h1>Chart Componets</h1>

				<h2>Title</h2>
					<section>
						{/* <cq-context>
							<ChartContextComponent>
								<ChartTitle />
							</ChartContextComponent>

							{this.props.children || <ChartTemplate />}
						</cq-context> */}
					</section>
			</div>
		);
	}
}
