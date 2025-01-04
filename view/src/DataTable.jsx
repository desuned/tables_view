import React, { Component } from "react";

class DataTable extends Component {
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
	console.log(currentData)

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
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.OGRN}</td>
                <td>{item.KPP}</td>
                <td>{item.status}</td>
                <td>
                    <button row-id={item.id} onClick={(e) => this.deleteRow(e)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="controls">
          <label htmlFor="rowsPerPage">Rows per page:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={this.changeRowsPerPage}
          >
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
    );
  }
}

export default DataTable;
