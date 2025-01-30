import { Card, Col, Form, Input, Row, Checkbox, Button, Flex, Spin } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { login } from '../store/slices/userAuth';
import { useDispatch } from "react-redux";

const HOST = "http://localhost"
const PORT = "8080"

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const submitHandler = async () => {
        if (userName && password) {
            try {
                setLoading(true);
                const response = await fetch(`${HOST}:${PORT}/auth/login`, {
                    method : 'POST',
                    body : JSON.stringify({
                        username : userName,
                        password : password
                    }),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });
                const result = await response.json();
                if (result.token) {
                    dispatch(login(result.token))
                }
                setLoading(false);

            } catch (error) {
                console.log('An error occured!');
                console.log(error);
                setLoading(false);
            }
            
        }
    }
    
    
    return (
        <Row style={{ height : '100%' }} justify="center" align="middle">
            <Col span={24}>
                <Flex justify="center" align="center">
                    <Card>
                    <Title level={1}>GyanSagar</Title>
                        <Form>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" onClick={submitHandler} disabled={loading}>
                                    Submit
                                </Button>
                                { loading ? <Spin/> : <></> }
                            </Form.Item>
                        </Form>
                    </Card>
                </Flex>
            </Col>
        </Row>


    )
}

export default Login;