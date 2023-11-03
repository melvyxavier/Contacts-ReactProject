import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';


function SingleView() {

    //state
    const [AllData, setData] = useState([])

    //create an object for useparams
    const { id } = useParams()
    console.log(id);

    const fetchAllDatas = async () => {
        const result = await axios.get('/contacts.json')
        setData(result.data.contacts)
    }

    useEffect(() => {
        fetchAllDatas()
    }, [])

    //find the object of that particular item
    const singleData = AllData.find(i => i.id == id)
    console.log(singleData);

    return (
        <div>
            {singleData &&
                <Row style={{ border: '1px white solid' }} className='p-3 p-md-5 mt-5 me-1 ms-1'>
                    <Col xs={12} sm={12} md={6} lg={6} className='p-3'>
                        <img style={{ width: '100%', height: 'auto', maxWidth: '100%', border: '2px solid black' }} src={singleData.profile} alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className='p-3'>
                        <p style={{ fontSize: '50px', textAlign: 'center' }} className='text-primary'>{singleData.name}</p>
                        <ListGroup className='fs-5 mt-3'>
                            <ListGroup.Item className='text-primary'>Email: {singleData.email}</ListGroup.Item>
                            <ListGroup.Item className='text-primary'>Mobile: {singleData.mobile}</ListGroup.Item>
                            <ListGroup.Item className='text-primary'>Location: {singleData.location}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            }

        </div>
    )
}

export default SingleView