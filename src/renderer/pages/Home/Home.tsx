import React, { useContext, useState } from 'react';
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
  Tag,
  PageHeader,
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
  PlusOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosDocument } from '@react-icons/all-files/io/IoIosDocument';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidemenu from 'renderer/components/Sidemenu/Sidemenu';
import { MainContext } from 'renderer/contexts/MainContext';
import Groups from '../Groups/Groups';
import Group from '../Group/Group';

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
    &.nav {
      display: flex;
      align-items: center;
      .ant-page-header.site-page-header.ant-page-header-ghost.ant-page-header-compact {
        height: 100%;
        padding: 0;
        display: flex;
      }
    }
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

let input;
export default function Home() {
  const { isRouted, defineRoutedState, groupPage } = useContext(MainContext);

  const [collapse, setCollapse] = useState({
    collapsed: false,
  });

  const [detailGroup, setDatailGroup] = useState(false);

  const [hashes, setHash] = useState({
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  });

  const toggle = () => {
    setCollapse({
      collapsed: !collapse.collapsed,
    });
  };

  const showInput = () => {
    // setHash({ inputVisible: true }, () => input.focus());
  };

  const saveInputRef = (inp: any) => {
    // eslint-disable-next-line no-param-reassign
    input = inp;
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    setHash({
      tags: hashes.tags,
      inputValue: e.target.value,
      inputVisible: hashes.inputVisible,
    });
  };

  const handleInputConfirm = () => {
    const { inputValue } = hashes;
    let { tags } = hashes;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    setHash({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const openGroup = (group: any) => {
    console.log(group);
  };
  return (
    <>
      <MainLayout>
        <Sidemenu collapse={collapse} />
        <Layout className="site-layout">
          <Header
            className="site-layout-background nav"
            style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%',
              padding: 0,
            }}
          >
            {React.createElement(
              collapse.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
            {isRouted && (
              <PageHeader
                className="site-page-header"
                onBack={() => {
                  window.history.back();
                  defineRoutedState(false);
                }}
                title={groupPage.title}
                // subTitle="This is a subtitle"
              />
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
            <Router>
              {!isRouted && <Groups />}
              <Switch>
                {/* <Route exact path="/" component={Groups} /> */}
                {isRouted && <Route path="/group/:id" component={Group} />}
              </Switch>
            </Router>
          </Content>
        </Layout>
      </MainLayout>
    </>
  );
}
