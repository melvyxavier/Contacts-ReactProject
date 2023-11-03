import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'


function Home() {
    const [contacts, setContacts] = useState([])

    const fetchData = async () => {
        const result = await axios.get('/contacts.json')
        setContacts(result.data.contacts);
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(contacts);

    return (
        <div>

            <Row className='mt-5 mb-5 ms-5 me-5' style={{
                fontFamily: 'Bellefair, serif', borderRadius: '50px'
            }}>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <p className='mt-5' style={{ fontSize: '20px', color: 'black',padding:'5px'}}>
                    <span className='text-center' style={{fontSize:'45px',textAlign:'center',padding:'5px'}}>Connecting People,<br /> One Click at a Time.</span> <br />
                     Explore, connect, and simplify your communication with Connect!"
                    </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img className='me-3 ms-3 mb-4 mt-4' style={{ width: '90%',height: '280px',border:'1px solid white'
                    ,borderRadius:'55px'}}
                        src="https://i.postimg.cc/sD7rWFYv/The-great-phone-debate-are-you-a-texter-or-talker.jpg" alt="" />
                </Col>

            </Row >
            <Row>
                <h1 className='mt-5' style={{textAlign:'center',color:'black'}}>Connect Now!</h1>
            </Row>
            <Row className='me-2 ms-4 mt-5'>
                {
                    contacts.map(i => (
                        <Col className='p-4' lg={4} md={4} sm={6} xs={12}>
                            <RestCard item={i}></RestCard>
                        </Col>
                    ))
                }


            </Row>
        </div >


    )
}


export default Home