import React, { useState } from 'react';
import { Layout, Menu, Avatar, Row, Col, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AntDesignOutlined,
  AppstoreOutlined,
  MailOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  PoweroffOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

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
  .ant-menu.ant-menu-sub.ant-menu-inline {
    /* background: red; */
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
`;
const { SubMenu } = Menu;

export default function Home() {
  const [collapse, setCollapse] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setCollapse({
      collapsed: !collapse.collapsed,
    });
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
            <Row>
              <Col>
                <Button type="primary" icon={<DownloadOutlined />} size="small">
                  Novo
                </Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </MainLayout>
    </>
  );
}
