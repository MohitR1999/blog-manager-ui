import { Card, Col, Form, Input, Row, Checkbox, Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const Login = () => {
    return (
        <Row justify="center" align="top">
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
                                <Input />
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
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Flex>
            </Col>
        </Row>


    )
}

export default Login;