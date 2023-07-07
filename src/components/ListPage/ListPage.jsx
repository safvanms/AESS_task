import React, { useEffect, useState } from 'react'
import './listPage.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import {
  MdAdd,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdNotInterested,
} from 'react-icons/md'
import { RxDashboard, RxDownload, RxHamburgerMenu } from 'react-icons/rx'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoMdClose } from 'react-icons/io'
import { ImAttachment } from 'react-icons/im'




export default function ListPage() {

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    serviceType: '',
    location: '',
    priority: '',
    files: '',
    description: '',
    assignedTo: '',
  })
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)

  // function for close the Action button 

  const handleActionClose = (index) => {
    setData((prevData) => {
      const updatedData = [...prevData]
      updatedData[index].closed = true
      return updatedData
    })
  }

  // data retrieves here from the localStorage

  useEffect(() => {
    const savedData = localStorage.getItem('formData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  // handling the form

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // function for open dialogue

  const handleOpen = () => {
    setIsOpen(true)
  }

  // function for close dialogue

  const handleClose = () => {
    setIsOpen(false)
  }

  // form submition and save the data in localStorage

  const handleSubmit = (e) => {
    e.preventDefault()

    const currentDate = new Date()
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`

    const newData = {
      ...formData,
      currentDate: formattedDate,
    }

    const updatedData = [...data, newData]
    setData(updatedData)
    localStorage.setItem('formData', JSON.stringify(updatedData))

    setFormData({
      serviceType: '',
      location: '',
      priority: '',
      files: '',
      description: '',
      category: '',
    })
    handleClose()
  }

  // pagination handles

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <Header />
      <div className="listPage">
        <Sidebar />
        <div className="table-container">
          {/* table header */}

          <div className="table-header">
            <div className="buttons-side">
              <button
                className="open-button"
                id="openButton"
                onClick={handleOpen}
              >
                {' '}
                <MdAdd style={{ color: 'white' }} /> &nbsp; Raise IT Desk
                Tickets
              </button>
              <div className="my-request-icon">
                <RxDashboard color="orange" size={22} />
              </div>
              <div className="my-request">My Requests</div>
            </div>
            <div className="search-side">
              <div className="searchbar">
                <div style={{ color: '#aaaa', fontSize: '13px' }}>Search</div>
                <div style={{ color: '#1296B0' }}>
                  <BiSearch size={18} />
                </div>
              </div>
              <BiFilterAlt color="#1296B0" size={26} />
              <RxDownload color="#1296B0" size={26} />
            </div>
          </div>

          {/* table section */}
          <div className="table-section">
            <table className="custom-table">
              <thead className="table-head">
                <tr className="table-head-options">
                  <th>
                    <SlOptionsVertical />
                  </th>
                  <th>Actions</th>
                  <th>Register Number</th>
                  <th>Status</th>
                  <th>Service Type</th>
                  <th>Service Category</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Assigned to</th>
                  <th>Created on</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((elem, index) => {
                  // const serialNumber = indexOfFirstRecord + index + 1;
                  return (
                    <tr
                      key={index}
                      className="list-row"
                      onClick={() => handleActionClose(index)}
                    >
                      <td>{index + 1}</td>
                      <td>
                        <div className="table-actions">
                          <div>
                            <RxHamburgerMenu color="green" />
                          </div>
                          {!elem.closed && (
                            <div>
                              <MdNotInterested color="red" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td>{index + 500}</td>
                      <td>
                        {elem.closed ? (
                          <div className="status2">Closed</div>
                        ) : (
                          <div className="status1">New Implementation</div>
                        )}
                      </td>
                      <td>{elem.serviceType}</td>
                      <td>{elem.category}</td>
                      <td>{elem.description}</td>
                      <td>{elem.description}</td>
                      <td>{elem.assignedTo}</td>
                      <td>{elem.currentDate}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* pagination section */}

          <div className="pagination">
            <div className="pagination-left">
              Top Record Count: {data.length}
            </div>

            <div className="pagination-right">
              {Array.from(
                Array(Math.ceil(data.length / rowsPerPage)).keys(),
              ).map((pageNumber) => (
                <div
                  key={pageNumber}
                  onClick={() => paginate(pageNumber + 1)}
                  className={
                    pageNumber + 1 === currentPage ? 'active' : undefined
                  }
                >
                </div>
              ))}
              <span className='pagesDropDown'>10 &nbsp; 
              <MdKeyboardArrowDown size={15}/></span>
                 &nbsp;
                 <span>Records Per Page</span> 
              <div className="pagination-center">
                <div
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <MdKeyboardArrowLeft
                    size={15}
                    color={currentPage === 1 ? 'gray' : '#1296b0'}
                  />
                </div>
                <span>
                  {currentPage} - {Math.ceil(data.length / rowsPerPage)}
                </span>
                <div onClick={() => paginate(currentPage + 1)}>
                  <MdKeyboardArrowRight
                    size={15}
                    color={
                      currentPage === Math.ceil(data.length / rowsPerPage)
                        ? 'gray'
                        : '#1296b0'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form dialogue */}

      {isOpen && (
        <div id="dialogueBox">
          <div className="dialogueContent">
            <div className="dialogue-header">
              <div>Raise IT Desk Ticket</div>
              <div style={{ color: 'red' }} onClick={handleClose}>
                <IoMdClose size={25} />
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <p className="label">Service Type</p>
                <div>
                  <select
                    value={formData.serviceType}
                    onChange={handleChange}
                    name="serviceType"
                  >
                    <option value="">Select Service Type</option>
                    <option value="Service1">Service 1</option>
                    <option value="Service2">Service 2</option>
                    <option value="Service3">Service 3</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="label">Location</p>
                <div>
                  <select
                    value={formData.location}
                    onChange={handleChange}
                    name="location"
                  >
                    <option value="">Select Location</option>
                    <option value="Location 1">Location 1</option>
                    <option value="Location 2">Location 2</option>
                    <option value="Location 3">Location 3</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="label">Priority </p>
                <div>
                  <select
                    value={formData.priority}
                    onChange={handleChange}
                    name="priority"
                  >
                    <option value="">Select Priority</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="label">Service Category </p>
                <div>
                  <select
                    value={formData.category}
                    onChange={handleChange}
                    name="category"
                  >
                    <option value="">Select Priority</option>
                    <option value="Server">Server </option>
                    <option value="Client ">Client </option>
                    <option value="Server">Server </option>
                  </select>
                </div>
              </div>

              <div>
                <p className="label">Upload file(s) </p>
                <div className="file-uploads">
                  <input
                    type="text"
                    placeholder="Attach"
                    name="files"
                    onChange={handleChange}
                    value={formData.files}
                  />
                  <div style={{ color: '#1296b0' }}>
                    <ImAttachment />
                  </div>
                </div>
              </div>

              <div>
                <p className="label">Assign to </p>
                <input
                  value={formData.assignedTo}
                  className="assign"
                  name="assignedTo"
                  type="text"
                  placeholder="Mr.?Mrs."
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className="label">Description </p>
                <textarea
                  value={formData.description}
                  className="description"
                  name="description"
                  type="text"
                  placeholder="Enter Description"
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit">
                <div className="cancel" onClick={handleClose}>
                  Cancel
                </div>
                <button type="submit" className="open-button">
                  Raise IT Desk Tickets
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
