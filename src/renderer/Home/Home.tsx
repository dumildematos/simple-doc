import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Avatar,
  Row,
  Col,
  Button,
  Divider,
  Radio,
  Skeleton,
  Card,
  Modal,
  Form,
  Input,
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  MailOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosDocument } from '@react-icons/all-files/io/IoIosDocument';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;
const MainLayout = styled(Layout)`
  height: 100vh;
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-avatar {
      border: 1px solid var(--purple-1);
    }
    p {
      margin: auto;
      font-weight: bold;
    }
  }

  .ant-layout-sider-children {
    background: var(--gray-1);
  }
  ul.ant-menu {
    background: var(--gray-1);
  }
  section.ant-layout {
    background: white;
  }
  .site-layout .site-layout-background {
    background: #fff;
    height: 50px;
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid var(--purple-1) !important;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: var(--purple-2);
    /* color: var(--purple-1); */
  }
  .ant-menu-submenu-title:hover {
    .ant-menu-title-content,
    svg,
    i {
      color: var(--purple-1);
    }
  }
  .btn-action {
    background: var(--purple-1);
    border: none;
    color: #fff;
  }
  .cards-container {
    overflow-x: hidden;
    overflow-y: scrool;
    .ant-card {
      cursor: pointer;
      border-bottom: 2px solid var(--purple-1);
    }
  }
`;
const ModalLayout = styled(Modal)`
  .ant-modal-content {
    .ant-modal-footer {
      button.ant-btn.ant-btn-primary {
        background-color: var(--purple-1);
        border: none;
      }
    }
  }
`;
const { SubMenu } = Menu;

export default function Home() {
  const [collapse, setCollapse] = useState({
    collapsed: false,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const teamArray = [
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
    { id: 1, title: 'Here', desc: 'description' },
  ];

  const toggle = () => {
    setCollapse({
      collapsed: !collapse.collapsed,
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onChangeInput = (e: any) => {
    console.log(e);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  const changeView = () => {};

  const openGroup = () => {
    console.log('clicked');
  };

  const onCreateGroup = (values: any) => {
    console.log(values);
    setIsModalVisible(false);
  };

  return (
    <>
      <MainLayout>
        <Sider trigger={null} collapsible collapsed={collapse.collapsed}>
          <div className="logo">
            <Avatar src="https://avatars.githubusercontent.com/u/10828841?s=400&u=56ba8276db1da2bc8dfee5532e0a677d40916b9e&v=4" />
            {!collapse.collapsed ? <p>Dumilde Matos</p> : ''}
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}
          >
            {React.createElement(
              collapse.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row justify="end">
              <Col span={4}>
                <Button
                  icon={<TeamOutlined />}
                  className="btn-action"
                  onClick={showModal}
                >
                  Nova equipe
                </Button>
              </Col>
              <Divider />
            </Row>
            <Row justify="end" style={{ padding: '0' }}>
              <Col span={4} style={{ padding: '0' }}>
                <Radio.Group value="large" onChange={changeView}>
                  <Radio.Button value="large">
                    <UnorderedListOutlined />
                  </Radio.Button>
                  <Radio.Button value="default">
                    <TableOutlined />
                  </Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <Row
              className="cards-container"
              gutter={[8, 8]}
              style={{ paddingTop: '10px' }}
            >
              {/* <div className="cards-container">teste</div> */}

              {teamArray.map((item, index) => (
                <Col order={index} key={index} span={8}>
                  <Card
                    style={{ width: '100%' }}
                    actions={[
                      // eslint-disable-next-line react/jsx-key
                      [<FaUsers />, <span>46</span>],
                      // eslint-disable-next-line react/jsx-key
                      [<IoIosDocument />, <span>46</span>],
                    ]}
                    className="teams-card"
                    onClick={openGroup()}
                  >
                    <Skeleton loading={false} active>
                      <Meta
                        title="Card title"
                        description="This is the description"
                      />
                    </Skeleton>
                  </Card>
                </Col>
              ))}
            </Row>
            <ModalLayout
              visible={isModalVisible}
              title="Create a new collection"
              okText="Create"
              cancelText="Cancel"
              onCancel={onCancel}
              onOk={() => {
                form
                  .validateFields()
                  // eslint-disable-next-line promise/always-return
                  .then((values) => {
                    form.resetFields();
                    onCreateGroup(values);
                  })
                  .catch((info) => {
                    console.log('Validate Failed:', info);
                  });
              }}
            >
              <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                  modifier: 'public',
                }}
              >
                <Form.Item
                  name="title"
                  label="Nome da equipe"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the title of collection!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Descrição"
                  rules={[
                    {
                      required: true,
                      message: 'Please input the title of collection!',
                    },
                  ]}
                >
                  <TextArea
                    placeholder="textarea with clear icon"
                    allowClear
                    onChange={onChangeInput}
                  />
                </Form.Item>
              </Form>
            </ModalLayout>
          </Content>
        </Layout>
      </MainLayout>
    </>
  );
}
