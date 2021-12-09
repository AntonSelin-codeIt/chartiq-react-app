import React from "react";
import { ChartTitle } from "../../components/index";
import { fakeTitleData } from "./MockData";

export default class ComponentsDemo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			config: fakeTitleData[0],
		}
	}

	componentDidMount() {
		// Mock fake data
		// Insted of these should use chartEngine
		setInterval(() => {
			if (this.state.count === 3) {
				this.state.count = 0;
				this.setState({ count: 0 });
			}

			this.setState({ config: fakeTitleData[this.state.count] });
			this.setState({ count: this.state.count + 1 });
		}, 1500);
	}

	render() {
		return (
			<div style={{ margin: "20px" }}>
				<h1>Chart Componets</h1>
				<section>
					<h3>Title</h3>
					<ChartTitle config={this.state.config} />
				</section>
			</div>
		);
	}
}
