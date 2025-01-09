import React, { Component } from "react";

class OrganizationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      rowsPerPage: 5, 
    };
  }

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  changeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10), currentPage: 1 });
  };

  deleteRow = (e) => {
    const id = e.target.getAttribute("row-id");
	console.log(id)
  }

  render() {
    const { data } = this.props;
    const { all } = this.props.all;
    const { currentPage, rowsPerPage } = this.state;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const currentData = data.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
    
    const {smth} = this.props.data;
    console.log(smth)
    console.log(data)

    return (
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>ОГРН</th>
              <th>КПП</th>
              <th>Статус</th>
              <th>Количество загруженных(опубликованных) пакетов</th>
              <th>Количество опубликованных документов</th>
              <th>Дата регистрации</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.OGRN}</td>
                <td>{item.KPP}</td>
                <td>{item.status}</td>
                <td>{item.packages}</td>
                <td>{item.docs}</td>
                <td>{item.register_date}</td>
                <td>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>Удалить</button>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>Изменить</button>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>Добавление старых реквизитов</button>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>История</button>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>Список пакетов</button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        
        <div className="data-table-bottom">
          <div className="controls">
            <select id="rowsPerPage" value={rowsPerPage} onChange={this.changeRowsPerPage}>
              <option value={5}>5</option>
              <option value={all}>{this.props.all}</option>
            </select>
          </div>

          <div className="pagination">
        	{Array.from({ length: totalPages }, (_, index) => (
              <button 
            	key={index} 
                onClick={() => this.changePage(index + 1)} 
                disabled={currentPage === index + 1}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>  
      </div>
    );
  }
}

export default OrganizationsTable;
