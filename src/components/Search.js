import React from 'react'

const Search = () => {
  return (
    <form action="list.html" method="GET">
    <label className="form-inline justify-content-end">Tìm kiếm: <input type="search" name="search" className="form-control" />
        <button className="btn btn-danger">Tìm</button>
    </label>
</form>
  )
}

export default Search