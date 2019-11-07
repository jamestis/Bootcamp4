import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import uuid from 'uuid';
import { Container } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      list: this.props.list
    };
  }
  filterUpdate(value) {
    this.setState({filterText:value})
  }

  selectedUpdate(id) {
    this.setState({selectedBuilding: id});
  }

  //add building to directory when user clicks on 'submit'
  addBuilding = (code, name, address,) => {
    const newBuilding = {
      id: uuid.v4(),
      code: code,
      name: name,
      address: address
    }
    this.setState({ list: [...this.state.list, newBuilding] });
  }

  //delete building from directory when clicking 'x'
  delBuilding = (id) => {
    this.setState({ list: [...this.state.list
      .filter(building => building.id !== id)] });
  }


  render() {
    

    return (
      
      <div className="bg">

        <div>
          <h1 className="websiteTitle">UF Directory App</h1>
        </div>
        
        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <Container>

          <AddBuilding 
            addBuilding={this.addBuilding}
          />

        </Container>

      
        
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    list={this.state.list}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    delBuilding={this.delBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                list={this.state.list}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
          
        </main>
       
      </div>
      
    );
  }
}

export default App;
