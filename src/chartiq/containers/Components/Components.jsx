import React from "react";
import { ChartTitle } from "../../components/index";
import {
	fakeTitleData,
	fakeTitleConfig,
	fakeTitleConfigLight,
} from "./MockData";

export default class ComponentsDemo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			data: fakeTitleData[0],
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

			this.setState({ data: fakeTitleData[this.state.count] });
			this.setState({ count: this.state.count + 1 });
		}, 1000);
	}

	render() {
		return (
			<div style={{ margin: "20px" }}>
				<h1>Chart Componets</h1>
				<section>
					<h3>Title</h3>
					<ChartTitle
						config={fakeTitleConfig}
						data={this.state.data}
					/>
					<ChartTitle
						config={fakeTitleConfigLight}
						data={this.state.data}
					/>
				</section>
			</div>
		);
	}
}
