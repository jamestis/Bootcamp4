import React from 'react';

class Search extends React.Component {

	state = {
		name: ''
	}

	filterUpdate() {
		//save the value
		const val = this.refValue.value
		this.props.filterUpdate(val)
	}
	
	render() {

		//console.log('filterText value', this.props.filterText)
		
		return (
			<form>
				<input 
					type="text"
					ref={ (value) => {this.refValue = value} }
					placeholder="Search"
					onChange={this.filterUpdate.bind(this)}
				/>
				
			</form>
		);
	}
}
export default Search;
